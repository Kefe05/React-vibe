import Header from './Header/header'
import Hero from './Hero/hero'
import About from './About/about'
import SignUp from './SignUp/sign-up'
import './App.css'
import How from './How/how'
import Comment from './Comment/comment'
import Download from './Download/download'
import Footer from './Footer/footer'

function App() {

  return (
   <div className='App'>
    <Header/>
    <Hero />
    <About />
    <SignUp />
    <How />
    <Comment />
    <Download />
    <Footer />
   </div>
  )
}

export default App
