
import './App.css'
import About from './components/About'
import Acceuil from './components/Acceuil'
import Navbar from './components/Navbar'
import Projets from './components/Projets'

function App() {


  return (
    <>
    <div className='dark:bg-black1'>

     <Navbar/>
     <Acceuil/>
     <About/>
     <Projets />
    </div>
    </>
  )
}

export default App
