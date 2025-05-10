# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

#### Title Screen

![Title Screen - Desktop]('./README_images/project-roshambo-desktop.webp')
![Title Screen - Mobile]('./README_images/project-roshambo-mobile.webp')

> This is the title screen for the "rock-paper-scissors" game. I renamed it "ROSHAMBO" as a unique twist on the classic name.

#### Gameplay

![Game 1]('./README_images/roshambo-play-1.webp')
![Game 2]('./README_images/roshambo-play-2.webp')
![Game 3]('./README_images/roshambo-play-3.webp')

> The gameplay consists of three steps:
>
> 1. You pick your play
> 2. You confirm your pick
> 3. The result of the game is shown with an option to play again

#### Rules

![Rule Preview - Desktop]('./README_images/roshambo-rule-desktop.webp')
![Rules Preview - Mobile]('./README_images/roshambo-rule-mobile.webp')

> Displays the game rules, including how each item defeats another.

#### Themes

![Light Mode]('./README_images/roshambo-light-mode.webp')
![Dark Mode]('./README_images/roshambo-dark-mode.webp')

> The game supports both Light and Dark themes.

### Links

- Solution URL: [Link for the solution](https://github.com/SerPet-eng/roshambo)
- Live Site URL: [Live preview of the solution](https://glittery-biscotti-2c3be7.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React Router v7](https://reactrouter.com/) - React Router Manager
- [SASS](https://sass-lang.com/) - For styles
- [Framer Motion](https://motion.dev/) - For animations

### What I learned

I approached this challenge thoughtfully and made sure to plan the core logic before jumping into the UI.

**Example:** I started by outlining the core functions I needed. One important function was getHousePick() which randomly chooses a move from the appropriate set:

```js
export const EASY_PICK = [
  { name: 'rock', icon: IconRock },
  { name: 'paper', icon: IconPaper },
  { name: 'scissor', icon: IconScissor },
];
export const HARD_PICK = [
  { name: 'rock', icon: IconRock },
  { name: 'paper', icon: IconPaper },
  { name: 'scissor', icon: IconScissor },
  { name: 'lizard', icon: IconLizard },
  { name: 'spock', icon: IconSpock },
];
```

To determine the winner:

```jsx
useEffect(() => {
  if (!playerPick || !housePick) return; // Ensure the player has picked something before playing

  if (playerPick === housePick) {
    return dispatch({ type: ACTIONS.TIE });
  } else if (
    (playerPick === 'rock' && housePick === 'scissor') ||
    (playerPick === 'paper' && housePick === 'rock') ||
    (playerPick === 'scissor' && housePick === 'paper') ||
    (playerPick === 'lizard' && housePick === 'paper') ||
    (playerPick === 'lizard' && housePick === 'spock') ||
    (playerPick === 'spock' && housePick === 'scissor') ||
    (playerPick === 'spock' && housePick === 'rock') ||
    (playerPick === 'scissor' && housePick === 'lizard') ||
    (playerPick === 'paper' && housePick === 'spock')
  ) {
    return dispatch({ type: ACTIONS.PLAYER_WINS });
  } else {
    return dispatch({ type: ACTIONS.HOUSE_WINS });
  }
}, [housePick]);
```

> The idea of this code was when the `housePick` trigger where the house will pick its play, it check if the `playerPick` beats what the house pick, if not then the win will goes to the house.

I also explored creative ways of placing buttons using Math.PI to position them in a circular layout:

```js
export const RADIUS = 90;

export const getPositionStyle = (index, total, radius) => {
  const angle = (2 * Math.PI * index) / total - Math.PI / 2;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  return {
    position: 'absolute',
    left: `calc(50% + ${x}px - 50px)`,
    top: `calc(50% + ${y}px - 50px)`,
  };
};
```

### Key Takeaways

- I explored using `Math.PI` to arrange items in a circular layout—this was a breakthrough moment for me. The result felt satisfying and mathematically sound.
- I practiced separating logic into utility functions like `getPositionStyle()`, improving code readability and reuse.
- I solidified my understanding of game logic through `useEffect` and the `useReducer` hook.

### Continued development

I plan to:

- Improve my use of custom hooks and state management libraries like Zustand or Redux Toolkit

- Learn how to better structure reducers and action handling for scalability

- Explore more design techniques using math, geometry, and animations

Though I used only useReducer here, it provided a clean and manageable way to control game state.

### Future Improvements

- Experiment with more advanced state management libraries like Redux or Zustand in larger projects.
- Focus on writing modular and reusable utility functions.
- Explore mathematical approaches (like using geometry in UI) for more creative layouts.
- Improve test coverage and edge case handling for game logic.

## Author

- Website - [My Simple Portfolio](https://my-portfolio-christian-dg.netlify.app/)
- Frontend Mentor - [@SerPet-eng](https://www.frontendmentor.io/profile/SerPet-eng)
- Twitter - [@dchristian796](https://x.com/dchristian796)
