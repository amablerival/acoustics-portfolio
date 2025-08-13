import Container from '@/shared/components/Container';
import RaizMaterial from '@/shared/components/RaizMaterial';

import CanvasComponent from '../canvas/Canvas';

const Playground = () => {
  return (
    <div className="flex size-full flex-col items-center text-white">
      <div className="flex size-full items-center justify-center align-top">
        <h2>RAÍZ</h2>
      </div>
      <Container data={{ styleClasses: 'back-overlay' }}>
        <CanvasComponent>
          {/* <RaizMaterial mesh={{ position: [0, 0, 4.1] }} /> */}
        </CanvasComponent>
      </Container>
    </div>
  );
};

export default Playground;
