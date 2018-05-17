

export default class ToDo {
  constructor() {
    const url = 'http://localhost:4000/tasks';
    const taskArr = [];
    const addNewTask = document.getElementById('addNewTask');
    this.getData(url);
    this.list = document.getElementById("list");
  }
  
  //get initial data
  getData(data) {
   fetch('http://localhost:4000/tasks')
      .then(response => response.json())
      .then(data => {
        this.watchForSubmit(newTask);
        // console.log(newTask);
        this.appendList(data);
        // console.log(data);
      }).catch(error => {
        console.log('Error:', error);
      });
  };

  appendList(arr){
    console.log(arr)
    arr.forEach((item)=>{
      console.log(item)
      let listItem = document.createElement('li');
      this.list.appendChild(listItem);
      listItem.innerText = item.title
    });
  }

   updateData(newTask){
    console.log(newTask);
    const postConfig = {
      method: 'POST',
      headers : {
       'Accept': 'Application/JSON, Text/Plain, */*',
       'Content': "Application/JSON"
      },
       body: JSON.stringify( { title: newTask } )
    }
    fetch('http://localhost:4000/tasks', postConfig)
    .then(reponse => reponse.json())
      .then((res) => {
        this.appendList(newTask)
      })
      //.catch(error => {
      //   console.log('Error:', error);
      // });
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
        // this.addTaskToObj(newTask);
        this.updateData(newTask);
        // console.log(newTask);
        // console.log(this.data);
        // taskArr.push({title: newTask});
        // console.log(typeof newTask + " helper function");
     });
   }

  //  addTaskToObj(newTask){
  //   console.log(newTask)
  //   this.getData(data);
  //   console.log(data);
  //  }  
  }

  //console.log value from input field
  //update view with value
  //send task to db.json
  //update view with value from db

