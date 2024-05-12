db.partidos.insertMany([
    {
        "pais_local": db.paises.findOne({"nombre": "Colombia"})._id,  //Colombia
        "pais_visitante": db.paises.findOne({"nombre": "Brasil"})._id,  //  Brasil
        "fecha": "2023-10-10T20:00:00Z",
        "estadio": "Camp Nou",
        "arbitro": db.arbitros.findOne({"nombre": "Jhon"})._id  // John Smith, asegurándose de que no es de Colombia ni de Brasil
    },
    {
        "pais_local": db.paises.findOne({"nombre": "Argentina"})._id,  // Argentina
        "pais_visitante": db.paises.findOne({"nombre": "Chile"})._id,  // Chile
        "fecha": "2023-10-11T20:00:00Z",
        "estadio": "Estadio Monumental",
        "arbitro": db.arbitros.findOne({"nombre": "Felipe"})._id  // Manuel, asegurándose de que no es de Argentina ni de Chile
    },
    {
        "pais_local": db.paises.findOne({"nombre": "Mexico"})._id,  // México
        "pais_visitante": db.paises.findOne({"nombre": "Canada"})._id,  // Perú
        "fecha": "2023-10-12T20:00:00Z",
        "estadio": "Azteca",
        "arbitro": db.arbitros.findOne({"nombre": "Felipe"})._id  // Carlos, asegurándose de que no es de México ni de Perú
    },
    {
        "pais_local": db.paises.findOne({"nombre": "Ecuador"})._id,  //  España
        "pais_visitante": db.paises.findOne({"nombre": "Venezuela"})._id,  //  Alemania
        "fecha": "2023-10-13T20:00:00Z",
        "estadio": "Santiago Bernabeu",
        "arbitro": db.arbitros.findOne({"nombre": "Juan"})._id  // Felipe, asegurándose de que no es de España ni de Alemania
    },
    {
        "pais_local": db.paises.findOne({"nombre": "Brasil"})._id,  // Francia
        "pais_visitante": db.paises.findOne({"nombre": "Chile"})._id,  //  Italia
        "fecha": "2023-10-14T20:00:00Z",
        "estadio": "Stade de France",
        "arbitro": db.arbitros.findOne({"nombre": "Juan"})._id  // Richar, asegurándose de que no es de Francia ni de Italia
    }
]);