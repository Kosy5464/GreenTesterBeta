

document.getElementById('submit').onclick= function(){

  var code = document.getElementById('qcode').value;
  if(code=="Custom"){
    event.preventDefault()
    location.href = 'index2.html';

  }
  else{
    alert("코드가 맞지 않습니다.");
  }
}