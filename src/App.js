import logo from "./logo.svg"
import "./App.css"
import About from "./component/About"
import Projects from "./component/Projects"
import Skills from "./component/Skills"
import Contact from "./component/Contact"
import Navbar from "./component/Navbar"

function App() {
    return (
        <main className="bg-gray-900 body-font">
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </main>
    )
}

export default App
