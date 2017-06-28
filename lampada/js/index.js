var imgAcesa=document.getElementById('acesa');
var imgApagada=document.getElementById('apagada');

var btnLigar=document.getElementById('btnLigar');
var btnDesligar=document.getElementById('btnDesligar');
window.onload=()=>{
  imgAcesa.style.display='none';
//  btnDesligar.setAttribute('disabled',true);
  //btnLigar.setAttribute('disabled', false);
  btnDesligar.disabled=true;

}


btnLigar.addEventListener('click',()=>{
  imgAcesa.style.display='block';
  imgApagada.style.display='none';
  btnDesligar.disabled=false;
  btnLigar.disabled=true;
//  btnLigar.setAttribute('disabled', true);
// btnDesligar.setAttribute('disabled',false);
});

btnDesligar.addEventListener('click',()=>{
  imgAcesa.style.display='none';
  imgApagada.style.display='block';
  btnDesligar.disabled=true;
  btnLigar.disabled=false;
});

imgApagada.addEventListener('mouseover',()=>{
  imgAcesa.style.display='block';
  imgApagada.style.display='none';
  btnDesligar.disabled=false;
  btnLigar.disabled=true;
});

imgAcesa.addEventListener('mouseout',()=>{
  imgAcesa.style.display='none';
  imgApagada.style.display='block';
  btnDesligar.disabled=true;
  btnLigar.disabled=false;
})
