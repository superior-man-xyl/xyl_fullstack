import { observable, action } from 'mobx';

class usersStore{
    @observable inProgress=false;
    @action login(){
        this.inProgress=true;
    }
}

export default new usersStore();