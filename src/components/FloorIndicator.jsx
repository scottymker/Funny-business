import { motion } from 'framer-motion';
import './FloorIndicator.css';

function FloorIndicator({ currentFloor }) {
  return (
    <div className="floor-indicator">
      <div className="floor-label">FLOOR</div>
      <motion.div
        className="floor-number"
        key={currentFloor}
        initial={{ scale: 1.2, color: '#ffd700' }}
        animate={{ scale: 1, color: '#ff6b35' }}
        transition={{ duration: 0.3 }}
      >
        {currentFloor === 0 ? 'L' : currentFloor}
      </motion.div>
      <div className="floor-progress">
        <div
          className="floor-progress-bar"
          style={{ width: `${((50 - currentFloor) / 50) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default FloorIndicator;
