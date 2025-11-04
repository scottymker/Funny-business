import { formatTime } from '../utils/gameLogic';
import './Timer.css';

function Timer({ elapsedTime, stuckTime }) {
  const totalTime = elapsedTime + stuckTime;
  const isWarning = stuckTime > 300; // 5 minutes
  const isDanger = stuckTime > 480; // 8 minutes

  return (
    <div className="timer">
      <div className="timer-item">
        <span className="timer-label">Time:</span>
        <span className="timer-value">{formatTime(totalTime)}</span>
      </div>
      {stuckTime > 0 && (
        <div className={`timer-item penalty ${isWarning ? 'warning' : ''} ${isDanger ? 'danger' : ''}`}>
          <span className="timer-label">Stuck:</span>
          <span className="timer-value">+{formatTime(stuckTime)}</span>
        </div>
      )}
    </div>
  );
}

export default Timer;
