# Prison Management System

Full-stack prison management system with a Node.js/Express API, PostgreSQL, and a React/TailwindCSS frontend. Docker Compose orchestrates backend, database, and frontend.

---

## Tech Stack

- **Backend:** Node.js, Express, pg (Pool), custom middleware (logger, error handler)
- **Frontend:** React, TailwindCSS
- **Database:** PostgreSQL (Dockerized, init scripts in `/db_init`)
- **Container Orchestration:** Docker Compose

---

## Folder Structure

```
Prison/
├── Prison-BackEnd/
│   ├── src/
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   └── .env
├── Prison-FrontEnd/
│   ├── src/
│   ├── vite.config.js
│   ├── package.json
│   └── .env
├── docker-compose.yml
└── README.md
```

---

## Backend (Express API)

- **Modules / Resources**
  - Managers
  - Facilities
  - Prisoners
  - Prisoner Cases
  - Staff
  - Visitors
  - Visits
  - Offences
  - Allowed Facilities (Staff & Prisoners)
  - Utilities (e.g., `getAllData`)
- **Middleware**
  - Request logger
  - Centralized error handler
- **Database**
  - PostgreSQL via `pg` Pool
  - Connection host: `db` (from Docker), port `5432`, credentials from `.env`
- **Server Port**
  - `8080`
- **API Examples**
  - `GET /managers/`
  - `GET /prisoners/`
  - `GET /visitors/`
  - `GET /utils/getAllData`

---

## Frontend (React + Vite)

- Vite React setup with TailwindCSS
- React Router for navigation
- Context Provider for shared state (managers, facilities, staff, prisoners, visitors, visits, offences, cases, shifts, etc.)
- UI building blocks: cards, buttons, spinner, layouts, forms
- Dev server proxied: `/api` → `http://localhost:8080`

---

## Docker Setup

- **Services**
  - Backend: port `8080`
  - Frontend: port `5173`
  - Postgres: exposed `5433` → container `5432`
- **Volumes**
  - Named volume for DB persistence
  - Init scripts mounted into `/db_init` (e.g., `schema.sql`, `seed.sql`)
- **Compose commands**
  ```sh
  docker compose up --build             # build & start all
  docker compose up -d                  # start in background
  docker compose down                   # stop & remove
  docker logs -f <container>            # stream logs
  docker compose restart <container>    # restart one container
  ```

---

## Database Schema

- **Enums**
  - `sex` (`Male`, `Female`)
  - `facilitycondition` (`Under Construction`, `Maintenance`, `Accepting`, `Full`)
  - `offences` (`assault`, `contraband`, `disobedience`, `escape_attempt`, `vandalism`)
  - `shifttype` (`A`, `B`, `C`)
- **Tables (high level)**
  - `facilities` (id, name, manager_id, location, state, capacity, type)
  - `managers` (id, name, staff_count, facility_id, address, phonenumber)
  - `prisonercases` (id, description)
  - `prisoners` (id, fullname, prisonercase, nationality, gender, dob, location)
  - `shifts` (id enum, begin/end/duration)
  - `staff` (id, fullname, facility_id, rank, shift, manager_id)
  - `visitors` (id, fullname)
  - `visits` (id, prisoner_id, visitor, staff_id, date, room)
  - `inmateoffences` (id, prisoner_id, offencetype)
  - `medicalrecords` (id, prison_id/prisoner_id, offencetype)
  - `prisonerallowedfacilities` (prisoner_id, facility_id)
  - `staffallowedfacilities` (staff_id, facility_id)
- **Initialization**
  - Place SQL files (schema + seed) in `init_db` (mounted via Compose).
  - On first container start with a clean volume, Postgres runs all scripts in order.

---

## Running the Project (Local Dev)

### Backend
```sh
cd Prison-BackEnd
npm install
npm run dev
```
Server: `http://localhost:8080`

### Frontend
```sh
cd Prison-FrontEnd
npm install
npm run dev
```
UI: `http://localhost:5173`

### Database only (Docker)
```sh
docker compose up -d db
```

### Full stack (Docker)
```sh
docker compose up -d
```

---

## Testing the API

Use Postman / Thunder Client / curl against:
- `GET http://localhost:8080/managers/`
- `GET http://localhost:8080/prisoners/`
- `GET http://localhost:8080/visitors/`
- `GET http://localhost:8080/utils/getAllData`

For local frontend dev, calls to `/api/...` are proxied to the backend.




---

## Troubleshooting

- **Port conflicts:** Ensure `8080` (backend), `5173` (frontend), `5433` (host Postgres) are free or adjust Compose/ENV accordingly.
- **Docker won’t start:** Check Docker Desktop is running; verify `.env` files match the Compose expectations.
- **DB init didn’t run:** Remove the DB volume (`docker volume rm <name>`) and `docker compose up` again so `/docker-entrypoint-initdb.d` scripts run.
- **API 500s / bad JSON:** Confirm backend `.env` credentials match Postgres; tail logs with `docker compose logs -f`.
- **CORS / proxy issues:** For local dev, keep Vite proxying `/api` to `http://localhost:8080`. In production, align frontend base URL with backend host.

---


## License

MIT License. Feel free to use and adapt with attribution.
