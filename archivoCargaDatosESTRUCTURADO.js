conn= new Mongo();
db= conn.getDB("inversionesDB");

var datos = [{
		_id:"5d991520c20e861b029b043e",
		nombre:"Apple",
		tipo:"Accion",
		cotizacion:NumberDecimal("3000.50"),
		operaciones:[
			{
				fechaCompra:new Date(2019,3,1,0,0),
				importeInicial:NumberDecimal("30000.21"),
				cantidad:30,
				tipoOperacion:"Compra",
				operador:"Miguel Artigas",
				asesor:{
					nombre:"Santiago Marquez",
					opinion:"Se esperan subas en los precios de acciones",
					recomendacion:"Comprar acciones"}
			},
			{
				fechaCompra:new Date(2019,4,15,0,0),
				importeInicial:NumberDecimal("15050.90"),
				cantidad:15,
				tipoOperacion:"Compra",
				operador:"Angela Lopez",
				asesor:{
					nombre:"Luciana Martiz",
					opinion:"Se esperan subas en los precios de acciones",
					recomendacion:"Comprar"}
			},
			{
				fechaCompra:new Date(2019,5,11,0,0),
				importeInicial:NumberDecimal("9000.709"),
				cantidad:5,
				tipoOperacion:"Venta",
				operador:"Pablo Zulim",
				asesor:{
					nombre:"Santiago Marquez",
					opinion:"Se esperan bajas en los precios",
					recomendacion:"Vender"}
			},
			{
				fechaCompra:new Date(2019,8,5,0,0),
				importeInicial:NumberDecimal("4000.50"),
				cantidad:4,
				tipoOperacion:"Venta",
				operador:"Laura Kirko",
				asesor:{
					nombre:"Juana Viale",
					opinion:"Los precios bajaran en picada",
					recomendacion:"Vender"}
			}
		]
	},
	{
		_id:"5d991629c20e861b029b0440",
		nombre:"Microsoft",
		tipo:"Bono",
		cotizacion:NumberDecimal("2980.769"),
		operaciones:[
			{
				fechaCompra:new Date(2019,3,11,0,0),
				importeInicial:NumberDecimal("40000"),
				cantidad:29,
				tipoOperacion:"Venta",
				operador:"Jorge Alibaba",
				asesor:{
					nombre:"Martina Saldovi",
					opinion:"Se esperan bajas increibles en los precios. Imposible la compra.",
					recomendacion:"Vender urgente"}
			},
			{
				fechaCompra:new Date(2019,11,5,0,0),
				importeInicial:NumberDecimal("5000"),
				cantidad:2,
				tipoOperacion:"Venta",
				operador:"Sandro Sango",
				asesor:{
					nombre:"Carlos Fuentes",
					opinion:"Vender de suma urgencia. Rumores de quiebra.",
					recomendacion:"Vender"}
			}
		]
	},
	{
		_id:"5d99166ac20e861b029b0441",
		nombre:"Uber",
		tipo:"Accion",
		cotizacion:NumberDecimal("1600.90"),
		operaciones:[
			{
				fechaCompra:new Date(2019,8,20,0,0),
				importeInicial:NumberDecimal("20780.10"),
				cantidad:10,
				tipoOperacion:"Compra",
				operador:"Pablito Lescano",
				asesor:{
					nombre:"Hector Matriz",
					opinion:"Compra inmediata, precios sumamente bajos a pronta subida.",
					recomendacion:"Comprar"}
			},
			{
				fechaCompra:new Date(2019,6,4,0,0),
				importeInicial:NumberDecimal("32132.23"),
				cantidad:21,
				tipoOperacion:"Compra",
				operador:"Damian Garbo",
				asesor:{
					nombre:"Miguel Esposito",
					opinion:"Comprar con moderacion, probabilidades dudosas.",
					recomendacion:"Comprar poco"}
			},
			{
				fechaCompra:new Date(2019,9,2,0,0),
				importeInicial:NumberDecimal("100500.50"),
				cantidad:50,
				tipoOperacion:"Venta",
				operador:"Juana Viale",
				asesor:{
					nombre:"Martin Palacios",
					opinion:"Se esperan bajas en los precios de forma abrupta",
					recomendacion:"Vender todo"}
			},
		]
	},
	{
		_id:"5d9916dbc20e861b029b0442",
		nombre:"jpMorgan",
		tipo:"Bono",
		cotizacion:NumberDecimal("2900"),
		operaciones:[
			{
				fechaCompra:new Date(2018,5,9,0,0),
				importeInicial:NumberDecimal("17578"),
				cantidad:5,
				tipoOperacion:"Compra",
				operador:"Alberto Gonzales",
				asesor:{
					nombre:"Luciana Martiz",
					opinion:"Se esperan subas en los precios",
					recomendacion:"Comprar moderadamente"}
			}
		]
	},
	{
		_id:"5d991706c20e861b029b0443",
		nombre:"Element",
		tipo:"LetrasDeTesoreria",
		cotizacion:NumberDecimal("300.710"),
		operaciones:[
			{
				fechaCompra:new Date(2019,4,21,0,0),
				importeInicial:NumberDecimal("39050.90"),
				cantidad:11,
				tipoOperacion:"Venta",
				operador:"Angela Lopez",
				asesor:{
					nombre:"Florencia Tames",
					opinion:"Los precios bajaran en 1 semana, vender todo cuanto antes",
					recomendacion:"Venta inmediata"}
			},
			{
				fechaCompra:new Date(2018,7,01,0,0),
				importeInicial:NumberDecimal("50080.50"),
				cantidad:20,
				tipoOperacion:"Compra",
				operador:"Carlos Lastra",
				asesor:{
					nombre:"Santiago Marquez",
					opinion:"Los precios subiran en 1 semana",
					recomendacion:"Comprar"}
			}
		]
	}
]

db.inversiones.insert(datos);

//db.inversiones.aggregate({$unwind: "$operaciones"}, {$group: {_id: "$nombre", cantOperaciones: {$sum:1}}}, {$sort: {cantOperaciones: -1}}, {$limit: 1})

//db.inversiones.aggregate({$match: {nombre: "Apple"}}, {$unwind: "$operaciones"}, {$group: {_id: "$operaciones.asesor.nombre", cantRecomendaciones: {$sum:1}}}, {$sort: {cantRecomendaciones: -1}}, {$limit: 1})

