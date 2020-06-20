const { Keystone } = require('@keystonejs/keystone');
// const { Text } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { StaticApp } = require('@keystonejs/app-static');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const TodoSchema = require('./lists/Todo.js')
const UserSchema = require('./lists/User.js');


const PROJECT_NAME = 'my-keystone-app';
const adapterConfig = { mongoUri: 'mongodb://localhost/my-keystone-app' };


const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(adapterConfig),
  onConnect: async keystone => {
    await keystone.createItems({
      User: [
        {
          name: 'John Duck',
          email: 'john@duck.com',
          password: 'dolphins',
        },
        {
          name: 'Barry',
          email: 'bartduisters@bartduisters.com',
          password: 'dolphins',
          isAdmin: true,
        },
      ],
    });
  },
});

keystone.createList('Todo', TodoSchema)
keystone.createList('User', UserSchema)

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new StaticApp({ path: '/', src: 'public' }),
    new AdminUIApp({ enableDefaultRoute: true }),
  ],
};
