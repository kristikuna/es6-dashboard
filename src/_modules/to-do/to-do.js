

export default class ToDo {
  constructor() {
    const url = 'http://localhost:4000/tasks';
    const taskArr = [];
    const addNewTask = document.getElementById('addNewTask');
    this.getData(url);
    this.list = document.getElementById("list");
    this.watchForSubmit(newTask)
  }
  
  //get initial data
  getData(data) {
   fetch('http://localhost:4000/tasks')
      .then(response => response.json())
      .then(data => {
        // console.log(newTask);
        this.appendList(data);
        // console.log(data);
      }).catch(error => {
        console.log('Error:', error);
      });
  };

  clearDom(data){
    while(this.list.firstChild){
      this.list.removeChild(this.list.firstChild);
    }
  };

  //    addTaskToObj(newTask){
  //   console.log(newTask)
  //   this.getData(data);
  //   console.log(data);
  //  }  


  appendList(arr){
    console.log(arr)
    this.clearDom();
    arr.forEach((item)=>{
      // console.log(item)
      let listItem = document.createElement('li');
      this.list.appendChild(listItem);
      listItem.innerText = item.title
    });
  }

   updateData(task){

    // console.log(newTask);
    const postConfig = {
      method: 'POST',
      headers : {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
      },
       body: JSON.stringify({ title: task })
    }
    fetch('http://localhost:4000/tasks', postConfig)
    .then((resolve) =>{
      this.getData()
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
     watchForSubmit(newTask) {
      const button = document.getElementById('formSubmitBtn');
      button.addEventListener('click', ()=> {
        let newTask = document.getElementById("newTask").value;
        // this.addTaskToObj(newTask);
        this.updateData(newTask);
        console.log(newTask);
        document.getElementById("newTask").value = "";
        // console.log(this.data);
        // taskArr.push({title: newTask});
        // console.log(typeof newTask + " helper function");
     });
   }


  }

  //console.log value from input field
  //update view with value
  //send task to db.json
  //update view with value from db

