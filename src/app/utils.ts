//function passworsValidation(password){
//     if (password.length < 6)
//       {
//         alert("too_short");
//         return("too_short");
//       } else if (password.length > 50) 
//           {
//               alert("too_long");
//               return("too_long");
//             } else if (password.search(/\d/) == -1) 
//                 {
//                   alert("no_num");
//                   return("no_num");
//                 } else if (password.search(/[a-zA-Z]/) == -1) 
//                     {
//                         alert("no_letter");
//                         return("no_letter");
//                     } else if (password.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) != -1) 
//                         {
//                             alert("bad_char");
//                             return("bad_char");
//                         }
//     return("ok");
// }
//________________________________________________________________________
//function emailValication(email){
//     let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email); true or false
// }
//________________________________________________________________________
// function validateUsername(username) {
//     var error = "";
//     var illegalChars = /\W/; // allow letters, numbers, and underscores
//
//     if (username == "") {
//         error = "&bull; Please enter Username<br>";
//     } else if ((username.length < 5) || (username.length > 15)) {
//         error = "&bull; Username must have 5-15 characters<br>";
//     } else if (illegalChars.test(username)) {
//   	error = "&bull; Please enter valid Username. Use only numbers and alphabets<br>";
//     } else {
//         error = "";
//     }
//     return error;
// }