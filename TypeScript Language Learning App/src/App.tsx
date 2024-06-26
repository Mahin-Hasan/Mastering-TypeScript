import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loader from "./components/Loader"
//importing Home using code splitting instead of directly importing
const Home = lazy(() => import("./components/Home"))
const Learning = lazy(() => import("./components/Learning"))
const Header = lazy(() => import("./components/Header"))
const Quiz = lazy(() => import("./components/Quiz"))
const Result = lazy(() => import("./components/Result"))

const App = () => {
//5h 35m
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
