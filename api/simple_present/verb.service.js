//responsible for connecting all my crud operations from the controller to the database
const db = require("../helpers/db");

async function getAll() {
  return await db.verb.findAll();
}

module.exports = { getAll };


// app.get(`/verbspositiveandnegative`, (req,res) => {
//     connection.query(
//         "SELECT * FROM `verbspositiveandnegative`",

//         function(err, results) {
//             console.log(results)
//             console.log(err)
//             res.json(results)
//         }
//     )
// })

// app.listen(port)

// module.exports = verb.service
