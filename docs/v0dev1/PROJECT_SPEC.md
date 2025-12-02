# Danbrit Direct – B2B E-commerce Platform  
**Projekt Specifikation til Cursor (Master/System Prompt)**  
*Denne fil fungerer som en permanent opskrift. Cursor skal ALDRIG afvige fra denne specifikation uden eksplicit ændring.*

---

## 1. PROJEKT OVERBLIK
Danbrit Direct skal have en ny, moderne B2B e-handelsplatform hostet på Vercel.

Webshoppen består af to sites:

1. **danbritdirect.dk**  
   - Dansk B2B shop  
   - Kunder i Danmark  
   - Viser priser og rabatter pr. kunde via Business Central  

2. **danbrit.com**  
   - International version  
   - Engelsk sprog  
   - Skal kunne redirecte til DK-sitet ved valg af Danmark  

Virksomheden er stor, og **sikkerhed er kritisk**.

---

## 2. MÅL MED PLATFORMEN
Platformen skal:

- Gøre det let for B2B-kunder at finde og købe batterier  
- Vise kundespecifikke priser og rabatter (fra Business Central)  
- Have fuld ERP-integration  
- Have både **kundelogin** og **admin-login**  
- Kunne skalere til flere lande og sprog  
- Være "developer-friendly" og "ops-friendly"  
- Være ekstrem stabil og sikker

---

## 3. UX & FUNKTIONALITETSKRAV

### 3.1 Produktfinderen
Kunder skal kunne finde batterier via:

- Fritekst (varenr., OEM, navn)  
- Filtrer (Ah, Volt, dimensioner, anvendelse, teknologi m.m.)  
- Nummerpladesøgning (eksternt API modul)

### 3.2 Produktvisning
- Produktliste + filtre  
- Produktside med:
  - Tekniske data  
  - Lagerstatus  
  - Pris + kundespecifik pris  
  - Relaterede produkter  
  - "Passer til"-sektion  

### 3.3 Kundelogin (B2B)
Kunder skal efter login kunne:

- Se kundespecifikke priser  
- Se rabatter pr. varegruppe  
- Se tidligere køb  
- Genbestille med ét klik  
- Se sidst købte varer  
- Administrere nyhedsbrevs-tilmelding  
- Se kampagner relevante for dem  
- Se ordrehistorik  
- Se favoritter/lister

### 3.4 Admin-login
Admin-brugere skal kunne:

- Se Business Central-integrationsstatus  
- Se integrationslogs  
- Administrere kategori-mapping (BC varegrupper → webshop)  
- Administrere hero-sektioner og indhold  
- Administrere kampagner/tilbud til kundesegmenter  
- Konfigurere visning af lagerstatus og prisstrategi  

### 3.5 Checkout
- B2B checkout  
- Kunde vælger leveringsadresse  
- Order note/reference  
- Order oprettes i Business Central

---

## 4. TEKNISK ARKITEKTUR

### 4.1 Tech stack (krav)
- **Next.js (seneste) – App Router**
- **React Server Components**
- **TypeScript**
- **Prisma ORM**
- **Postgres** (Neon/Supabase/PlanetScale – men hold det generisk)
- **NextAuth** (Roller: CUSTOMER, ADMIN)
- **Tailwind CSS + valgfrit UI-library**
- **Host: Vercel**
- **API-kommunikation via Next.js Route Handlers**

### 4.2 Filstruktur (krav)
Cursor skal bruge denne struktur som reference (må gerne tilpasse, men ikke afvige markant uden god begrundelse):

\`\`\`txt
/app
  /(public)
    page.tsx
    /products
      page.tsx
      [category]/
        page.tsx
      [product]/
        page.tsx
    /license-plate/page.tsx
    /solutions/[slug]/page.tsx
    /support/...

  /(customer)
    /login/page.tsx
    /register/page.tsx
    /dashboard/page.tsx
    /orders/page.tsx
    /orders/[id]/page.tsx
    /favorites/page.tsx

  /(admin)
    /login/page.tsx
    /dashboard/page.tsx
    /integrations/page.tsx
    /catalog-mapping/page.tsx
    /campaigns/page.tsx
    /content/page.tsx

/app/api
  /products/route.ts
  /search/route.ts
  /license-plate/route.ts
  /customer/orders/route.ts
  /customer/prices/route.ts
  /customer/favorites/route.ts
  /admin/integrations/status/route.ts
  /admin/mapping/route.ts
  /admin/campaigns/route.ts
  /integrations/business-central/prices/route.ts
  /integrations/business-central/stock/route.ts
  /integrations/business-central/orders/route.ts
\`\`\`

---

## 5. DATA MODELLER (PRISMA)

Cursor skal bruge disse som reference og må gerne udvide efter behov:

\`\`\`prisma
model Product {
  id          String   @id @default(cuid())
  sku         String
  oemNumber   String?
  name        String
  description String?
  categoryId  String
  category    Category @relation(fields: [categoryId], references: [id])
  ah          Int?
  voltage     Int?
  length      Int?
  width       Int?
  height      Int?
  technology  String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Category {
  id           String    @id @default(cuid())
  name         String
  slug         String    @unique
  parentId     String?
  bcGroupCode  String?
  products     Product[]
}

model Customer {
  id                String   @id @default(cuid())
  email             String   @unique
  passwordHash      String
  customerNumber    String   @unique
  name              String
  newsletterConsent Boolean  @default(false)
  segmentId         String?
  segment           CustomerGroup? @relation(fields: [segmentId], references: [id])
  orders            Order[]
}

model CustomerGroup {
  id        String      @id @default(cuid())
  code      String      @unique
  name      String
  discounts PriceRule[]
}

model PriceRule {
  id              String        @id @default(cuid())
  customerGroupId String
  categoryId      String?
  discountPercent Float
  group           CustomerGroup @relation(fields: [customerGroupId], references: [id])
  category        Category?     @relation(fields: [categoryId], references: [id])
}

model Order {
  id             String      @id @default(cuid())
  customerId     String
  customer       Customer    @relation(fields: [customerId], references: [id])
  bcOrderNumber  String?
  status         String
  total          Float
  currency       String
  items          OrderLine[]
  createdAt      DateTime @default(now())
}

model OrderLine {
  id         String  @id @default(cuid())
  orderId    String
  productId  String
  quantity   Int
  unitPrice  Float
  discount   Float?
  order      Order   @relation(fields: [orderId], references: [id])
  product    Product @relation(fields: [productId], references: [id])
}

model AdminUser {
  id           String   @id @default(cuid())
  email        String   @unique
  passwordHash String
  role         String   // "ADMIN", "EDITOR", "SALES"
}

model IntegrationLog {
  id        String   @id @default(cuid())
  type      String   // PRICE_LOOKUP, STOCK_LOOKUP, ORDER_CREATE, etc.
  status    String   // SUCCESS, ERROR
  request   Json?
  response  Json?
  createdAt DateTime @default(now())
}
\`\`\`

Evt. fremtidig CMS-model kan tilføjes senere (Page, Hero, Campaign), men er ikke kritisk i første iteration.

---

## 6. BUSINESS CENTRAL INTEGRATION

Cursor skal bruge denne struktur til integrationslaget:

\`\`\`ts
// /lib/integrations/businessCentralClient.ts
export type BusinessCentralConfig = {
  baseUrl: string
  apiKey?: string
  username?: string
  password?: string
}

export const businessCentral = {
  async getCustomer(customerId: string) {
    // henter kundedata fra BC
  },
  async getCustomerPrice(customerId: string, itemId: string, qty: number) {
    // henter pris/rabat
  },
  async getStock(itemId: string) {
    // henter lagerstatus
  },
  async createOrder(payload: any) {
    // opretter ordre i BC
  },
  async getCustomerOrders(customerId: string) {
    // henter tidligere ordrer
  },
}
\`\`\`

Alle kald skal:
- Køre over HTTPS  
- Bruge API-nøgle eller Basic Auth fra environment variables  
- Have timeout, retry og error handling  
- Logges i `IntegrationLog`

---

## 7. AUTENTIFIKATION & AUTH

### 7.1 NextAuth krav
- Brug **NextAuth** eller tilsvarende moderne auth-løsning med Credentials Provider.  
- Passwords hashes med **Argon2id** eller **bcrypt** med stærke cost-parametre.  
- Sessioner kører via **httpOnly, secure cookies** (ingen tokens i localStorage).  
- Roller:  
  - `CUSTOMER` (kundelogin)  
  - `ADMIN` (admin-login)  

### 7.2 Middleware krav
- `/middleware.ts` skal beskytte:  
  - `/app/(customer)` – kun CUSTOMER/ADMIN med valid session  
  - `/app/(admin)` – kun ADMIN  
- Rollecheck skal ske både i middleware og i server components (server-side autorisation).

---

## 8. SIKKERHEDSKRAV (MEGET VIGTIGT)

Sikkerhed er på niveau med funktionalitet. Følg OWASP best practices.

### 8.1 Autentifikation & sessioner
- httpOnly, secure cookies til sessioner.  
- Ingen tokens i LocalStorage.  
- Password hashing med Argon2id eller bcrypt.  
- Beskyt mod:
  - Brute force (rate limiting og lockout)  
  - CSRF (især på POST/PUT/DELETE – fx NextAuth CSRF)  
  - Session fixation (ny session ved login/logout)  

### 8.2 Autorisation & datatilgang
- Role-based access control (RBAC): CUSTOMER, ADMIN, evt. SALES/EDITOR.  
- Kunder må KUN se og ændre egne data (ordrer, profiler, priser).  
- Admin-endpoints kun for ADMIN.  
- Fælles `authorize()`-helper til rolle- og ressourcechecks.  

### 8.3 Databeskyttelse & GDPR
- Al trafik over HTTPS (Vercel håndterer TLS, men app antager HTTPS-only).  
- Ingen plaintext passwords/API-nøgler i DB eller logs.  
- Begræns persondata i logs.  
- Mulighed for deaktivering af kundekonti og opdatering af data.  

### 8.4 Secrets & miljøer
- Alle secrets via `process.env`.  
- Ingen hardcodede credentials.  
- Separate miljøer: dev, staging, production.  
- Brug Vercel Environment Variables.  

### 8.5 Business Central-integration – sikkerhed
- Kommunikation altid via HTTPS.  
- Auth via API-key, Basic Auth eller OAuth2 (defineret via config/env).  
- Inputvalidering på alle payloads til/fra BC.  
- Timeouts, retries og logging.  
- Least privilege for BC-servicebrugeren.  

### 8.6 Inputvalidering & injection-beskyttelse
- Valider og sanitér al input (forms, søgninger, nummerplade, admin-forms).  
- Beskyt mod:
  - SQL injection (Prisma + sund praksis)  
  - XSS (ingen usanitized HTML, undgå `dangerouslySetInnerHTML`)  
  - Command injection (ingen shell-kommandoer med user input)  
- Brug TypeScript + schema-validation (fx Zod) i API endpoints.  

### 8.7 Rate limiting & misbrug
- Rate limiting på kritiske endpoints: login, nummerplade-lookup, integrationskald.  
- Overvej Edge middleware til simplere IP-baserede limits.  
- Log mistænkelig aktivitet.  

### 8.8 Logging, overvågning & audit
- Struktureret logging (info, warn, error).  
- Log integrationsfejl (uden følsomme data).  
- Audittrail for vigtige admin-ændringer (mapping, kampagner).  

### 8.9 Admin-UI sikkerhed
- Admin-område tydeligt adskilt.  
- Layout i `/app/(admin)/layout.tsx` tjekker ADMIN-session server-side og redirecter ellers.  
- Stram inputvalidering i admin-API'er.  

### 8.10 Sikker udviklingsproces
- Koden skal være let at sikkerhedsreviewe.  
- Ingen "smutveje" uden auth.  
- Tests for roller og adgangskontrol på centrale endpoints.  

---

## 9. DEPLOYMENT

Platformen skal:

- Deployes på **Vercel**  
- Bruge **Environment Variables** til DB, BC osv.  
- Have mindst **staging** og **production** environment  
- Understøtte **preview deployments** pr. branch  
- Bruge Next.js caching (`fetch` med `cache`/`revalidate`) og evt. on-demand revalidation  

---

## 10. HVORDAN CURSOR SKAL SVARE

Når Cursor genererer kode, skal den:

- Bruge **TypeScript**  
- Brug moderne **Next.js App Router + RSC** patterns  
- Kommentere koden kort og præcist  
- Følge strukturen og kravene i denne fil  
- Forbedre implementeringsdetaljer, men **ikke ændre forretningskrav**  
- Aldrig introducere usikre mønstre  
- Foreslå forbedringer, hvis noget kan gøres mere robust eller skalerbart  

---

## 11. STARTOPGAVE TIL CURSOR

Når udviklingen påbegyndes, skal Cursor først:

1. Generere komplet Next.js app- og filstruktur baseret på denne specifikation.  
2. Generere `schema.prisma` med modellerne beskrevet ovenfor.  
3. Opsætte database-klient (`lib/db.ts`) og migrations (Prisma).  
4. Opsætte auth (NextAuth, credentials provider, roller).  
5. Generere placeholder-sider for:
   - Forside
   - Produktliste
   - Produktside
   - Login (kunde)
   - Login (admin)
   - Dashboard (kunde)
   - Dashboard (admin)
6. Opsætte miljøvariabler (eksempel `.env.local.example`).  
7. Oprette stubs for Business Central integration i `/lib/integrations/businessCentralClient.ts`.  

Herefter kan Cursor bygge de enkelte features én ad gangen med udgangspunkt i denne specifikation.

---

**Dette dokument er det autoritative grundlag for hele projektet.  
Cursor skal altid kunne læse og bruge dette som reference.**
