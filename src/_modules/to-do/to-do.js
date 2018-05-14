'use strict';

export default class ToDo {
  constructor() {
    const url = 'http://localhost:4000/tasks';
    const taskArr = [];
    this.name = 'to-do';
    console.log('%s module', this.name.toLowerCase());
    this.getData(url);
    const list = document.getElementById("list");
  }

  getData(url) {
   fetch(url)
      .then(response => response.json())
      .then(data => {
        this.appendList(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  appendList(arr){
    arr.forEach(function(item){
      let newTask = document.createElement('li');
      list.append(item.title, newTask);
    });
  }

}





