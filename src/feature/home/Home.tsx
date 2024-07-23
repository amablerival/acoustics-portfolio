import Container from '@/shared/components/Container';
import Header from '@/shared/components/Header';
import MasonryGrid from '@/shared/components/MasonryGrid';
import Options from '@/shared/components/Options';

import HomeService from './home.service';
import CanvasComponent from '../canvas/Canvas';
import RaizMaterial from '@/shared/components/RaizMaterial';

const Home = () => {
  const service = new HomeService();
  return (
    <div className="flex size-full flex-col items-center text-white">
      <div className="flex h-full items-center justify-center px-60 py-6">
        <article className="text-pretty">
          <h3 className="font-display text-offwhite text-6xl">Raíz</h3>
          <h3 className="font-display text-3xl text-orange">Fabricación</h3>
          <br />
          <p>
            Raíz es un estudio de diseño y fabricación personalizada en
            distintos materiales. Trabajamos desde mobiliario personalizado y
            piezas prediseñadas hasta soluciones creativas para los flujos de
            trabajo menos convencionales.
          </p>
          <br />
          <p>
            Desde madera y metal hasta textiles únicos, Raíz se encarga de
            proveer soluciones con los mejores materiales a un amplio sector de
            profesionales: artistas, diseñadores, productores de contenido
            multimedia, etc.
          </p>
        </article>
      </div>
      <Container data={{ styleClasses: 'back-overlay' }}>
        <CanvasComponent>
          <RaizMaterial mesh={{ position: [0, 0, 4.1] }} />
        </CanvasComponent>
      </Container>
    </div>
  );
};

export default Home;
