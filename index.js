'use strict'
const { Database } = require('sqlite3').verbose()
const           db = new Database('db/Chinook_Sqlite.sqlite', (err) => {if(err) throw err})

db.serialize(() => {
  db.all(`SELECT FirstName || ' ' || LastName AS Name,
                 CustomerId,
                 Country
          FROM   Customer
          WHERE  Country IS NOT 'USA'
  `, (err, customer) => {
    console.log(customer)
  })
})
db.close()
