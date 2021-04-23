const { template } = require('lodash');
const compiler=template('<h1><%=title%></h1>');//模板字符串
const html=compiler({title:'My Component'});
console.log(html);
const newHTML=compiler({title:'New Component'});
console.log(newHTML);