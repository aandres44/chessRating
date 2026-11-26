# chessRating — Jalisco Chess Ratings

Web app to **browse** the chess ratings of the state of Jalisco, Mexico (Classical, Rapid and Blitz).

**The app does NOT calculate ratings.** Ratings are calculated by the state rating officer, who publishes three Excel files every month. This project imports those files, keeps the monthly history and displays it.

## Product direction

Main design reference: **2700chess.com** (secondary: mexicochess.com/ratings). Dense, compact tables; rating and rank changes always visible; tabs per group; player profiles with a rating history chart.

Source data is **monthly, not live**: every "change" is computed against the previous month's list. The source has no games or results, so there is no "games played" column and no live rating.

Feature roadmap (incremental):
1. **Home page:** top 10 lists per category (Open, Women, U8–U20, 50+, 65+) with a global Classical / Rapid / Blitz switch.
2. **Full ranking** per time control: #, Player, Title, Rating, **+/− vs previous month**, **↑↓ rank change**, Birth year. Search and pagination.
3. **Player profile:** current rating for each time control, monthly history chart, peak rating.
4. **Monthly summary:** biggest gainers, new players, top 10 changes.

## Tech stack

| Area | Technology |
|---|---|
| Frontend | React 19, TypeScript, Vite |
| UI | shadcn/ui + Tailwind CSS v4 (components in `src/components/ui/`) |
| Tables | TanStack Table |
| Routing | React Router v7 (`createBrowserRouter`) |
| Data fetching | `@supabase/supabase-js` + TanStack Query (planned) |
| Database | Supabase (PostgreSQL) |
| Importer | Python 3, pandas, xlrd, psycopg 3. No ORM; SQL lives in `queries.py` |

## Project structure

```
src/
  components/        # shared components (navbar) and shadcn ui/
  features/
    rankings/        # ranking tables per time control
    players/         # player profile
  router/Router.tsx
  types/
importer/            # Python importer, with its own .venv
ratings/YYYY/MM/     # monthly source Excel files (git-ignored: personal data)
supabase/migrations/ # versioned SQL schema (planned)
```

## Commands

```powershell
# Frontend
npm run dev
npm run build
npm run lint

# Importer (run from importer/)
.venv\Scripts\Activate.ps1
python main.py            # target: python main.py --year 2026 --month 11
```

## Source files (Excel)

- Three `.xls` files per month, one per time control, e.g. `Rating Rápido Noviembre 2026.xls`.
- The format is the Swiss-Manager rating list import format.
- Read only the **`Nat`** sheet. Ignore any other sheet.
- Columns:

| Column | Usage |
|---|---|
| `ID_No` | Row number within the file. **Not a stable ID**, never use it. |
| `Name` | `"Last names, First names"` |
| `Fed` | National federation (MEX, COL, USA…). Not the Mexican state. |
| `ClubName` | Always empty. Ignore. |
| `Birthday` | Text `DD.MM.YYYY`, present on every row |
| `Rtg_Int` | Rating |
| `Sex` | `f` = female, empty = male (source convention) |
| `K` | K-factor (20, 25, 30, 35, 40) |
| `Title` | GM, IM, FM, CM, NM, WGM, WIM, WFM, WCM or empty |

- Reference: the November 2026 Rapid list has 5,907 players and no duplicate names.

## Data rules

- **Player identity:** `players.id` is an internal identity key that never changes. Use it in URLs and foreign keys.
- **Matching on import:** match players by `(name, birthday)`. The source does not publish a stable ID.
- **Change report:** every import must report new players, players missing compared to the previous month, and possible renames (same birthday, similar name). Ambiguous cases are reviewed and merged manually. Never auto-merge.
- **History:** one row per player, time control and month in `rating_snapshots`. `period` is the first day of the file's month (never `CURRENT_DATE`). Re-importing a month **updates** existing rows, so source corrections are applied.
- **Current rating:** comes from the latest snapshot via a view. There is no separate current-rating table.
- **Categories follow FIDE rules and use birth year only.** For a list in year `Y`:
  - `U{N}` (U8, U10, U12, U14, U16, U18, U20): `birth_year >= Y - N`
  - `50+`: `birth_year <= Y - 50`
  - `65+`: `birth_year <= Y - 65`
  - Categories are inclusive (a U10 player also appears in U12…U20). They are computed, never stored. Women/Girls lists filter by `sex = 'F'`.
- **Privacy:** the full birth date is stored but **only the birth year is ever exposed publicly**. With RLS, the frontend reads only from views that do not expose `birthday`. Never commit `.xls`, `.env` or `.venv`.

## Conventions

- Code, identifiers, comments and commit messages in English. UI text in Spanish.
- Keep the importer as plain SQL in `queries.py`. Do not add an ORM.
- Propose a plan before large or cross-cutting changes.

## Known issues / TODO

- Importer: inconsistent imports (`from importer.models` vs `from models`). `upsert_rating` and `insert_snapshot` are stubs. `main.py` passes the `date` class instead of a date.
- `requirements.txt` is UTF-16 and includes unused Supabase packages. Regenerate it as minimal UTF-8.
- Remove `dotenv` and `tsx` from `package.json` (Vite loads `.env` with the `VITE_` prefix).
- Delete `App.tsx`, `App.css` (unused Vite template) and `src/assets/structure.txt`.
- Merge the three ranking pages into a single `/rating/:control` route. Add an index route `/`.
- Types: `Sex` only allows `"F"`. Split `Player` from `Rating`. Align `Category` with the FIDE categories above.
- The Supabase project is paused and empty. The schema will be recreated from migrations.
