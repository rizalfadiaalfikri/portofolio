import About from "./components/About"
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

    </>
  )
}

export default App
