/**
 * ========== HTML EMLEMENT =======
 * .children             (element)
 * .textContent         (node)
 * .appendChild()       (node)   
 * .remove()            (element)
 * 
 * document.createElement('element')
 */



 /**
  * .children is a read-only property that return a live HTMLCollection
  *  // which contains all of the child element of the node
  * 
  * syntax 
  * let children = node.children
  * 
  * 
  * // you can access the individual child nodes in the collection 
  * by using either the item()
  * 
  * **/ 

  const list = document.getElementById('todo-list');
  for(let i = 0; i < list.children.length; i++) {
      console.log(list.children[i].tagName);
  }
  let li0 = list.children.item(0);
  console.log(li0)



 // ======= .append() ===========
 /**
  * .append() method INSERT A SET of node object or DomString object
  * after the last child of the parentNode.
  *  */ 
 let li1 = document.createElement('li');
//  list.append(li1);
li1.textContent = "Cook tomorrow lunch";
list.appendChild(li1);
 console.log(list.childNodes);

 // ========== appendChild() ==========
 /**
  * - method adds a node to the end of the list of children
  * of a specified parent node
  * 
  */

