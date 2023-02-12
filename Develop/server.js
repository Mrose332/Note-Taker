const express = require('express');
const app = express();
const PORT = process.env.port || 3001;

app.use(express.json ());
app.use(express.urlencoded({extented: true}));
app.use(express.static("public"));

require('./Routes/ApiRoutes') (app);
require ('./Routes/HtmlRoutes') (app);

app.listen(PORT, () => {
    console.log(`app server on PORT: ${PORT}`);
  });
