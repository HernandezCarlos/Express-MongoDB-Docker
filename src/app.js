const express = require('express');
const config = require('./config');
const _connect = require('./db/_connect');
const PostsRoutes = require('./routes/posts.routes');
const UsersRoutes = require('./routes/users.routes');

_connect();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: 'Welcome to my application Test'})
})
app.use('/api/posts', PostsRoutes)
app.use('/api/users', UsersRoutes)

app.listen(config.PORT, () => console.log(`Listen on port ${config.PORT}`));