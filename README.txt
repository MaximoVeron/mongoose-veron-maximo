hola
//fundamentacion de la logica para los controladores 
const createUser 

para el endpoint create utilice el metodo new y save debido a que me resultaba mas comodo y evito desestructurar(evitar complejizar el codigo), ademas de que tengo planeado realizar validaciones, por lo que el body vendria limpio

const getUsers 
find = findAll 

const updateUser
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

el metodo findById toma el parametro de la req y el body de la misma y la implementa directamente en la misma linea de codigo, siendo más legible 
(las validaciones de existencia las hago como una medida adicional, desconozco si realmente son necesarias o no)

const deleteUser
misma logica que update, solo que con delete 
