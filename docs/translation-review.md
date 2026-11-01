# Translation review

The UI was translated into 12 languages on 2026-11-01 by model translators and checked by two model reviewers. No native speaker has reviewed it yet. Until one does, the locale stays out of `reviewedLocales` in `src/i18n/locales.ts`, so its pages are not indexed.

To accept a locale after a native review, add its code to `reviewedLocales`.

## Model review scores (1–5)

Round 1 (all strings): sv 5 · de 4.5 · fr 4.5 · da 4.5 · fi 4.5 · is 4.5 · sl 4 · nb 4 · nl 4 · hr 4 · et 4 · fo 3

Round 2 (hero, key figures, country pages, FAQ, privacy): da 5 · sv 5 · sl 4.5 · nb 4.5 · fi 4.5 · is 4.5 · de 4.5 · nl 4.5 · fr 4.5 · et 4 · hr 4 · fo 3.5

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
- **Round 2:** is hero title is very long ("gervigreindaraðstoðarmanninum þínum"); fi eyebrow "Maksuton ja avointa lähdekoodia" (not parallel); hr eyebrow "Besplatno i otvorenog koda"; hr "u svojem asistentu" vs "u svom"; fr "Recherche seule" vs "Recherche uniquement"; et "lingib tabeli", "enamiku ameteid", "kaetus"; fo "vitlíkishjálpari", "fanan"; sl "navede"/"navaja", "v npm"/"na npm"; nl "100 %" vs "100%".
- **Code:** client tab labels such as "Run locally" are not translated yet, so the FAQ quotes them in English.
