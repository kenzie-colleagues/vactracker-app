import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       
        <ToastContainer
      position='top-center'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    />
       
    </div>
  )
}

export default App
