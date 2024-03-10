import { v4 as uuidv4 } from 'uuid'

import { ComponentModel } from '@/shared/models/component.model'
import { MasonryGridOption } from '@/shared/models/masonry-grid.model'

class HomeService {
  getTopData = (): ComponentModel[] => [
    { id: uuidv4(), title: 'BODY' },
    { id: uuidv4(), title: 'COUNT?', styleClasses: 'bg-white' },
    { id: uuidv4(), title: "don't" },
    { id: uuidv4(), title: 'lie!', styleClasses: 'bg-white' }
  ]
  getMiddleData = (): MasonryGridOption[][] => [
    [
      {
        id: uuidv4(),
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
      },
      {
        id: uuidv4(),
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
      },
      {
        id: uuidv4(),
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
      }
    ],
    [
      {
        id: uuidv4(),
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
      },
      {
        id: uuidv4(),
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
      },
      {
        id: uuidv4(),
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
      }
    ],
    [
      {
        id: uuidv4(),
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
      },
      {
        id: uuidv4(),
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
      },
      {
        id: uuidv4(),
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
      }
    ],
    [
      {
        id: uuidv4(),
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'
      },
      {
        id: uuidv4(),
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
      },
      {
        id: uuidv4(),
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'
      }
    ]
  ]
  getBottomData = (): ComponentModel => ({
    id: uuidv4(),
    title: 'No sé, me importa un pito...',
    description:
      'No les perdono, bajo ningún pretexto, que no sepan volar.\n Si no saben volar ¡pierden el tiempo conmigo!',
    url: 'https://www.excelsior.com.mx/expresiones/2017/01/24/1141891'
  })
}

export default HomeService
