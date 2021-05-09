const express = require('express');
const htmlRouter = require('./routes/htmlRoutes/index');
const apiRouter = require('./routes/apiRoutes/index');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiRouter);
app.use(htmlRouter);

app.listen(PORT, () => {
    console.log(`Server now running on port ${PORT}`);
});