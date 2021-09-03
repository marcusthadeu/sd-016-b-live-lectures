let container = document.getElementById('first');


function createDivElement(classes){
  let newDiv = document.createElement('div');
  newDiv.className = classes;
  return newDiv;
}

function addElementAsChild(parent, element){
  parent.appendChild(element);
}

shapesWithFeatures = ['green square small', 'red circle small', 'yellow square small', 'green circle small']

for(let shapeWithFeatures of shapesWithFeatures){
  let element = createDivElement(shapeWithFeatures);
  addElementAsChild(container, element);
}
