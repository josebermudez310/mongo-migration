db.arbitros.insertMany([
    {
        "nombre": "Felipe",
        "pais_id": db.paises.findOne({"nombre": "Colombia"})._id,
        "edad": 35
    },
    {
        "nombre": "Juan",
        "pais_id": db.paises.findOne({"nombre": "Mexico"})._id,
        "edad": 28
    },
    {
        "nombre": "Jhon",
        "pais_id": db.paises.findOne({"nombre": "Chile"})._id,
        "edad": 23
    }
])