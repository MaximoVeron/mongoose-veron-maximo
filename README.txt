Documentación del proyecto

Lógica de los controladores

Crear usuario
Para el endpoint de creación (`createUser`) utilicé el método `new` y `save` porque resulta más cómodo y evita desestructurar el body, manteniendo el código simple. Además, esto facilita la futura implementación de validaciones, asegurando que el body llegue limpio.

btener usuarios
Para obtener todos los usuarios (`getUsers`) uso el método `find`, que equivale a un `findAll`.

Actualizar usuario
Para actualizar un usuario (`updateUser`), utilizo:
const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

El método `findByIdAndUpdate` toma el parámetro de la request y el body, permitiendo una actualización directa y legible. Las validaciones de existencia las hago como medida adicional.

Eliminar usuario
La lógica de eliminación (`deleteUser`) es similar a la de actualización, pero usando `findByIdAndDelete`.

Estructura y elección de modelos
Elegí una dinámica de usuario, raza y arma, siguiendo la estructura de un juego:
- Un usuario se registra y puede elegir una raza.
- Un usuario puede tener una raza y varias armas (`weapons`).
- Una raza puede pertenecer a muchos usuarios (relación uno a muchos).
- Un arma puede pertenecer a muchos usuarios y muchos usuarios pueden tener un arma (relación muchos a muchos).

Uso de populate
Para mostrar los datos completos de las relaciones (por ejemplo, la raza y las armas de un usuario), utilizo el método `populate` de Mongoose en las consultas. Esto permite que, en vez de ver solo los IDs de referencia, se obtenga el objeto completo relacionado.

Tipos de relación: raza y armas

Raza (referenciada): 
  La raza es un documento que existe en su propia colección (`Race`). En el usuario solo se guarda el ID de la raza, no toda la información.  
  Esto permite que muchos usuarios compartan la misma raza y que la información de la raza se mantenga centralizada y fácil de modificar.  
  Ejemplo en el esquema:
  race: { type: Types.ObjectId, ref: 'Race' }

Armas (embebidas): 
  Las armas pueden guardarse directamente dentro del usuario como un array de objetos.  
  Esto es útil si las armas solo existen para ese usuario y no se comparten entre varios usuarios.  

Eliminación lógica y en cascada

Eliminación lógica:
  En vez de borrar el usuario, se marca como inactivo usando un campo booleano (`isActive: false`).  
  Así, el usuario sigue existiendo en la base de datos, pero no aparece en las consultas normales.

Eliminación en cascada:  
  Cuando se elimina lógicamente un usuario, también se actualizan los documentos relacionados.  
  Por ejemplo, si las armas están referenciadas y tienen una lista de dueños (`users`), se quita el usuario de esa lista en todas las armas asociadas.

Método GET: solo usuarios activos

Para que el método GET solo traiga los usuarios activos, se filtra por el campo `isActive`:
const users = await UserModel.find({ isActive: true }).populate("race").populate("weapons");
Así, los usuarios eliminados lógicamente no aparecen en la respuesta.