import { motion, AnimatePresence } from 'framer-motion';
import './ElevatorDisplay.css';

function ElevatorDisplay({ character, currentFloor }) {
  return (
    <div className="elevator-display">
      <div className="elevator-interior">
        <div className="elevator-walls">
          <div className="elevator-panel">
            <div className="panel-buttons">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`panel-button ${Math.floor(currentFloor / 5) === i ? 'active' : ''}`}
                >
                  {i === 0 ? 'L' : (10 - i) * 5}
                </div>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {character && (
            <motion.div
              className="character"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="character-emoji">{character.emoji}</div>
              <div className="character-name">{character.name}</div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="player">
          <div className="player-emoji">🧍</div>
          <div className="player-label">You</div>
        </div>
      </div>
    </div>
  );
}

export default ElevatorDisplay;
