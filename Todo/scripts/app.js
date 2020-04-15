function addToDo(){
//  var text = document.getElementById("txt-task").value;
var text = $('#txt-task').val();

if(text!=""){

//document.getElementById('txt-task').value="";
$('#txt-task').val("");
var x=0;
console.log(text);

var li = "<li>"+text+"</li>";
var li = `<li id='${x}'>${text}<button onclick="deleteToDo('${x}');">-</button></li>`;
$('#pending-list').append(li);
  }

  $('#txt-task').focus();
}

function deleteToDo(id){
  $('#'+id).remove();
}

function init(){
  console.log('Init To-Do App');
  $("#btn-add").click(addToDo);

}

window.onload=init;