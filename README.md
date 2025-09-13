# QA-SauceDemo

# QA E2E – Playwright + TypeScript (SauceDemo)

## Cel projektu
Projekt stworzony jako element portfolio testera/QA.  
Pokazuje umiejętności w zakresie:
a) automatyzacji testów (UI + API),
b) stosowania wzorca **Page Object Model**,
c) przygotowania danych testowych i konfiguracji,
d) integracji z **CI/CD (GitHub Actions)**,
e) generowania raportów i analizy błędów.

Testy wykonano na aplikacji demo: [https://www.saucedemo.com/].

---

##  Stack technologiczny
- [Playwright](https://playwright.dev/) (E2E, API)
- TypeScript
- Node.js

---

## 📂 Struktura projektu
qa-saucedemo-playwright/
├─ tests/ # testy E2E i API
│ ├─ login.spec.ts
│ ├─ cart.spec.ts
│ └─ api.spec.ts
├─ src/pages/ # Page Object Model
│ ├─ LoginPage.ts
│ └─ InventoryPage.ts
├─ fixtures/ # dane testowe
│ └─ users.ts
├─ .github/workflows/ # konfiguracja CI/CD
│ └─ ci.yml
├─ playwright.config.ts # konfiguracja Playwright
├─ package.json
└─ README.md

---

## ▶️ Uruchamianie testów lokalnie

### 1. Instalacja zależności
```bash
npm install
npx playwright install
```
2.Uruchamianie testów
```bash
npm run test          # wszystkie testy headless
npm run test:headed   # testy z widoczną przeglądarką
npm run report        # podgląd raportu HTML

```
Scenariusze testowe:

1)Poprawne logowanie użytkownika
2)Logowanie z błędnymi danymi
3)Próba logowania użytkownika zablokowanego
4)Dodanie produktu do koszyka

Dla każdego nieudanego testu generowane są:
-zrzuty ekranu,
-nagranie wideo,
-plik trace do analizy kroków.
