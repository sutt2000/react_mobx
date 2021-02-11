import {observable, action, computed} from 'mobx';

class TodoStore {  
  
  @abservable
  _todo = {} //id, title, date

  get todo() {
    return this._todo;
  }

}

export default new TodoStore();