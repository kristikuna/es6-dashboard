'use strict';

export default class ToDo {
  constructor() {
    const url = 'http://localhost:4000/tasks';
    const taskArr = [];
    const addNewTask = document.getElementById('addNewTask');
    this.getData(url);
    const list = document.getElementById("list");
  }
  
  //get initial data
  getData(url, data) {
   fetch(url)
      .then(response => response.json())
      .then(data => {
        this.watchForSubmit(newTask);
        this.appendList(data);
      }).catch(error => {
        console.log('Error:', error);
      });
  };

  appendList(arr){
    arr.forEach(function(item){
      // console.log(item)
      let listItem = document.createElement('li');
      list.append(item.title, listItem);
    });
  }

   updateData(newTask){
    fetch('http://localhost:4000/tasks', {
     method: 'POST',
     headers : new Headers(),
     body: JSON.stringify( { title: newTask } )
    }).then(reponse => reponse.json())
      .then(data => {
        this.appendList(data);
        console.log(data);
      }).catch(error => {
        console.log('Error:', error);
      });
    }

    //delete task
    deleteData(url, id) {
      return fetch (url + '/' + id,{
        method: 'DELETE'
    }).then(reponse => response.json());
   }

    //add event listner
    //get value of input
    //pass value into helper function
     watchForSubmit(data, newTask) {
      const button = document.getElementById('formSubmitBtn');
      button.addEventListener('click', ()=> {
        const newTask = document.getElementById("newTask").value;
        this.updateData(newTask);
        console.log(newTask);
        console.log(this.data);
        // taskArr.push({title: newTask});
        // console.log(typeof newTask + " helper function");
     });
   }
  }
  //console.log value from input field
  //update view with value
  //send task to db.json
  //update view with value from db

