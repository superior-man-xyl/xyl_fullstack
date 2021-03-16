import React from 'react';
// import { inject, observer } from 'mobx-react';
import { Switch, Route } from 'react-router-dom';
import Article from './pages/Article';
// @inject("articlesStore")//分了模块。不再是一个大的store
// @observer

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Switch>
          <Route path="/article/:id" component={Article} />
        </Switch>
      </div>
    )
  }
}

export default App;
