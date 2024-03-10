import { v4 as uuidv4 } from 'uuid'

import { ComponentModel } from '@/shared/models/component.model'

class AboutService {
  getTopData = (): ComponentModel[] => [
    { id: uuidv4(), title: 'YOU' },
    { id: uuidv4(), title: 'EVIL?', styleClasses: 'bg-white' },
    { id: uuidv4(), title: 'yes' },
    { id: uuidv4(), title: 'nai', styleClasses: 'bg-white' }
  ]
  getMiddleData = () => []
  getBottomData = (): ComponentModel => ({
    id: uuidv4(),
    title: 'Vida cula.',
    description: 'Las calles queman mis pasos \n Las miradas derriten mi alma.',
    url: 'https://revistamarabunta.net/los-versos-mas-culeros-esta-noche/'
  })
}

export default AboutService
