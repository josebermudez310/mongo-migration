coupAmericaDB.entrenadores.insertMany([
    {
        "nombre": "Luis Garcia",
        "edad": 42,
        "pais_id": coupAmericaDB.paises.findOne({"nombre": "Colombia"})._id
    },
    {
        "nombre": "Ana Martínez",
        "edad": 35,
        "pais_id": coupAmericaDB.paises.findOne({"nombre": "Brasil"})._id
    },
    {
        "nombre": "Carlos Sánchez",
        "edad": 48,
        "pais_id": coupAmericaDB.paises.findOne({"nombre": "Chile"})._id
    },
    {
        "nombre": "Laura Rodríguez",
        "edad": 52,
        "pais_id": coupAmericaDB.paises.findOne({"nombre": "Argentina"})._id
    },
    {
        "nombre": "David Fernandez",
        "edad": 41,
        "pais_id": coupAmericaDB.paises.findOne({"nombre": "Canada"})._id
    },
    {
        "nombre": "Marta López",
        "edad": 50,
        "pais_id": coupAmericaDB.paises.findOne({"nombre": "Mexico"})._id
    },
    {
        "nombre": "Elena Gómez",
        "edad": 34,
        "pais_id": coupAmericaDB.paises.findOne({"nombre": "Ecuador"})._id
    },
    {
        "nombre": "José Pérez",
        "edad": 53,
        "pais_id": coupAmericaDB.paises.findOne({"nombre": "Venezuela"})._id
    }
])