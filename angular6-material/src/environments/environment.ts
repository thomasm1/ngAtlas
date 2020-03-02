// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCrfwGPZUuO6IsLflLleiEPswDQeVC3mCI",
    authDomain: "amcrud.firebaseapp.com",
    databaseURL: "https://amcrud.firebaseio.com",
    projectId: "amcrud",
    storageBucket: "amcrud.appspot.com",
    messagingSenderId: "649950187891"
  }
};
/* Public-friendly apiKey .... NOT a security  risk ....
The apiKey essentially just identifies your Firebase project on the Google servers. It is not a security risk for someone to know it. In fact, it is necessary for them to know it, in order for them to interact with your Firebase project.

In that sense it is very similar to the database URL that Firebase has historically been used to identify the back-end: https://<app-id>.firebaseio.com
*/
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
