const express = require('express');
const mssql = require('mssql');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

const createConnectionPool = () => {
  const config = {
    server: process.env.MSSQL_IP,
    user: process.env.MSSQL_USER,
    password: process.env.MSSQL_PASSWORD,
    database: process.env.MSSQL_TELECASTER,
    options: {
      trustServerCertificate: true,
    },
  };

  return new mssql.ConnectionPool(config).connect();
};

const executeQuery = async (req, res, query) => {
  const count = req.params.count;

  if (!/^\d+$/.test(count)) {
    return res.status(400).json({ error: 'Invalid count parameter. Must be a number.' });
  }

  try {
    const pool = await createConnectionPool();

    const request = pool.request();

    request.input('count', mssql.Int, count);

    const result = await request.query(query);

    pool.close();

    res.json(result.recordset);
  } catch (error) {
    console.error('Error executing the query:', error);
    res.status(500).json({ error: 'Query execution failed' });
  }
};

router.get('/test-connection', async (req, res) => {
  try {
    const pool = await createConnectionPool();
    const result = await pool.request().query('SELECT * from DBO.Character');
    pool.close();
    res.json({ message: 'You are connected to the database. Thanks for using the API made by Fayz' });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

router.get('/rank/top/level/:count', async (req, res) => {
  const query = `
    SELECT TOP (@count) name, lv, job, pkc, gold, arena_point, huntaholic_point
    FROM DBO.Character
    ORDER BY lv DESC
  `;
  executeQuery(req, res, query);
});

router.get('/rank/top/gold/:count', async (req, res) => {
  const query = `
    SELECT TOP (@count) name, lv, job, pkc, gold, arena_point, huntaholic_point
    FROM DBO.Character
    ORDER BY gold DESC
  `;
  executeQuery(req, res, query);
});

router.get('/rank/top/pkc/:count', async (req, res) => {
  const query = `
    SELECT TOP (@count) name, lv, job, pkc, gold, arena_point, huntaholic_point
    FROM DBO.Character
    ORDER BY pkc DESC
  `;
  executeQuery(req, res, query);
});

router.get('/rank/top/arena/:count', async (req, res) => {
  const query = `
    SELECT TOP (@count) name, lv, job, pkc, gold, arena_point, huntaholic_point
    FROM DBO.Character
    ORDER BY arena_point DESC
  `;
  executeQuery(req, res, query);
});

router.get('/rank/top/huntaholic/:count', async (req, res) => {
  const query = `
    SELECT TOP (@count) name, lv, job, pkc, gold, arena_point, huntaholic_point
    FROM DBO.Character
    ORDER BY huntaholic_point DESC
  `;
  executeQuery(req, res, query);
});

module.exports = router;
