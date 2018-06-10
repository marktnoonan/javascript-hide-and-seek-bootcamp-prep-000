function deepestChild() {
  const grandNode = document.querySelector("#grand-node")
  
  function goDeep(element){
    if (element.children.length){
      goDeep(element.children[0])
    } 
  return element
  }
  
  return goDeep(grandNode)
  
}