//파이어 베이스 관련 js입니다

window.onload = function() {
    const config = {
        apiKey: "AIzaSyD3JYOzS03azOnDWPE_egzd-MeAQcRK6yc",
        authDomain: "greentesterbeta.firebaseapp.com",
        databaseURL: "https://greentesterbeta.firebaseio.com",
        projectId: "greentesterbeta",
        storageBucket: "greentesterbeta.appspot.com",
        messagingSenderId: "326184805949",
        appId: "1:326184805949:web:c95f62e62eca17c0002c54",
        measurementId: "G-5Z9VEYY7B7"
    };
    firebase.initializeApp(config);


    //아래 두 줄은 파이업 베이스에 접근하기 위한 코드
    const preObject = document.getElementById('object');

    const dbRefObject = firebase.database().ref().child('custom');
    // .ref()는 데이터베이스의 루트로 접근하게 함.
    // .child()는 객체의 child 키를 생성함 (해당 키의 값을 찾는듯)
};





$(document).ready(function(){
    $('button#dataSubmit').click(function(){
        
        //event.preventDefault();
        //test지 Input값 받아오는 부분
        var client = $('input#client').val();
        $('#client').on('change',function(){
           var a = $(this).val();
           console.log(a);
        });
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
  
        //testerID 값 받아오는 부분
        var tester = $("input#resultTester").val();
  
        //test지 밑 부분 값
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
  
        //Email, phonenumber 값 가져오는 부분
        var clEmail = $('input#InputEmail').val();
        var clPhoneNum = $('input#InputPhone').val();
  
        //이메일, 연락처 빈 값 검사 부분
        if(!clEmail||!clPhoneNum){
            event.preventDefault();

            document.getElementById("modal").innerHTML ='<div class="modal-dialog" role="document">\n' +
                '                            <div class="modal-content">\n' +
                '                                <div class="modal-body">\n' +
                '                                   <h3>필수 입력값을 확인해주세요.</h3>\n' +
                '                                </div>\n' +
                '                                <div class="modal-footer">\n' +
                '                                    <button type="button" class="btn btn-default"  data-dismiss="modal">확인</button>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </div>';
            //event.preventDefault();

        }
        else {
            event.preventDefault();
            document.getElementById("modal").innerHTML = ' <div class="modal-dialog modal-lg" role="document">\n' +
                '                            <div class="modal-content">\n' +
                '                                <div class="modal-header">\n' +
                '                                    <h5 class="modal-title" id="exampleModalLabel">입력 내용 확인</h5>\n' +
                '                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
                '                                        <span aria-hidden="true">&times;</span>\n' +
                '                                    </button>\n' +
                '                                </div>\n' +
                '                                <div class="modal-body" id="modalContent">\n' +
                '                                    ...\n' +
                '                                </div>\n' +
                '                                <div class="modal-footer">\n' +
                '                                    <button type="button" class="btn btn-primary"  id="finalSubmit" onclick="location.href=\'index23.html\'">확인</button>\n' +
                '                                    <button type="button" class="btn btn-default"  data-dismiss="modal">취소</button>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </div>';
            document.getElementById("modalContent").innerHTML = '<br><br><b>의뢰인</b> : ' + client + '<br>' + '<b>App/Web 명</b> : ' + inputAW + '<br>' +
                '<b>대상연령</b> : ' + ageArr + '<br>' + '<b>사용기기</b> : ' + deviceArr + '<br><br>-------<br><br>' + '<h3>서비스 요약</h3> : ' + inputService + '<br><br>' + '<h3>테스트 요청사항</h3>' + testDetails + '<br><br>' + '<h3>체크 사항</h3>' + checkArr +
                '<br><br>' + '<h3>질문 리스트</h3>' + 'Q1.' + quesArr[0] + '<br>Q2.' + quesArr[1] + '<br>Q3.' + quesArr[2] + '<br>Q4.' + quesArr[3] + '<br>Q5.' + quesArr[4] + '<br><br><br>-------<br><br><b>Tester ID</b> :' + tester + '<br><br>-------<br><br>' + '<b>E-mail</b> : ' + clEmail + '<br>' + '<b>연락처</b> : ' + clPhoneNum + '<br><br>';
        }
        //파이어베이스에 값 넣기
        $('button#finalSubmit').click(function(){
            firebase.database().ref('/customer/'+clPhoneNum).set({
                  A_clientName:client,
                  B_AppWeb: inputAW,
                  C_service: inputService,
                  D_age:ageArr,
                  E_device:deviceArr,
                  F_testDetails:testDetails,
                  G_checklist: checkArr,
                  H_question:quesArr,
                  I_testerID:tester,
                  J_clientEmail: clEmail,
  
            });
            alert('제출이 완료되었습니다.')
        })
    })
  
  })
  
