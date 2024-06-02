for (i = 0; i < 5200000; i++) {
    db.arbitros.insertMany([{
        "nombre": "Felipe " + i,
        "pais_id": db.paises.findOne({
            "nombre": "Colombia"
        })._id,
        "edad": 35
    }, {
        "nombre": "Juan " + i,
        "pais_id": db.paises.findOne({
            "nombre": "Mexico"
        })._id,
        "edad": 28
    }, {
        "nombre": "Jhon " + i,
        "pais_id": db.paises.findOne({
            "nombre": "Chile"
        })._id,
        "edad": 23
    }]);
}