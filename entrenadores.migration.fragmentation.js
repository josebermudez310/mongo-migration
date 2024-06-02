for (i = 0; i < 125000; i++) {
    db.entrenadores.insertMany([{
        "nombre": "Luis Garcia " + i,
        "edad": 42,
        "pais_id": db.paises.findOne({
            "nombre": "Colombia"
        })._id
    }, {
        "nombre": "Ana Martínez " + i,
        "edad": 35,
        "pais_id": db.paises.findOne({
            "nombre": "Brasil"
        })._id
    }, {
        "nombre": "Carlos Sánchez " + i,
        "edad": 48,
        "pais_id": db.paises.findOne({
            "nombre": "Chile"
        })._id
    }, {
        "nombre": "Laura Rodríguez " + i,
        "edad": 52,
        "pais_id": db.paises.findOne({
            "nombre": "Argentina"
        })._id
    }, {
        "nombre": "David Fernandez " + i,
        "edad": 41,
        "pais_id": db.paises.findOne({
            "nombre": "Canada"
        })._id
    }, {
        "nombre": "Marta López " + i,
        "edad": 50,
        "pais_id": db.paises.findOne({
            "nombre": "Mexico"
        })._id
    }, {
        "nombre": "Elena Gómez " + i,
        "edad": 34,
        "pais_id": db.paises.findOne({
            "nombre": "Ecuador"
        })._id
    }, {
        "nombre": "José Pérez " + i,
        "edad": 53,
        "pais_id": db.paises.findOne({
            "nombre": "Venezuela"
        })._id
    }]);
}