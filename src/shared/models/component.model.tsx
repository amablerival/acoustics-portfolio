export interface ComponentModel {
  id: string
  title: string
  description?: string
  styleClasses?: string
  url?: string
  // link: '/'
  link?: '/' | '/home' | '/about'
}
