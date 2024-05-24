import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
// import About from './components/About';
import { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [btnText, setbtnText] = useState('Enable Dark Mode')
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  // FUNCTION TO CHNGE THE MODE OF THE WEBSITE
  const changeMode = () => {
    if (mode === "light") {
      setMode('dark')
      setbtnText("Enable Light Mode")
      showAlert("Dark Mode has been enabled successfully.", "success")
      document.body.style.backgroundColor = "#181818";
    }
    else {
      setMode('light')
      setbtnText("Enable Dark Mode")
      showAlert("Light Mode has been enabled successfully.", "success")
      document.body.style.backgroundColor = "white";
    }
  }

  return (
  
      <>
          <Navbar logo="TextUtils" changeMode={changeMode} mode={mode} btnText={btnText} />
          <Alert alert={alert} />
          <Textarea mode={mode} showAlert={showAlert} />
         
          </>

  );
}

export default App;
