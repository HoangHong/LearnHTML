/**
 * element's innerHTML property
 *  - gets or sets the HTML or XML markup container within the element
 * 
 */

 let content = document.getElementById('container');
 let x = content.textContent
 console.log(x);
 let y = content.innerHTML;
 console.log(y);
 let z = content.innerHTML = 'Hello <a href =" #" > world</a>!!!! ';
 console.log(z) 