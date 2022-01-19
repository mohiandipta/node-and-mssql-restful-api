const sql = require('mssql')

// connection configuration
const config = {
    user: "a",
    password: "b",
    server: "c",
    database: "d"
}

// database connection
const poolPromise = new sql.ConnectionPool(config).connect()
    .then(pool => {
        console.log('Connected to the mssql')
        return pool
    })
    .catch(err => console.error('Database Connection Failed! Bad Config: ', err))
module.exports = {
    sql, poolPromise
}