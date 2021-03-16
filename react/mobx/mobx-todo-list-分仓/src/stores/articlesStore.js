//observable 可以被观察 action 修改状态的方式
import {observable, action } from 'mobx';

export class ArticleStore {
  //可以被观察的map array object 
  // 从无到有 loading 
  @observable articlesRegistry = observable.map();
  @action loadArticle(slug) {
    // articlesRegistry push   
    // api 
    return fetch(`https://conduit.productionready.io/api/articles/${slug}`)
    .then(data=>data.json())
    // .then(data=>{
    //     console.log(data);
    // })
    .then(action(({article})=>{//action的作用，要修改当前实例中的状态，就要触发一个action
        //解构出来了个article文章，请求的数据里的，只取了这个
        this.articlesRegistry.set(article.slug,article)
    }))
  }
  getArticle(slug){
      return this.articlesRegistry.get(slug)
  }
}

export default new ArticleStore();
