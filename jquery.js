function remove() {
 var tbl = document.getElementById('tblSample');
 var lastRow = tbl.rows.length;
 for(i=1;i<lastRow-1;i++){
  tbl.deleteRow(lastRow - i);
  }
  dialog();
}
function dialog() {
    var person = document.getElementById("counts").value;
    if (person != null) {
       if(person != 1){
    addRowToTable();
    }
    }
}
dialog();
function addRowToTable()
{

  for(i=0;i<document.getElementById("counts").value;i++)
  {
  
  var tbl = document.getElementById('tblSample');
  var lastRow = tbl.rows.length;
  var iteration = lastRow;

    

  var row = tbl.insertRow(lastRow);

  if(lastRow==2){
    i++;
  }
  
  var cellLeft = row.insertCell(0);
  var textNode = document.createTextNode(iteration);
  cellLeft.appendChild(textNode);

  
  var cellRight = row.insertCell(1);
  var el = document.createElement('input');
  el.type = 'text';
  el.name = 'txtRow' + iteration;
  el.id = 'txtRow' + iteration;
  el.size = 40;
  el.placeholder = 'Key';
  cellRight.appendChild(el);

  var cellRightSel = row.insertCell(2);
  var sel = document.createElement('input');
  sel.type = 'text';
  sel.name = 'Selw' + iteration;
  sel.id = 'Selw' + iteration;
  sel.size = 40;
  sel.placeholder = 'Value';
  cellRightSel.appendChild(sel);
  }
  if(document.getElementById("counts").value !=1){
  row.setAttribute("style", "background-color:  #dddddd", 0);
  }
}
function removeRowFromTable()
{
  
  for(i=1;i<=document.getElementById("counts").value;i++){
  var tbl = document.getElementById('tblSample');
  var lastRow = tbl.rows.length;
     if (lastRow-1 > document.getElementById("counts").value) tbl.deleteRow(lastRow - 1);
   }
}


function openInNewWindow(frm)
{


  SizeOf();
  if(document.getElementById("counts").value>0){
  var aWindow = window.open('','NewWindow','scrollbars=yes,menubar=yes,resizable=yes,toolbar=no,width=400,height=400');
  frm.target = 'NewWindow';
  frm.submit();
  }
  
}
function SizeOf()
{
 var tbl = document.getElementById('tblSample');
 var lastRow = tbl.rows.length;
 document.getElementById("custId").value = lastRow;
}
