import { motion, AnimatePresence } from 'framer-motion';
import './ConversationBox.css';

function ConversationBox({ scenario, character, consequenceText, showingConsequence }) {
  const displayText = showingConsequence ? consequenceText : scenario?.dialogue;
  const speakerName = showingConsequence ? character?.name : character?.name;

  if (!displayText) {
    return (
      <div className="conversation-box empty">
        <p className="silence-text">*Comfortable silence*</p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={displayText}
        className={`conversation-box ${showingConsequence ? 'consequence' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {speakerName && (
          <div className="speaker-name">{speakerName}</div>
        )}
        <div className="dialogue-text">{displayText}</div>
        {showingConsequence && (
          <div className="consequence-indicator">
            <motion.div
              className="typing-dots"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span></span>
              <span></span>
              <span></span>
            </motion.div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default ConversationBox;
