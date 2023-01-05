// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL : 'https://jsonplaceholder.typicode.com/', // for external api data

  firebaseAPIKey:'AIzaSyBJM4iRGv4NQd1-p5R6DJIqyaeUxAsE-nA',// for login authentication purpose

  firebaseConfig : {
    apiKey: "AIzaSyBJM4iRGv4NQd1-p5R6DJIqyaeUxAsE-nA",
    authDomain: "my-angular-app-f76b1.firebaseapp.com",
    databaseURL: "https://my-angular-app-f76b1-default-rtdb.firebaseio.com",
    projectId: "my-angular-app-f76b1",
    storageBucket: "my-angular-app-f76b1.appspot.com",
    messagingSenderId: "214175427574",
    appId: "1:214175427574:web:c0b20312ac57b4b5adf5d7",
    measurementId: "G-4778Z8VCW6"
  }
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
