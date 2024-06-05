import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

//configuração do banco no arquivo do .env
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || ""),
});

//caso o banco esteja em nuvem
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     // Ajuste necessário caso esteja utilizando SSL e seu ambiente requeira essa configuração
//     rejectUnauthorized: false 
//   }
// });

export async function query (sql: string, params?: any[]) {
  
  try{
    const res = await pool.query(sql, params);
    if( res.command == 'INSERT' ){
      return res.rows[0];
    }
    else if( res.command == 'SELECT' ){
      return res.rows;
    }
    else if( res.command == 'DELETE' || res.command == 'UPDATE'){
      return {rowcount:res.rowCount, rows:res.rows[0]};
    }
    else{
      return {sql};
    }
  }
  catch(e:any){
    return {message:e.message};
  }
};

export default pool;