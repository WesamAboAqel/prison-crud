import {Pool} from 'pg';

export const pool = new Pool({
    user: "prison_user",
    host: "db",
    database: "prison_db",
    password: "12345678",
    port:5432
})

export default pool;