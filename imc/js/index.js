
var altura=document.getElementById('altura');
var cm=document.getElementById('cm');
var calcular=document.getElementById('calcular');
var peso=document.getElementById('peso');
var resultado=document.getElementById('resultado');
//var tabela=document.getElementById('tabela');

//var teste=document.querySelectorAll('fbind');




var indice=[
  {
    imc:'Menor que 20',
    legenda:'Abaixo do Peso'
  },
  {
    imc:'20 a 25',
    legenda:'Peso Ideal'
  },
  {
    imc:'25 a 30',
    legenda:'Sobrepeso'
  },
  {
    imc:'30 a 35',
    legenda:'Obesidade Moderada'
  },
  {
    imc:'35 a 40',
    legenda:'Obesidade Severa'
  },
  {
    imc:'Maior que 50',
    legenda:'Morte Súbita'
  }

];

function centimetros(){
  var myAltura=altura.value;

  var valor  =(altura.value)*100;


    cm.value=valor.toFixed(2);
};

var fbind={

  get tabela(){
    return document.getElementById('tabela');
  },
  get variable(){
      var key=[]
      indice.forEach(function(element,index,array){
            key[index]=element;
      });
        return key;
  },
   show(){
      this.tabela.innerHTML +='<tr><td><h4>índice</h3></td><td><h4>Classificação</h3></td></tr>';
      for(var i in this.variable){
        this.tabela.innerHTML +='<tr id="'+i+'"><td>'+this.variable[i]['imc']+'</td><td>'+this.variable[i]['legenda']+'</td></tr>';;
      }
  }


}



var calcIMC={
  get imc(){


        var quadrado=(altura.value)*(altura.value);

        var myIMC=peso.value/quadrado;

        return myIMC.toFixed(1);


      },
    get status(){
      console.log(this.imc);

        var final=5;
        for(i=0;i<final;i++){
          document.getElementById(i).style.background='#fffff';
        }

      var status=this.imc;
       if(status<20){
          document.getElementById('0').style.background='#ff3d00';
        }
        if(status >= 20 && status < 25){
          document.getElementById('1').style.background='#ff3d00';
        }

        if(status>=25 && status<30){
          document.getElementById('2').style.background='#ff3d00';
        }

        if(status==30 && status<35){
          document.getElementById('3').style.background='#ff3d00';
        }

        if(status==35 && status<=40){
          document.getElementById('4').style.background='#ff3d00';
        }

        if(status>=50){
          document.getElementById('5').style.background='#ff3d00';
        }



  }
}




altura.addEventListener('keydown',()=>{

  centimetros();

})
altura.addEventListener('keyup',()=>{
  centimetros();

})

calcular.addEventListener('click',()=>{

//  if(calcIMC !=null){

    var imc='Resultado:<span class="badge">'+calcIMC.imc+'</span>';

     resultado.innerHTML=imc;
     calcIMC.status

  // }
})

window.onload=()=>{
    fbind.show();


      var ids=['altura','peso'];




}
