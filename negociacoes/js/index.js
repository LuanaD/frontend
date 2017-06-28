

var campos=[
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')
];

//campos[0].value=myData;
//console.log(campos);
var tbody=document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit',(event)=>{
  //alert('oi')
  event.preventDefault();
  var tr=document.createElement('tr');

  campos.forEach(function(campo){
    var td=document.createElement('td');

    console.log(campo);
    td.textContent=campo.value;
    tr.appendChild(td);

  });
  var tdVolume=document.createElement('td');
  tdVolume.textContent=campos[1].value*campos[2].value;
  console.log(tdVolume);
  tr.appendChild(tdVolume);
  tbody.appendChild(tr);

  campos[0].value='';
  campos[1].value='1';
  campos[0].value='0.00';


});
