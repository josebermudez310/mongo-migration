db.resultados.insertMany([
    {
        "partido_id": db.partidos.findOne({"pais_local": db.paises.findOne({"nombre": "Colombia"})._id, "pais_visitante": db.paises.findOne({"nombre": "Brasil"})._id})._id,  // Referencia a un partido específico
        "goles_local": 1,
        "goles_visitante": 0,
        "ganador": db.paises.findOne({"nombre": "Colombia"})._id,
        "puntos_local": 3,
        "puntos_visitante": 0,
        "detalles": [
            {"tipo": "tarjeta amarilla", "jugador": db.jugadores.findOne({"nombre": "Casemiro"}), "minuto": 34},
            {"tipo": "gol", "jugador": db.jugadores.findOne({"nombre": "Radamel Falcao"})._id, "minuto": 47}
        ]
    },
    {
        "partido_id": db.partidos.findOne({"pais_local": db.paises.findOne({"nombre": "Argentina"})._id, "pais_visitante": db.paises.findOne({"nombre": "Chile"})._id})._id,
        "goles_local": 0,
        "goles_visitante": 0,
        "ganador": null,
        "puntos_local": 1,
        "puntos_visitante": 1,
        "detalles": [
            {"tipo": "tarjeta roja", "jugador": db.jugadores.findOne({"nombre": "Arturo Vidal"})._id, "minuto": 60}
        ]
    },
    {
        "partido_id": db.partidos.findOne({"pais_local": db.paises.findOne({"nombre": "Mexico"})._id, "pais_visitante": db.paises.findOne({"nombre": "Canada"})._id})._id,  // Referencia a un partido específico
        "goles_local": 1,
        "goles_visitante": 0,
        "ganador": db.paises.findOne({"nombre": "Mexico"})._id,
        "puntos_local": 3,
        "puntos_visitante": 0,
        "detalles": [
            {"tipo": "gol", "jugador": db.jugadores.findOne({"nombre": "Guillermo Ochoa"})._id, "minuto": 47}
        ]
    },
    {
        "partido_id": db.partidos.findOne({"pais_local": db.paises.findOne({"nombre": "Ecuador"})._id, "pais_visitante": db.paises.findOne({"nombre": "Venezuela"})._id})._id,
        "goles_local": 0,
        "goles_visitante": 0,
        "ganador": null,
        "puntos_local": 1,
        "puntos_visitante": 1,
        "detalles": [
            {"tipo": "tarjeta roja", "jugador": db.jugadores.findOne({"nombre": "Renato Ibarra"})._id, "minuto": 60}
        ]
    },
    {
        "partido_id": db.partidos.findOne({"pais_local": db.paises.findOne({"nombre": "Brasil"})._id, "pais_visitante": db.paises.findOne({"nombre": "Chile"})._id})._id,
        "goles_local": 0,
        "goles_visitante": 0,
        "ganador": null,
        "puntos_local": 1,
        "puntos_visitante": 1,
        "detalles": [
            {"tipo": "tarjeta roja", "jugador": db.jugadores.findOne({"nombre": "Richarlison"})._id, "minuto": 60}
        ]
    }
]);