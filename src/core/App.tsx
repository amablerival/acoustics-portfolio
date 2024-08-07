import { Outlet } from '@tanstack/react-router';

import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Container from '@/shared/components/Container';
import CanvasComponent from '@/feature/canvas/Canvas';
import RaizMaterial from '@/shared/components/RaizMaterial';

const App = () => {
  return (
    <div className="flex h-screen w-full flex-col justify-start overflow-hidden">
      <NavBar></NavBar>
      <div className="flex h-full basis-11/12 items-center justify-center overflow-y-auto bg-none">
        <Outlet />
        <Container data={{ styleClasses: 'back-overlay' }}>
          <CanvasComponent>
            <RaizMaterial mesh={{ position: [0, 0, 4.1] }} />
          </CanvasComponent>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
