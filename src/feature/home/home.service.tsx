import { v4 as uuidv4 } from 'uuid';

import { ComponentModel } from '@/shared/models/component.model';
import ItemService from '@/shared/services/item.service';

class HomeService {
  itemService = ItemService.getInstance();
  getTopData = (): ComponentModel => ({
    id: uuidv4(),
    title: 'Raíz',
    subtitle: 'Fabricación',
    description: `
            Raíz es un estudio de diseño y fabricación personalizada en
            distintos materiales. Trabajamos desde mobiliario personalizado y
            piezas prediseñadas hasta soluciones creativas para los flujos de
            trabajo menos convencionales.
            
            Desde madera y metal hasta textiles únicos, Raíz se encarga de
            proveer soluciones con los mejores materiales a un amplio sector de
            profesionales: artistas, diseñadores, productores de contenido
            multimedia, etc.
            `
  });
  getMiddleData = () => this.itemService.getItems();
  getBottomData = (): ComponentModel => ({
    id: uuidv4(),
    title: 'No sé, me importa un pito...',
    description:
      'No les perdono, bajo ningún pretexto, que no sepan volar.\n Si no saben volar ¡pierden el tiempo conmigo!',
    url: 'https://www.excelsior.com.mx/expresiones/2017/01/24/1141891'
  });
}

export default HomeService;
