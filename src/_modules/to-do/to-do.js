'use strict';

export default class ToDo {
  constructor() {
    const url = 'http://localhost:4000/tasks';
    this.name = 'to-do';
    console.log('%s module', this.name.toLowerCase());
    this.getData(url);

    
    const item = document.getElementById("list");
  }
  getData(url) {
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data[1].title)
      })
      .catch(error => {
        console.error('Error:', error)
      });
  };
 
}





