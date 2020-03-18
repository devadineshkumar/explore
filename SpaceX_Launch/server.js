const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const app = express();
const path= requre('path');

// allow cross-orign..
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema:schema,
    graphiql: true
  }),
);

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started successfully in  port ${PORT}`));