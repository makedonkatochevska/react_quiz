import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.module.scss";
import QuizPage from "./pages/QuizPage";
import { ROUTES } from "./routes/Routes";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

import { BANNER_IMAGES } from "./constants/bannerImages";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTES.homePage}
            element={
              <HomePage
                background={{
                  backgroundImage: `url(${BANNER_IMAGES.home})`,
                }}
              />
            }
          ></Route>
          <Route path="/quiz/:quizType" element={<QuizPage />} />
          <Route path={ROUTES.errorPage} element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
