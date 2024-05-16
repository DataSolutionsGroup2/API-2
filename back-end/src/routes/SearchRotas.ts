import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import { SearchController } from '../controllers/Searchcontroller';

const router = express.Router();
const banco = new Pool(/* configurações do banco de dados */);
const searchController = new SearchController(banco);

// Rota para listar analistas e somar km percorridos
router.get('/search/analistas-somar-km', async (req: Request, res: Response) => {
    try {
        await searchController.listarAnalistasSomarKm(req, res);
    } catch (error) {
        console.error('Erro ao listar analistas e somar km:', error);
        res.status(500).json({ error: 'Erro ao listar analistas e somar km' });
    }
});

export default router;
