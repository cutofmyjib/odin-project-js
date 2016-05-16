/*
  solo tic tac toe game in which the player plays with computer

  player selects which mark: X or O
     if X, computer will be O
     else computer is X

  player selects an empty block, the block shows the mark
  computer's turn - display computer's mark
  check if game is over
    if all blocks are marked
        display message - tie
    else
      check winner
        display message - win
      else
        display message - lose
*/

$(function() {
  var block = assignMark()

  $('.row').click(function(obj) {
    console.log(obj.target.dataset)
    obj.target.dataset.mark = block.marker;
    // var targ = this;
    console.log(obj)
    $(obj.target).html(block.marker)
  })
})

function assignMark() {
  if (document.getElementById('radio1').checked) {
    markHuman = document.getElementById('radio1').value;
    // markRobo = document.getElementById('radio2').value;
    alert('You picked ' + markHuman)
  } else {
    markHuman = document.getElementById('radio2').value;
    // markRobo = document.getElementById('radio1').value;
    alert('You picked ' + markHuman)
  }
  return {
    marker: markHuman
  }
}

