import { v4 as uuidv4 } from 'uuid'

import { ComponentModel } from '@/shared/models/component.model'
import ItemService from '@/shared/services/item.service'

class HomeService {
  itemService = ItemService.getInstance()
  getTopData = (): ComponentModel[] => [
    { id: uuidv4(), title: 'BODY' },
    { id: uuidv4(), title: 'COUNT?', styleClasses: 'bg-white' },
    { id: uuidv4(), title: "don't" },
    { id: uuidv4(), title: 'lie!', styleClasses: 'bg-white' }
  ]
  getMiddleData = () => this.itemService.getItems()
  getBottomData = (): ComponentModel => ({
    id: uuidv4(),
    title: 'No sé, me importa un pito...',
    description:
      'No les perdono, bajo ningún pretexto, que no sepan volar.\n Si no saben volar ¡pierden el tiempo conmigo!',
    url: 'https://www.excelsior.com.mx/expresiones/2017/01/24/1141891'
  })
}

export default HomeService
