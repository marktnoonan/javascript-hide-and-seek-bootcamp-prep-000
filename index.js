function deepestChild() {
  const grandNode = document.querySelector("#grand-node")
  
  function goDeep(element){
    if (element.children.length){
      // given that we are allowed to assume only one node at each level
      return goDeep(element.children[0])
    } else {
        return element        
    }
  }
  return goDeep(grandNode)
}

function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target") 
}

function increaseRankBy(n) {
  
}
