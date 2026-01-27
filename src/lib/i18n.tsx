import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type Language = "en" | "pt";

type Translations = Record<string, string | Record<string, any>>;

type I18nContextValue = {
  lang: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
};

const translations: Record<Language, Translations> = {
  en: {
    landing: {
      title: "Create a private love page",
      titleHighlight: "in 30 seconds",
      subtitle: "One link. One message. One unforgettable moment.",
      button: "Create my love page",
      note: "No account needed • Takes 30 seconds • $1.99 one-time",
    },
    stepOne: {
      icon: "❤️",
      title: "Who is this for?",
      subtitle: "Tell us who you're creating this love page for",
      fromLabel: "Your name",
      fromPlaceholder: "Enter your name",
      toLabel: "Their name",
      toPlaceholder: "Enter their name",
      messageTypeTitle: "Message type",
      fromError: "Please enter your name",
      toError: "Please enter their name",
      next: "Continue",
    },
    lovePage: {
      letterFor: "A Love Letter For",
      createdFooter: "Created with love on LoveLink",
      romantic: {
        intro1: "My Dearest {{toName}},",
        intro2: "To the love of my life, {{toName}},",
        dayWeMet: "The Day We Met",
        dayWeMet_p1: "I still remember the exact moment our eyes first met. Time seemed to stand still, and in that instant, I knew my life would never be the same. There was something in your smile, a warmth in your presence that drew me in like a moth to a flame. I didn't know it then, but that moment marked the beginning of the most beautiful chapter of my life.",
        dayWeMet_p2: "Every detail of that day is etched into my memory like a precious photograph I carry in my heart. The way you laughed, the sparkle in your eyes, the gentle way you spoke – these small moments wove together to create a tapestry of love that I treasure more than any worldly possession. Looking back, I realize that fate had been guiding us toward each other all along.",
        dayWeMet_p3: "From that day forward, my world became brighter, more vibrant, more alive. Colors seemed richer, music sounded sweeter, and every sunrise held the promise of another day spent loving you. You didn't just enter my life, {{toName}} – you transformed it entirely, and for that, I am eternally grateful.",
        whatYouMean: "What You Mean To Me",
        whatYouMean_p1: "You are my sunrise and my sunset, the first thought that greets me each morning and the last wish I make before sleep takes me. In your arms, I have found a sanctuary, a place where all my fears dissolve and all my dreams feel possible. You are not just my partner; you are my best friend, my confidant, and the keeper of my deepest secrets.",
        whatYouMean_p2: "Your love has taught me what it truly means to be vulnerable, to trust completely, and to give myself wholly to another person. Through your patience and understanding, I have grown in ways I never thought possible. You see the best in me, even when I cannot see it in myself, and your unwavering belief in who I can become inspires me to be better every single day.",
        whatYouMean_p3: "In the garden of my life, you are the most beautiful flower that has ever bloomed. Your kindness waters my soul, your laughter is the sunshine that helps me grow, and your love is the rich soil that grounds me and gives me strength. I cannot imagine my life without you, nor would I ever want to.",
        littleMoments: "Little moments, big love",
        littleMoments_p1: "It's the tiny rituals that made me fall so deeply for you: the way you say good morning, the half-smile you give when you're focused, the way you remember exactly how I like my coffee. Those details built a universe where I feel safe and seen.",
        littleMoments_p2: "Every time our hands touch, the world calms down. Every time you laugh, the room lights up. With you, ordinary Tuesdays feel like holidays. You are my favorite part of every day.",
        ourForever: "Our Forever",
        ourForever_p1: "As I write these words, my heart overflows with gratitude for every moment we have shared and excitement for all the moments yet to come. I dream of our future together – the adventures we will have, the challenges we will overcome, and the love that will only deepen with each passing year. With you by my side, I fear nothing.",
        ourForever_p2: "I promise to love you through all of life's seasons – through the spring of new beginnings, the summer of our greatest joys, the autumn of change, and the winter of life's challenges. My love for you is not conditional on circumstances; it is as constant as the northern star, as reliable as the changing tides, as eternal as the universe itself.",
        ourForever_p3: "You are my forever, {{toName}}. Not because forever is a word we use lightly, but because when I look into your eyes, I see every tomorrow I have ever wanted. I see our children's laughter, our grandchildren's smiles, and two souls who chose each other and kept choosing each other every single day. That is my promise to you.",
        closing: "With every beat of my heart, with every breath I take, with every fiber of my being – I love you. I have loved you since the moment we met, I love you more today than yesterday, and I will love you even more tomorrow. You are my everything.",
        signature: "Forever and always yours,\n{{fromName}} ❤️",
      },
      fun: {
        intro1: "Hey there, {{toName}}! 🎉",
        intro2: "Hey {{toName}}! Get ready for a cute overload.",
        whyYouBest: "Why You're Basically the Best Human Ever",
        whyYouBest_p1: "Let me start by saying that you are, without a doubt, the most amazing person I've ever had the pleasure of annoying for the rest of my life. I mean, have you met yourself? You're like if sunshine, pizza, and a really good Netflix series had a baby – absolutely irresistible and impossible to get enough of!",
        whyYouBest_p2: "I genuinely don't know how you put up with me. My terrible jokes, my questionable dance moves, my habit of stealing the covers at night – yet here you are, still choosing to be with me every single day. Either you're incredibly patient, incredibly crazy, or you've realized that life with me is never boring. I'm going with all three.",
        whyYouBest_p3: "You make mundane moments magical. Grocery shopping becomes an adventure, waiting in line becomes a comedy show, and even doing laundry feels fun when you're around. You've turned my ordinary life into an extraordinary one, and I didn't even have to upgrade my subscription!",
        greatestHits: "Our Greatest Hits (So Far)",
        greatestHits_p1: "Remember that time we got lost on our road trip and ended up finding that amazing hidden restaurant? Or when we tried to build that IKEA furniture and almost divorced before we even got married? Those are the moments I live for – the unexpected adventures, the ridiculous mishaps, and the uncontrollable laughter that follows.",
        greatestHits_p2: "You're my partner in every crime (the legal ones, obviously... mostly). From binge-watching entire TV series in one weekend to creating elaborate excuses to avoid social events, we make the perfect team. You bring the snacks, I bring the bad ideas, and together we create memories that I'll be telling our grandkids about (with some strategic editing, of course).",
        greatestHits_p3: "I love that we can be complete weirdos together. We have our own language, our own inside jokes, our own dance moves that should never see the light of day. You're the only person who truly gets my humor, even when it's absolutely terrible – especially when it's absolutely terrible.",
        manyAdventures: "Here's to Many More Adventures",
        manyAdventures_p1: "I'm so excited for everything that's ahead of us. More spontaneous adventures, more lazy Sunday mornings, more pillow fights that definitely get out of hand, and more of those perfect moments where we just look at each other and know exactly what the other is thinking (usually \"should we order food?\").",
        manyAdventures_p2: "You've made me a better person, {{toName}}. You've taught me how to be more patient, more kind, and more willing to try new things (even if I complain the entire time). You've shown me that love doesn't have to be serious all the time – it can be silly, playful, and absolutely hilarious.",
        manyAdventures_p3: "So here's to us – the dynamic duo, the dream team, the couple that everyone else wishes they were (at least in my head). Thank you for being my person, my favorite human, and the reason I smile way more than is probably normal. You're stuck with me now, and honestly, I'm not even sorry about it!",
        survivalGuide: "Survival guide for loving me",
        survivalGuide_p1: "Rule 1: laughs are mandatory. Rule 2: we share food unless it's too good (I might steal the last fry). Rule 3: hugs are unlimited.",
        survivalGuide_p2: "You make Mondays feel like Fridays. With you, any playlist becomes a rom-com soundtrack.",
        favoriteAdventures: "Our favorite adventures",
        favoriteAdventures_p1: "Traveling together is amazing, but nothing beats building furniture without (almost) arguing, or staying up talking about everything and nothing.",
        favoriteAdventures_p2: "Best part? We get to be delightfully weird with zero judgment. Our secret language of bad jokes is priceless.",
        futureSpoilers: "Future spoilers",
        futureSpoilers_p1: "More movie nights, more ridiculous dances, more improbable plans. More of you laughing at my terrible jokes while I pretend I can sing.",
        futureSpoilers_p2: "I choose you today, tomorrow, always — and I promise to make you laugh even on rainy days.",
        fun_closing: "Bottom line: you're my favorite kind of chaos. Thanks for being home and amusement park at once.",
        fun_closing2: "With all my playful love,\n{{fromName}}",
        fun_signature: "Your biggest fan (and occasional annoyance),\n{{fromName}} 😘🎊",
      },
      deep: {
        intro1: "My Beloved {{toName}},",
        intro2: "Dear {{toName}},",
        philosophyUs: "The Philosophy of Us",
        philosophyUs_p1: "In the vast expanse of existence, among the countless souls that wander this earth seeking connection, our paths converged in a way that defies mathematical probability. I do not believe in coincidences, {{toName}}. I believe that some bonds are written in the stars long before we take our first breath, that some souls are destined to find each other across any distance, through any obstacle, against any odds.",
        philosophyUs_p2: "When I look into your eyes, I see not just the person you are today, but every version of you that has ever existed – the child who dreamed, the teenager who questioned, the adult who continues to evolve. I see your struggles and your triumphs, your fears and your courage. In your gaze, I find a universe of depth that I could explore for a lifetime and still discover something new.",
        philosophyUs_p3: "Our love is not merely an emotion; it is a state of being, a transformation of the self that occurs when two souls recognize each other as home. Before you, I was complete in my own way, but with you, I have discovered dimensions of myself that I never knew existed. You have not filled a void in my life – you have expanded my very capacity to love and be loved.",
        sacredSpace: "The Sacred Space Between Us",
        sacredSpace_p1: "There exists a sacred space between two people who truly love each other – a space where words become unnecessary, where silence speaks volumes, and where the mere presence of the other brings a peace that transcends understanding. This is the space we have created together, {{toName}}, and it is the most precious thing I have ever known.",
        sacredSpace_p2: "In this space, I have learned the true meaning of vulnerability. To love deeply is to stand naked before another soul, to offer them the power to hurt you while trusting that they will choose to heal you instead. You have held my vulnerabilities with such tender care, never weaponizing my weaknesses, always honoring my trust. This is a gift beyond measure.",
        sacredSpace_p3: "I have come to understand that love is not about possession or completion, but about witnessing. To love you is to witness your journey, to celebrate your growth, to hold space for your pain, and to stand beside you as you become more fully yourself. In turn, you have witnessed me – truly seen me – and in your eyes, I have found the courage to be authentic.",
        eternityMoment: "Eternity in Every Moment",
        eternityMoment_p1: "Time moves differently when I am with you. Moments stretch into eternities, and yet years pass like the turning of a single page. I have learned to live fully in the present, for each moment with you is a gift that I refuse to take for granted. The past has shaped us, the future awaits us, but the now – this precious now – is where our love lives and breathes.",
        eternityMoment_p2: "I think often about the nature of permanence in an impermanent world. Everything changes, everything ends, and yet love – true love – seems to exist outside of time. The love I feel for you feels ancient and eternal, as if it existed before we did and will continue long after our physical forms return to stardust. Perhaps this is the closest thing to immortality that humans can achieve.",
        eternityMoment_p3: "Whatever the future holds, whatever challenges await, I face them without fear because I face them with you. You are my anchor in the storm, my light in the darkness, my reason to believe in the fundamental goodness of the universe. In loving you, I have found my purpose; in being loved by you, I have found my peace.",
        worldsCollided: "When our worlds collided",
        worldsCollided_p1: "Before you, my story had missing pages. You arrived as a full chapter, filling gaps I didn't know existed.",
        worldsCollided_p2: "It's beautiful how two very different paths meet and suddenly everything makes sense. You became my reference for peace and for the future.",
        calmYouBrought: "The calm you brought",
        calmYouBrought_p1: "With you I learned that silence can be comfortable and vulnerability can feel safe. Your gaze says \"stay\" even when no words are spoken.",
        calmYouBrought_p2: "You remind me to breathe slowly, to see beauty in simple things, to believe some stories are destined to work.",
        whatBuild: "What I want to build",
        whatBuild_p1: "I want to build a life that fits our dreams, our flaws, and our late-night laughter. To be your shoulder and your shelter, your impulse and your anchor.",
        whatBuild_p2: "Time changes everything, but I hope it only makes our bond stronger. In every version of the future, I choose to stand beside you.",
        deep_closing: "Words are such inadequate vessels for emotions this profound, yet they are all I have to offer. Know that behind each word lies an ocean of feeling, behind each sentence a mountain of devotion. You have touched my soul in ways that will resonate through every remaining day of my existence.",
        deep_closing2: "Thank you for being home, compass, and gentle storm all at once.",
        deep_signature: "With infinite love and eternal gratitude,\n{{fromName}}",
        deep_signature2: "Yours, in all seasons,\n{{fromName}}",
      },
      short: {
        intro1: "To {{toName}},",
        intro2: "{{toName}}, my shortcut to happiness.",
        simplyPut: "Simply Put",
        simplyPut_p1: "Some things in life don't need elaborate explanations. The sun rises. The tide returns to shore. And I love you. These are the simple truths that anchor my existence, the certainties I cling to in an uncertain world. My love for you is as natural and inevitable as breathing.",
        simplyPut_p2: "I could write you a thousand poems, compose a hundred songs, fill libraries with words attempting to capture what you mean to me. But in the end, it all distills down to this: you are my person. You are the one I choose, again and again, without hesitation.",
        simplyPut_p3: "In a world that often feels overwhelming and complicated, you are my simplicity. You are the calm in my chaos, the answer to my questions, the peace I never knew I was searching for until I found it in you.",
        heartOfIt: "The Heart of It",
        heartOfIt_p1: "I don't need grand gestures or elaborate displays. I need you – your presence, your laugh, your hand in mine. I need quiet mornings and peaceful evenings. I need the ordinary magic of a life shared with you.",
        heartOfIt_p2: "You've taught me that love isn't always fireworks and fairy tales. Sometimes it's making coffee just the way you like it. Sometimes it's sitting in comfortable silence. Sometimes it's choosing each other when choosing is hard. And I choose you. Always.",
        heartOfIt_p3: "The beautiful simplicity of us is what makes us extraordinary. We don't need to be perfect; we just need to be present. We don't need to have all the answers; we just need to face the questions together.",
        foreverSimply: "Forever, Simply",
        foreverSimply_p1: "My promise to you is simple: I will love you. Not just in the easy moments, but in the difficult ones. Not just when it's convenient, but when it costs me something. Not just today, but for all the days I am given.",
        foreverSimply_p2: "You are my today and my tomorrow. You are my favorite hello and my hardest goodbye. You are the reason I believe in love and the proof that it exists. You are everything, {{toName}}. Simply everything.",
        foreverSimply_p3: "So here it is, stripped of all pretense and poetry: I love you. Three small words that carry the weight of my entire heart. May they reach you and remind you, whenever you need reminding, that you are loved beyond measure.",
        loveOnePage: "Love in one page",
        loveOnePage_p1: "You are my point of peace and my daily invitation to smile. I don't need much when you're near.",
        loveOnePage_p2: "Loving you fits in few words: I stay, I care, I celebrate you every day.",
        littleThings: "Little things",
        littleThings_p1: "The way you look at me when something works out. The quick text saying \"home safe\". The comfortable silence after a long day.",
        littleThings_p2: "Those details build a world where I want to live.",
        shortPromise: "Short promise",
        shortPromise_p1: "My commitment is simple: walk beside you. On sunny days and rainy ones. With hot coffee and honest talk.",
        shortPromise_p2: "You are my favorite always.",
        short_closing: "No more words needed. You know. I know. We know. And that's more than enough.",
        short_closing2: "No need for more lines to say: I love you, today and tomorrow.",
        short_signature: "Yours, completely,\n{{fromName}} 💕",
        short_signature2: "With endless care,\n{{fromName}}",
      },
      notFoundTitle: "This love page doesn't exist",
      notFoundMessage: "It may have been removed or the link is incorrect.",
      createOwn: "Create your own love page",
      lockedTitle: "This love page is locked",
      lockedMessage: "The creator hasn't unlocked it yet.",
    },
    success: {
      notFoundTitle: "Page not found",
      goHome: "Go Home",
      ready: "Your love page is ready!",
      shareWith: "Share this private link with {{name}} ❤️",
      privateLink: "Your private link:",
      copy: "Copy link",
      copied: "Copied!",
      send: "Send",
      preview: "Preview your love page →",
    },
    notFound: {
      title: "404",
      message: "Oops! Page not found",
      returnHome: "Return to Home",
    },
    create: {
      stepTwo: {
        title: "Choose a style",
        subtitle: "Pick the perfect look for your love page",
        back: "Back",
        generate: "Generate preview",
      },
      stepThree: {
        title: "Your love page preview",
        subtitle: "Preview is blurred until unlocked",
        ready: "Your love page is ready!",
        privateLink: "Private link: lovelink.com/l/{{slug}}",
        unlockTitle: "Unlock your private love page",
        priceNote: "One-time payment • No account needed",
        unlock: "Unlock now",
        back: "Go back and edit",
      },
    },
  },
  pt: {
    landing: {
      title: "Crie uma página de amor privada",
      titleHighlight: "em 30 segundos",
      subtitle: "Um link. Uma mensagem. Um momento inesquecível.",
      button: "Criar minha página de amor",
      note: "Sem conta • Leva 30 segundos • R$9,99 pagamento único",
    },
    stepOne: {
      icon: "❤️",
      title: "Para quem é?",
      subtitle: "Conte para quem você está criando esta página",
      fromLabel: "Seu nome",
      fromPlaceholder: "Digite seu nome",
      toLabel: "Nome deles",
      toPlaceholder: "Digite o nome deles",
      messageTypeTitle: "Tipo de mensagem",
      fromError: "Por favor, digite seu nome",
      toError: "Por favor, digite o nome deles",
      next: "Continuar",
    },
    lovePage: {
      letterFor: "Uma carta de amor para",
      createdFooter: "Criado com amor no LoveLink",
      romantic: {
        intro1: "Meu Querido {{toName}},",
        intro2: "Para o amor da minha vida, {{toName}},",
        dayWeMet: "O Dia em que nos Conhecemos",
        dayWeMet_p1: "Ainda me lembro do exato momento em que nossos olhos se encontraram. O tempo pareceu parar, e naquele instante, soube que minha vida nunca mais seria a mesma. Havia algo no seu sorriso, uma calidez na sua presença que me atraiu como uma mariposa à chama. Não sabia na época, mas aquele momento marcou o início do capítulo mais bonito da minha vida.",
        dayWeMet_p2: "Cada detalhe daquele dia está gravado na minha memória como uma fotografia preciosa que carrego no coração. A forma como você ria, o brilho nos seus olhos, a manera delicada como falava – esses pequenos momentos se entrelaçaram para criar uma tapeçaria de amor que tesouro mais do que qualquer possessão mundana. Olhando para trás, percebo que o destino nos guiava um para o outro o tempo todo.",
        dayWeMet_p3: "A partir daquele dia, meu mundo se tornou mais brilhante, mais vibrante, mais vivo. As cores pareciam mais ricas, a música soava mais doce, e cada amanhecer trazia a promessa de outro dia passado amando você. Você não apenas entrou na minha vida, {{toName}} – você a transformou completamente, e por isso, sou eternamente grato.",
        whatYouMean: "O Que Você Significa Para Mim",
        whatYouMean_p1: "Você é meu amanhecer e meu pôr do sol, o primeiro pensamento que me cumprimenta cada manhã e o último desejo que faço antes do sono me levar. Nos seus braços, encontrei um santuário, um lugar onde todos os meus medos se dissolvem e todos os meus sonhos parecem possíveis. Você não é apenas meu parceiro; você é meu melhor amigo, meu confidente, e o guardião dos meus segredos mais profundos.",
        whatYouMean_p2: "Seu amor me ensinou o que realmente significa ser vulnerável, confiar completamente e me entregar totalmente a outra pessoa. Através da sua paciência e compreensão, cresci de maneiras que nunca pensei ser possível. Você vê o melhor em mim, mesmo quando não consigo ver em mim mesmo, e sua crença inabalável em quem posso me tornar me inspira a ser melhor a cada dia.",
        whatYouMean_p3: "No jardim da minha vida, você é a flor mais bonita que já floresceu. Sua bondade rega minha alma, seu riso é o sol que me ajuda a crescer, e seu amor é o solo rico que me enraíza e me dá força. Não consigo imaginar minha vida sem você, nem gostaria de tentar.",
        littleMoments: "Pequenos momentos, grande amor",
        littleMoments_p1: "São os pequenos rituais que me fizeram me apaixonar tão profundamente por você: a forma como você diz bom dia, aquele meio-sorriso quando você está focado, a forma como lembra exatamente como gosto de meu café. Esses detalhes construíram um universo onde me sinto seguro e compreendido.",
        littleMoments_p2: "Cada vez que nossas mãos se tocam, o mundo se acalma. Cada vez que você ri, a sala se ilumina. Com você, terças-feiras comuns parecem feriados. Você é minha parte favorita de cada dia.",
        ourForever: "Nosso Sempre",
        ourForever_p1: "Enquanto escrevo estas palavras, meu coração transborda de gratidão por cada momento que compartilhamos e entusiasmo por todos os momentos ainda por vir. Sonho com nosso futuro juntos – as aventuras que teremos, os desafios que superaremos, e o amor que apenas aprofundará a cada ano que passa. Com você ao meu lado, não temo nada.",
        ourForever_p2: "Prometo amá-lo através de todas as estações da vida – através da primavera dos novos começos, do verão de nossas maiores alegrias, do outono da mudança, e do inverno dos desafios da vida. Meu amor por você não é condicional às circunstâncias; é constante como a Estrela do Norte, confiável como as marés em mudança, eterno como o universo em si.",
        ourForever_p3: "Você é meu sempre, {{toName}}. Não porque sempre seja uma palavra que usamos levianamente, mas porque quando olho nos seus olhos, vejo cada amanhã que sempre quis. Vejo o riso de nossos filhos, os sorrisos de nossos netos, e duas almas que se escolheram e continuam se escolhendo a cada dia. Essa é minha promessa para você.",
        closing: "A cada batida do meu coração, a cada respiração que tomo, com cada fibra do meu ser – eu te amo. Amei você desde o momento em que nos conhecemos, amo você mais hoje do que ontem, e vou amá-lo ainda mais amanhã. Você é meu tudo.",
        signature: "Para sempre e sempre seu,\n{{fromName}} ❤️",
      },
      fun: {
        intro1: "Oi {{toName}}! 🎉",
        intro2: "Oi {{toName}}! Prepare-se para uma overdose de fofura.",
        whyYouBest: "Por que você é basicamente a melhor pessoa do mundo",
        whyYouBest_p1: "Deixa eu começar dizendo que você é, sem sombra de dúvida, a pessoa mais incrível que já tive o prazer de irritar pelo resto da minha vida. Quer dizer, você já se viu? Você é como se o sol, a pizza e uma série de Netflix bem legal tivessem um filho – absolutamente irresistível e impossível de ter o suficiente!",
        whyYouBest_p2: "Genuinamente não sei como você aguenta comigo. Minhas piadas terríveis, meus movimentos de dança questionáveis, meu hábito de roubar os cobertores à noite – e aqui você está, ainda escolhendo estar comigo todos os dias. Você é incrivelmente paciente, incrivelmente maluca, ou percebeu que a vida comigo nunca é chata. Vou com as três.",
        whyYouBest_p3: "Você torna os momentos mundanos mágicos. Comprar mantimentos vira uma aventura, esperar na fila vira um show de comédia, e até lavar roupa é divertido quando você está por perto. Você transformou minha vida comum em algo extraordinário, e nem precisei fazer upgrade na minha assinatura!",
        greatestHits: "Nossos Maiores Sucessos (Até Agora)",
        greatestHits_p1: "Lembra daquele tempo que nos perdemos na nossa road trip e acabamos encontrando aquele restaurante escondido incrível? Ou quando tentamos montar aquele móvel de IKEA e quase nos divorciávamos antes de até nos casar? Esses são os momentos que eu vivo – as aventuras inesperadas, as confusões ridículas e o riso incontrolável que segue.",
        greatestHits_p2: "Você é meu parceiro em todo crime (os legais, obviamente... bem, a maioria). De maratonando séries de TV inteiras num fim de semana a criando desculpas elaboradas para evitar eventos sociais, somos o time perfeito. Você traz os lanches, eu trago as ideias ruins, e juntos criamos memórias que vou contar para nossos netos (com algumas edições estratégicas, é claro).",
        greatestHits_p3: "Amo que possamos ser completamente estranhos juntos. Temos nossa própria linguagem, nossas próprias piadas internas, nossos próprios movimentos de dança que nunca deveriam ver a luz do dia. Você é a única pessoa que realmente entende meu humor, mesmo quando é absolutamente terrível – especialmente quando é absolutamente terrível.",
        manyAdventures: "Para Muitas Mais Aventuras",
        manyAdventures_p1: "Estou tão empolgado com tudo o que está por vir. Mais aventuras espontâneas, mais domingos preguiçosos, mais lutas de almofada que definitivamente saem do controle, e mais daqueles momentos perfeitos onde nos olhamos e sabemos exatamente o que o outro está pensando (geralmente \"devemos pedir comida?\").",
        manyAdventures_p2: "Você me tornou uma pessoa melhor, {{toName}}. Me ensinou a ser mais paciente, mais gentil e mais disposto a tentar coisas novas (mesmo que eu reclame o tempo todo). Me mostrou que o amor não precisa ser sério o tempo todo – pode ser bobo, divertido e absolutamente hilariante.",
        manyAdventures_p3: "Então aqui vai: para nós – o duo dinâmico, o time dos sonhos, o casal que todos os outros gostariam de ser (pelo menos na minha cabeça). Obrigado por ser minha pessoa, meu humano favorito e a razão pela qual sou sorriso muito mais do que é provavelmente normal. Você está preso a mim agora, e honestamente, não estou nem um pouco arrependido!",
        survivalGuide: "Guia de sobrevivência para me amar",
        survivalGuide_p1: "Regra 1: risadas são obrigatórias. Regra 2: compartilhamos comida a menos que seja muito boa (eu posso roubar a última batata frita). Regra 3: abraços são ilimitados.",
        survivalGuide_p2: "Você torna as segundas-feiras parecerem sextas. Com você, qualquer playlist vira trilha sonora de filme romântico.",
        favoriteAdventures: "Nossas aventuras favoritas",
        favoriteAdventures_p1: "Viajar junto é incrível, mas nada se compara a montar móvel sem (quase) discutir, ou ficar acordado conversando sobre tudo e nada.",
        favoriteAdventures_p2: "A melhor parte? Podemos ser lindamente estranhos sem nenhum julgamento. Nossa linguagem secreta de piadas ruins é impagável.",
        futureSpoilers: "Spoilers do futuro",
        futureSpoilers_p1: "Mais noites de filme, mais danças ridículas, mais planos improváveis. Mais de você rindo das minhas piadas terríveis enquanto finjo que posso cantar.",
        futureSpoilers_p2: "Eu escolho você hoje, amanhã, sempre — e prometo te fazer rir mesmo nos dias chuvosos.",
        fun_closing: "Em resumo: você é meu tipo favorito de caos. Obrigado por ser casa e parque de diversões ao mesmo tempo.",
        fun_closing2: "Com todo meu amor brincalhão,\n{{fromName}}",
        fun_signature: "Seu maior fã (e incômodo ocasional),\n{{fromName}} 😘🎊",
      },
      deep: {
        intro1: "Meu Amado {{toName}},",
        intro2: "Caro {{toName}},",
        philosophyUs: "A Filosofia de Nós",
        philosophyUs_p1: "Na vasta imensidão da existência, entre incontáveis almas que vagueiam por esta terra buscando conexão, nossos caminhos convergiram de um jeito que desafia toda probabilidade matemática. Não acredito em coincidências, {{toName}}. Acredito que alguns laços são escritos nas estrelas muito antes de nosso primeiro respiro, que algumas almas estão destinadas a se encontrarem através de qualquer distância, através de qualquer obstáculo, contra qualquer probabilidade.",
        philosophyUs_p2: "Quando olho nos seus olhos, vejo não apenas a pessoa que você é hoje, mas cada versão de você que já existiu – a criança que sonhava, a adolescente que questionava, a adulta que continua evoluindo. Vejo suas lutas e seus triunfos, seus medos e sua coragem. No seu olhar, encontro um universo de profundidade que poderia explorar por uma vida inteira e ainda assim descobrir algo novo.",
        philosophyUs_p3: "Nosso amor não é meramente uma emoção; é um estado de ser, uma transformação do self que ocorre quando duas almas reconhecem uma à outra como lar. Antes de você, eu era completa à minha maneira, mas com você, descobri dimensões de mim mesma que nunca soube que existiam. Você não preencheu um vazio na minha vida – você expandiu minha capacidade de amar e ser amada.",
        sacredSpace: "O Espaço Sagrado Entre Nós",
        sacredSpace_p1: "Existe um espaço sagrado entre duas pessoas que verdadeiramente se amam – um espaço onde palavras se tornam desnecessárias, onde o silêncio fala volumes, e onde a mera presença do outro traz uma paz que transcende o entendimento. Este é o espaço que criamos juntas, {{toName}}, e é a coisa mais preciosa que já conheci.",
        sacredSpace_p2: "Neste espaço, aprendi o verdadeiro significado de vulnerabilidade. Amar profundamente é ficar nua diante de outra alma, oferecer-lhe o poder de te machucar enquanto confia que ela escolherá te curar. Você manteve minhas vulnerabilidades com tal ternura, nunca as usou como arma, sempre honrou minha confiança. Isso é um presente sem preço.",
        sacredSpace_p3: "Cheguei a entender que amor não é sobre posse ou completude, mas sobre testemunha. Amar você é testemunhar sua jornada, celebrar seu crescimento, criar espaço para sua dor, e estar ao seu lado enquanto você se torna mais completamente você mesma. Por sua vez, você me testemunhou – realmente me viu – e nos seus olhos, encontrei coragem para ser autêntica.",
        eternityMoment: "Eternidade em Cada Momento",
        eternityMoment_p1: "O tempo se move diferente quando estou com você. Momentos se estendem para eternidades, e mesmo assim anos passam como o virar de uma página. Aprendi a viver plenamente no presente, pois cada momento com você é um presente que me recuso a desvalirizar. O passado nos moldou, o futuro nos aguarda, mas o agora – este precioso agora – é onde nosso amor vive e respira.",
        eternityMoment_p2: "Penso frequentemente sobre a natureza da permanência em um mundo impermanente. Tudo muda, tudo termina, e ainda assim amor – verdadeiro amor – parece existir fora do tempo. O amor que sinto por você se sente antigo e eterno, como se tivesse existido antes de nós e continuará muito depois que nossos corpos retornarem ao pó das estrelas. Talvez isto seja o mais próximo da imortalidade que os humanos possam alcançar.",
        eternityMoment_p3: "Seja qual for o futuro, sejam quais forem os desafios que nos aguardam, eu os enfrento sem medo porque os enfrento com você. Você é minha âncora na tempestade, minha luz na escuridão, minha razão para acreditar na bondade fundamental do universo. Ao amar você, encontrei meu propósito; ao ser amada por você, encontrei minha paz.",
        worldsCollided: "Quando nossos mundos colidiram",
        worldsCollided_p1: "Antes de você, minha história tinha páginas em branco. Você chegou como um capítulo completo, preenchendo lacunas que não sabia que existiam.",
        worldsCollided_p2: "É lindo como dois caminhos muito diferentes se encontram e de repente tudo faz sentido. Você se tornou minha referência de paz e de futuro.",
        calmYouBrought: "A calma que você trouxe",
        calmYouBrought_p1: "Com você aprendi que silêncio pode ser confortável e vulnerabilidade pode ser segura. Seu olhar diz \"fique\" mesmo quando nenhuma palavra é falada.",
        calmYouBrought_p2: "Você me lembra de respirar lentamente, de ver beleza em coisas simples, de acreditar que algumas histórias são destinadas a funcionar.",
        whatBuild: "O que quero construir",
        whatBuild_p1: "Quero construir uma vida que se encaixe nos nossos sonhos, nossas falhas e nosso riso tardio. Ser seu ombro e seu abrigo, seu impulso e sua âncora.",
        whatBuild_p2: "O tempo muda tudo, mas espero que só fortaleça nosso laço. Em cada versão do futuro, escolho ficar ao seu lado.",
        deep_closing: "Palavras são tão inadequadas para emoções tão profundas, mas são tudo o que tenho a oferecer. Saiba que atrás de cada palavra há um oceano de sentimento, atrás de cada frase uma montanha de devoção. Você tocou minha alma de maneiras que ressoarão através de cada dia restante da minha existência.",
        deep_closing2: "Obrigada por ser lar, bússola e tempestade gentil ao mesmo tempo.",
        deep_signature: "Com amor infinito e gratidão eterna,\n{{fromName}}",
        deep_signature2: "Sua, em todas as estações,\n{{fromName}}",
      },
      short: {
        intro1: "Para {{toName}},",
        intro2: "{{toName}}, meu atalho para a felicidade.",
        simplyPut: "Simplemente Dito",
        simplyPut_p1: "Algumas coisas na vida não precisam de explicações elaboradas. O sol nasce. A maré retorna à costa. E eu te amo. Estas são as verdades simples que ancoram minha existência, as certezas que me apego em um mundo incerto. Meu amor por você é tão natural e inevitável quanto respirar.",
        simplyPut_p2: "Eu poderia escrever mil poemas para você, compor cem músicas, preencher bibliotecas com palavras tentando capturar o que você significa para mim. Mas no final, tudo se reduz a isto: você é minha pessoa. Você é aquela que escolho, novamente e novamente, sem hesitação.",
        simplyPut_p3: "Em um mundo que muitas vezes se sente opressor e complicado, você é minha simplicidade. Você é a calma no meu caos, a resposta às minhas perguntas, a paz que nunca soube que estava procurando até encontrá-la em você.",
        heartOfIt: "O Cerne Disso",
        heartOfIt_p1: "Eu não preciso de gestos grandiosos ou displays elaborados. Preciso de você – sua presença, seu riso, sua mão na minha. Preciso de manhãs tranquilas e noites pacíficas. Preciso da magia ordinária de uma vida compartilhada com você.",
        heartOfIt_p2: "Você me ensinou que amor nem sempre é fogos de artifício e contos de fadas. Às vezes é fazer café exatamente como você gosta. Às vezes é sentar em silêncio confortável. Às vezes é escolher um ao outro quando escolher é difícil. E eu escolho você. Sempre.",
        heartOfIt_p3: "A simplicidade bonita de nós é o que nos torna extraordinários. Não precisamos ser perfeitos; apenas precisamos estar presentes. Não precisamos ter todas as respostas; apenas precisamos enfrentar as perguntas juntos.",
        foreverSimply: "Para Sempre, Simplemente",
        foreverSimply_p1: "Minha promessa para você é simples: vou te amar. Não apenas nos momentos fáceis, mas nos difíceis. Não apenas quando é conveniente, mas quando custa algo. Não apenas hoje, mas para todos os dias que me forem dados.",
        foreverSimply_p2: "Você é meu hoje e meu amanhã. Você é meu \"oi\" favorito e meu \"adeus\" mais difícil. Você é a razão pela qual acredito no amor e a prova de que ele existe. Você é tudo, {{toName}}. Simplesmente tudo.",
        foreverSimply_p3: "Então aqui está, despido de pretensão e poesia: eu te amo. Três palavras pequenas que carregam o peso do meu coração inteiro. Que elas a alcancem e a lembrem, sempre que precisar ser lembrada, que você é amada além da medida.",
        loveOnePage: "Amor em uma página",
        loveOnePage_p1: "Você é meu ponto de paz e meu convite diário para sorrir. Não preciso de muito quando você está perto.",
        loveOnePage_p2: "Amar você cabe em poucas palavras: eu fico, eu cuido, eu te celebro todos os dias.",
        littleThings: "Pequenas coisas",
        littleThings_p1: "A forma como você me olha quando algo funciona. A mensagem rápida dizendo \"cheguei em casa com segurança\". O silêncio confortável depois de um dia longo.",
        littleThings_p2: "Esses detalhes constroem um mundo onde quero viver.",
        shortPromise: "Promessa curta",
        shortPromise_p1: "Meu compromisso é simples: caminhar ao seu lado. Nos dias ensolarados e chuvosos. Com café quente e conversa honesta.",
        shortPromise_p2: "Você é meu sempre favorito.",
        short_closing: "Sem mais palavras necessárias. Você sabe. Eu sei. Nós sabemos. E isso é mais que suficiente.",
        short_closing2: "Sem necessidade de mais linhas para dizer: eu te amo, hoje e amanhã.",
        short_signature: "Sua, completamente,\n{{fromName}} 💕",
        short_signature2: "Com cuidado infinito,\n{{fromName}}",
      },
      notFoundTitle: "Esta página de amor não existe",
      notFoundMessage: "Ela pode ter sido removida ou o link está incorreto.",
      createOwn: "Crie sua própria página de amor",
      lockedTitle: "Esta página de amor está bloqueada",
      lockedMessage: "O criador ainda não a desbloqueou.",
    },
    success: {
      notFoundTitle: "Página não encontrada",
      goHome: "Voltar para início",
      ready: "Sua página de amor está pronta!",
      shareWith: "Compartilhe este link privado com {{name}} ❤️",
      privateLink: "Seu link privado:",
      copy: "Copiar link",
      copied: "Copiado!",
      send: "Enviar",
      preview: "Ver prévia da sua página →",
    },
    notFound: {
      title: "404",
      message: "Ops! Página não encontrada",
      returnHome: "Voltar para o Início",
    },
    create: {
      stepTwo: {
        title: "Escolha um estilo",
        subtitle: "Escolha o visual perfeito",
        back: "Voltar",
        generate: "Gerar prévia",
      },
      stepThree: {
        title: "Prévia da sua página",
        subtitle: "A prévia fica desfocada até destravar",
        ready: "Sua página de amor está pronta!",
        privateLink: "Link privado: lovelink.com/l/{{slug}}",
        unlockTitle: "Destrave sua página privada",
        priceNote: "Pagamento único • Sem conta",
        unlock: "Destravar agora",
        back: "Voltar e editar",
      },
    },
  },
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const getValue = (dict: Translations, path: string[]): string | Translations | undefined => {
  return path.reduce<Translations | string | undefined>((acc, part) => {
    if (!acc || typeof acc === "string") return acc;
    return acc[part];
  }, dict);
};

const format = (value: string, vars?: Record<string, string | number>) => {
  if (!vars) return value;
  return Object.entries(vars).reduce((acc, [k, v]) => acc.replace(`{{${k}}}`, String(v)), value);
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("love-page-lang") as Language | null;
    return saved || "en";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("love-page-lang", lang);
    }
  }, [lang]);

  const t = useMemo(() => {
    return (key: string, vars?: Record<string, string | number>) => {
      const parts = key.split(".");
      const value = getValue(translations[lang], parts);
      if (typeof value === "string") return format(value, vars);
      // fallback to English
      const fallback = getValue(translations.en, parts);
      if (typeof fallback === "string") return format(fallback, vars);
      return key;
    };
  }, [lang]);

  const setLanguage = (value: Language) => setLang(value);

  return (
    <I18nContext.Provider value={{ lang, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
};
