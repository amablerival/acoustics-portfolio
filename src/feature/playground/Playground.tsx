import Container from '@/shared/components/Container';
import RaizMaterial from '@/shared/components/RaizMaterial';

import CanvasComponent from '../canvas/Canvas';

const Playground = () => {
  return (
    <div className="flex size-full flex-col items-center text-white">
      <Container data={{ styleClasses: 'bg-black' }}>
        <CanvasComponent>
          <RaizMaterial position={[0, 0, 0]} />
        </CanvasComponent>
      </Container>
    </div>
  );
};

export default Playground;
