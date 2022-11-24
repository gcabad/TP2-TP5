TP5: Servidor en capas
Realizar un proyecto backend basado en node.js que permita procesar notas de alumnos.
Debe proveer las siguientes funcionalidades:
1) Ingreso de notas de alumnos, junto a su nombre, apellido y curso.
2) Listar todas las notas ingresadas
3) Tener un endpoint de cálculo, el cuál devolverá el promedio y la cantidad de notas
ingresadas.
El servidor responderá al frontend los datos requeridos en formato JSON. En el caso
del punto 1, la respuesta será {status: ‘ok’}
El diseño debe estar separado en capas, y la persistencia se realizará sobre memoria
(desarrollo) y con mongoDB (producción). Ambos repositorios se seleccionarán desde una
factory por configuración.
El servidor dispondrá de un mecanismo de configuración que permita definir el puerto de
escucha del servidor, el sistema de almacenamiento empleado y la ruta/archivo para la
persistencia de datos en MongoDB.
