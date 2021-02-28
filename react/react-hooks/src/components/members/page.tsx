import * as React from 'react';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';
import { memberAPI } from '../../api/members';
//ts+react比js+react多一个model(模型层)
import {MemberEntity} from '../../model';

//进行类型指定  类式组件里用 泛型<Props,State>
interface State{
    // members:any[]
    members:MemberEntity[];
}

interface Props{

}

export class MemberPage extends React.Component<Props, State> {
    constructor(props) {
      super(props)
      this.state = {
        members: []
      }
    }
    public componentDidMount(){
        //组件和API的分离点在这里,API放public里
        //ajax
        //memberAPI
        this.setState({
            members:memberAPI.fetchMembers()//获得下数据
        })
    }
  render() {
    return (
      <div className="row">
          <h2>Members Page</h2>
          <table className="table">
              <thead>
                  <MemberHeader />
              </thead>
              <tbody>
                  {
                      //遍历states数据时报错的原因，state 类型是？因为没有进行类型指定
                      //显示每个用户的MemberRow
                      this.state.members.map((member)=><MemberRow member={member}/>)
                  }
              </tbody>
          </table>
      </div>
    )
  }
}
