export interface Talent {
  id: string;
  name: string;
  role: string;
  experience: number;
  skills: string[];
  bio: string;
  avatar: string;
  hourlyRate: number;
  rating: number;
  location: string;
  category: 'Development' | 'Design' | 'Marketing' | 'Writing' | 'Operations';
}