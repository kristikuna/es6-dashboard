'use strict';

export default class ToDo {
  constructor() {
    this.name = 'to-do';
    console.log('%s module', this.name.toLowerCase());
  }
}

const url = 'https://localhost:4000/db.json';
console.log(url);
// const data = /db.json;
// console.log(data);

fetch(url, {
  method: 'GET', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

// fetch(url)
// .then( (response)=> {
//   return response.json();
//   console.log(response);
// })
// .then(function(myJson) {
//   console.log(myJson);
// });