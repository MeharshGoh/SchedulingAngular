npm install bootstrap@latest --save

npm install jquery@latest --save

npm install ngx-bootstrap --save

npm i ngx-bootstrap-datetime-popup

ng add @angular/material

npm i date-fns 

ng add @ng-bootstrap/ng-bootstrap

 npm install angular-calendar --save

npm install --save flatpickr angularx-flatpickr

# Add these below lines in style.scss

@import "~bootstrap/dist/css/bootstrap.css";
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
@import "../node_modules/angular-calendar/css/angular-calendar.css";

body {
    padding: 30px;
     position: relative
}
body .bs-datepicker-container .bs-datepicker-head{
  background-color: #fff;
}
body .bs-datepicker-container .bs-datepicker-head * {
  color: #000;
}
html, body { height: 100%; }
body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }

/* Importing Bootstrap SCSS file. */
@import '~bootstrap/scss/bootstrap';

# Add these below line in angular.json

sytle [
    "node_modules/bootstrap/dist/css/bootstrap.css",
              "node_modules/ngx-bootstrap/datepicker/bs-datepicker.css"
]

script : [
     "node_modules/jquery/dist/jquery.min.js"
]
