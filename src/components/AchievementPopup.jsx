import { useEffect } from 'react';
import './AchievementPopup.css';

function AchievementPopup({ achievement, index, onDismiss }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <motion.div
      className="achievement-popup"
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      transition={{ type: 'spring', damping: 20 }}
      style={{ top: `${20 + index * 100}px` }}
    >
      <div className="achievement-icon">{achievement.icon}</div>
      <div className="achievement-content">
        <div className="achievement-title">Achievement Unlocked!</div>
        <div className="achievement-name">{achievement.name}</div>
        <div className="achievement-description">{achievement.description}</div>
      </div>
    </motion.div>
  );
}

export default AchievementPopup;
