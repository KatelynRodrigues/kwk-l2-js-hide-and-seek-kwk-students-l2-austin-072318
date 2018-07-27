//Code your solution here
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested")
}

function increaseRankBy(n){
  var ranks = document.querySelectorAll("ul.ranked-list li")
  for (i=n; i<ranks.length; i++){
    ranks[i].innerHTML = (i + 1).toString()
  }
}