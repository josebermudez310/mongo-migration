db.paises.insertMany([
    {
      "nombre": "Colombia",
      "id_grupo": db.grupos.findOne({"nombre": "Grupo A"})._id
    },
    {
      "nombre": "Brasil",
      "id_grupo": db.grupos.findOne({"nombre": "Grupo A"})._id
    },
    {
      "nombre": "Chile",
      "id_grupo": db.grupos.findOne({"nombre": "Grupo A"})._id
    },
    {
      "nombre": "Argentina",
      "id_grupo": db.grupos.findOne({"nombre": "Grupo A"})._id
    },
    {
      "nombre": "Canada",
      "id_grupo": db.grupos.findOne({"nombre": "Grupo B"})._id
    },
    {
  
      "nombre": "Mexico",
      "id_grupo": db.grupos.findOne({"nombre": "Grupo B"})._id
    },
    {
      "nombre": "Ecuador",
      "id_grupo": db.grupos.findOne({"nombre": "Grupo B"})._id
    },
    {
      "nombre": "Venezuela",
      "id_grupo": db.grupos.findOne({"nombre": "Grupo B"})._id
    }
  ]
  )