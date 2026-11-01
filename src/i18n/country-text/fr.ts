import type { CountryText } from '@/data/country-text';

const inflation = 'Inflation annuelle, %';

export const fr: CountryText = {
  si: {
    name: 'Slovénie',
    office: 'Office statistique de la République de Slovénie',
    licence: 'Réutilisation libre avec mention de la source',
    example: {
      question: 'Quel est le dernier taux d’inflation en Slovénie ?',
      answer:
        'En octobre 2026, les prix étaient supérieurs de 3,3 % à ceux d’octobre 2025. L’inflation a atteint son maximum en mai et en juin (3,6 %).',
      highlight: '3,3 %',
      seriesLabel: inflation
    }
  },
  no: {
    name: 'Norvège',
    office: 'Office statistique de la Norvège',
    licence: 'CC BY 4.0',
    example: {
      question: 'Comment les prix des logements ont-ils évolué en Norvège ?',
      answer:
        'L’indice des prix des logements anciens en Norvège était de 158,3 au 3e trimestre 2026 (2015 = 100). Au 3e trimestre 2025, il était de 153,2.',
      highlight: '158,3',
      seriesLabel: 'Indice des prix des logements anciens (2015 = 100)'
    }
  },
  ee: {
    name: 'Estonie',
    office: 'Office statistique de l’Estonie',
    licence: 'CC BY-SA 4.0',
    example: {
      question: 'Quel est le salaire mensuel moyen en Estonie ?',
      answer:
        'Le salaire mensuel brut moyen en Estonie était de 2 243 € au 2e trimestre 2026. Au 2e trimestre 2025, il était de 2 126 €.',
      highlight: '2 243 €',
      seriesLabel: 'Salaire mensuel brut moyen, €'
    }
  },
  fo: {
    name: 'Îles Féroé',
    office: 'Office statistique des îles Féroé',
    licence: 'CC BY 4.0',
    example: {
      question: 'Quel est le dernier taux d’inflation aux îles Féroé ?',
      answer:
        'En août 2026, les prix étaient supérieurs de 2,5 % à ceux d’août 2025. En février 2026, ils étaient inférieurs de 0,2 % à ceux de l’année précédente.',
      highlight: '2,5 %',
      seriesLabel: inflation
    }
  },
  fi: {
    name: 'Finlande',
    office: 'Office statistique de la Finlande',
    licence: 'CC BY 4.0',
    example: {
      question: 'Quel est le niveau du chômage en Finlande ?',
      answer:
        'Le taux de chômage tendanciel en Finlande était de 10,5 % en septembre 2026. En septembre 2025, il était de 10,0 %.',
      highlight: '10,5 %',
      seriesLabel: 'Taux de chômage, tendance, %'
    }
  },
  se: {
    name: 'Suède',
    office: 'Office statistique de la Suède',
    licence: 'CC0',
    example: {
      question: 'Combien de personnes vivent en Suède ?',
      answer:
        'La Suède comptait 10 621 103 habitants en août 2026. En août 2025, elle en comptait 10 605 098.',
      highlight: '10 621 103',
      seriesLabel: 'Population, personnes'
    }
  },
  dk: {
    name: 'Danemark',
    office: 'Office statistique du Danemark',
    licence: 'CC BY 4.0',
    example: {
      question: 'Combien de personnes sont au chômage au Danemark ?',
      answer:
        'En septembre 2026, le Danemark comptait 83 055 chômeurs nets, en données corrigées des variations saisonnières. En septembre 2025, ils étaient 77 523.',
      highlight: '83 055',
      seriesLabel: 'Chômeurs nets, CVS, personnes'
    }
  },
  nl: {
    name: 'Pays-Bas',
    office: 'Bureau central de la statistique des Pays-Bas',
    licence: 'CC BY 4.0',
    example: {
      question: 'Combien de personnes vivent aux Pays-Bas ?',
      answer:
        'Fin septembre 2026, les Pays-Bas comptaient 18 192 693 habitants. Un an plus tôt, ils en comptaient 18 122 384.',
      highlight: '18 192 693',
      seriesLabel: 'Population en fin de mois, personnes'
    }
  },
  eu: {
    name: 'UE et AELE',
    office: 'Eurostat, l’office statistique de l’Union européenne',
    licence: 'Réutilisation libre avec mention de la source',
    example: {
      question: 'Quel est le taux de chômage dans l’UE ?',
      answer:
        'Le taux de chômage de l’UE était de 6,2 % en septembre 2026, en données corrigées des variations saisonnières. En septembre 2025, il était de 6,0 %.',
      highlight: '6,2 %',
      seriesLabel: 'Taux de chômage UE27, CVS, %'
    }
  },
  ca: {
    name: 'Canada',
    office: 'Statistique Canada',
    licence: 'Licence ouverte de Statistique Canada',
    example: {
      question: 'Quel est le taux de chômage au Canada ?',
      answer:
        'Le taux de chômage au Canada était de 6,5 % en septembre 2026, en données désaisonnalisées. En septembre 2025, il était de 7,1 %.',
      highlight: '6,5 %',
      seriesLabel: 'Taux de chômage, désaisonnalisé, %'
    }
  },
  is: {
    name: 'Islande',
    office: 'Office statistique de l’Islande',
    licence: 'CC BY 4.0',
    example: {
      question: 'À quel rythme les salaires augmentent-ils en Islande ?',
      answer:
        'En septembre 2026, les salaires en Islande étaient supérieurs de 5,6 % à ceux de l’année précédente. En septembre 2025, la hausse annuelle était de 7,8 %.',
      highlight: '5,6 %',
      seriesLabel: 'Indice des salaires, variation annuelle, %'
    }
  },
  hr: {
    name: 'Croatie',
    office: 'Bureau croate de statistique',
    licence: 'Licence ouverte (Croatie)',
    example: {
      question:
        'Combien d’arrivées de touristes la Croatie a-t-elle enregistrées en août ?',
      answer:
        'En août 2026, la Croatie a enregistré 4 823 649 arrivées de touristes dans des hébergements marchands. En août 2025, elle en avait enregistré 4 714 658.',
      highlight: '4 823 649',
      seriesLabel: 'Arrivées de touristes, personnes'
    }
  },
  ie: {
    name: 'Irlande',
    office: 'Office central de la statistique d’Irlande',
    licence: 'CC BY 4.0',
    example: {
      question:
        'À quel rythme les prix de l’immobilier augmentent-ils en Irlande ?',
      answer:
        'Les prix des logements en Irlande ont augmenté de 5,1 % sur les 12 mois jusqu’en août 2026. En août 2025, la hausse annuelle était de 7,5 %.',
      highlight: '5,1 %',
      seriesLabel: 'Prix des logements, variation sur 12 mois, %'
    }
  }
};
