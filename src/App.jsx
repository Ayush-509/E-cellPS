import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Body from './components/body'
import Intro from './components/Intro'
import './App.css'

function App() {
  const router = createBrowserRouter([{path : "/",element  : <><Navbar/><Body/></>},
    {path : "/home",element  : <><Navbar/><Intro/></>}
  ])
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
