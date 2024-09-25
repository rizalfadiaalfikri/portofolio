import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Nabvar from "./components/Navbar"
import Project from "./components/Project"
import Title from "./components/Title"

function App() {

  return (
    <>
      <Nabvar/>
      <Home/>

      <Title title="About .">
        <About/>
      </Title>

      <Title title="Project .">
        <Project/>
      </Title>

      <Title title="Blog .">
        <Blog/>
      </Title>

      <Title title="Contact .">
        <Contact/>
      </Title>

    </>
  )
}

export default App
