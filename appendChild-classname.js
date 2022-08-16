var tag = document.createElement("p");
var text = document.createTextNode("Carrinho");
tag.appendChild(text);
const collection = document.getElementsByClassName("qodef-m-opener");
for (let i = 0; i < collection.length; i++) {
  collection[i].appendChild(tag);}
