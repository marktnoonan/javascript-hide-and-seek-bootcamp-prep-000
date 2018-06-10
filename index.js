function deepestChild() {
  const grandNode = document.querySelector("#grand-node")
  
  function goDeep(element){
    if (element.children.length){
      return goDeep(element.children[0])
    } else {
        return element        
    }
  }
  
  return goDeep(grandNode)
  
}