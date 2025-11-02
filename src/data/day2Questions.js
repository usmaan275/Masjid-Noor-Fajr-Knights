const day2Questions = [
  {
    question: "Whose corpse has been preserved as a sign for mankind?",
    options: ["A) Firawn", "B) Namrud", "C) Abu Jahl", "D) Abu Lahab"],
    answer: "Firawn",
    verse: "فَٱلۡيَوۡمَ نُنَجِّیكَ بِبَدَنِكَ لِتَكُونَ لِمَنۡ خَلۡفَكَ ءَایَةࣰ",
    translation:
      "Today We will preserve your corpse so that you may become an example for those who come after you. (10:92)",
    explanation:
      "Allah preserved Firawn’s body to remind us all that no matter how much power, money, and fame someone has, Allah is the One Who is in control. He deals with all criminals, and no one can escape His punishment.",
  },
  {
    question: "Which Prophet was sent to the nation of Thamud?",
    options: ["A) Prophet Hud \u0611", "B) Prophet Shuayb \u0611", "C) Prophet Salih \u0611", "D) Prophet Lut \u0611"],
    answer: "C) Prophet Salih \u0611",
    verse: "وَإِلَىٰ ثَمُودَ أَخَاهُمۡ صَـٰلِحࣰا",
    translation: "And to the people of Thamud We sent their brother Salih. (11:61)",
    explanation: "Allah sent Prophet Salih عليه السلام to the nation of Thamud.",
  },
  {
    question: "What did Prophet Yusuf tell his brothers to do with his shirt?",
    options: [
      "A) Rip it up",
      "B) Throw it in a well",
      "C) Put it on",
      "D) Throw it on his father’s face",
    ],
    answer: "D) Throw it on his father’s face",
    verse:
      "ٱذۡهَبُوا۟ بِقَمِیصِی هَـٰذَا فَأَلۡقُوهُ عَلَىٰ وَجۡهِ أَبِی یَأۡتِ بَصِیرࣰا",
    translation:
      "Go with this shirt of mine and cast it over my father’s face, then he will regain his sight. (12:92)",
    explanation:
      "Prophet Yaqub عليه السلام lost his eyesight from crying at the loss of his sons. So Allah gave Prophet Yusuf’s عليه السلام shirt the ability to restore his eyesight.",
  },
  {
    question: "How many gates does Jahannam (Hell) have?",
    options: ["A) 5", "B) 6", "C) 7", "D) 8"],
    answer: "C) 7",
    verse:
      "وَإِنَّ جَهَنَّمَ لَمَوۡعِدُهُمۡ أَجۡمَعِینَ﴿ ٤٣ ﴾ لَهَا سَبۡعَةُ أَبۡوَ ٰ⁠بࣲ",
    translation: "Indeed, Hell is all of their destined place. It has seven gates. (15:43-44)",
    explanation:
      "Jannah has 8 gates, while Jahannam only has 7 gates.",
  },
  {
    question: "How many years did the Ashab-ul-Kahf (Companions of the Cave) sleep for?",
    options: ["A) 309", "B) 311", "C) 313", "D) 315"],
    answer: "A) 309",
    verse:
      "وَلَبِثُوا۟ فِی كَهۡفِهِمۡ ثَلَـٰثَ مِا۟ئَةࣲ سِنِینَ وَٱزۡدَادُوا۟ تِسۡعࣰا﴿٢٥﴾",
    translation:
      "They had remained in their cave for three hundred years plus nine. (18:25)",
    explanation: "They stayed in the cave for 309 years.",
  },
  {
    question: "Which ruler trapped Ya'juj and Ma'juj?",
    options: ["A) Dhul-Qarnayn", "B) Sulayman", "C) Dawud", "D) Namrud"],
    answer: "Dhul-Qarnayn",
    verse:
      "قَالُوا۟ یَـٰذَا ٱلۡقَرۡنَیۡنِ إِنَّ یَأۡجُوجَ وَمَأۡجُوجَ مُفۡسِدُونَ فِی ٱلۡأَرۡضِ فَهَلۡ نَجۡعَلُ لَكَ خَرۡجًا عَلَىٰۤ أَن تَجۡعَلَ بَیۡنَنَا وَبَیۡنَهُمۡ سَدࣰّا﴿٩٤﴾",
    translation:
      "They pleaded, “O Dhul-Qarnayn! Indeed, Ya'juj and Ma'juj are spreading corruption. Can we pay you to build a barrier between us and them?” (18:94)",
    explanation:
      "Dhul-Qarnayn built a barrier to contain Ya'juj and Ma'juj, keeping them hidden to this day.",
  },
  {
    question: "Who was the grandson of Prophet Ibrahim?",
    options: ["A) Prophet Ismail \u0611", "B) Prophet Ishaq \u0611", "C) Prophet Yaqub \u0611", "D) Prophet Yusuf \u0611"],
    answer: "C) Prophet Yaqub \u0611",
    verse: "وَوَهَبۡنَا لَهُۥ إِسۡحَـٰقَ وَیَعۡقُوبَ نَافِلَةࣰ",
    translation:
      "And We blessed Ibrahim with Ishaq ˹as a son˺ and, additionally, Yaqub ˹as a grandson˺. (21:72)",
    explanation:
      "Prophet Ibrahim عليه السلام had two sons who were Prophets—Prophet Ismail and Prophet Ishaq عليهما السلام. Prophet Ishaq’s son was Prophet Yaqub عليه السلام, and Prophet Yaqub’s son was Prophet Yusuf عليه السلام.",
  },
  {
    question: "Who was Prophet Musa’s brother?",
    options: ["A) Prophet Harun \u0611", "B) Prophet Yunus \u0611", "C) Prophet Yahya \u0611", "D) Prophet Yusuf \u0611"],
    answer: "A) Prophet Harun \u0611",
    verse: "ثُمَّ أَرۡسَلۡنَا مُوسَىٰ وَأَخَاهُ هَـٰرُونَ",
    translation: "Then We sent Musa and his brother Harun. (23:45)",
    explanation:
      "Allah sent Prophet Musa عليه السلام along with his brother Prophet Harun عليه السلام to Firawn and his people.",
  },
  {
    question: "Which Prophet had to help Ashab-ul-Aykah (the people of the forest)?",
    options: ["A) Prophet Shuayb \u0611", "B) Prophet Musa \u0611", "C) Prophet Nuh \u0611", "D) Prophet Salih \u0611"],
    answer: "A) Prophet Shuayb \u0611",
    verse:
      "كَذَّبَ أَصۡحَـٰبُ لۡـَٔیۡكَةِ ٱلۡمُرۡسَلِینَ﴿١٧٦﴾ إِذۡ قَالَ لَهُمۡ شُعَیۡبٌ أَلَا تَتَّقُونَ﴿١٧٧﴾",
    translation:
      "The residents of the Forest rejected the messengers when Shuayb said, “Will you not fear Allah?” (26:176-177)",
    explanation:
      "Prophet Shuayb عليه السلام warned the people of the forest to turn back to the worship of Allah.",
  },
  {
    question: "Which city did Prophet Musa flee to?",
    options: ["A) Makkah", "B) Madyan", "C) Jerusalem", "D) Tih"],
    answer: "Madyan",
    verse:
      "فَخَرَجَ مِنۡهَا خَاۤىِٕفࣰا یَتَرَقَّبُۖ قَالَ رَبِّ نَجِّنِی مِنَ ٱلۡقَوۡمِ ٱلظَّـٰلِمِینَ﴿٢١﴾ وَلَمَّا تَوَجَّهَ تِلۡقَاۤءَ مَدۡیَنَ",
    translation:
      "Musa left the city in fear and prayed, “My Lord! Save me from the wrongdoing people.” As he made his way towards Madyan ... (28:21-22)",
    explanation:
      "The chiefs of Firawn were looking for Prophet Musa عليه السلام to kill him, so he left Egypt and fled to an Arab city called Madyan.",
  },
];

export default day2Questions;
