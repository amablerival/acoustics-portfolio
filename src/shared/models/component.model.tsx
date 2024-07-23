export interface ComponentModel {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  styleClasses?: string;
  url?: string;
  link?: '/' | '/home' | '/about' | '/playground';
}
