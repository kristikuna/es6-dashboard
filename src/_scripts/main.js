// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';
import ToDo from '../_modules/to-do/to-do';


$(() => {
  new Link(); // Activate Link modules logic
  new ToDo();
  console.log('Welcome to Yeogurt!');
});
