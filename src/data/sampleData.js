import { format } from 'date-fns'

export const now = () => format(new Date(), 'MMM dd, yyyy')

export const projects = [
  { id:1, title:'Modern Dashboard', description:'Responsive dashboard with charts and real-time updates.', date: now(), tags:['React','D3','Tailwind'] },
  { id:2, title:'Portfolio Site', description:'Personal portfolio showcasing projects and experience.', date: now(), tags:['React','Vite'] }
]
