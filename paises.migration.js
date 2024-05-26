coupAmericaDB.paises.insertMany([
    {
      "nombre": "Colombia",
      "id_grupo": coupAmericaDB.grupos.findOne({"nombre": "Grupo A"})._id
    },
    {
      "nombre": "Brasil",
      "id_grupo": coupAmericaDB.grupos.findOne({"nombre": "Grupo A"})._id
    },
    {
      "nombre": "Chile",
      "id_grupo": coupAmericaDB.grupos.findOne({"nombre": "Grupo A"})._id
    },
    {
      "nombre": "Argentina",
      "id_grupo": coupAmericaDB.grupos.findOne({"nombre": "Grupo A"})._id
    },
    {
      "nombre": "Canada",
      "id_grupo": coupAmericaDB.grupos.findOne({"nombre": "Grupo B"})._id
    },
    {
  
      "nombre": "Mexico",
      "id_grupo": coupAmericaDB.grupos.findOne({"nombre": "Grupo B"})._id
    },
    {
      "nombre": "Ecuador",
      "id_grupo": coupAmericaDB.grupos.findOne({"nombre": "Grupo B"})._id
    },
    {
      "nombre": "Venezuela",
      "id_grupo": coupAmericaDB.grupos.findOne({"nombre": "Grupo B"})._id
    }
  ]
  )