# Translation review

The UI was translated into 12 languages on 2026-11-01 by model translators and checked by two model reviewers. No native speaker has reviewed it yet. Until one does, the locale stays out of `reviewedLocales` in `src/i18n/locales.ts`, so its pages are not indexed.

To accept a locale after a native review, add its code to `reviewedLocales`.

## Model review scores (1–5)

sv 5 · de 4.5 · fr 4.5 · da 4.5 · fi 4.5 · is 4.5 · sl 4 · nb 4 · nl 4 · hr 4 · et 4 · fo 3

## Open questions for native speakers

- **All:** counts use one fixed noun form ("{count} tables"). Slavic and Nordic languages need other forms for some numbers. A fix is `Intl.PluralRules` with plural variants per string.
- **All except sv:** GitHub "issue" is kept in English in most languages.
- **sl:** official name of the Croatian office ("Državni zavod za statistiko"?); "pravilnik o zasebnosti družbe Cloudflare".
- **nb, da:** the example question "den siste/seneste inflasjonen/inflation i X" sounds unnatural; "inflasjonstakten" / "inflationstakt"? nb answers use "raten".
- **da:** "enheder" for "measures" means "units"; "indholdsvariabler"?
- **fi:** "alimmillaan" vs "matalimmillaan"; "Valitse ei todennusta" is stiff; "{count} työkalukutsua" is wrong for 1.
- **is:** footer disclaimer wording; "Holland" vs "Niðurlönd".
- **de:** official German names for SSB and CBS; "Wählen Sie „No authentication“."; FAQ repeats "Statistikamt".
- **fr:** "Choisissez l’absence d’authentification"; "issue" vs "ticket"; U+202F before ; ? !.
- **nl:** office-name capitals; "3,3 %" vs "3,3%".
- **hr:** „…” vs „…“ quotes; informal step titles vs formal "Vi"; "Kod" vs "Oznaka".
- **et:** "Kui suur on…"; "katvus"; percent spacing.
- **fo (needs the most work):** "vitlíki" for AI; "Valmynd", "Treytir", "Avmarkarin", "váttan", "Ongin/Eingin"; loanwords "cookies", "loggar", "issue".
