/*eslint no-unused-expressions:0 */
'use strict';

import ToDo from '../to-do';

describe('ToDo View', function() {

  beforeEach(() => {
    this.toDo = new ToDo();
  });

  it('Should run a few assertions', () => {
    expect(this.toDo).to.exist;
  });

});
