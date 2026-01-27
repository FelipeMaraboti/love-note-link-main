export type MessageType = 'romantic' | 'fun' | 'deep' | 'short';

export type TemplateType =
  | 'romantic-classic'
  | 'minimal-elegant'
  | 'cute-playful'
  | 'deep-emotional'
  | 'midnight-neon'
  | 'vintage-parchment'
  | 'ocean-glass';

export interface LovePageData {
  id?: string;
  slug: string;
  fromName: string;
  toName: string;
  message: GeneratedMessage;
  messageType: MessageType;
  template: TemplateType;
  paid: boolean;
  createdAt: Date;
}

export interface TemplateInfo {
  id: TemplateType;
  name: string;
  description: string;
  colors: {
    bg: string;
    text: string;
    accent: string;
  };
}

export const MESSAGE_TYPES: { value: MessageType; label: string; description: string }[] = [
  { value: 'romantic', label: 'Romantic', description: 'Classic love expressions' },
  { value: 'fun', label: 'Fun', description: 'Playful and lighthearted' },
  { value: 'deep', label: 'Deep', description: 'Profound and meaningful' },
  { value: 'short', label: 'Short & Sweet', description: 'Brief but powerful' },
];

export const TEMPLATES: TemplateInfo[] = [
  {
    id: 'romantic-classic',
    name: 'Romantic Classic',
    description: 'Elegant script fonts with delicate floral accents',
    colors: { bg: 'bg-rose-50', text: 'text-rose-900', accent: 'bg-rose-200' },
  },
  {
    id: 'minimal-elegant',
    name: 'Minimal Elegant',
    description: 'Clean, sophisticated design with soft blush tones',
    colors: { bg: 'bg-stone-50', text: 'text-stone-800', accent: 'bg-stone-200' },
  },
  {
    id: 'cute-playful',
    name: 'Cute & Playful',
    description: 'Rounded shapes with floating hearts and warm colors',
    colors: { bg: 'bg-pink-50', text: 'text-pink-900', accent: 'bg-pink-200' },
  },
  {
    id: 'deep-emotional',
    name: 'Deep & Emotional',
    description: 'Dark, intimate atmosphere with elegant serif typography',
    colors: { bg: 'bg-slate-900', text: 'text-slate-100', accent: 'bg-slate-700' },
  },
  {
    id: 'midnight-neon',
    name: 'Midnight Neon',
    description: 'Dark luxe base with neon strokes and glass cards',
    colors: { bg: 'bg-slate-950', text: 'text-indigo-50', accent: 'bg-fuchsia-500' },
  },
  {
    id: 'vintage-parchment',
    name: 'Vintage Parchment',
    description: 'Warm paper texture, serif headings, subtle gold accents',
    colors: { bg: 'bg-amber-50', text: 'text-amber-950', accent: 'bg-amber-300' },
  },
  {
    id: 'ocean-glass',
    name: 'Ocean Glass',
    description: 'Aqua gradients with glassmorphism and clean sans',
    colors: { bg: 'bg-cyan-50', text: 'text-slate-900', accent: 'bg-cyan-200' },
  },
];

export interface MessageSection {
  title: string;
  paragraphs: string[];
}

export interface GeneratedMessage {
  intro: string;
  sections: MessageSection[];
  closing: string;
  signature: string;
}

export const generateMessage = (fromName: string, toName: string, type: MessageType): GeneratedMessage => {
  const messages: Record<MessageType, GeneratedMessage[]> = {
    romantic: [
      {
        intro: `My Dearest ${toName},`,
        sections: [
          {
            title: "The Day We Met",
            paragraphs: [
              `I still remember the exact moment our eyes first met. Time seemed to stand still, and in that instant, I knew my life would never be the same. There was something in your smile, a warmth in your presence that drew me in like a moth to a flame. I didn't know it then, but that moment marked the beginning of the most beautiful chapter of my life.`,
              `Every detail of that day is etched into my memory like a precious photograph I carry in my heart. The way you laughed, the sparkle in your eyes, the gentle way you spoke – these small moments wove together to create a tapestry of love that I treasure more than any worldly possession. Looking back, I realize that fate had been guiding us toward each other all along.`,
              `From that day forward, my world became brighter, more vibrant, more alive. Colors seemed richer, music sounded sweeter, and every sunrise held the promise of another day spent loving you. You didn't just enter my life, ${toName} – you transformed it entirely, and for that, I am eternally grateful.`
            ]
          },
          {
            title: "What You Mean To Me",
            paragraphs: [
              `You are my sunrise and my sunset, the first thought that greets me each morning and the last wish I make before sleep takes me. In your arms, I have found a sanctuary, a place where all my fears dissolve and all my dreams feel possible. You are not just my partner; you are my best friend, my confidant, and the keeper of my deepest secrets.`,
              `Your love has taught me what it truly means to be vulnerable, to trust completely, and to give myself wholly to another person. Through your patience and understanding, I have grown in ways I never thought possible. You see the best in me, even when I cannot see it in myself, and your unwavering belief in who I can become inspires me to be better every single day.`,
              `In the garden of my life, you are the most beautiful flower that has ever bloomed. Your kindness waters my soul, your laughter is the sunshine that helps me grow, and your love is the rich soil that grounds me and gives me strength. I cannot imagine my life without you, nor would I ever want to.`
            ]
          },
          {
            title: "Our Forever",
            paragraphs: [
              `As I write these words, my heart overflows with gratitude for every moment we have shared and excitement for all the moments yet to come. I dream of our future together – the adventures we will have, the challenges we will overcome, and the love that will only deepen with each passing year. With you by my side, I fear nothing.`,
              `I promise to love you through all of life's seasons – through the spring of new beginnings, the summer of our greatest joys, the autumn of change, and the winter of life's challenges. My love for you is not conditional on circumstances; it is as constant as the northern star, as reliable as the changing tides, as eternal as the universe itself.`,
              `You are my forever, ${toName}. Not because forever is a word we use lightly, but because when I look into your eyes, I see every tomorrow I have ever wanted. I see our children's laughter, our grandchildren's smiles, and two souls who chose each other and kept choosing each other every single day. That is my promise to you.`
            ]
          }
        ],
        closing: `With every beat of my heart, with every breath I take, with every fiber of my being – I love you. I have loved you since the moment we met, I love you more today than yesterday, and I will love you even more tomorrow. You are my everything.`,
        signature: `Forever and always yours,\n${fromName} ❤️`
          },
          {
            intro: `To the love of my life, ${toName},`,
            sections: [
              {
                title: "Little moments, big love",
                paragraphs: [
                  `It's the tiny rituals that made me fall so deeply for you: the way you say good morning, the half-smile you give when you're focused, the way you remember exactly how I like my coffee. Those details built a universe where I feel safe and seen.`,
                  `Every time our hands touch, the world calms down. Every time you laugh, the room lights up. With you, ordinary Tuesdays feel like holidays. You are my favorite part of every day.`
                ]
              },
              {
                title: "What I cherish",
                paragraphs: [
                  `I adore your kindness – how you soften when someone needs help. I admire your strength – how you keep showing up even when it's hard. I treasure your curiosity – how you never stop learning and dreaming.`,
                  `You make me want to be gentler, braver, and more present. You turn my rough edges into something tender. With you, I learned that love is not just a feeling; it's a quiet, steady choice.`
                ]
              },
              {
                title: "My promise",
                paragraphs: [
                  `I'll keep making us cozy breakfasts. I'll keep cheering for you when doubts get loud. I'll keep choosing us through every season.`,
                  `Wherever we go next, my heart walks beside yours. Always.`
                ]
              }
            ],
            closing: `Thank you for turning my life into the softest place to land.`,
            signature: `With all my love,\n${fromName}`
          }
    ],
    fun: [
      {
        intro: `Hey there, ${toName}! 🎉`,
        sections: [
          {
            title: "Why You're Basically the Best Human Ever",
            paragraphs: [
              `Let me start by saying that you are, without a doubt, the most amazing person I've ever had the pleasure of annoying for the rest of my life. I mean, have you met yourself? You're like if sunshine, pizza, and a really good Netflix series had a baby – absolutely irresistible and impossible to get enough of!`,
              `I genuinely don't know how you put up with me. My terrible jokes, my questionable dance moves, my habit of stealing the covers at night – yet here you are, still choosing to be with me every single day. Either you're incredibly patient, incredibly crazy, or you've realized that life with me is never boring. I'm going with all three.`,
              `You make mundane moments magical. Grocery shopping becomes an adventure, waiting in line becomes a comedy show, and even doing laundry feels fun when you're around. You've turned my ordinary life into an extraordinary one, and I didn't even have to upgrade my subscription!`
            ]
          },
          {
            title: "Our Greatest Hits (So Far)",
            paragraphs: [
              `Remember that time we got lost on our road trip and ended up finding that amazing hidden restaurant? Or when we tried to build that IKEA furniture and almost divorced before we even got married? Those are the moments I live for – the unexpected adventures, the ridiculous mishaps, and the uncontrollable laughter that follows.`,
              `You're my partner in every crime (the legal ones, obviously... mostly). From binge-watching entire TV series in one weekend to creating elaborate excuses to avoid social events, we make the perfect team. You bring the snacks, I bring the bad ideas, and together we create memories that I'll be telling our grandkids about (with some strategic editing, of course).`,
              `I love that we can be complete weirdos together. We have our own language, our own inside jokes, our own dance moves that should never see the light of day. You're the only person who truly gets my humor, even when it's absolutely terrible – especially when it's absolutely terrible.`
            ]
          },
          {
            title: "Here's to Many More Adventures",
            paragraphs: [
              `I'm so excited for everything that's ahead of us. More spontaneous adventures, more lazy Sunday mornings, more pillow fights that definitely get out of hand, and more of those perfect moments where we just look at each other and know exactly what the other is thinking (usually "should we order food?").`,
              `You've made me a better person, ${toName}. You've taught me how to be more patient, more kind, and more willing to try new things (even if I complain the entire time). You've shown me that love doesn't have to be serious all the time – it can be silly, playful, and absolutely hilarious.`,
              `So here's to us – the dynamic duo, the dream team, the couple that everyone else wishes they were (at least in my head). Thank you for being my person, my favorite human, and the reason I smile way more than is probably normal. You're stuck with me now, and honestly, I'm not even sorry about it!`
            ]
          }
        ],
        closing: `In conclusion, you're pretty awesome, I'm pretty lucky, and we're pretty much the best thing since sliced bread (but way more fun to cuddle with). Thanks for making every day feel like a party, even when we're just sitting on the couch in our pajamas.`,
        signature: `Your biggest fan (and occasional annoyance),\n${fromName} 😘🎊`
      },
      {
        intro: `Hey ${toName}! Get ready for a cute overload.`,
        sections: [
          {
            title: "Survival guide for loving me",
            paragraphs: [
              `Rule 1: laughs are mandatory. Rule 2: we share food unless it's too good (I might steal the last fry). Rule 3: hugs are unlimited.`,
              `You make Mondays feel like Fridays. With you, any playlist becomes a rom-com soundtrack.`
            ]
          },
          {
            title: "Our favorite adventures",
            paragraphs: [
              `Traveling together is amazing, but nothing beats building furniture without (almost) arguing, or staying up talking about everything and nothing.`,
              `Best part? We get to be delightfully weird with zero judgment. Our secret language of bad jokes is priceless.`
            ]
          },
          {
            title: "Future spoilers",
            paragraphs: [
              `More movie nights, more ridiculous dances, more improbable plans. More of you laughing at my terrible jokes while I pretend I can sing.`,
              `I choose you today, tomorrow, always — and I promise to make you laugh even on rainy days.`
            ]
          }
        ],
        closing: `Bottom line: you're my favorite kind of chaos. Thanks for being home and amusement park at once.`,
        signature: `With all my playful love,\n${fromName}`
      }
    ],
    deep: [
      {
        intro: `My Beloved ${toName},`,
        sections: [
          {
            title: "The Philosophy of Us",
            paragraphs: [
              `In the vast expanse of existence, among the countless souls that wander this earth seeking connection, our paths converged in a way that defies mathematical probability. I do not believe in coincidences, ${toName}. I believe that some bonds are written in the stars long before we take our first breath, that some souls are destined to find each other across any distance, through any obstacle, against any odds.`,
              `When I look into your eyes, I see not just the person you are today, but every version of you that has ever existed – the child who dreamed, the teenager who questioned, the adult who continues to evolve. I see your struggles and your triumphs, your fears and your courage. In your gaze, I find a universe of depth that I could explore for a lifetime and still discover something new.`,
              `Our love is not merely an emotion; it is a state of being, a transformation of the self that occurs when two souls recognize each other as home. Before you, I was complete in my own way, but with you, I have discovered dimensions of myself that I never knew existed. You have not filled a void in my life – you have expanded my very capacity to love and be loved.`
            ]
          },
          {
            title: "The Sacred Space Between Us",
            paragraphs: [
              `There exists a sacred space between two people who truly love each other – a space where words become unnecessary, where silence speaks volumes, and where the mere presence of the other brings a peace that transcends understanding. This is the space we have created together, ${toName}, and it is the most precious thing I have ever known.`,
              `In this space, I have learned the true meaning of vulnerability. To love deeply is to stand naked before another soul, to offer them the power to hurt you while trusting that they will choose to heal you instead. You have held my vulnerabilities with such tender care, never weaponizing my weaknesses, always honoring my trust. This is a gift beyond measure.`,
              `I have come to understand that love is not about possession or completion, but about witnessing. To love you is to witness your journey, to celebrate your growth, to hold space for your pain, and to stand beside you as you become more fully yourself. In turn, you have witnessed me – truly seen me – and in your eyes, I have found the courage to be authentic.`
            ]
          },
          {
            title: "Eternity in Every Moment",
            paragraphs: [
              `Time moves differently when I am with you. Moments stretch into eternities, and yet years pass like the turning of a single page. I have learned to live fully in the present, for each moment with you is a gift that I refuse to take for granted. The past has shaped us, the future awaits us, but the now – this precious now – is where our love lives and breathes.`,
              `I think often about the nature of permanence in an impermanent world. Everything changes, everything ends, and yet love – true love – seems to exist outside of time. The love I feel for you feels ancient and eternal, as if it existed before we did and will continue long after our physical forms return to stardust. Perhaps this is the closest thing to immortality that humans can achieve.`,
              `Whatever the future holds, whatever challenges await, I face them without fear because I face them with you. You are my anchor in the storm, my light in the darkness, my reason to believe in the fundamental goodness of the universe. In loving you, I have found my purpose; in being loved by you, I have found my peace.`
            ]
          }
        ],
        closing: `Words are such inadequate vessels for emotions this profound, yet they are all I have to offer. Know that behind each word lies an ocean of feeling, behind each sentence a mountain of devotion. You have touched my soul in ways that will resonate through every remaining day of my existence.`,
        signature: `With infinite love and eternal gratitude,\n${fromName}`
      },
      {
        intro: `Dear ${toName},`,
        sections: [
          {
            title: "When our worlds collided",
            paragraphs: [
              `Before you, my story had missing pages. You arrived as a full chapter, filling gaps I didn't know existed.`,
              `It's beautiful how two very different paths meet and suddenly everything makes sense. You became my reference for peace and for the future.`
            ]
          },
          {
            title: "The calm you brought",
            paragraphs: [
              `With you I learned that silence can be comfortable and vulnerability can feel safe. Your gaze says “stay” even when no words are spoken.`,
              `You remind me to breathe slowly, to see beauty in simple things, to believe some stories are destined to work.`
            ]
          },
          {
            title: "What I want to build",
            paragraphs: [
              `I want to build a life that fits our dreams, our flaws, and our late-night laughter. To be your shoulder and your shelter, your impulse and your anchor.`,
              `Time changes everything, but I hope it only makes our bond stronger. In every version of the future, I choose to stand beside you.`
            ]
          }
        ],
        closing: `Thank you for being home, compass, and gentle storm all at once.`,
        signature: `Yours, in all seasons,\n${fromName}`
      }
    ],
    short: [
      {
        intro: `To ${toName},`,
        sections: [
          {
            title: "Simply Put",
            paragraphs: [
              `Some things in life don't need elaborate explanations. The sun rises. The tide returns to shore. And I love you. These are the simple truths that anchor my existence, the certainties I cling to in an uncertain world. My love for you is as natural and inevitable as breathing.`,
              `I could write you a thousand poems, compose a hundred songs, fill libraries with words attempting to capture what you mean to me. But in the end, it all distills down to this: you are my person. You are the one I choose, again and again, without hesitation.`,
              `In a world that often feels overwhelming and complicated, you are my simplicity. You are the calm in my chaos, the answer to my questions, the peace I never knew I was searching for until I found it in you.`
            ]
          },
          {
            title: "The Heart of It",
            paragraphs: [
              `I don't need grand gestures or elaborate displays. I need you – your presence, your laugh, your hand in mine. I need quiet mornings and peaceful evenings. I need the ordinary magic of a life shared with you.`,
              `You've taught me that love isn't always fireworks and fairy tales. Sometimes it's making coffee just the way you like it. Sometimes it's sitting in comfortable silence. Sometimes it's choosing each other when choosing is hard. And I choose you. Always.`,
              `The beautiful simplicity of us is what makes us extraordinary. We don't need to be perfect; we just need to be present. We don't need to have all the answers; we just need to face the questions together.`
            ]
          },
          {
            title: "Forever, Simply",
            paragraphs: [
              `My promise to you is simple: I will love you. Not just in the easy moments, but in the difficult ones. Not just when it's convenient, but when it costs me something. Not just today, but for all the days I am given.`,
              `You are my today and my tomorrow. You are my favorite hello and my hardest goodbye. You are the reason I believe in love and the proof that it exists. You are everything, ${toName}. Simply everything.`,
              `So here it is, stripped of all pretense and poetry: I love you. Three small words that carry the weight of my entire heart. May they reach you and remind you, whenever you need reminding, that you are loved beyond measure.`
            ]
          }
        ],
        closing: `No more words needed. You know. I know. We know. And that's more than enough.`,
        signature: `Yours, completely,\n${fromName} 💕`
      },
      {
        intro: `${toName}, my shortcut to happiness.`,
        sections: [
          {
            title: "Love in one page",
            paragraphs: [
              `You are my point of peace and my daily invitation to smile. I don't need much when you're near.`,
              `Loving you fits in few words: I stay, I care, I celebrate you every day.`
            ]
          },
          {
            title: "Little things",
            paragraphs: [
              `The way you look at me when something works out. The quick text saying “home safe”. The comfortable silence after a long day.`,
              `Those details build a world where I want to live.`
            ]
          },
          {
            title: "Short promise",
            paragraphs: [
              `My commitment is simple: walk beside you. On sunny days and rainy ones. With hot coffee and honest talk.`,
              `You are my favorite always.`
            ]
          }
        ],
        closing: `No need for more lines to say: I love you, today and tomorrow.`,
        signature: `With endless care,\n${fromName}`
      }
    ]
  };

  const options = messages[type];
  return options[Math.floor(Math.random() * options.length)];
};

export const generateSlug = (): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};
