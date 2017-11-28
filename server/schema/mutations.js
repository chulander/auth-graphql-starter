const { GraphQLObjectType, GraphQLString } = require('graphql');

const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, args, context) {
        //context represents the REQUEST object from express
        return AuthService.signup({
          email: args.email,
          password: args.password,
          req: context,
        });
      },
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, context) {
        const user = context.user;
        context.user.logout();
        return user;
      },
    login: {
      type: UserType,
      args: {
        email: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, args, context) {
        //context represents the REQUEST object from express
        return AuthService.login({
          email: args.email,
          password: args.password,
          req: context,
        });
      },
    },
    },
  },
});

module.exports = mutation;
