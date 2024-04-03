import { Request, Response } from 'express';
import SpatialRefSys from '../models/SpatialRefSys';


class SpatialRefSysController {
  async getSpatialRefSys(req: Request, res: Response): Promise<void> {
    try {
      const spatialRefSys = await SpatialRefSys.findAll();
      res.status(200).json(spatialRefSys);

    } catch (error) {
      console.error('Erro ao buscar dados da tabela spatial_ref_sys:', error);
      res.status(500).send('Erro ao buscar dados da tabela spatial_ref_sys');
    }
  }
}

export default new SpatialRefSysController();
