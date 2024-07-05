// import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './About/About'
// import Contact from './Contact/Contact'
import SideBar from './SideBar/SideBar'
import Header from './Header/Header'
import Middle from './Middle/Middle'
// import './Middle.css'



function App() {
  return (
    <>
    <Header />
    <SideBar />
    <Middle />
    <Routes>
      <Route path ='/Middle' element={<Middle/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/sideBar' element={<SideBar/>}/>
    </Routes>
    </>
  )
}
export default App
