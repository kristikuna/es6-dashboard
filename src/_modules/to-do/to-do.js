'use strict';

export default class ToDo {
  constructor() {
    const url = 'http://localhost:4000/tasks';
    const addNewTask = document.getElementById('addNewTask');
    this.getData(url);
    const list = document.getElementById("list");


    const button = document.getElementById('formSubmitBtn');
    button.addEventListener('click', function(){
      const newTask = document.getElementById("newTask").value;
    });
  }

  //get initial data
  getData(url) {
   fetch(url)
      .then(response => response.json())
      .then(data => {
        this.appendList(data);
      }).catch(error => {
        console.log('Error:', error);
      });
  };

  appendList(arr, newTask){
    console.log(newTask);
    const taskArr = [];
    arr.forEach(function(item){
      // console.log(taskArr)
      let listItem = document.createElement('li');
      list.append(item.title, listItem);
      taskArr.push(item.title);
      console.log(taskArr);
    });
  }

  // newTaskPost(){
  //   button.addEventListener('click', function(){
  //     const newTask = document.getElementById("newTask").value;
  //     // console.log(taskArr)
  //     console.log(newTask); 
  //   });
  // }

   updateData(url, newTask){
    fetch(url, {
     method: 'POST',
     headers : new Headers(),
     body: JSON.stringify({ title: title })
    }).then(reponse => reponse.json())
      .then(data => {
        console.log(newTask)
        console.log(data);
      }).catch(error => {
        console.log('Error:', error);
      });
    }

    //delete task
    deleteData(url, id) {
      return fetch (url + '/' + id,{
        method: 'DELETE'
    })
    .then(reponse => response.json());
   }
  }
  //console.log value from input field
  //update view with value
  //send task to db.json
  //update view with value from db

  
