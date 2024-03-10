import { v4 as uuidv4 } from 'uuid'

import { ComponentModel } from '@/shared/models/component.model'

class NavbarService {
  getNavbarConfig = (): ComponentModel[] => [
    {
      id: uuidv4(),
      title: 'Home',
      link: '/home'
    },
    {
      id: uuidv4(),
      title: 'About',
      link: '/about'
    }
    // {
    //   id: uuidv4(),
    //   title: 'Contact',
    //   link: '/contact'
    // }
  ]
}

export default NavbarService
