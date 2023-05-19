import { Route, Routes } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import HomePage from "../Homepage"
import AboutPage from "../AboutPage"
import ResumePage from "../ResumePage"
import ProjectsPage from "../ProjectsPage"

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      <Footer />
    </>
  )
}