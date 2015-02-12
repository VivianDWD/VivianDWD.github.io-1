$(document).ready(function(){
  
  var src="https://hivelab.org/static/students.json";
  $.getJSON(src, function(data){
    var table_student = $('#IEtable');

    $.each(data, function(index, student){
   
      table_student.append("<tr><td>" + student.Name 
	 		 +"</td><td>" + student.GPA 
	  		 +"</td><td>" + student.GRE_V 
	 		 +"</td><td>" +  student.GRE_Q 
	  		 +"</td><td>" + student.Essay 
			 +"</td><td>" + student.Recom + "</td></tr>");
   
    });
  });
});
// JavaScript Document