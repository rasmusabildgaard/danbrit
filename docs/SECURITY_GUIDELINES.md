
# Danbrit Direct – Sikkerhedsguidelines (Supplerende)

Denne fil uddyber sikkerhedskravene fra PROJECT_SPEC.md. Brug den som reference ved alle ændringer i auth, integrationer og admin-funktionalitet.

## 1. Overordnede principper
- "Secure by default" – standardindstillinger skal være sikre.
- Følg OWASP Top 10 og generelle best practices.
- Alt nyt arbejde skal gennem tænkes ift. autentifikation, autorisation, dataeksponering og logging.

## 2. Autentifikation
- Brug NextAuth med Credentials Provider til både kunder og admin-brugere.
- Password hashing:
  - Foretrukket: Argon2id (med fornuftig memory/cost).
  - Alternativ: bcrypt (min. 10–12 cost).
- Sessioner:
  - Kun httpOnly, secure cookies.
  - Ingen tokens i localStorage/sessionStorage.
  - Rotér session id ved login og logout.

## 3. Autorisation
- Implementér central rolle-/autorisation-logik, fx helper:

  ```ts
  type Role = "CUSTOMER" | "ADMIN" | "SALES"

  function assertRole(user: { role?: Role }, allowed: Role[]) {
    if (!user || !user.role || !allowed.includes(user.role)) {
      throw new Error("Forbidden")
    }
  }
  ```

- Alle API-route handlers og server components, der arbejder med følsomme data, skal bruge server-side rollecheck.
- Kunder må aldrig kunne angive et `customerId` i request body og læse en andens data. Brug altid sessionens `user.id` som kilde til identitet.

## 4. Inputvalidering
- Brug Zod eller tilsvarende til at validere input i alle API-routes.
- Afvis eller normalisér alle værdier (e-mail, nummerplade, fritekstsøgning).

## 5. Business Central-integration
- Environment variables (eksempel):
  - `BC_BASE_URL`
  - `BC_API_KEY` eller `BC_USERNAME` + `BC_PASSWORD`
- Alle kald via `fetch`:
  - Med timeout (AbortController).
  - Med fornuftig retry (fx 2–3 forsøg med backoff).
  - Fejl logges i `IntegrationLog` med minimal sensitiv info.

## 6. Admin-området
- Adgang kun for ADMIN-rolle.
- Layout i `/app/(admin)/layout.tsx` skal:
  - Hente session server-side.
  - Redirecte til `/admin/login` hvis ikke ADMIN.
- Audit:
  - Alle ændringer i mapper, kampagner, centrale settings bør logges (fx i `IntegrationLog` eller separat `AuditLog`).

## 7. Rate limiting
- Overvej Edge middleware til at beskytte:
  - `/api/license-plate`
  - `/api/auth/*`
  - `/api/integrations/*`
- Simpel IP-baseret rate limit er bedre end ingen.

## 8. Logging
- Brug et struktureret logging-interface (selv hvis det i første omgang bare wrapper `console.log`):
  - `logger.info({ msg, meta })`
  - `logger.error({ msg, error, meta })`
- Log aldrig passwords, API keys eller fulde persondata.

## 9. Secrets & environments
- Brug `.env.local` og Vercel Environment Variables.
- Ingen secrets i git.
- Dokumentér hvilke variabler der kræves i en `.env.example` fil.

## 10. Sikkerhedstests
- Minimum:
  - Tests, der sikrer at:
    - Kunder ikke kan tilgå admin-routes.
    - En kunde ikke kan tilgå en anden kundes ordre.
  - En gennemgang af alle nye endpoints ift. OWASP Top 10.

Denne fil skal opdateres, hvis sikkerhedskravene ændres eller udvides.
