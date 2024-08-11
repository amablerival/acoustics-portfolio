import { Outlet } from '@tanstack/react-router';

import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Container from '@/shared/components/Container';
import CanvasComponent from '@/feature/canvas/Canvas';
import RaizMaterial from '@/shared/components/RaizMaterial';
import { useMouse } from '@uidotdev/usehooks';

const App = () => {
  const [mouse, mouseRef] = useMouse<HTMLElement>();

  return (
    <div className="flex h-screen w-full flex-col justify-start overflow-hidden">
      <NavBar></NavBar>
      <span
        className="flex h-full basis-11/12 items-center justify-center overflow-y-auto bg-none"
        ref={mouseRef}
      >
        <Outlet />
        <Container data={{ styleClasses: 'back-overlay' }}>
          <CanvasComponent>
            <RaizMaterial
              mesh={{ position: [0, 0, 4.1] }}
              mousePosition={mouse}
            />
          </CanvasComponent>
        </Container>
      </span>
      <Footer></Footer>
    </div>
  );
};

export default App;
