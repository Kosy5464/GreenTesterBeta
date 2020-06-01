$(function(){
    $('button[type=button]').click(function(){
        var textTotal = $('input[type=text]').val();
        var testDetails = $('textarea#testDetails').val();
        console.log(testDetails);
        if(!textTotal&&!testDetails) {
            alert("입력해.")
            location.href = '#test1'
        }
    })
})