const menuNavBar=document.getElementById('menunavbar')



function fillMenu(){
    for(let i in menu){

      const li=document.createElement('li')
      const link=document.createElement('a')

        link.href=menu[i].url

        link.text=menu[i].opcao

        li.appendChild(link)
        console.log(link);
        menuNavBar.appendChild(li)

    }
}

window.onload=()=>{
  fillMenu()
}
