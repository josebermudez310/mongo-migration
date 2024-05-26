coupAmericaDB.resultados.insertMany([
    {
        "partido_id": coupAmericaDB.partidos.findOne({"pais_local": coupAmericaDB.paises.findOne({"nombre": "Colombia"})._id, "pais_visitante": coupAmericaDB.paises.findOne({"nombre": "Brasil"})._id})._id,  // Referencia a un partido específico
        "goles_local": 1,
        "goles_visitante": 0,
        "ganador": coupAmericaDB.paises.findOne({"nombre": "Colombia"})._id,
        "puntos_local": 3,
        "puntos_visitante": 0,
        "detalles": [
            {"tipo": "tarjeta amarilla", "jugador": coupAmericaDB.jugadores.findOne({"nombre": "Casemiro"}), "minuto": 34},
            {"tipo": "gol", "jugador": coupAmericaDB.jugadores.findOne({"nombre": "Radamel Falcao"})._id, "minuto": 47}
        ]
    },
    {
        "partido_id": coupAmericaDB.partidos.findOne({"pais_local": coupAmericaDB.paises.findOne({"nombre": "Argentina"})._id, "pais_visitante": coupAmericaDB.paises.findOne({"nombre": "Chile"})._id})._id,
        "goles_local": 0,
        "goles_visitante": 0,
        "ganador": null,
        "puntos_local": 1,
        "puntos_visitante": 1,
        "detalles": [
            {"tipo": "tarjeta roja", "jugador": coupAmericaDB.jugadores.findOne({"nombre": "Arturo Vidal"})._id, "minuto": 60}
        ]
    },
    {
        "partido_id": coupAmericaDB.partidos.findOne({"pais_local": coupAmericaDB.paises.findOne({"nombre": "Mexico"})._id, "pais_visitante": coupAmericaDB.paises.findOne({"nombre": "Canada"})._id})._id,  // Referencia a un partido específico
        "goles_local": 1,
        "goles_visitante": 0,
        "ganador": coupAmericaDB.paises.findOne({"nombre": "Mexico"})._id,
        "puntos_local": 3,
        "puntos_visitante": 0,
        "detalles": [
            {"tipo": "gol", "jugador": coupAmericaDB.jugadores.findOne({"nombre": "Guillermo Ochoa"})._id, "minuto": 47}
        ]
    },
    {
        "partido_id": coupAmericaDB.partidos.findOne({"pais_local": coupAmericaDB.paises.findOne({"nombre": "Ecuador"})._id, "pais_visitante": coupAmericaDB.paises.findOne({"nombre": "Venezuela"})._id})._id,
        "goles_local": 0,
        "goles_visitante": 0,
        "ganador": null,
        "puntos_local": 1,
        "puntos_visitante": 1,
        "detalles": [
            {"tipo": "tarjeta roja", "jugador": coupAmericaDB.jugadores.findOne({"nombre": "Renato Ibarra"})._id, "minuto": 60}
        ]
    },
    {
        "partido_id": coupAmericaDB.partidos.findOne({"pais_local": coupAmericaDB.paises.findOne({"nombre": "Brasil"})._id, "pais_visitante": coupAmericaDB.paises.findOne({"nombre": "Chile"})._id})._id,
        "goles_local": 0,
        "goles_visitante": 0,
        "ganador": null,
        "puntos_local": 1,
        "puntos_visitante": 1,
        "detalles": [
            {"tipo": "tarjeta roja", "jugador": coupAmericaDB.jugadores.findOne({"nombre": "Richarlison"})._id, "minuto": 60}
        ]
    }
]);