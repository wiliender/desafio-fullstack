import connection from "../database/connection";

class CategoriaController {
    async index(req , res) {
        const categorias = await connection('categorias').select('*');

        return res.status(200).json(categorias);
    }
}
