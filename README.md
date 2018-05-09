# Momentum-Clone readme

Generated on 2018-05-09 using
[generator-yeogurt@2.0.1](https://github.com/larsonjj/generator-yeogurt)

## Description

This is an example readme file.
Describe your site/app here.

## Technologies used

JavaScript
- [Browserify](http://browserify.org/) with ES6/2015 support through [Babel](https://babeljs.io/)
- [Node](https://nodejs.org/)

Testing
- [Karma](http://karma-runner.github.io/0.13/index.html)
- [Mocha](http://mochajs.org/)

Styles
- [Sass](http://sass-lang.com/) via ([node-sass](https://github.com/sass/node-sass))

Markup
- [Nunjucks](https://mozilla.github.io/nunjucks/)

Optimization
- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

Server
- [BrowserSync](http://www.browsersync.io/)

Linting
- [ESlint](http://eslint.org/)

Automation
- [Gulp](http://gulpjs.com)

Code Management
- [Editorconfig](http://editorconfig.org/)
- [Git](https://git-scm.com/)


## Npm Scripts

> Note: In order to avoid having to install `npm` dependencies globally, this project uses `npm scripts` to access the binaries of yeogurt and json-server. Therfore some of the development commands are a little different than the normal yeogurt project.

`npm run yeogurt`: Runs generator-yeogurt `yo yeogurt`. You would only need this if you wanted to restart your project entirely.

`npm run module`: Runs generator-yeogurt `yo yeogurt:module` (module generator). Pass arguments to yeogurt with `--`. Example: `npm run module -- module-name --atomic="molecule"`

`npm run page`: Runs generator-yeogurt `yo yeogurt:page` (page generator). Pass arguments to yeogurt with `--`. Example: `npm run module -- page-name`

`npm run layout`: Runs generator-yeogurt `yo yeogurt:layout` (layout generator). Pass arguments to yeogurt with `--`. Example: `npm run layout -- layout-name`

`npm run api`: Starts json-server on [localhost:4000](localhost:4000)

`npm run serve`: Compiles preprocessors and boots up development server and json-server concurrently


## Requirements

## Programming Notes

- No Bootstrap
- Responsive
  - `Implementation note: decide as a team on a direction (ie CSS grid or flexbox - not that those can't be used together)

#### Branching Strategy

- `develop-grandcircus`
  - `feature/unsplash`
  - `feature/clock`
  - `feature/todo`

### Bonus

- No jQuery

## Unsplash

_Request an image from the Unsplash API.  This should be a different random image each page load. Set the image as page background image at full width and height, centering the image on the middle, without altering the aspect ratio. Display image and source credits as well as additional information about the photo._

- Image should be a background image at full width and height of viewport. Aspect ratio should not be altered and image should be focused in the center.
- Add a filter overlay on top of the image so other text on the page is not washed out.
- Unsplash credit should like to the Unsplash site in a new tab.
- Author credit section should link to author's website.
  - `Implementation note: do not use anchor tags`
- (i)nfo icon should display additional information about the photo on hover for desktop, on tap for mobile.

### Bonus

- Add a refresh button to pull in a new image without actually refreshing the page
- Animate information tooltip

## Clock

_Create a customizable clock that auto-updates the time every minute and displays a welcome message with the proper period of day (morning, afternoon, evening).  Allow the user to alter the clock view_

- The clock should update itself every minute.
- Periods of day are defined as follows:
  - `Morning`: 2am - 12pm
  - `Afternoon`: 12pm - 5pm
  - `Evening`: 5pm - 2am
- Upon clicking the settings gear, a modal should open providing the user with the following options:
  - Military time checkbox.  When the `military time` checkbox is chosen, the `am/pm` option should be disabled. `Default`: unchecked
  - Display `am/pm` checkbox.  When the `am/pm` checkbox is chosen, the `military time` option should be disabled. `Default`: unchecked
  - Username field. `Default`: no value
- Settings should be remembered and defaulted on page load.  If there are no settings, default values should be used.
  - `Implementation note: use local storage`
- The settings modal should close on click of the close icon and when clicking anywhere outside of the modal dialogue box.

### Bonus

- Disallow non-word characters (Only letters, numbers, and underscore allowed) in username field
- Add settings to style clock color, font
- Close modal on `esc`

## To-Do List

_Display a list of to-do items as added by the user_

- Populate user's current list on page load from the database
- Add new items in real-time to the list of to-do items
- Save new items to the database
- `X` icon should delete the item from the view and database
- The message `Congratulations! You have nothing to do!` should display when no items exist

### Bonus

- Fade text on delete/add
- Solve for how to handle if the list is long
  - Possibly limit input characters
  - Possibly only display text on one line with a show more
- Add a button to the `Congrats` message to auto-focus the input
- Add checkbox to `Complete` items instead of just deleting them
  - Add view for `Complete`d items
    - Note: may not be possible given API/DB constraints

