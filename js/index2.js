$(document).ready(function(){
  $('button#dataSubmit').click(function(){

      var client = $('input#client').val();
      var inputAW = $('input#inputAW').val();
      var inputService = $('textarea#inputService').val();
      var age = $('input:checkbox[name="Age"]:checked');
      var ageArr = new Array();
      age.each(function(i){
          ageArr.push(age.eq(i).val());
      })
      var device = $('input:checkbox[name="device"]:checked');
      var deviceArr = new Array();
      device.each(function (i) {
          deviceArr.push(device.eq(i).val());
      })
      var testDetails = $('textarea#testDetails').val();
      var tester = $("div#resultTester").text();
      var checklist = $('input:text[name="check"]');
      var checkArr = new Array();
      checklist.each(function(i){
          checkArr.push(checklist.eq(i).val());
      })
      var question = $('input:text[name="question"]');
      var quesArr = new Array();
      question.each(function(i){
          if(question.eq(i).val()=="")
              quesArr.push(question.eq(i).attr('placeholder').substring(4,question.eq(i).attr('placeholder').length));
          else{
              quesArr.push(question.eq(i).val());
          }
      })
      var clEmail = $('input#InputEmail').val();
      var clPhoneNum = $('input#InputPhone').val();

      event.preventDefault();
      var result = confirm('입력한 그대로 제출하시겠습니까?');
      if(result){
          window.location.replace('index22.html?client='+client);
          //var str = document.getElementById("client");


      }else{}
  })
})