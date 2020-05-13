# BD2-MongoDB
#### archivoCargaDatosESTRUCTURADO.js

1. Get into the mongo terminal by typing in the shell `mongo`.
2. Load the .js file from the pathfile using the command `load("file path of archivoCargaDatosESTRUCTURADO.js")`
3. set the database with `use inversionesDB`

#### Querys
You can do such querys as:
1. Get the investments with the most operations. Copy the text into the shell and press enter `db.inversiones.aggregate({$unwind: "$operaciones"}, {$group: {_id: "$nombre", cantOperaciones: {$sum:1}}}, {$sort: {cantOperaciones: -1}}, {$limit: 1})`
2. Get the adviser with the most recommendations for a determined investment. Copy the text into the shell and press enter `db.inversiones.aggregate({$match: {nombre: "Apple"}}, {$unwind: "$operaciones"}, {$group: {_id: "$operaciones.asesor.nombre", cantRecomendaciones: {$sum:1}}}, {$sort: {cantRecomendaciones: -1}}, {$limit: 1})` 
* this will specifically search in the investments of "Apple", you can also do this with any other investment by declaring a variable with the name of the investments you want to get.
* set the input `var inversion = "[anyInvestmentYouWant]"`
* Copy the text into the shell and press enter `db.inversiones.aggregate({$match: {nombre: inversion}}, {$unwind: "$operaciones"}, {$group: {_id: "$operaciones.asesor.nombre", cantRecomendaciones: {$sum:1}}}, {$sort: {cantRecomendaciones: -1}}, {$limit: 1})`
