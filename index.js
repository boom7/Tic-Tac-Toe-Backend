const express = require("express");
const sequelize = require('./database')
const History = require('./History')
const cors = require('cors');

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

app.use(express.json());
app.use(cors());

app.post('/history', async (req, res) => {
  await History.create(req.body).then(() => {
    res.send('history is inserted');
  })
})

app.get('/history', async (req, res) => {
  const history = await History.findAll();
  res.send(history);
})

app.listen(3000, () => {
  console.log("app is running");
});
