import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navebar from './components/Navebar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Weather dark mode is enabled or not
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 3000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils || Home Dark';
      // setInterval(() => {
      //   document.title = 'TextUtils || Home';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils';
      // }, 2000);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils || Home Light';
    }
  }
  return (
    <>
      <Router>
        <Navebar title = 'TextUtils' abouttext = 'About Us' mode={mode} toggleMode={toggleMode} />
        {/* <Navebar title = 'TextUtils'/> */}
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text' mode={mode}/>} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
