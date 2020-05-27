

document.getElementById('submitqode').onclick= function(){

  var code = document.getElementById('qcode').value;
  if(code=="Customer"){
    event.preventDefault()
    location.href = 'index2.html';

  }
  else{
    alert("코드가 맞지 않습니다.");
    event.preventDefault()
    location.href = 'index21.html';
  }
}

