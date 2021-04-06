const {GraphQLSchema, GraphQLObjectType}=require('graphql');
const userSchema=require('./user');

const Query=GraphQLObjectType({
    name:'UserQuery',
    description:'用户信息查询',
    fileds:()=>(Object.assign({
    },userSchema.query))
})
const schema=new GraphQLSchema({
    query:Query
})

module.exports=schema;