
import { Subject, SubjectType } from './types';

export const UNA_BLUE = '#1E90FF';

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: '1',
    title: 'Biochimie Structurale - Session Principale',
    ue: 'BIO201',
    filiere: 'SVT',
    level: 'L2',
    year: '2023-2024',
    type: SubjectType.EXAMEN,
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    downloads: 1240,
    pages: 4,
    description: 'Examen portant sur les glucides, lipides et protéines.'
  },
  {
    id: '2',
    title: 'Sujet TD n°1 : Algèbre Linéaire',
    ue: 'MTH101',
    filiere: 'MI',
    level: 'L1',
    year: '2023-2024',
    type: SubjectType.TD,
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    downloads: 850,
    pages: 2,
    description: 'Exercices sur les espaces vectoriels et bases.'
  },
  {
    id: '3',
    title: 'Rattrapage - Thermodynamique Chimique',
    ue: 'CHM202',
    filiere: 'SFA',
    level: 'L2',
    year: '2022-2023',
    type: SubjectType.RATTRAPAGE,
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    downloads: 450,
    pages: 3,
    description: 'Sujet de rattrapage incluant les cycles de Carnot.'
  },
  {
    id: '4',
    title: 'Informatique Fondamentale - Algorithmique',
    ue: 'INF101',
    filiere: 'MI',
    level: 'L1',
    year: '2023-2024',
    type: SubjectType.EXAMEN,
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    downloads: 2100,
    pages: 5,
    description: 'Examen final couvrant les structures de données de base.'
  },
  {
    id: '5',
    title: 'Microbiologie Générale - TD3',
    ue: 'BIO302',
    filiere: 'SVT',
    level: 'L3',
    year: '2023-2024',
    type: SubjectType.TD,
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    downloads: 620,
    pages: 1,
    description: 'Série d’exercices sur la croissance bactérienne.'
  },
  {
    id: '6',
    title: 'Écologie Marine et Côtière',
    ue: 'ENV401',
    filiere: 'SGE',
    level: 'M1',
    year: '2022-2023',
    type: SubjectType.EXAMEN,
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    downloads: 310,
    pages: 6,
    description: 'Analyse des écosystèmes littoraux en Afrique de l\'Ouest.'
  }
];

export const FILIERES = ['MI', 'SVT', 'SFA', 'SGE', 'STRM'];
export const LEVELS = ['L1', 'L2', 'L3', 'M1', 'M2'];
export const SUBJECT_TYPES = [SubjectType.EXAMEN, SubjectType.TD, SubjectType.RATTRAPAGE];
export const YEARS = ['2023-2024', '2022-2023', '2021-2022', '2020-2021'];
