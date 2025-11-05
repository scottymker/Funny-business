import { formatTime } from '../utils/gameLogic';
import { achievements } from '../data/achievements';
import './GameOver.css';

function GameOver({ gameState, onRestart }) {
  const isWin = gameState.gameWon;
  const totalTime = gameState.totalTime;

  const getPerformanceRating = () => {
    if (!isWin) return null;
    if (totalTime < 120) return { text: 'Speed Demon!', emoji: '⚡' };
    if (totalTime < 180) return { text: 'Smooth Operator', emoji: '😎' };
    if (totalTime < 300) return { text: 'Not Bad!', emoji: '👍' };
    if (totalTime < 480) return { text: 'Made It Out', emoji: '😅' };
    return { text: 'Barely Survived', emoji: '😰' };
  };

  const getLossReason = () => {
    if (gameState.stuckTime >= 600) {
      return { text: 'Stuck for 10+ minutes', emoji: '😱' };
    }
    if (gameState.charismaPoints <= 0) {
      return { text: 'Complete social meltdown', emoji: '😬' };
    }
    return { text: 'Unknown reason', emoji: '🤔' };
  };

  const rating = isWin ? getPerformanceRating() : null;
  const lossReason = !isWin ? getLossReason() : null;

  return (
    <motion.div
      className="game-over"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`game-over-content ${isWin ? 'win' : 'lose'}`}>
        <div className="game-over-emoji">
          {isWin ? '🎉' : lossReason.emoji}
        </div>

        <h1 className="game-over-title">
          {isWin ? 'You Made It!' : 'Game Over'}
        </h1>

        {isWin && rating && (
          <div className="performance-rating">
            <span className="rating-emoji">{rating.emoji}</span>
            <span className="rating-text">{rating.text}</span>
          </div>
        )}

        {!isWin && lossReason && (
          <div className="loss-reason">
            <p>{lossReason.text}</p>
          </div>
        )}

        <div className="game-stats">
          <div className="stat-row">
            <span className="stat-label">Total Time:</span>
            <span className="stat-value">{formatTime(totalTime)}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Floors Traveled:</span>
            <span className="stat-value">{50 - gameState.currentFloor}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Final Charisma:</span>
            <span className="stat-value">{gameState.charismaPoints}</span>
          </div>
          {gameState.stuckTime > 0 && (
            <div className="stat-row penalty">
              <span className="stat-label">Stuck Time:</span>
              <span className="stat-value">{formatTime(gameState.stuckTime)}</span>
            </div>
          )}
        </div>

        {gameState.achievements.length > 0 && (
          <div className="achievements-earned">
            <h3>Achievements Unlocked:</h3>
            <div className="achievement-list">
              {gameState.achievements.map(achievementId => {
                // Find achievement data
                const achievement = Object.values(achievements)
                  .find(a => a.id === achievementId);
                return achievement ? (
                  <div key={achievementId} className="achievement-badge">
                    <span>{achievement.icon}</span>
                    <span>{achievement.name}</span>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        )}

        <button className="restart-button" onClick={onRestart}>
          {isWin ? 'Play Again' : 'Try Again'}
        </button>
      </div>
    </motion.div>
  );
}

export default GameOver;
