// import Home from '@/feature/home/home.component'

import { Outlet } from '@tanstack/react-router'

import Footer from './components/footer.component'
import NavBar from './components/navbar.component'

const App = () => {
  return (
    <div className="flex h-screen w-full flex-col justify-start overflow-hidden">
      <NavBar title="ACOUSTIC'S SPECIALISTS"></NavBar>
      <div className="flex h-full basis-11/12 items-center justify-center overflow-y-auto bg-blue">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
