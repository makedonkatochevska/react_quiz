import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.module.scss";
import QuizPage from "./pages/QuizPage";
import { ROUTES } from "./routes/Routes";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

import { bannerImages } from "./constants/bannerImages";
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
                  backgroundImage: `url(${bannerImages.home})`,
                }}
              />
            }
          ></Route>
          <Route path={ROUTES.quizPage} element={<QuizPage />}></Route>
          <Route path={ROUTES.errorPage} element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
