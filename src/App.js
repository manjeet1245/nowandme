import Modal from "./components/Modal"
import HandleLogin from "./components/Login"
import  Home from "./components/Home"
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"





function App(){
  return (
    <Router>
     
      
      <Modal/>
        <Routes>
        <Route path='/' element={<HandleLogin />} />
        <Route path='community' element={<Home/>} />
       
        </Routes>
    </Router>
    
  )
}

export default App