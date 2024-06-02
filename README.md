El presente repositorio contiene los esquemas y scripts para la base de datos del evento deportivo, para ser utilizados en la replicación de la DB.

Para mayor claridad este contendrá dos tipos de documentos: Los esquemas con la extención .json y los scripts de de migration con la extensión .migration.js para ejecutarlos desde la shell de mongo.

Para replicar correctamente la base de datos primero debemos especificar desde la shell qué base de datos vamos a utilizar para ello empleamos el comando use copa_america y luego con los scripts se recomienda ejecutarlos de la siguiente manera:

- grupos.migration.js
- paises.migration.js
- arbitros.migration.js
- entrenadores.migration.js
- partidos.migration.js
- jugadores.migration.js
- resultados.migration.js
- tablas.migration.js

Siguiendo los anteriores pasos podrá replicar correctamente la base de datos.

## Fragmentación
Para realizar correctamente la fragmentación se deben ejecutar los siguientes scripts:

- arbitros.migratin.fragmentation.js
- entrenadores.migration.fragmentation.js
- collections.indexes.fragmentation.js
- collections.enable.fragmentation.js

Con estos scripts mas las configuraciones realizadas en el documento del proyecto logrará realizar correctamente la fragmentación.

## Autores
- Robin Rodriguez
- Mónica Ardila
- Jose Bermudez