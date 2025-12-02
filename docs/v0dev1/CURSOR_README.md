# Brug af PROJECT_SPEC.md i Cursor

Denne fil forklarer kort, hvordan du bruger specifikationsfilerne sammen med Cursor i udviklingen af Danbrit Direct.

## 1. Placering af filer
Læg disse filer i roden af dit repo:

- `PROJECT_SPEC.md`
- `SECURITY_GUIDELINES.md`
- `CURSOR_README.md` (denne fil)

## 2. Sådan bruger du dem i Cursor

Når du starter en ny Cursor-session eller ny chat i projektet, kan du skrive noget i stil med:

> Du har en fuld projektspecifikation i filen `PROJECT_SPEC.md` og supplerende sikkerhedskrav i `SECURITY_GUIDELINES.md`.  
> Læs og følg disse filer nøje.  
> Jeg vil nu have dig til at udføre opgaver i dette projekt i overensstemmelse med specifikationen.

Cursor vil typisk selv begynde at læse filerne, men du kan eksplicit henvise til dem, når du stiller opgaver:

- "Implementér NextAuth setup som beskrevet i PROJECT_SPEC.md"
- "Generér `schema.prisma` ud fra modellerne i PROJECT_SPEC.md"
- "Sørg for at overholde SECURITY_GUIDELINES.md i denne feature"

## 3. Typisk første opgave til Cursor

En god første prompt kan være:

> Læs `PROJECT_SPEC.md` igennem.  
> Opret derefter den grundlæggende Next.js 14 App Router struktur, som beskrevet i specifikationen (mapper i `/app`, `/app/api` osv.).  
> Opret også et første udkast til `schema.prisma` baseret på modellerne i specifikationen.  
> Forklar kort dine valg, og sørg for at koden kan køre på Vercel.

## 4. Løbende brug

Når du beder Cursor om at lave nye features, så mind den om:

- At sikkerhed er kritisk (henvis til SECURITY_GUIDELINES.md).
- At den ikke må afvige fra forretningskravene i PROJECT_SPEC.md.
- At alt skal være i TypeScript og moderne Next.js patterns.

På den måde får du et meget konsistent projektforløb, hvor Cursor arbejder som en "in-house seniorudvikler" med en fast arkitektur at gå ud fra.
