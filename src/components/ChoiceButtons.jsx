import { motion } from 'framer-motion';
import './ChoiceButtons.css';

function ChoiceButtons({ choices, onChoiceSelect, disabled }) {
  const getOutcomeClass = (outcome) => {
    switch (outcome) {
      case 'smooth': return 'outcome-smooth';
      case 'safe': return 'outcome-safe';
      case 'bad': return 'outcome-bad';
      case 'terrible': return 'outcome-terrible';
      default: return '';
    }
  };

  return (
    <div className="choice-buttons">
      {choices.map((choice, index) => (
        <motion.button
          key={choice.id}
          className={`choice-button ${getOutcomeClass(choice.outcome)}`}
          onClick={() => onChoiceSelect(choice)}
          disabled={disabled}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
        >
          <span className="choice-number">{index + 1}</span>
          <span className="choice-text">{choice.text}</span>
        </motion.button>
      ))}
    </div>
  );
}

export default ChoiceButtons;
