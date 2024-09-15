

import './App.css'
import About from './components/About'
import Acceuil from './components/Acceuil'
import Projets from './components/Projets'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
   
    <div className='dark:bg-black1'>
      <Navbar/>
      <section id="acceuil">
        {<Acceuil/>}
      </section>
      <section id='about'>
        {<About/>}
      </section>
      <section id="projets"/>
        {<Projets/>}
      <section/>

    </div>
   
    </>
  )
}

export default App
