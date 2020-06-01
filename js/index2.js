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

      document.getElementById("modalContent").innerHTML = '<br><br><b>의뢰인</b> : '+client+'<br>'+'<b>App/Web 명</b> : '+inputAW+'<br>'+
          '<b>대상연령</b> : '+ageArr +'<br>'+'<b>사용기기</b> : '+deviceArr +'<br><br>-------<br><br>'+'<h3>서비스 요약</h3> : '+inputService+'<br><br>'+'<h3>테스트 요청사항</h3>'+testDetails +'<br><br>'+'<h3>체크 사항</h3>'+checkArr+
          '<br><br>'+'<h3>질문 리스트</h3>'+'Q1.'+quesArr[0]+'<br>Q2.'+quesArr[1]+'<br>Q3.'+quesArr[2]+'<br>Q4.'+quesArr[3]+'<br>Q5.'+quesArr[4]+'<br><br><br>-------<br><br><b>Tester ID</b> :'+tester+'<br><br>-------<br><br>'+'<b>E-mail</b> : '+clEmail+'<br>'+'<b>연락처</b> : '+clPhoneNum+'<br><br>';
  })
})