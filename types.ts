
export enum SubjectType {
  EXAMEN = 'EXAMEN',
  TD = 'TD',
  RATTRAPAGE = 'RATTRAPAGE'
}

export type Level = 'L1' | 'L2' | 'L3' | 'M1' | 'M2';

export interface Subject {
  id: string;
  title: string;
  ue: string;
  filiere: string;
  level: Level;
  year: string;
  type: SubjectType;
  fileUrl: string;
  downloads: number;
  pages?: number;
  description?: string;
}

export interface FilterOptions {
  query: string;
  filiere: string;
  level: string;
  year: string;
  type: string;
}
