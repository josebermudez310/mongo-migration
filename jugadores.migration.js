db.jugadores.insertMany([
    {
        "nombre": "James Rodríguez",
        "edad": 30,
        "pais_id": db.paises.findOne({
            "nombre": "Colombia"
        })._id,
        "posición": "Centrocampista"
    },
    {
        "nombre": "Radamel Falcao",
        "edad": 35,
        "pais_id": db.paises.findOne({
            "nombre": "Colombia"
        })._id,
        "posición": "Delantero"
    },
    {
        "nombre": "Juan Cuadrado",
        "edad": 33,
        "pais_id": db.paises.findOne({
            "nombre": "Colombia"
        })._id,
        "posición": "Extremo"
    },
    {
        "nombre": "David Ospina",
        "edad": 33,
        "pais_id": db.paises.findOne({
            "nombre": "Colombia"
        })._id,
        "posición": "Portero"
    },
    {
        "nombre": "Davinson Sánchez",
        "edad": 25,
        "pais_id": db.paises.findOne({
            "nombre": "Colombia"
        })._id,
        "posición": "Defensa"
    },
    {
        "nombre": "Roberto Firmino",
        "edad": 30,
        "pais_id": db.paises.findOne({
            "nombre": "Brasil"
        })._id,
        "posición": "Delantero"
    },
    {
        "nombre": "Casemiro",
        "edad": 29,
        "pais_id": db.paises.findOne({
            "nombre": "Brasil"
        })._id,
        "posición": "Centrocampista"
    },
    {
        "nombre": "Marquinhos",
        "edad": 27,
        "pais_id": db.paises.findOne({
            "nombre": "Brasil"
        })._id,
        "posición": "Defensa"
    },
    {
        "nombre": "Alisson Becker",
        "edad": 29,
        "pais_id": db.paises.findOne({
            "nombre": "Brasil"
        })._id,
        "posición": "Portero"
    },
    {
        "nombre": "Richarlison",
        "edad": 24,
        "pais_id": db.paises.findOne({
            "nombre": "Brasil"
        })._id,
        "posición": "Delantero"
    },
    {
        "nombre": "Alexis Sánchez",
        "edad": 32,
        "pais_id": db.paises.findOne({
            "nombre": "Chile"
        })._id,
        "posición": "Delantero"
    },
    {
        "nombre": "Gary Medel",
        "edad": 34,
        "pais_id": db.paises.findOne({
            "nombre": "Chile"
        })._id,
        "posición": "Defensa"
    },
    {
        "nombre": "Eduardo Vargas",
        "edad": 31,
        "pais_id": db.paises.findOne({
            "nombre": "Chile"
        })._id,
        "posición": "Delantero"
    },
    {
        "nombre": "Claudio Bravo",
        "edad": 38,
        "pais_id": db.paises.findOne({
            "nombre": "Chile"
        })._id,
        "posición": "Portero"
    },
    {
        "nombre": "Arturo Vidal",
        "edad": 34,
        "pais_id": db.paises.findOne({
            "nombre": "Chile"
        })._id,
        "posición": "Centrocampista"
    },
    {
        "nombre": "Lionel Messi",
        "edad": 34,
        "pais_id": db.paises.findOne({
            "nombre": "Argentina"
        })._id,
        "posición": "Delantero"
    },
    {
        "nombre": "Sergio Agüero",
        "edad": 33,
        "pais_id": db.paises.findOne({
            "nombre": "Argentina"
        })._id,
        "posición": "Delantero"
    },
    {
        "nombre": "Paulo Dybala",
        "edad": 28,
        "pais_id": db.paises.findOne({
            "nombre": "Argentina"
        })._id,
        "posición": "Centrocampista"
    },
    {
        "nombre": "Emiliano Martínez",
        "edad": 29,
        "pais_id": db.paises.findOne({
            "nombre": "Argentina"
        })._id,
        "posición": "Portero"
    },
    {
        "nombre": "Nicolas Otamendi",
        "edad": 33,
        "pais_id": db.paises.findOne({
            "nombre": "Argentina"
        })._id,
        "posición": "Defensa"
    },
    {
        "nombre": "Alphonso Davies",
        "edad": 21,
        "pais_id": db.paises.findOne({
            "nombre": "Canada"
        })._id,
        "posición": "Defensa"
    },
    {
        "nombre": "Jonathan David",
        "edad": 21,
        "pais_id": db.paises.findOne({
            "nombre": "Canada"
        })._id,
        "posición": "Delantero"
    },
    {
        "nombre": "Scott Arfield",
        "edad": 32,
        "pais_id": db.paises.findOne({
            "nombre": "Canada"
        })._id,
        "posición": "Centrocampista"
    },
    {
        "nombre": "Milan Borjan",
        "edad": 33,
        "pais_id": db.paises.findOne({
            "nombre": "Canada"
        })._id,
        "posición": "Portero"
    },
    {
        "nombre": "Atiba Hutchinson",
        "edad": 38,
        "pais_id": db.paises.findOne({
            "nombre": "Canada"
        })._id,
        "posición": "Centrocampista"
    },
    {
        "nombre": "Hirving Lozano",
        "edad": 26,
        "pais_id": db.paises.findOne({
            "nombre": "Mexico"
        })._id,
        "posición": "Delantero"
    },
    {
        "nombre": "Raúl Jiménez",
        "edad": 30,
        "pais_id": db.paises.findOne({
            "nombre": "Mexico"
        })._id,
        "posición": "Delantero"
    },
    {
        "nombre": "Héctor Herrera",
        "edad": 31,
        "pais_id": db.paises.findOne({
            "nombre": "Mexico"
        })._id,
        "posición": "Centrocampista"
    },
    {
        "nombre": "Guillermo Ochoa",
        "edad": 36,
        "pais_id": db.paises.findOne({
            "nombre": "Mexico"
        })._id,
        "posición": "Portero"
    },
    {
        "nombre": "Andrés Guardado",
        "edad": 35,
        "pais_id": db.paises.findOne({
            "nombre": "Mexico"
        })._id,
        "posición": "Centrocampista"
    },
    {
        "nombre": "Enner Valencia",
        "edad": 32,
        "pais_id": db.paises.findOne({
            "nombre": "Ecuador"
        })._id,
        "posición": "Delantero"
    },
    {
        "nombre": "Antonio Valencia",
        "edad": 36,
        "pais_id": db.paises.findOne({
            "nombre": "Ecuador"
        })._id,
        "posición": "Defensa"
    },
    {
        "nombre": "Renato Ibarra",
        "edad": 31,
        "pais_id": db.paises.findOne({
            "nombre": "Ecuador"
        })._id,
        "posición": "Centrocampista"
    },
    {
        "nombre": "Alexander Domínguez",
        "edad": 34,
        "pais_id": db.paises.findOne({
            "nombre": "Ecuador"
        })._id,
        "posición": "Portero"
    },
    {
        "nombre": "Felipe Caicedo",
        "edad": 33,
        "pais_id": db.paises.findOne({
            "nombre": "Ecuador"
        })._id,
        "posición": "Delantero"
    },
    {
        "nombre": "Salomón Rondón",
        "edad": 31,
        "pais_id": db.paises.findOne({
            "nombre": "Venezuela"
        })._id,
        "posición": "Delantero"
    },
    {
        "nombre": "Tomás Rincón",
        "edad": 33,
        "pais_id": db.paises.findOne({
            "nombre": "Venezuela"
        })._id,
        "posición": "Centrocampista"
    },
    {
        "nombre": "Yangel Herrera",
        "edad": 23,
        "pais_id": db.paises.findOne({
            "nombre": "Venezuela"
        })._id,
        "posición": "Centrocampista"
    },
    {
        "nombre": "Wuilker Faríñez",
        "edad": 23,
        "pais_id": db.paises.findOne({
            "nombre": "Venezuela"
        })._id,
        "posición": "Portero"
    },
    {
        "nombre": "Yeferson Soteldo",
        "edad": 24,
        "pais_id": db.paises.findOne({
            "nombre": "Venezuela"
        })._id,
        "posición": "Delantero"
    }
]);