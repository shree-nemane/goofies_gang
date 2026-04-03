export interface Member {
  id: string;
  name: string;
  firstName: string;
  nickname?: string;
  image: string;
  pfpImage: string;
  vibeLine: string;
  shortDescription: string;
  traits: string[];
  insideJoke: string;
  hiddenNotes: string[];
  longDescription: string;
  signatureLines: string[];
  coreMemories: { title: string; description: string }[];
  role: string;
  chaosIndex: Record<string, number>;
  gallery: string[];
  finalNote: string;
  theme: { primary: string; text: string };
  storyDescription: string[];
}

export const members: Member[] = [
  {
    id: "harshali",
    name: "Harshali Chabukswar",
    firstName: "Harshali",
    nickname: "Nashik meri jeb mey",
    image: "/avatars/harshail_chabukswar.jpg",
    pfpImage: "/pfp/harshail_chabukswar.PNG",
    vibeLine: "Happily committed to spreading positivity.",
    shortDescription: "She is a positive and uplifting person who is known for her humor and ability to cheer others up.",
    traits: ["Cheerleader of the tribe", "Positive vibes carrier", "Funniest"],
    insideJoke: "Keeps declaring Nashik is in her pocket.",
    hiddenNotes: ["Could definitely run for mayor of Nashik.", "Certified mood lifter."],
    longDescription: "The brightest character of the tribe! No matter how bad your day must have gone she'll be right there to cheer you up. She's been living up to her name undoubtedly; she's the funniest and always carries her positive vibes along.",
    signatureLines: ["Nashik meri jeb mey hai!", "Why is everyone so serious?"],
    coreMemories: [{ title: "The Cheer Session", description: "Lifting the groups spirits after a disastrously lazy day." }],
    role: "The Mood Lifter",
    chaosIndex: { "Volume": 8, "Positivity": 10, "Humor": 10 },
    gallery: [],
    finalNote: "Keep carrying those positive vibes! We'd be miserable without you.",
    theme: { primary: "#ffe082", text: "#322f22" },
    storyDescription: [
      "Hi, I’m Harshali, and my journey is still in progress—but that’s what makes it special.There was a time when I felt confused about my direction, like many students do. I didn’t have everything figured out, but I had one thingdetermination to improve myself little by little. Instead of waiting for the ‘perfect moment,’ I started learning step by step whether it was understanding coding, exploring new things. And right now, I’m focusing on building my skills in cybersecurity as well, because I truly want to grow in this field." ,
      "There were days when things felt difficult, when I doubted myself, but I didn’t stop. I kept going, even if the progress was slow. Because I realized that consistency matters more than perfection. There was also a phase when I felt like I wanted to go back to my first or second year, to start fresh… and yes, I even faced the possibility of a year drop. But even then, I chose not to give up.Today, I’m someone who believes that growth doesn’t happen overnight it happens through small efforts every single day. I’m still learning, still growing, but I’m proud that I didn’t give up on myself.If my journey can inspire even one person to start, to believe in themselves, or to keep going when it’s hard then that means everything to me.",
    ]
  },
  {
    id: "sudnya",
    name: "Sudnya Mishra",
    firstName: "Sudnya",
    nickname: "Chota Don",
    image: "/avatars/sudnya_mishra.jpg",
    pfpImage: "/pfp/sudnya_mishra.PNG",
    vibeLine: "Single, in a committed relationship with books and Kdramas.",
    shortDescription: "A sweet, quiet, and artistic individual with a fondness for literature.",
    traits: ["Sweet & silent", "Literature & art lover", "Hopeless romantic"],
    insideJoke: "Being called Chota Don while being the sweetest person alive.",
    hiddenNotes: ["Is essentially a Kdrama protagonist.", "Loves cats more than people."],
    longDescription: "As unique as her name, Sudnya is a sweet and silent individual who has a deep taste for literature and art. Her name stands for wisdom but she rarely would stand by it when it comes to her hopeless romantic desires. She's the perfect blend of sugar and spice.",
    signatureLines: ["Wait, let me finish this chapter...", "That's so romantic!"],
    coreMemories: [{ title: "The Book Haul", description: "Disappearing for two hours just to return with a mountain of novels." }],
    role: "The Quiet Observer & Romantic",
    chaosIndex: { "Quietness": 10, "Romance": 9, "Don Energy": 5 },
    gallery: [],
    finalNote: "Don't let the silent demeanor fool you. Chota Don is real.",
    theme: { primary: "#d4b5f8", text: "#4c1b7f" },
    storyDescription: [
      "It was 3 AM in Austin. Sudnya found a food truck that only accepted bartering. We traded a used frisbee and gummy worms for six cilantro tacos.",
      "The next morning we missed our flight. Sudnya says it was worth it. Our stomachs disagreed."
    ]
  },
  {
    id: "preeti",
    name: "Preeti Mishra",
    firstName: "Preeti",
    nickname: "Malegaon ka gunda",
    image: "/avatars/preeti_mishra.jpg",
    pfpImage: "/pfp/preeti_mishra.PNG",
    vibeLine: "Teasingly single, committed to annoying her friends.",
    shortDescription: "A hard-to-get-attention-from, unpredictable, and teasingly affectionate friend.",
    traits: ["Attention-defying", "Happy-go-lucky", "Teasingly affectionate"],
    insideJoke: "Struggling to get Preeti's attention is a group sport.",
    hiddenNotes: ["Will pinch you to show affection.", "A literal tycoon of chaos."],
    longDescription: "Preeti..Preetii...PREETIII! Yeah, that explains how much the people of the group have to struggle to get her attention! Preeti is a tycoon as you can never expect a stable conversation with her no matter what the situation is! She loves her friends and likes to tease them a lot. Almost every guy from the group fears a pinch from her.",
    signatureLines: ["Huh? Were you saying something?", "Come here, let me pinch you!"],
    coreMemories: [{ title: "The Infinite Ignore", description: "Ignored her name being called 14 times in a single minute." }],
    role: "The Affectionate Teaser",
    chaosIndex: { "Attention Deficit": 10, "Pinch Danger": 10, "Unpredictability": 9 },
    gallery: [],
    finalNote: "We'll keep shouting your name until you finally listen.",
    theme: { primary: "#ff728d", text: "#322f22" },
    storyDescription: [
      "It was 3 AM in Austin. Preeti found a food truck that only accepted bartering. We traded a used frisbee and gummy worms for six cilantro tacos.",
      "The next morning we missed our flight. Preeti says it was worth it. Our stomachs disagreed."
    ]
  },
  {
    id: "mandar",
    name: "Mandar Jadhav",
    firstName: "Mandar",
    nickname: "Jaggu",
    image: "/avatars/mandar_jadhav.jpg",
    pfpImage: "/pfp/mandar_jadhav.PNG",
    vibeLine: "Single, in a deep love affair with cinema.",
    shortDescription: "The founder of Goofies, an intellectual with a childish heart.",
    traits: ["Group founder", "Intellectual kid-at-heart", "Cinema lover"],
    insideJoke: "Remembering Mandar's 'intellectual' mishaps.",
    hiddenNotes: ["Created the Goofies.", "A walking IMDB."],
    longDescription: "This distinguished gentleman is the reason Goofies came into existence. As well read he seems to be, he's recognised for the most idiotic events of the group's history! An intellectual individual, who's a kid at heart and absolutely loves cinema.",
    signatureLines: ["Actually, in that one movie...", "This group is a mistake, but it's my mistake."],
    coreMemories: [{ title: "The Accidental Mastermind", description: "Founded the group by accident while trying to organize a movie night." }],
    role: "The Originator & Cinema Buff",
    chaosIndex: { "Intellect": 8, "Idiotic Mishaps": 9, "Cinema Knowledge": 10 },
    gallery: [],
    finalNote: "You created this mess, Jaggu. You're stuck with us.",
    theme: { primary: "#5e35b1", text: "#f3e5f5" },
    storyDescription: [
      "Watch movies, reads books, cant read ppl, drives bike, dont drive girls crazy, 3+ bodycount, modi heater, rahul hater, leftist by ideology, righty by hand, righteous by standards, identifies as lesbian, believes that women are God,  one piece, loveeee cats they are soo cute i wanna die surrounded by cats kittens😻😻😻😻💘💘💘",
      "Imma cat mother, totally 100% chalant, wanna marry Sadie sink, koi Gibson Les Paul Modern Figured Electric Guitar LPM01CXCH1 - Cobalt Burst leke dedo 😭😭😭🙏🏻🙏🏻🙏🏻, aspiring bungee jumper without bungee, believes in 1 khun maaf, self lover, self hater"
    ]
  },
  {
    id: "rahul",
    name: "Rahul Hadpad",
    firstName: "Rahul",
    nickname: "Philosloth",
    image: "/avatars/rahul_hadpad.jpg",
    pfpImage: "/pfp/rahul_hadpad.PNG",
    vibeLine: "Happily single, committed to philosophical solitude and tech.",
    shortDescription: "A philosophical and tech-savvy individual who enjoys solitude.",
    traits: ["Solitude seeker", "Philosophical techie", "Unorthodox mindset"],
    insideJoke: "Philosophizing while everyone else is fighting.",
    hiddenNotes: ["Basically a wizard.", "Probably coding something weird right now."],
    longDescription: "The whimsical wizard who likes solitude. Rahul is a philosophical individual who's specially abled with technology. Rahul has an unparalleled perspective of the rituals of this planet and has an unorthodox state of mind. The group loves him for his silly comments and helpful nature.",
    signatureLines: ["Technically speaking...", "Have you ever thought about the Consciousness?"],
    coreMemories: [{ title: "The Tech Philosophy", description: "Fixed a laptop while explaining the meaning of absolute nothingness." }],
    role: "The Tech-Philosopher",
    chaosIndex: { "Philosophy": 10, "Solitude": 9, "Tech Skills": 10 },
    gallery: [],
    finalNote: "Keep questioning the universe, Philosloth.",
    theme: { primary: "#90a4ae", text: "#263238" },
    storyDescription: [
      "It was 3 AM in Austin. Rahul found a food truck that only accepted bartering. We traded a used frisbee and gummy worms for six cilantro tacos.",
      "The next morning we missed our flight. Rahul says it was worth it. Our stomachs disagreed."
    ]
  },
  {
    id: "aditya",
    name: "Aditya Bachawe",
    firstName: "Aditya",
    nickname: "Design loge ?",
    image: "/avatars/aditya_bachawe.jpg",
    pfpImage: "/pfp/aditya_bachawe.PNG",
    vibeLine: "Committed to arriving fashionably late to all social events.",
    shortDescription: "Talkative, generous, chaotic, and often late. The Group Mom™.",
    traits: ["Group Mom™", "Late arrival expert", "Dark humorist"],
    insideJoke: "Aditya showing up when the event is already over.",
    hiddenNotes: ["Darker humor than a black hole.", "Yaps like a podcast."],
    longDescription: "The Group Mom™ who yaps like a podcast but shows up late to his own advice. Generous at heart, a try-hard in everything, and a comic genius (intentional or not). His humor? Darker than a blackout, but his blush gives him away. Creative, chaotic, and always fashionably late—because why be on time when you can make an entrance?",
    signatureLines: ["I'm almost there!", "Wait, hear my design pitch..."],
    coreMemories: [{ title: "The 3-Hour Delay", description: "Arrived so late he accidentally showed up for the next day's plans." }],
    role: "The Chaotic Organizer",
    chaosIndex: { "Lateness": 10, "Dark Humor": 9, "Yapping": 10 },
    gallery: [],
    finalNote: "We'd tell you to be on time, but we know it's hopeless.",
    theme: { primary: "#ef5350", text: "#fffde7" },
    storyDescription: [
      "Hi! My name is Aditya. I  curate and design visuals for businesses for a living. I enjoy art and also live for it, be it sketching, music or storytelling. I'm curious about topics that involve human behaviour and psychology. I do resistance training for endurance that helps me save myself from dying on a hike that me and my friends enjoy going to. I can make you giggle and wheeze out only if you are witty enough to comprehend my one liners.", 
      "I like cats more than dogs.   Also girls with east asian facial features is what I ideally prefer when someone asks me what my type in women is. I'm an extremely slow eater and often struggle with delivering commitments on time"
    ]
  },
  {
    id: "om-s",
    name: "Om Sonawane",
    firstName: "Om",
    nickname: "Gym Rat",
    image: "/avatars/om_sonawane.jpg",
    pfpImage: "/pfp/om_sonawane.PNG",
    vibeLine: "Dating his weights and suspiciously eyeing your food.",
    shortDescription: "An ambivert with excellent comic timing who will steal your lunch.",
    traits: ["Ambivert with comic timing", "Heavy lifter", "Lunch pilferer"],
    insideJoke: "Always checking if Om already ate your lunch.",
    hiddenNotes: ["Is a brainrot connoisseur.", "Never leaves food unattended."],
    longDescription: "Introduced to the group as a brother in law but eventually turning into a bro, Om is that one ambivert of the group who's got the best comic timing and is known to be the brainrot connoisseur. He's a heavy lifter and a penny pincher. If you have him around you, be careful as he might eat up your lunch with or without your consent.",
    signatureLines: ["Are you going to finish that?", "I need more protein."],
    coreMemories: [{ title: "The Lunch Theft", description: "Ate three people's lunches before they even realized they were hungry." }],
    role: "The Brainrot Connoisseur & Lunch Thief",
    chaosIndex: { "Appetite": 10, "Brainrot": 10, "Lifting": 9 },
    gallery: [],
    finalNote: "Please stop eating our food. We beg you.",
    theme: { primary: "#76b74d", text: "#2d5f1f" },
    storyDescription: [
      "It was 3 AM in Austin. Om found a food truck that only accepted bartering. We traded a used frisbee and gummy worms for six cilantro tacos.",
      "The next morning we missed our flight. Om says it was worth it. Our stomachs disagreed."
    ]
  },
  {
    id: "shubham",
    name: "Shubham Gawde",
    firstName: "Shubham",
    nickname: "Dreamer",
    image: "/avatars/shubham_gawade.jpg",
    pfpImage: "/pfp/shubham_gawade.PNG",
    vibeLine: "In an on-again, off-again relationship with the group's attendance sheet.",
    shortDescription: "A rarely seen, enigmatic talented artist and a dependable friend.",
    traits: ["Rarely seen", "Anime protagonist vibe", "Trustworthy artist"],
    insideJoke: "Spotting Shubham is rarer than a blue moon.",
    hiddenNotes: ["Basically a mythical creature.", "Might be living in an anime."],
    longDescription: "The moon of the group as you'll see him once in 15 days. Shubham is like an absent parent you usually see in movies. A glance at him might make you feel like he's a protagonist of some underrated anime but that's not the only thing about him! He's a great artist and a great friend. He's the one you can count on whenever you find yourself in trouble.",
    signatureLines: ["...", "*Disappears into the shadows*"],
    coreMemories: [{ title: "The Rare Sighting", description: "Showed up, dropped the hardest art piece ever, and vanished for a week." }],
    role: "The Elusive Artist & Reliable Friend",
    chaosIndex: { "Elusiveness": 10, "Art Skills": 10, "Dependability": 9 },
    gallery: [],
    finalNote: "Come out of hiding more often!",
    theme: { primary: "#1976d2", text: "#e3f2fd" },
    storyDescription: [
      "It was 3 AM in Austin. Shubham found a food truck that only accepted bartering. We traded a used frisbee and gummy worms for six cilantro tacos.",
      "The next morning we missed our flight. Shubham says it was worth it. Our stomachs disagreed."
    ]
  },
  {
    id: "om-b",
    name: "Om Bhamare",
    firstName: "Om",
    nickname: "Ye mera area hai",
    image: "/avatars/om_bhamre.jpg",
    pfpImage: "/pfp/om_bhamare.PNG",
    vibeLine: "Passionately committed to cricket, dreaming of Rohit Sharma.",
    shortDescription: "A short king with an extreme passion for cricket and yapping about Sakri.",
    traits: ["Cricket fanatic", "Short king", "Enthusiastic yapper"],
    insideJoke: "His unconditional, borderline concerning love for Rohit Sharma.",
    hiddenNotes: ["9/10 Simp.", "Believes every area is his area."],
    longDescription: "One of the OGs of the group; Om is the short king that every girl finds to be sweet and loving. He Loves cricket more than his life, So much that he even dreams of sharing a bed with Rohit Sharma. Words cannot describe how big of a simp he is, but numbers can 9 on a scale of 10! Om loves to hike, play sports and yap about life in Sakri.",
    signatureLines: ["Ye mera area hai!", "Did you see Rohit Sharma today?"],
    coreMemories: [{ title: "The Sakri Monologue", description: "Yapped about life in Sakri for entirely too long without breathing." }],
    role: "The Cricket-Obsessed Short King",
    chaosIndex: { "Simping": 9, "Cricket Obsession": 11, "Yapping": 8 },
    gallery: [],
    finalNote: "Rohit Sharma would be proud. Probably.",
    theme: { primary: "#a1887f", text: "#3e2723" },
    storyDescription: [
      "It was 3 AM in Austin. Om found a food truck that only accepted bartering. We traded a used frisbee and gummy worms for six cilantro tacos.",
      "The next morning we missed our flight. Om says it was worth it. Our stomachs disagreed."
    ]
  },
  {
    id: "shreedarshan",
    name: "Shreedarshan Nemane",
    firstName: "Shreedarshan",
    nickname: "Caveman",
    image: "/avatars/shree_nemane.jpg",
    pfpImage: "/pfp/shree_nemane.PNG",
    vibeLine: "Committed to embracing both his 'Shree' and 'Darshan' personalities.",
    shortDescription: "Exhibits a dual personality, being both determined and a wild unleashed ape.",
    traits: ["Split personality (Shree/Darshan)", "Trustworthy", "Loves wild shit"],
    insideJoke: "Never knowing if you're talking to Shree or Darshan today.",
    hiddenNotes: ["Literally an unleashed ape.", "Surprisingly trustworthy."],
    longDescription: "Guy with two usernames combined (Shree+Darshan) stands by it, as it shows the split personality disorder he has. On one hand you have Shree who's determined, hardworking and helpful and on the other you have Darshan who's an absolute unleashed ape that enjoys wild shit! Shree as we call him is a person who you can trust with all your heart.",
    signatureLines: ["OOGA BOOGA!", "Don't worry, I've got this handled.", "There is a mountain here !!!"],
    coreMemories: [{ title: "The Ape Mode Activation", description: "Went full 'Darshan' mode during a serious conversation." }],
    role: "The Dual-Natured Guardian",
    chaosIndex: { "Trustworthiness": 10, "Ape Energy": 10, "Helpfulness": 9 },
    gallery: [],
    finalNote: "Keep balancing the chaos and the care, Caveman.",
    theme: { primary: "#9c27b0", text: "#f3e5f5" },
    storyDescription: [
      "It was 3 AM in Austin. Shreedarshan found a food truck that only accepted bartering. We traded a used frisbee and gummy worms for six cilantro tacos.",
      "The next morning we missed our flight. Shreedarshan says it was worth it. Our stomachs disagreed."
    ]
  }
];
