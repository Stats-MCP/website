/** Translated country texts for one UI language, keyed by country id (`si`, `no`, …). */
export type CountryText = Record<
  string,
  {
    name: string;
    office: string;
    licence: string;
    example?: {
      question: string;
      answer: string;
      /** Must appear verbatim in `answer`. */
      highlight: string;
      seriesLabel: string;
    };
  }
>;
