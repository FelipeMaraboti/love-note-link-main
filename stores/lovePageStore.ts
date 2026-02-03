import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import { LovePageData, MessageType, TemplateType, generateSlug, generateMessage, GeneratedMessage } from '@/types/lovepage';

interface LovePageStore {
  // Form data
  fromName: string;
  toName: string;
  messageType: MessageType;
  template: TemplateType;
  message: GeneratedMessage | null;
  
  // Generated page
  currentPage: LovePageData | null;
  pages: Record<string, LovePageData>;
  isLoading: boolean;
  
  // Actions
  setFromName: (name: string) => void;
  setToName: (name: string) => void;
  setMessageType: (type: MessageType) => void;
  setTemplate: (template: TemplateType) => void;
  generatePage: () => Promise<LovePageData>;
  getPageBySlug: (slug: string) => Promise<LovePageData | null>;
  reset: () => void;
}

export const useLovePageStore = create<LovePageStore>((set, get) => ({
  fromName: '',
  toName: '',
  messageType: 'romantic',
  template: 'romantic-classic',
  message: null,
  currentPage: null,
  pages: {},
  isLoading: false,
  
  setFromName: (name) => set({ fromName: name }),
  setToName: (name) => set({ toName: name }),
  setMessageType: (type) => set({ messageType: type }),
  setTemplate: (template) => set({ template }),
  
  generatePage: async () => {
    const { fromName, toName, messageType, template } = get();
    const message = generateMessage(fromName, toName, messageType);
    const slug = generateSlug();
    
    const page: LovePageData = {
      slug,
      fromName,
      toName,
      message,
      messageType,
      template,
      paid: true,
      createdAt: new Date(),
    };
    
    // Save to Supabase
    try {
      const { error } = await supabase
        .from('love_pages')
        .insert({
          slug: page.slug,
          from_name: page.fromName,
          to_name: page.toName,
          message: page.message,
          message_type: page.messageType,
          template: page.template,
          paid: page.paid,
          expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days
        });
      
      if (error) {
        console.error('Error saving to Supabase:', error);
        // Continue anyway - save locally
      } else {
        console.log('Page saved to Supabase successfully!');
      }
    } catch (error) {
      console.error('Exception saving to Supabase:', error);
      // Continue anyway - save locally
    }
    
    set((state) => ({
      currentPage: page,
      message,
      pages: { ...state.pages, [slug]: page },
    }));
    
    return page;
  },
  
  getPageBySlug: async (slug) => {
    set({ isLoading: true });
    
    try {
      const { data, error } = await supabase
        .from('love_pages')
        .select('*')
        .eq('slug', slug)
        .gt('expires_at', new Date().toISOString())
        .single();
      
      if (error) throw error;
      
      if (data) {
        const page: LovePageData = {
          slug: data.slug,
          fromName: data.from_name,
          toName: data.to_name,
          message: data.message,
          messageType: data.message_type,
          template: data.template,
          paid: data.paid,
          createdAt: new Date(data.created_at),
        };
        
        set((state) => ({
          pages: { ...state.pages, [slug]: page },
        }));
        
        set({ isLoading: false });
        return page;
      }
    } catch (error) {
      console.error('Error fetching from Supabase:', error);
    }
    
    set({ isLoading: false });
    return null;
  },
  
  reset: () => set({
    fromName: '',
    toName: '',
    messageType: 'romantic',
    template: 'romantic-classic',
    message: null,
    currentPage: null,
  }),
}));
