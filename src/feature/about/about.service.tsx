import { v4 as uuidv4 } from 'uuid';

import { ComponentModel } from '@/shared/models/component.model';

class AboutService {
  getTopData = (): ComponentModel => ({
    id: uuidv4(),
    title: 'Fabricamos',
    subtitle: 'madera, metal y textiles únicos.',
    description: `
    Randomised words which don't look even slightly believable. 
    If you are going to use a passage of Lorem Ipsum, 
    you need to be sure there isn't anything embarrassing 
    hidden in the middle of text.
    
    All the Lorem Ipsum generators on the Internet tend to repeat 
    predefined chunks as necessary, making this the 
    first true generator on the Internet. It uses a dictionary of 
    over 200 Latin words, combined with a handful of model sentence 
    structures, to generate Lorem Ipsum which looks reasonable.`,
    url: 'https://raizfabricacion.com/'
  });
}

export default AboutService;
