/**
 * JS DOM / document object model
 * - run js on browser
 */

 function Cat() {
     this.stomach = [];
 };
 Cat.prototype.eat = function(mouse) {
     this.stomach.push(mouse);
     return this;
 };

 function Mouse(name) {
     this.name = name;
 };
 let tom = new Cat();
 let mickey = new Mouse('Mickey') ;
 tom.eat(mickey);
 console.log(tom);