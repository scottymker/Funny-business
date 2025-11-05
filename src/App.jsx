import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import {
  initialGameState,
  selectCharacter,
  selectScenario,
  processChoice,
  checkAchievements
} from './utils/gameLogic';
import ElevatorDisplay from './components/ElevatorDisplay';
import FloorIndicator from './components/FloorIndicator';
import ConversationBox from './components/ConversationBox';
import ChoiceButtons from './components/ChoiceButtons';
import Timer from './components/Timer';
import AchievementPopup from './components/AchievementPopup';
import GameOver from './components/GameOver';

function App() {
  const [gameState, setGameState] = useState(initialGameState);
  const [showingConsequence, setShowingConsequence] = useState(false);
  const [consequenceText, setConsequenceText] = useState('');
  const [newAchievements, setNewAchievements] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  // Timer effect
  useEffect(() => {
    if (!gameStarted || gameState.gameWon || gameState.gameLost) {
      return;
    }

    const interval = setInterval(() => {
      setGameState(prev => ({
        ...prev,
        elapsedTime: prev.elapsedTime + 1,
        totalTime: prev.totalTime + 1
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [gameStarted, gameState.gameWon, gameState.gameLost]);

  // Start next scenario
  const nextScenario = useCallback(() => {
    if (gameState.currentFloor <= 0) {
      setGameState(prev => ({ ...prev, gameWon: true }));
      return;
    }

    // Select new character
    const character = selectCharacter();

    if (!character) {
      // Empty elevator, just move down
      setGameState(prev => ({
        ...prev,
        currentCharacter: null,
        currentScenario: null,
        currentFloor: Math.max(0, prev.currentFloor - 1)
      }));

      // Auto-advance after brief pause
      setTimeout(() => {
        if (gameState.currentFloor > 1) {
          nextScenario();
        }
      }, 1000);
      return;
    }

    const scenario = selectScenario({ ...gameState, currentCharacter: character });

    if (!scenario) {
      // No valid scenario, move down
      setGameState(prev => ({
        ...prev,
        currentCharacter: character,
        currentScenario: null,
        currentFloor: Math.max(0, prev.currentFloor - 1)
      }));

      setTimeout(() => {
        if (gameState.currentFloor > 1) {
          nextScenario();
        }
      }, 1000);
      return;
    }

    setGameState(prev => ({
      ...prev,
      currentCharacter: character,
      currentScenario: scenario
    }));
  }, [gameState]);

  // Initialize game
  const startGame = useCallback(() => {
    setGameState(initialGameState);
    setGameStarted(true);
    setTimeout(() => {
      nextScenario();
    }, 500);
  }, [nextScenario]);

  // Handle choice selection
  const handleChoice = useCallback((choice) => {
    if (showingConsequence) return;

    setShowingConsequence(true);
    setConsequenceText(choice.nextDialogue);

    // Process choice after showing consequence
    setTimeout(() => {
      const newState = processChoice(choice, gameState);
      setGameState(newState);

      // Check achievements
      const unlockedAchievements = checkAchievements(newState);
      if (unlockedAchievements.length > 0) {
        setNewAchievements(unlockedAchievements);
        setGameState(prev => ({
          ...prev,
          achievements: [...prev.achievements, ...unlockedAchievements.map(a => a.id)]
        }));
      }

      setShowingConsequence(false);
      setConsequenceText('');

      // Move to next scenario if game not over
      if (!newState.gameWon && !newState.gameLost) {
        setTimeout(() => {
          nextScenario();
        }, 1500);
      }
    }, 2000);
  }, [gameState, showingConsequence, nextScenario]);

  // Reset game
  const resetGame = () => {
    setGameState(initialGameState);
    setGameStarted(false);
    setShowingConsequence(false);
    setConsequenceText('');
    setNewAchievements([]);
  };

  return (
    <div className="app">
      <div className="game-container">
        {!gameStarted ? (
          <motion.div
            className="start-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h1>🛗 Elevator Escape Room</h1>
            <p className="subtitle">Navigate awkward small talk to reach the lobby</p>
            <div className="instructions">
              <h3>How to Play:</h3>
              <ul>
                <li>Start on Floor 50, reach the Lobby (Floor 0)</li>
                <li>Make conversation choices to progress</li>
                <li>Good choices = faster descent</li>
                <li>Bad choices = stuck longer (or go UP!)</li>
                <li>Don't get stuck for 10+ minutes</li>
              </ul>
            </div>
            <button className="start-button" onClick={startGame}>
              Enter Elevator
            </button>
          </motion.div>
        ) : gameState.gameWon || gameState.gameLost ? (
          <GameOver
            gameState={gameState}
            onRestart={resetGame}
          />
        ) : (
          <>
            <div className="game-header">
              <FloorIndicator currentFloor={gameState.currentFloor} />
              <Timer
                elapsedTime={gameState.elapsedTime}
                stuckTime={gameState.stuckTime}
              />
            </div>

            <ElevatorDisplay
              character={gameState.currentCharacter}
              currentFloor={gameState.currentFloor}
            />

            <div className="game-content">
              <ConversationBox
                scenario={gameState.currentScenario}
                character={gameState.currentCharacter}
                consequenceText={consequenceText}
                showingConsequence={showingConsequence}
              />

              {gameState.currentScenario && !showingConsequence && (
                <ChoiceButtons
                  choices={gameState.currentScenario.choices}
                  onChoiceSelect={handleChoice}
                  disabled={showingConsequence}
                />
              )}
            </div>

            <div className="stats-bar">
              <div className="stat">
                <span className="stat-label">Charisma:</span>
                <span className={`stat-value ${gameState.charismaPoints < 30 ? 'low' : ''}`}>
                  {gameState.charismaPoints}
                </span>
              </div>
              <div className="stat">
                <span className="stat-label">Silent Streak:</span>
                <span className="stat-value">{gameState.silentFloors}</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Achievement Popups */}
      <AnimatePresence>
        {newAchievements.map((achievement, index) => (
          <AchievementPopup
            key={achievement.id}
            achievement={achievement}
            index={index}
            onDismiss={() => {
              setNewAchievements(prev => prev.filter(a => a.id !== achievement.id));
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default App;
