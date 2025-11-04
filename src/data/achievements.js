export const achievements = {
  the_ghost: {
    id: "the_ghost",
    name: "The Ghost",
    description: "Complete 10 floors without speaking",
    icon: "👻",
    condition: (gameState) => gameState.silentFloors >= 10
  },
  smooth_operator: {
    id: "smooth_operator",
    name: "Smooth Operator",
    description: "Exit before anyone asks what you do",
    icon: "😎",
    condition: (gameState) => gameState.floorsCompleted >= 20 && !gameState.jobQuestionAsked
  },
  survivor: {
    id: "survivor",
    name: "Survivor",
    description: "Endure MLM/crypto pitch",
    icon: "💪",
    condition: (gameState) => gameState.mlmEncountered && gameState.mlmSurvived
  },
  why_did_i_say_that: {
    id: "why_did_i_say_that",
    name: "Why Did I Say That",
    description: "Make it so awkward THEY leave early",
    icon: "😬",
    condition: (gameState) => gameState.forcedExit
  },
  speed_runner: {
    id: "speed_runner",
    name: "Speed Runner",
    description: "Reach lobby in under 2 minutes",
    icon: "⚡",
    condition: (gameState) => gameState.gameWon && gameState.totalTime < 120
  },
  professional: {
    id: "professional",
    name: "Corporate Professional",
    description: "Navigate boss conversation flawlessly",
    icon: "💼",
    condition: (gameState) => gameState.bossEncountered && gameState.bossScore === "perfect"
  },
  small_talk_master: {
    id: "small_talk_master",
    name: "Small Talk Master",
    description: "Complete game without any awkward silences",
    icon: "🎯",
    condition: (gameState) => gameState.gameWon && gameState.awkwardSilences === 0
  }
};
