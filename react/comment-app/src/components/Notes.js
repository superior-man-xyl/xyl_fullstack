import React from 'react';
import { loadCollection, db } from '../database';


export default class Notes extends React.Component {

  constructor(props) {
    super(props)

  }
  
  state = { // es6 class properties 新特性 
    entities: []
  }

  componentDidMount() {
    this.getInitialData();  // 去取数据吧 
  }

  getInitialData () {
    loadCollection('notes')   // 选择notes库中的notes 表 
      .then(collection => { // notes
        collection.insert([
          { body: 'hello ~' },
          { body: 'hola ~'}
        ]) // add   添加一些初始化数据
        db.saveDatabase() 
      })
  }


  
  render() {
    return (
      <div className="ui container notes">
        <h4 className="ui horizontal divider header">
          <i className="paw icon"></i>
          YanJie Notes App _ React.js
        </h4>
        <button className="ui right floated basic violet button">
          添加笔记
        </button>
      </div>
    )
  }
}
