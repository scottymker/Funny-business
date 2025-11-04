export const scenarios = [
  // Early Floors (50-40) - Easy Mode
  {
    id: "weather_opener",
    floorRange: [40, 50],
    character: "stranger",
    characterMood: "neutral",
    difficulty: 1,
    dialogue: "Crazy weather we're having, huh?",
    choices: [
      {
        id: "a",
        text: "Yeah, totally!",
        outcome: "safe",
        nextDialogue: "*Nods and looks at phone*",
        floorProgress: 1,
        timeAdded: 0,
        charismaChange: -5,
        moodChange: "neutral"
      },
      {
        id: "b",
        text: "I don't believe in weather.",
        outcome: "bad",
        nextDialogue: "...I'm sorry, what?",
        floorProgress: 0,
        timeAdded: 10,
        charismaChange: -20,
        moodChange: "confused",
        specialEvent: "awkward_silence"
      },
      {
        id: "c",
        text: "Actually, meteorology is fascinating...",
        outcome: "terrible",
        nextDialogue: "*Visibly regrets speaking*",
        floorProgress: -1,
        timeAdded: 15,
        charismaChange: -15,
        moodChange: "trapped",
        specialEvent: "monologue_trap"
      },
      {
        id: "d",
        text: "*Nod knowingly, say nothing*",
        outcome: "smooth",
        nextDialogue: "*Comfortable silence*",
        floorProgress: 2,
        timeAdded: 0,
        charismaChange: 10,
        moodChange: "pleased",
        silent: true
      }
    ]
  },
  {
    id: "button_presser",
    floorRange: [40, 50],
    character: "stranger",
    characterMood: "neutral",
    difficulty: 1,
    dialogue: "What floor?",
    choices: [
      {
        id: "a",
        text: "Lobby, thanks!",
        outcome: "smooth",
        nextDialogue: "*Presses button*",
        floorProgress: 2,
        timeAdded: 0,
        charismaChange: 5,
        moodChange: "pleased"
      },
      {
        id: "b",
        text: "All of them.",
        outcome: "terrible",
        nextDialogue: "Are you serious?",
        floorProgress: -2,
        timeAdded: 20,
        charismaChange: -30,
        moodChange: "angry",
        specialEvent: "awkward_silence"
      },
      {
        id: "c",
        text: "The ground floor. You know, where the ground is.",
        outcome: "bad",
        nextDialogue: "*Stares blankly*",
        floorProgress: 0,
        timeAdded: 5,
        charismaChange: -10,
        moodChange: "confused"
      },
      {
        id: "d",
        text: "*Point at lobby button*",
        outcome: "smooth",
        nextDialogue: "*Nods and presses*",
        floorProgress: 2,
        timeAdded: 0,
        charismaChange: 10,
        moodChange: "pleased",
        silent: true
      }
    ]
  },
  {
    id: "the_cough",
    floorRange: [40, 50],
    character: "stranger",
    characterMood: "neutral",
    difficulty: 1,
    dialogue: "*Coughs*",
    choices: [
      {
        id: "a",
        text: "Bless you!",
        outcome: "bad",
        nextDialogue: "That was a cough, not a sneeze...",
        floorProgress: 0,
        timeAdded: 5,
        charismaChange: -10,
        moodChange: "confused"
      },
      {
        id: "b",
        text: "*Move to corner of elevator*",
        outcome: "bad",
        nextDialogue: "*Notices and looks offended*",
        floorProgress: 1,
        timeAdded: 10,
        charismaChange: -15,
        moodChange: "offended",
        specialEvent: "awkward_silence"
      },
      {
        id: "c",
        text: "You okay?",
        outcome: "safe",
        nextDialogue: "Yeah, just dry throat.",
        floorProgress: 1,
        timeAdded: 0,
        charismaChange: 5,
        moodChange: "neutral"
      },
      {
        id: "d",
        text: "*Ignore politely*",
        outcome: "smooth",
        nextDialogue: "*Clears throat quietly*",
        floorProgress: 2,
        timeAdded: 0,
        charismaChange: 10,
        moodChange: "pleased",
        silent: true
      }
    ]
  },
  {
    id: "compliment_shoes",
    floorRange: [35, 45],
    character: "stranger",
    characterMood: "friendly",
    difficulty: 1,
    dialogue: "Nice shoes!",
    choices: [
      {
        id: "a",
        text: "Thanks! They're new!",
        outcome: "smooth",
        nextDialogue: "They look great!",
        floorProgress: 2,
        timeAdded: 0,
        charismaChange: 10,
        moodChange: "pleased"
      },
      {
        id: "b",
        text: "Thanks! Want to know where I got them? There's this store...",
        outcome: "bad",
        nextDialogue: "*Regrets asking*",
        floorProgress: -1,
        timeAdded: 15,
        charismaChange: -15,
        moodChange: "trapped",
        specialEvent: "monologue_trap"
      },
      {
        id: "c",
        text: "These old things?",
        outcome: "safe",
        nextDialogue: "*Smiles politely*",
        floorProgress: 1,
        timeAdded: 0,
        charismaChange: 0,
        moodChange: "neutral"
      },
      {
        id: "d",
        text: "*Smile and nod*",
        outcome: "smooth",
        nextDialogue: "*Friendly silence*",
        floorProgress: 2,
        timeAdded: 0,
        charismaChange: 10,
        moodChange: "pleased",
        silent: true
      }
    ]
  },
  // Mid Floors (25-39) - Medium Difficulty
  {
    id: "chatty_karen_weekend",
    floorRange: [25, 39],
    character: "chattykaren",
    characterMood: "enthusiastic",
    difficulty: 2,
    dialogue: "Oh my gosh, you will NOT believe what happened this weekend!",
    choices: [
      {
        id: "a",
        text: "Oh really? What happened?",
        outcome: "terrible",
        nextDialogue: "*Launches into 5-minute story*",
        floorProgress: -2,
        timeAdded: 20,
        charismaChange: -20,
        moodChange: "excited",
        specialEvent: "monologue_trap"
      },
      {
        id: "b",
        text: "That's wild!",
        outcome: "safe",
        nextDialogue: "Right?! Anyway...",
        floorProgress: 1,
        timeAdded: 5,
        charismaChange: 0,
        moodChange: "satisfied"
      },
      {
        id: "c",
        text: "*Look at phone intensely*",
        outcome: "smooth",
        nextDialogue: "*Takes the hint*",
        floorProgress: 2,
        timeAdded: 0,
        charismaChange: 5,
        moodChange: "slightly_offended",
        silent: true
      },
      {
        id: "d",
        text: "I can definitely believe it.",
        outcome: "bad",
        nextDialogue: "Wait, what? You don't even know what happened!",
        floorProgress: 0,
        timeAdded: 10,
        charismaChange: -10,
        moodChange: "confused",
        specialEvent: "awkward_silence"
      }
    ]
  },
  {
    id: "work_question",
    floorRange: [25, 39],
    character: "stranger",
    characterMood: "curious",
    difficulty: 2,
    dialogue: "So, what do you do?",
    choices: [
      {
        id: "a",
        text: "I work in... *vague hand gesture*... stuff.",
        outcome: "smooth",
        nextDialogue: "Ah, cool.",
        floorProgress: 2,
        timeAdded: 0,
        charismaChange: 10,
        moodChange: "amused",
        jobQuestionAsked: true
      },
      {
        id: "b",
        text: "*Launches into detailed explanation of your job*",
        outcome: "terrible",
        nextDialogue: "*Eyes glaze over*",
        floorProgress: -2,
        timeAdded: 20,
        charismaChange: -20,
        moodChange: "bored",
        specialEvent: "monologue_trap",
        jobQuestionAsked: true
      },
      {
        id: "c",
        text: "Oh, you know, the usual.",
        outcome: "safe",
        nextDialogue: "Nice.",
        floorProgress: 1,
        timeAdded: 0,
        charismaChange: 0,
        moodChange: "neutral",
        jobQuestionAsked: true
      },
      {
        id: "d",
        text: "*Pretend not to hear*",
        outcome: "smooth",
        nextDialogue: "*Doesn't repeat the question*",
        floorProgress: 2,
        timeAdded: 0,
        charismaChange: 10,
        moodChange: "neutral",
        silent: true
      }
    ]
  },
  {
    id: "delivery_help",
    floorRange: [25, 39],
    character: "deliveryguy",
    characterMood: "stressed",
    difficulty: 2,
    dialogue: "Could you hold this for a sec?",
    choices: [
      {
        id: "a",
        text: "Sure!",
        outcome: "safe",
        nextDialogue: "Thanks! *Juggles 10 other boxes*",
        floorProgress: 1,
        timeAdded: 5,
        charismaChange: 5,
        moodChange: "grateful"
      },
      {
        id: "b",
        text: "I would, but my hands are... *shows empty hands*... very busy.",
        outcome: "bad",
        nextDialogue: "*Stares at your empty hands*",
        floorProgress: 0,
        timeAdded: 10,
        charismaChange: -15,
        moodChange: "annoyed",
        specialEvent: "awkward_silence"
      },
      {
        id: "c",
        text: "*Take box and immediately drop it*",
        outcome: "terrible",
        nextDialogue: "DUDE!",
        floorProgress: -1,
        timeAdded: 20,
        charismaChange: -30,
        moodChange: "angry",
        specialEvent: "awkward_silence"
      },
      {
        id: "d",
        text: "*Hold the door open button instead*",
        outcome: "smooth",
        nextDialogue: "Even better, thanks!",
        floorProgress: 2,
        timeAdded: 0,
        charismaChange: 15,
        moodChange: "grateful"
      }
    ]
  },
  {
    id: "pet_photos",
    floorRange: [25, 35],
    character: "stranger",
    characterMood: "excited",
    difficulty: 2,
    dialogue: "Want to see pictures of my cat?",
    choices: [
      {
        id: "a",
        text: "Sure!",
        outcome: "safe",
        nextDialogue: "*Shows 2 photos* This is Mr. Whiskers!",
        floorProgress: 1,
        timeAdded: 5,
        charismaChange: 5,
        moodChange: "happy"
      },
      {
        id: "b",
        text: "I'm allergic.",
        outcome: "bad",
        nextDialogue: "...to photos?",
        floorProgress: 0,
        timeAdded: 10,
        charismaChange: -15,
        moodChange: "confused",
        specialEvent: "awkward_silence"
      },
      {
        id: "c",
        text: "YES! *Pull out your own phone* Let me show you MY cat first!",
        outcome: "terrible",
        nextDialogue: "*Trapped in cat photo exchange*",
        floorProgress: -2,
        timeAdded: 25,
        charismaChange: -10,
        moodChange: "trapped",
        specialEvent: "monologue_trap"
      },
      {
        id: "d",
        text: "I'm more of a dog person, but sure.",
        outcome: "safe",
        nextDialogue: "That's fair. *Shows one photo*",
        floorProgress: 1,
        timeAdded: 3,
        charismaChange: 0,
        moodChange: "neutral"
      }
    ]
  },
  // Lower Floors (10-24) - Hard Mode
  {
    id: "boss_encounter",
    floorRange: [15, 24],
    character: "boss",
    characterMood: "professional",
    difficulty: 3,
    dialogue: "Oh hey! How's that project coming along?",
    choices: [
      {
        id: "a",
        text: "Great! Right on schedule!",
        outcome: "smooth",
        nextDialogue: "Excellent. Keep it up.",
        floorProgress: 2,
        timeAdded: 0,
        charismaChange: 15,
        moodChange: "pleased",
        bossEncountered: true,
        bossScore: "perfect"
      },
      {
        id: "b",
        text: "What project?",
        outcome: "terrible",
        nextDialogue: "We need to talk. My office, now.",
        floorProgress: -3,
        timeAdded: 30,
        charismaChange: -40,
        moodChange: "angry",
        specialEvent: "emergency_stop",
        bossEncountered: true
      },
      {
        id: "c",
        text: "It's coming along! A few challenges but making progress.",
        outcome: "safe",
        nextDialogue: "Good to hear. Let me know if you need anything.",
        floorProgress: 1,
        timeAdded: 5,
        charismaChange: 5,
        moodChange: "neutral",
        bossEncountered: true
      },
      {
        id: "d",
        text: "*Nervous laugh* You know how it is!",
        outcome: "bad",
        nextDialogue: "*Concerned look* Do you need help?",
        floorProgress: 0,
        timeAdded: 15,
        charismaChange: -10,
        moodChange: "concerned",
        bossEncountered: true
      }
    ]
  },
  {
    id: "mlm_pitch",
    floorRange: [10, 24],
    character: "stranger",
    characterMood: "enthusiastic",
    difficulty: 3,
    dialogue: "Have you heard about this AMAZING business opportunity?",
    choices: [
      {
        id: "a",
        text: "No thanks, I'm good.",
        outcome: "smooth",
        nextDialogue: "*Looks disappointed but backs off*",
        floorProgress: 2,
        timeAdded: 0,
        charismaChange: 10,
        moodChange: "disappointed",
        mlmEncountered: true,
        mlmSurvived: true
      },
      {
        id: "b",
        text: "Tell me more!",
        outcome: "terrible",
        nextDialogue: "*Launches into 10-minute crypto/MLM pitch*",
        floorProgress: -3,
        timeAdded: 40,
        charismaChange: -30,
        moodChange: "excited",
        specialEvent: "monologue_trap",
        mlmEncountered: true,
        mlmSurvived: true
      },
      {
        id: "c",
        text: "Is it crypto?",
        outcome: "bad",
        nextDialogue: "How did you know?! So you're interested?",
        floorProgress: -1,
        timeAdded: 20,
        charismaChange: -15,
        moodChange: "excited",
        mlmEncountered: true,
        mlmSurvived: true
      },
      {
        id: "d",
        text: "*Pull out phone and take fake call*",
        outcome: "smooth",
        nextDialogue: "*Waits awkwardly in silence*",
        floorProgress: 3,
        timeAdded: 0,
        charismaChange: 15,
        moodChange: "disappointed",
        mlmEncountered: true,
        mlmSurvived: true,
        silent: true
      }
    ]
  },
  {
    id: "crying_person",
    floorRange: [10, 24],
    character: "cryingperson",
    characterMood: "sad",
    difficulty: 3,
    dialogue: "*Sobbing quietly*",
    choices: [
      {
        id: "a",
        text: "Are you okay?",
        outcome: "terrible",
        nextDialogue: "*Breaks down completely*",
        floorProgress: -2,
        timeAdded: 30,
        charismaChange: -20,
        moodChange: "devastated",
        specialEvent: "emergency_stop"
      },
      {
        id: "b",
        text: "*Offer tissue*",
        outcome: "safe",
        nextDialogue: "*Takes tissue* Thank you.",
        floorProgress: 1,
        timeAdded: 5,
        charismaChange: 10,
        moodChange: "grateful"
      },
      {
        id: "c",
        text: "Mondays, am I right?",
        outcome: "bad",
        nextDialogue: "*Sobs harder*",
        floorProgress: 0,
        timeAdded: 15,
        charismaChange: -25,
        moodChange: "worse",
        specialEvent: "awkward_silence"
      },
      {
        id: "d",
        text: "*Stare at floor numbers intensely*",
        outcome: "smooth",
        nextDialogue: "*Continues crying quietly*",
        floorProgress: 2,
        timeAdded: 0,
        charismaChange: 5,
        moodChange: "sad",
        silent: true
      }
    ]
  },
  {
    id: "crowded_elevator",
    floorRange: [15, 25],
    character: "stranger",
    characterMood: "uncomfortable",
    difficulty: 2,
    dialogue: "*Someone's backpack is in your face*",
    choices: [
      {
        id: "a",
        text: "Excuse me, could you move your bag?",
        outcome: "safe",
        nextDialogue: "Oh sorry! *Moves bag*",
        floorProgress: 1,
        timeAdded: 0,
        charismaChange: 5,
        moodChange: "apologetic"
      },
      {
        id: "b",
        text: "*Aggressively push bag away*",
        outcome: "bad",
        nextDialogue: "Hey! Watch it!",
        floorProgress: 0,
        timeAdded: 15,
        charismaChange: -20,
        moodChange: "angry",
        specialEvent: "awkward_silence"
      },
      {
        id: "c",
        text: "*Suffer in silence*",
        outcome: "smooth",
        nextDialogue: "*Eventually they notice and move it*",
        floorProgress: 2,
        timeAdded: 5,
        charismaChange: 10,
        moodChange: "apologetic",
        silent: true
      },
      {
        id: "d",
        text: "Nice bag! Where'd you get it?",
        outcome: "bad",
        nextDialogue: "*Can't hear you, bag still in face*",
        floorProgress: 0,
        timeAdded: 10,
        charismaChange: -10,
        moodChange: "confused",
        specialEvent: "awkward_silence"
      }
    ]
  },
  // Final Floors (1-9) - Nightmare Mode
  {
    id: "elevator_stutter",
    floorRange: [5, 9],
    character: "stranger",
    characterMood: "nervous",
    difficulty: 4,
    dialogue: "*Elevator suddenly jerks and makes weird noise*",
    choices: [
      {
        id: "a",
        text: "Did you feel that?!",
        outcome: "bad",
        nextDialogue: "*Starts panicking*",
        floorProgress: 0,
        timeAdded: 20,
        charismaChange: -15,
        moodChange: "panicked",
        specialEvent: "emergency_stop"
      },
      {
        id: "b",
        text: "I'm sure it's fine.",
        outcome: "safe",
        nextDialogue: "*Nervously nods*",
        floorProgress: 1,
        timeAdded: 5,
        charismaChange: 5,
        moodChange: "slightly_calmer"
      },
      {
        id: "c",
        text: "We're all going to die.",
        outcome: "terrible",
        nextDialogue: "*FULL PANIC MODE*",
        floorProgress: -2,
        timeAdded: 40,
        charismaChange: -40,
        moodChange: "terrified",
        specialEvent: "emergency_stop"
      },
      {
        id: "d",
        text: "*Calm demeanor, don't react*",
        outcome: "smooth",
        nextDialogue: "*Sees your calm, relaxes*",
        floorProgress: 2,
        timeAdded: 0,
        charismaChange: 15,
        moodChange: "calm",
        silent: true
      }
    ]
  },
  {
    id: "boss_feedback",
    floorRange: [1, 9],
    character: "boss",
    characterMood: "serious",
    difficulty: 4,
    dialogue: "Actually, I've been meaning to give you some feedback.",
    choices: [
      {
        id: "a",
        text: "Can this wait until we're at the office?",
        outcome: "smooth",
        nextDialogue: "Sure, stop by after lunch.",
        floorProgress: 3,
        timeAdded: 0,
        charismaChange: 15,
        moodChange: "professional",
        bossEncountered: true,
        bossScore: "perfect"
      },
      {
        id: "b",
        text: "Oh no, what did I do?",
        outcome: "bad",
        nextDialogue: "*Launches into critique*",
        floorProgress: -1,
        timeAdded: 25,
        charismaChange: -15,
        moodChange: "concerned",
        bossEncountered: true
      },
      {
        id: "c",
        text: "I have feedback for you too!",
        outcome: "terrible",
        nextDialogue: "*Extremely awkward silence*",
        floorProgress: -2,
        timeAdded: 35,
        charismaChange: -35,
        moodChange: "offended",
        specialEvent: "awkward_silence",
        bossEncountered: true,
        forcedExit: true
      },
      {
        id: "d",
        text: "Of course, I'm all ears.",
        outcome: "safe",
        nextDialogue: "*Brief but professional feedback*",
        floorProgress: 1,
        timeAdded: 10,
        charismaChange: 5,
        moodChange: "professional",
        bossEncountered: true
      }
    ]
  },
  {
    id: "final_test",
    floorRange: [1, 3],
    character: "chattykaren",
    characterMood: "chatty",
    difficulty: 4,
    dialogue: "Oh perfect timing! I need to tell you about my sister's wedding, my cat's surgery, AND this new diet I'm on!",
    choices: [
      {
        id: "a",
        text: "This is my floor! *It's not*",
        outcome: "smooth",
        nextDialogue: "*Looks confused as you escape*",
        floorProgress: 3,
        timeAdded: 0,
        charismaChange: 20,
        moodChange: "confused",
        forcedExit: true
      },
      {
        id: "b",
        text: "Tell me EVERYTHING.",
        outcome: "terrible",
        nextDialogue: "*40-minute monologue begins*",
        floorProgress: -3,
        timeAdded: 60,
        charismaChange: -50,
        moodChange: "ecstatic",
        specialEvent: "monologue_trap"
      },
      {
        id: "c",
        text: "Just the highlights?",
        outcome: "bad",
        nextDialogue: "*Proceeds to tell you 'highlights' which is still 20 minutes*",
        floorProgress: -1,
        timeAdded: 30,
        charismaChange: -20,
        moodChange: "excited"
      },
      {
        id: "d",
        text: "*Emergency phone call* Sorry, gotta take this!",
        outcome: "smooth",
        nextDialogue: "*Disappointed but silent*",
        floorProgress: 3,
        timeAdded: 0,
        charismaChange: 15,
        moodChange: "disappointed",
        silent: true
      }
    ]
  }
];
