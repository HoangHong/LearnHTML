/**
 * the two major(chính) features(tính năng) of AJAX allow you to do the following
 * - make requests to the server without(không) reloading(tải lại) page
 * - recevie and work with data from the server
 * 
 * 
 * // cần lưu trữ dữ liệu lên API server 
 * npm install -g json-server
 * json-server --watch db.json
 * // change port
 * json-server --watch db.json --port 3004
 * 
 * // npm install axios
 * or
 * <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
 * 
 * 
 */

// // step 1 - How to make an HTTP request
// if(window.XMLHttpRequest) {
//     httpRequest = new XMLHttpRequest();
// }else if(window.ActiveXObject){
//     httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
// }

// // httpRequest.onreadystatechange = nameOfTheFunction

// httpRequest.onreadystatechange = function () {

// }
// httpRequest.open('GET', 'http://example.org/some.file', true);
// httpRequest.send();

// // Check state 
// if(httpRequest.readayState === XMLHttpRequest.DONE) {
//     if(httpRequest.status === 200) {

//     }else
// }



