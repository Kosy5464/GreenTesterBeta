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
    $("#test").click(function(){

        var rowData = new Array();
        var tdArr = new Array();
        var checkbox = $("input[name=TesterNum]:checked");

        // 체크된 체크박스 값을 가져온다
        checkbox.each(function(i) {

            // checkbox.parent() : checkbox의 부모는 <td>이다.
            // checkbox.parent().parent() : <td>의 부모이므로 <tr>이다.
            var tr = checkbox.parent().parent().eq(i);
            var td = tr.children();

            // 체크된 row의 모든 값을 배열에 담는다.
            rowData.push(tr.text());

            // 0번이 번호 이므로 번호를 가져옴
            var number = td.eq(0).text()+" "

            // 가져온 값을 배열에 담는다.
            tdArr.push(number);

        });
        $("#resultTester").val(tdArr);
    });
        //tester 입력 확인 부분
    $('button#tester').click(function(){
            var tester = $('input#resultTester').val();
            if(!tester){
                alert('선택한 테스터 ID를 확인 해주세요.');
            }
            else{ location.href = '#about2'}
    })
    $('button#dataSubmit').click(function(){
        //testerID 값 받아오는 부분
        var tester = $("input#resultTester").val();

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
            document.getElementById("modalContent").innerHTML = '<br><br><b>Tester ID</b> :' + tester + '<br><br>-------<br><br>' + '<b>E-mail</b> : ' + clEmail + '<br>' + '<b>연락처</b> : ' + clPhoneNum + '<br><br>';
        }
        //파이어베이스에 값 넣기
        $('button#finalSubmit').click(function(){
            firebase.database().ref('/customer/'+clPhoneNum).set({
                I_testerID:tester,
                J_clientEmail: clEmail,
                K_clientTel: clPhoneNum,
                L_onCheck:0
            });
            alert('제출이 완료되었습니다.')
        })
    })

})
