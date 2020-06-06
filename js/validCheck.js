$(function(){
    //test지의 필수 입력값을 검사하는 부분
    $('button#testpage').click(function(){
        var client = $('input#client').val();
        var inputAW = $('input#inputAW').val();
        var inputService = $('textarea#inputService').val();
        var testDetails = $('textarea#testDetails').val();

        if(!client||!inputAW||!inputService||!testDetails) {
            alert("필수 입력 값을 확인해주세요.")
            location.href = '#test1'
        }
        else{ location.href = '#about'}
    })
    //tester 입력 확인 부분
    $('button#tester').click(function(){
        var tester = $('input#resultTester').val();
        if(!tester){
            alert('선택한 테스터 ID를 확인 해주세요.');
        }
        else{ location.href = '#about2'}
    })
})