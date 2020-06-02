
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
          //var job = td.eq(1).text()+", ";
          //var gender = td.eq(2).text()+", ";
		  //var grade = td.eq(3).text()+", ";
		  //var device = td.eq(4).text()+", ";
		  //var hobby = td.eq(5).text()+", ";
          
          // 가져온 값을 배열에 담는다.
          tdArr.push(number);

        });
        
        $("#resultTester").html("<br> 선택한 테스터의 번호 = "+tdArr);	
        $("#ex3_Result2").html(tdArr);	
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
		for(var j=0;j<radiogaga.length;j++){
			if(radiogaga[j].checked){
				console.log(radiogaga[j].checked);
				td = tr[i].getElementsByTagName("td")[j];
				
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
