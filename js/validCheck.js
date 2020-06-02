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
})