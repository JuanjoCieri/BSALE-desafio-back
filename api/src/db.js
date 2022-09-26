import {createPool} from "mysql2/promise"

export const pool = createPool({
    user: "bsale_test",
    password: "bsale_test",
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    database: "bsale_test",
    port: 3306,
})