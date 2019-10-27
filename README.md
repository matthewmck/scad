# SCAD WebDev Test Project

## Changes Made

### CORS Proxy

When accessing the JSON feed from the client I received a standard CORS error indicating that `Access-Control-Allow-Headers: *` had not been enabled on the server.

> No 'Access-Control-Allow-Origin' header is present on the requested resource.

To bypass this, I'm using a CORS proxy, however, to be clear I would never do this in a production environment for obvious security reasons. Because this project is not to be hosted, I utilized this technique to make it easier to load the page and evaluate the success criteria.

### Color changes for better accessibility

There are a couple colors in the screenshots provided that fail the WCAG 2.0 AA color contrast requirements.

- the modal close button -
  - Foreground Color: #CCC
  - Background Color: #FFF
  - Contrast Ratio: 1.6:1
- blue text on select input and view amenities button -
  - Foreground Color: #00AEEF
  - Background Color: #FFF
  - Contrast Ratio: 2.52:1

I changed these colors to allow for a contrast ratio of at least 4.5:1

## Time Taken

I took this opportunity to explore techniques I typically don’t apply or haven’t used in the past. Because of that I got sidetracked pretty easily but here's a _rough_ estimate of the time taken working on this project:

**30 min** - planning

- Reading SCAD webdev test project specifications
- Finding appropriate substitute font
- Creating project architecture

**50 min** - Getting Started

- Installing CRA and cleaning up files
- Installing dependencies
- Configuring Redux and setting up actions and reducers
- Getting SASS ready
- Adding assets
- Making first get request to JSON feed

**20 min** - colors

- eye dropping colors from desktop mockup
- adding colors to variables.scss

**4 hrs** - Building out functionality

- passing JSON feed to state manager
- setting up App.js
- creating Components
- creating date utilities
- Refactoring

**3 hrs** - Styling

- applying styles to components
- adjusting font sizes, margins, padding according to mockups provided
- adjusting widths for facility cards on different breaking points
- refactoring

**1 hr** - testing

- running accessibility tests
- performing manual accessibility tests
- running lighthouse audit
- cross-browser test
- mobile test
- making necessary adjustments

**Total time rounded up - 10 hours**

## Techniques and dependencies Used

### CRA

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Faster than manually configuring webpack.

### Bootstrap (w/ Jquery and popper)

Used for modal and container. If I was to refactor this project further, I would remove this dependency and use React modal or create a custom one instead.

### Redux thunk

Used to make my actions asynchronous

### Fetch API

Typically use Axios but for this project I decided to utilize the Fetch API to get more familiar with it.

### Date Obj

Typically use Moment or date-fns but for this project I opted to use the native Date object. The nineMonthsFromToday() func is located in the utils folder.

### React portal

Used to inject the modal as a child of the HTML body instead of div element #root.
