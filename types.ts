
export interface Pillar {
  title: string;
  description: string;
}

export interface WorkItem {
  title: string;
  date: string;
  category: 'Coverage' | 'Press' | 'Thought Leadership' | 'Update';
  link: string;
}

export interface Service {
  title: string;
  description: string;
}
