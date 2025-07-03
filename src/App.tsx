import './App.css'
import Background from './components/background'
import Experiences from './components/experiences'
import Footer from './components/footer'
import Header from './components/header'
import NavigationBar from './components/navigationBar'
import Projects from './components/projects'
import WhatIDo from './components/whatIDo'
function App() {
  return (
    <>
    <Background/>
      <Header/>
      <WhatIDo/>
      <Experiences/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
