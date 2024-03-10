import { v4 as uuidv4 } from 'uuid'

import { ComponentModel } from '@/shared/models/component.model'

class FooterService {
  getFooterData = (): ComponentModel[] => [
    {
      id: uuidv4(),
      title: 'Help',
      url: 'https://dictionary.cambridge.org/dictionary/english/help'
    },
    {
      id: uuidv4(),
      title: 'About',
      url: 'https://tailwindui.com/components/marketing/page-examples/about-pages'
    },
    {
      id: uuidv4(),
      title: 'Contact',
      url: 'https://en.wikipedia.org/wiki/Contact_(1997_American_film)'
    }
  ]
}

export default FooterService
