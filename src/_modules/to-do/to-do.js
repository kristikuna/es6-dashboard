export default class ToDo {
  constructor() {
    const url = 'http://localhost:4000/tasks';
    const addNewTask = document.getElementById('addNewTask');
    this.getData(url);
    this.list = document.getElementById("list");
    this.watchForSubmit(newTask)
    this.removeTask();
  }

  //get initial data
  getData(data) {
    fetch('http://localhost:4000/tasks')
      .then(response => response.json())
      .then(data => {
        this.appendList(data);
      }).catch(error => {
        console.log('Error:', error);
      });
  };

  clearDom(data) {
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }
  };

  appendList(arr) {
    this.clearDom();
    arr.forEach((item) => {
      let listItem = document.createElement('li');
      let closeButton = document.createElement('button');
      closeButton.innerText = 'X';
      listItem.innerText = item.title;
      this.list.appendChild(listItem);
      listItem.appendChild(closeButton);
    });
  }

  removeTask(){
    const deleteEventBtn = document.getElementsByTagName('button');
    deleteEventBtn.addEventListener('click', () => {
      console.log("clicked");
   });
  }

  updateData(task) {
    const postConfig = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: task })
    }
    fetch('http://localhost:4000/tasks', postConfig)
      .then((resolve) => {
        this.getData()
      }).catch(error => {
        console.log('Error:', error);
      });
    }

  //delete task
  deleteData(url, id) {
    return fetch(url + '/' + id, {
      method: 'DELETE'
    }).then(reponse => response.json());
  }

  //add event listner
  //get value of input
  //pass value into helper function
  watchForSubmit(newTask) {
    const button = document.getElementById('formSubmitBtn');
    button.addEventListener('click', () => {
      let newTask = document.getElementById("newTask").value;
      this.updateData(newTask);
      document.getElementById("newTask").value = "";
    });
  }
}
