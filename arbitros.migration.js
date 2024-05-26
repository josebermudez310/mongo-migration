coupAmericaDB.arbitros.insertMany([
    {
        "nombre": "Felipe",
        "pais_id": coupAmericaDB.paises.findOne({"nombre": "Colombia"})._id,
        "edad": 35
    },
    {
        "nombre": "Juan",
        "pais_id": coupAmericaDB.paises.findOne({"nombre": "Mexico"})._id,
        "edad": 28
    },
    {
        "nombre": "Jhon",
        "pais_id": coupAmericaDB.paises.findOne({"nombre": "Chile"})._id,
        "edad": 23
    }
])