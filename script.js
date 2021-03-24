let input = 0

document.getElementById('button')
  .addEventListener('click', enter)

function enter () {
  input = document.getElementById('input').value
  if(input >=17) {
    alert('you can watch any movie')
  } else if (input >= 13) {
    alert('ypu can watch a pg 13 movie')
  } else if (input >= 5) {
    alert('you can watch ao or G movie')
  } else {
    alert('you can not watch this movie because you are too young')
  }
 }
