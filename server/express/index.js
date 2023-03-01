const Express = require('express');
const app = Express();
const cors = require('cors');
const router = require('./router');
const PORT = 4000;
app.use(cors());
app.use(Express.json());
app.use(router);
app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
})


