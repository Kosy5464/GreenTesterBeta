var $table = $('#fresh-table')

window.operateEvents = {
    'click .like': function (e, value, row, index) {
        console.log(value, row, index);

        var rowData = new Array();
        var checkbox = $("input[name=TesterNum]:checked");

        checkbox.each(function(i){
            var tr = checkbox.parent().parent().eq(i);
            var td = tr.children();

            rowData.push(td.eq(0).text());

        });
        $("#resultTester").html("체크된 Tester ID : "+String(rowData));
    }
}
function operateFormatter(value, row, index) {
    return ['<input class="table-action like" type="checkbox" name="TesterNum">'].join('')
}



$(function () {
    $table.bootstrapTable({
        classes: 'table table-hover table-striped',
        toolbar: '.toolbar',

        search: true,
        showColumns: true,
        pagination: true,
        striped: true,
        sortable: true,
        pageSize: 10,
        pageList: [10, 20,30,50,100],

        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return ''
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' rows visible'
        }
    })
})
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

        event.preventDefault()
        var result = confirm('입력한 그대로 제출하시겠습니까?');
        if(result){
            location.replace('index22.html');
        }else{}
    })
})