# 🛗 Elevator Small Talk Escape Room

A hilarious web-based escape room game where you navigate awkward elevator small talk to reach the lobby. Bad conversation choices make your ride longer, while smooth responses get you down faster!

![Elevator Escape Room](https://img.shields.io/badge/Status-MVP%20Complete-success)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)

## 🎮 Game Overview

- **Starting Point**: Floor 50
- **Goal**: Reach the lobby (Floor 0) as quickly as possible
- **Mechanic**: Choose your responses wisely in awkward elevator encounters
- **Penalty**: Bad choices add time, worse choices send you UP floors!
- **Win Condition**: Reach the lobby without a complete social meltdown
- **Lose Condition**: Get stuck for 10+ minutes or lose all your charisma points

## ✨ Features

### Current MVP (Phase 1)
- ✅ 15+ unique conversation scenarios
- ✅ 5 different character types (Stranger, Chatty Karen, Boss, Delivery Person, Crying Person)
- ✅ Dynamic floor progression system
- ✅ Real-time timer with penalty tracking
- ✅ Charisma point system
- ✅ Achievement system (7 achievements)
- ✅ Smooth animations with Framer Motion
- ✅ Responsive design for mobile and desktop
- ✅ Win/Lose conditions with detailed stats

### Character Types
- **Stranger** 🧑 - Your typical elevator companion
- **Chatty Karen** 👩‍💼 - Won't stop talking about her weekend
- **Your Boss** 👔 - High stakes conversations
- **Delivery Person** 📦 - Stressed and juggling packages
- **Crying Person** 😢 - Navigate this emotional minefield

### Achievements
- 👻 **The Ghost** - Complete 10 floors without speaking
- 😎 **Smooth Operator** - Exit before anyone asks what you do
- 💪 **Survivor** - Endure an MLM/crypto pitch
- 😬 **Why Did I Say That** - Make it so awkward they leave early
- ⚡ **Speed Runner** - Reach lobby in under 2 minutes
- 💼 **Corporate Professional** - Navigate boss conversation flawlessly
- 🎯 **Small Talk Master** - Complete game with no awkward silences

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/elevator-escape-room.git
cd elevator-escape-room

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:5173/ to play!

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🎯 How to Play

1. Click "Enter Elevator" to start your journey from Floor 50
2. When someone speaks to you, read their dialogue carefully
3. Choose from 4 response options (numbered 1-4)
4. Watch your floor number, timer, and charisma points
5. Good choices = progress down; Bad choices = stuck or go UP
6. Reach the lobby before running out of time or charisma!

### Tips for Success
- 💡 Silent responses (actions in *asterisks*) often work well
- 💡 Avoid over-explaining or monologuing
- 💡 Watch the subtle color hints on choice buttons when hovering
- 💡 Sometimes ignoring is the smoothest move
- 💡 Your boss requires extra careful responses

## 🏗️ Project Structure

```
elevator-escape-room/
├── src/
│   ├── components/          # React components
│   │   ├── ElevatorDisplay.jsx
│   │   ├── FloorIndicator.jsx
│   │   ├── ConversationBox.jsx
│   │   ├── ChoiceButtons.jsx
│   │   ├── Timer.jsx
│   │   ├── AchievementPopup.jsx
│   │   └── GameOver.jsx
│   ├── data/               # Game data
│   │   ├── scenarios.js    # All conversation scenarios
│   │   ├── characters.js   # Character definitions
│   │   └── achievements.js # Achievement definitions
│   ├── utils/              # Utility functions
│   │   └── gameLogic.js    # Core game logic
│   ├── App.jsx             # Main app component
│   ├── App.css             # Global styles
│   └── main.jsx            # Entry point
├── public/                 # Static assets
└── package.json
```

## 🎨 Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 7
- **Animations**: Framer Motion
- **Styling**: CSS3 with custom properties
- **State Management**: React Hooks (useState, useEffect, useCallback)

## 📝 Adding New Scenarios

Want to add your own awkward scenarios? Edit `src/data/scenarios.js`:

```javascript
{
  id: "your_scenario_id",
  floorRange: [min, max],  // Which floors this can appear on
  character: "characterType",
  characterMood: "neutral",
  difficulty: 1,  // 1-4 (easy to nightmare)
  dialogue: "What the character says",
  choices: [
    {
      id: "a",
      text: "Your response option",
      outcome: "smooth", // smooth, safe, bad, terrible
      nextDialogue: "Character's reaction",
      floorProgress: 2,  // Floors to move (can be negative!)
      timeAdded: 0,      // Penalty time in seconds
      charismaChange: 10,
      moodChange: "pleased"
    },
    // ... more choices
  ]
}
```

## 🐛 Known Issues

- None currently! But if you find any, please open an issue.

## 🗺️ Roadmap

### Phase 2 - Polish
- [ ] Add sound effects (elevator ding, awkward silence, etc.)
- [ ] More scenarios (targeting 30+)
- [ ] Character sprite illustrations
- [ ] More visual polish and animations
- [ ] Settings menu (sound toggle, animation speed)

### Phase 3 - Features
- [ ] Difficulty modes (Easy, Medium, Hard, Nightmare)
- [ ] Special events (emergency stops, power moves)
- [ ] Daily challenges
- [ ] Local leaderboard (fastest times)
- [ ] Stats tracking across games

### Phase 4 - Community
- [ ] User-submitted scenarios
- [ ] Scenario voting system
- [ ] Share your results on social media
- [ ] Mobile app version

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

1. 🎭 **Create new scenarios** - Add more awkward situations
2. 🎨 **Improve UI/UX** - Make it look even better
3. 🐛 **Report bugs** - Help us squash issues
4. 💡 **Suggest features** - What would make it more fun?
5. 🎵 **Add sound effects** - Make it more immersive

Please open an issue or pull request on GitHub!

## 📄 License

MIT License - feel free to use this project however you'd like!

## 🎉 Credits

Created with ❤️ and a lot of awkward elevator experiences.

Built with:
- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Framer Motion](https://www.framer.com/motion/)

## 🚀 Deployment

### GitHub Pages Setup

The project is configured for automatic deployment to GitHub Pages via GitHub Actions.

**To enable GitHub Pages:**

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Merge your feature branch to `main` or `master`
5. The GitHub Action will automatically build and deploy
6. Your game will be live at: `https://scottymker.github.io/Funny-business/`

**Manual Deployment:**

If you prefer manual deployment:
```bash
npm run deploy
```

This will build and push to the `gh-pages` branch.

## 🔗 Links

- 🎮 [Play the Game](https://scottymker.github.io/Funny-business/) (Live after merge to main)
- 🐛 [Report Issues](https://github.com/scottymker/Funny-business/issues)
- 💬 [Discussions](https://github.com/scottymker/Funny-business/discussions)

---

**Enjoy the game? Share it with your friends and make them uncomfortable too!** 😄

*Remember: In real life, sometimes the best response is no response at all.*
