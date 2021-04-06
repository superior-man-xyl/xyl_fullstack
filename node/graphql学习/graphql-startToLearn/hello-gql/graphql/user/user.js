const { GraphQLNonNull, GraphQLInt, GraphQlString, GraphQLObjectType } = require("graphql");

const User=new GraphQLObjectType({
  name:'User',
  description:"用户信息实体",
  fields: () => {
      return ({
          id: {type: new GraphQLNonNull(GraphQLInt)},
          name: {type: new GraphQLNonNull(GraphQLString)},
          sex: {type: new GraphQLNonNull(GraphQLString)},
      });
  },
});

module.exports = {
  query: {
    user: {
      type: User,
      description: '根据id查询单个用户',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt)}
      },
      resolve: async (source, {id}) => {
        return `hello ${id}`
      }
    }
  }
}
