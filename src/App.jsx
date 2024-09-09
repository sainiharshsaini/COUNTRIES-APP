import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
// import { useState } from 'react'

import ThemeProvider from './contexts/ThemeContext'

function App() {
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  return (
    // <ThemeContext.Provider value={[isDark, setIsDark]}>
    //   {/* <Header theme={[isDark, setIsDark]}/> */}
    //   {/* <Outlet context={[isDark, setIsDark]}/> */}
    //   <Header/>
    //   <Outlet/>
    // </ThemeContext.Provider>
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
