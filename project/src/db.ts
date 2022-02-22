 import { Pool } from 'pg';

const connectionString = 'postgres://ngdeocra:sxDi1bkuDPu0mNhlIbuRveZCAEGGbyPK@motty.db.elephantsql.com/ngdeocra';

const db = new Pool({ connectionString });

export default db;

// let conn:any;

// (async () => {
//   connect();
//   await createTable();
//   await insert();
//   await showRows();
// })();

// function connect() {
//   let { Client } = require('pg');
//   conn = new Client({
//     host: 'localhost',
//     database: 'teste',
//     user: 'admin',
//     password: '123456',
//     port: 5432,
//   });
//   conn.connect();
// }

// async function createTable() {
//   await conn.query(`
//     create table if not exists people (
//       id integer not null,
//       name varchar,
//       primary key (id)
//     )
//   `);
//   console.log('Table created');
// }

// async function insert() {
//   let { rows } = await conn.query(
//     `insert into people (id, name) values (1, 'Paul McCartney'), (2, 'John Lennon') returning *`
//   );
//   console.log(`Rows inserted: ${rows.length}`);
// }

// async function showRows() {
//   let { rows } = await conn.query(`select * from people`);
//   for (const row of rows) {
//     console.log(row);
//   }
// }
//   const db = conn;

// export default db;