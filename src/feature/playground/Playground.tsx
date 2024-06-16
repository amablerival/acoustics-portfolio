import Container from '@/shared/components/Container';
import RaizMaterial from '@/shared/components/RaizMaterial';

import CanvasComponent from '../canvas/Canvas';

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useState } from 'react';

const Playground = () => {
  const textures = ['Marble006_4K-JPG', 'Wood026_4K-JPG', 'Metal046B_4K-JPG'];
  const [texture, setTexture] = useState(textures[0]);
  const [count, setCount] = useState(0);
  const counter = (val: number) => {
    const nextVal =
      count + val < textures.length && count + val > 0 ? count + val : 0;
    console.log('nextVal', nextVal);
    setCount(nextVal);
    setTexture(textures[nextVal]);
  };
  return (
    <>
      <div className="flex size-full flex-col items-center text-white">
        <div className="overlay flex w-full items-center place-self-start align-middle">
          <button onClick={() => counter(-1)}>
            <SlArrowLeft className="size-14" />
          </button>
        </div>
        <div className="overlay flex w-full items-center place-self-end align-middle">
          <button onClick={() => counter(1)}>
            <SlArrowRight className="size-14" />
          </button>
        </div>
        <Container data={{ styleClasses: 'bg-black' }}>
          <CanvasComponent>
            <RaizMaterial mesh={{ position: [0, 0, 0] }} texture={texture} />
          </CanvasComponent>
        </Container>
      </div>
    </>
  );
};

export default Playground;
