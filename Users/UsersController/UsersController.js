const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://ldkxvkhnzuyofk:06c1add682312a8f434ff678aad0ff5213fa9aa4a8fbee09969b7225f58f2d23@ec2-52-86-115-245.compute-1.amazonaws.com:5432/d2r57ekn4ogjs5',
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT * FROM dias;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  
  }
  client.end();
});