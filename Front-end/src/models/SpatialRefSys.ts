import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface SpatialRefSysAttributes {
  srid: number;
  auth_name: string | null;
  auth_srid: number | null;
  srtext: string | null;
  proj4text: string | null;
}

class SpatialRefSys extends Model<SpatialRefSysAttributes> implements SpatialRefSysAttributes {
  public srid!: number;
  public auth_name!: string | null;
  public auth_srid!: number | null;
  public srtext!: string | null;
  public proj4text!: string | null;
}

SpatialRefSys.init(
  {
    srid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    auth_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    auth_srid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    srtext: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    proj4text: {
      type: DataTypes.STRING(2048),
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'SpatialRefSys',
    tableName: 'spatial_ref_sys', // Nome da tabela no banco de dados
    timestamps: false // Se não houver colunas createdAt e updatedAt
  }
);

export default SpatialRefSys;
