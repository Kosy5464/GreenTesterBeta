//체크박스에 따라서 나오는 값
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
});




//검색하여 나오는 함수, 현재 Name에 맞춰져 있음.
function myFunction() {
    var radiogaga = document.getElementsByName("search1");

    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        //[]인덱스 안에 번호에 따라서 name의 검색할지 Countrty에 검색할지 결정
        //td = tr[i].getElementsByTagName("td")[1];
        //선택된 라디오 버튼에 맞는 검색값 출력
        if(radiogaga[0].selected){
            //전체 카테고리
            td = tr[i];
        }
        else
        { //테이블 헤더 카테고리
            for (var j = 1; j < radiogaga.length; j++) {
                if (radiogaga[j].selected) {
                    //console.log(radiogaga[j].selected);
                    td = tr[i].getElementsByTagName("td")[j];

                }
            }
        }

        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//체크박스 선택시 해당 행 배경색 변경
function setBg(t){
    tr = t.parentNode.parentNode;
    tr.style.backgroundColor=(t.checked)? "#d4edda":"";
}

//Tester Reset 부분(체크 취소, 색상 원상태, TesterID 보여준 값 지우기)
function setCheckBox(t){
    $("input[name=TesterNum]").prop("checked",false);
    $(".testerList:odd").css("background-color","white");
    $(".testerList:even").css("background-color","#eeeeee");
    $(".testerList").hover(function () {
        $(this).css("background-color","#d4edda");
    },function(){
        $(".testerList:odd").css("background-color","white");
        $(".testerList:even").css("background-color","#eeeeee");
    })
    $("#resultTester").val(null);
}