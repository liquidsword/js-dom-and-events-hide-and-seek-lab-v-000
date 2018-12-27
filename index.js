function getFirstSelector(n) {
  return document.querySelector(n)
}

function nestedTarget() {
  return document.querySelector('#nested .target')

}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
      let children = rankedLists[i].children

      for (let s = 0, t = children.length; s < t; s++) {
        children[s].innerHTML = parseInt (children [s].innerHTML)+ n
      }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let otherNode = node.children[0]

  while (otherNode) {
    node = otherNode
    otherNode = node.children[0]

  }
  return node

}
