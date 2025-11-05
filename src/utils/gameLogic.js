import { scenarios } from '../data/scenarios';
import { characters } from '../data/characters';
import { achievements } from '../data/achievements';

export const initialGameState = {
  currentFloor: 50,
  targetFloor: 0,
  elapsedTime: 0,
  stuckTime: 0,
  charismaPoints: 100,
  currentCharacter: null,
  currentScenario: null,
  scenarioHistory: [],
  achievements: [],
  difficulty: 'medium',
  silentFloors: 0,
  floorsCompleted: 0,
  specialFlags: {
    jobQuestionAsked: false,
    bossEncountered: false,
    bossScore: null,
    mlmEncountered: false,
    mlmSurvived: false,
    forcedExit: false,
    awkwardSilences: 0
  },
  gameWon: false,
  gameLost: false,
  totalTime: 0
};

export function selectCharacter() {
  // Random chance to have someone in elevator
  if (Math.random() > 0.7) {
    return null; // Empty elevator
  }

  const availableCharacters = Object.entries(characters).filter(([_key, char]) => {
    return Math.random() < char.triggerChance;
  });

  if (availableCharacters.length === 0) {
    return null;
  }

  const [characterKey, characterData] = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
  return { type: characterKey, ...characterData };
}

export function selectScenario(gameState) {
  const { currentFloor, scenarioHistory, currentCharacter } = gameState;

  if (!currentCharacter) {
    return null; // No scenario if no character
  }

  // Filter scenarios by character type and floor range
  const availableScenarios = scenarios.filter(s => {
    // Check if scenario matches current character
    if (s.character !== currentCharacter.type) {
      return false;
    }

    // Check if floor is in range
    const [minFloor, maxFloor] = s.floorRange;
    if (currentFloor < minFloor || currentFloor > maxFloor) {
      return false;
    }

    // Don't repeat recent scenarios
    if (scenarioHistory.slice(-5).includes(s.id)) {
      return false;
    }

    return true;
  });

  if (availableScenarios.length === 0) {
    return null;
  }

  // Select random scenario from available
  return availableScenarios[Math.floor(Math.random() * availableScenarios.length)];
}

export function processChoice(choice, gameState) {
  const newState = { ...gameState };

  // Update floor (can't go above starting floor or below 0)
  newState.currentFloor = Math.max(0, Math.min(50, newState.currentFloor - choice.floorProgress));

  // Add penalty time
  newState.stuckTime += choice.timeAdded;

  // Update charisma
  newState.charismaPoints += choice.charismaChange;

  // Track floors completed
  if (choice.floorProgress > 0) {
    newState.floorsCompleted += choice.floorProgress;
  }

  // Update special flags from choice
  if (choice.jobQuestionAsked !== undefined) {
    newState.specialFlags.jobQuestionAsked = choice.jobQuestionAsked;
  }
  if (choice.bossEncountered !== undefined) {
    newState.specialFlags.bossEncountered = choice.bossEncountered;
  }
  if (choice.bossScore !== undefined) {
    newState.specialFlags.bossScore = choice.bossScore;
  }
  if (choice.mlmEncountered !== undefined) {
    newState.specialFlags.mlmEncountered = choice.mlmEncountered;
  }
  if (choice.mlmSurvived !== undefined) {
    newState.specialFlags.mlmSurvived = choice.mlmSurvived;
  }
  if (choice.forcedExit !== undefined) {
    newState.specialFlags.forcedExit = choice.forcedExit;
  }

  // Track special events
  if (choice.specialEvent === 'awkward_silence') {
    newState.specialFlags.awkwardSilences += 1;
  }

  // Track silent responses
  if (choice.silent) {
    newState.silentFloors++;
  } else {
    newState.silentFloors = 0;
  }

  // Add scenario to history
  if (gameState.currentScenario) {
    newState.scenarioHistory.push(gameState.currentScenario.id);
  }

  // Check for game over conditions
  if (newState.stuckTime >= 600) { // 10 minutes stuck
    newState.gameLost = true;
  }

  if (newState.charismaPoints <= 0) {
    newState.gameLost = true;
  }

  if (newState.currentFloor <= 0) {
    newState.gameWon = true;
  }

  return newState;
}

export function checkAchievements(gameState) {
  const newAchievements = [];

  // Merge special flags into gameState for achievement checking
  const stateForChecking = {
    ...gameState,
    ...gameState.specialFlags
  };

  Object.values(achievements).forEach(achievement => {
    if (!gameState.achievements.includes(achievement.id)) {
      try {
        if (achievement.condition(stateForChecking)) {
          newAchievements.push(achievement);
        }
      } catch (error) {
        // Silently fail if condition check has an error
        console.warn(`Achievement ${achievement.id} condition failed:`, error);
      }
    }
  });

  return newAchievements;
}

export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
