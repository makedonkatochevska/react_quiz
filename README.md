# React Quiz App

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 📜 Project Description  <br>
  - ⚙️ Technologies Used  <br>
  - 🔗 Demo  <br>
  - 🔨 Installation  <br>
  - 🚀 Usage  <br>
  - 🧰 Components Overview  <br>
  - 🎵 Sound Integration  <br>
  - 🎨 Animations  <br>
  - 🔄 Routing & Dynamic Quizzes  <br>
  - 📝 Notes  <br>
  - 📝 Credits  <br>
  - 📞 Contact  
</details>

---

## Project Description 📜

This **Quiz App** is a React single-page application built with **TypeScript** that lets users take multiple quizzes on topics like Movies, TV, Books, Computer Science, Celebrities, and History.

The app dynamically loads quiz data based on user selection, supports answer validation, plays sounds, and shows results with engaging Lottie animations.

### 🔑 Key Features

- Dynamic quizzes based on selected topic
- Multiple-choice questions with answer shuffle
- Sounds for correct/wrong answers using Howler.js
- Final results with animated feedback
- React Router for navigation
- Strong TypeScript support across the app

---

## Technologies Used ⚙️

- ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
- ![Howler.js](https://img.shields.io/badge/Howler.js-000000?style=flat-square&logo=javascript&logoColor=white)
- ![Lottie](https://img.shields.io/badge/Lottie-FF0000?style=flat-square&logo=lottie&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

---

## 🔗 Demo

Check out the live demo of the Quiz:

👉 [Check it Live](https://react-addcontacttolist-makedonkat.netlify.app/)

---

## Installation 🔨

To run this project locally, follow the steps below:

### Steps to Install

1. Clone the repository:

bash
git clone https://github.com/makedonkatochevska/react_quiz.git .

2. Install dependencies:

bash
npm install

3. Start the development server:

bash
npm run dev

---

## Usage 🚀

### How It Works:

1. The **CardContainer** displays all quiz category cards using `BANNER_IMAGES` as background.
2. Clicking a card navigates to `/quiz/:quizType` (e.g., `/quiz/movieQuiz`) using **React Router**.
3. **QuizPage** loads the appropriate quiz by reading the `quizType` param.
4. **QuestionsContainer** fetches data from `DATA_URL[quizType]` and displays questions.
5. Each question is rendered via **MultipleAnswerQuestion**, with randomized answers.
6. **ResultsContainer** updates live to reflect:
   - Correct answers
   - Incorrect answers
   - Remaining questions
7. Once all questions are answered:
   - A final loading animation plays
   - Then, **FinalResult** is shown with a Lottie animation (success or failure)
8. Quiz can be restarted using the **Restart** button, which scrolls to top and reloads questions.

---

## 🧰 Components Overview

### `CardContainer`

- Displays the quiz topic cards.
- On click, routes to `/quiz/:quizType`.

### `QuizPage`

- Dynamically loads quiz content based on route param.

### `QuestionsContainer`

- Fetches questions using the `quizType` key.
- Tracks user answers, correctness, and resets.
- Triggers scroll to top on quiz start/reset.
- Displays results after all questions are answered.

### `MultipleAnswerQuestion`

- Renders each question with shuffled answer options.
- Handles answer selection and validation.

### `ResultsContainer`

- Shows current quiz stats: total, correct, incorrect, remaining.

### `FinalResult`

- Summary with a Lottie animation depending on quiz performance.
- Includes a reset button to restart the quiz.

### `Loading` & `ErrorComponent`

- `Loading` shows an animation while fetching.
- `ErrorComponent` (used for fallback UI on fetch error).

---

## 🎵 Sound Integration

- Sound effects added using **Howler.js**.
- A custom `useSound` hook handles audio playback.
- On correct or incorrect answer selection, a sound plays immediately.
- Sounds are currently stored locally in `/public/Sounds`.

---

## 🎨 Animations

- Final result screen includes animations using **Lottie** via `@lottiefiles/dotlottie-react`.
- Two animations are used:
  - ✅ Smile (when more than 50% correct).
  - ❌ Sad Emoji (if under 50%).

---

## 🔄 Routing & Dynamic Quizzes

- Built with **React Router**.
- Routes:
  - `/` – Home page with quiz category cards.
  - `/quiz/:quizType` – Loads questions dynamically based on selected topic.
- Quiz data and banners are pulled based on `quizType` param from:
  - `DATA_URL[quizType]` – for questions
  - `BANNER_IMAGES[quizType]` – for visual banners

---

## Notes 📝

- The app supports smooth scroll to top on quiz reset.
- FontAwesome icons are used for navigational elements.
- Fully responsive UI.
- Developed with **React + TypeScript** using `.tsx` components.
- All props and components are strictly typed.
- Quizzes are rendered dynamically, allowing easy expansion with more topics.

---

## Credits 📝

This app was developed as a personal learning project to practice:

- Dynamic routing
- State and props management
- Component reusability
- Type-safe development with TypeScript
- Animations and sound UX integration

---

## Contact 📞

📫 You can reach me at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or connect with me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
