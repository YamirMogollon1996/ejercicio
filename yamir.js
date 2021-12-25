window.addEventListener("load" ,e =>{
    obtener()
    
})

const data = [
    {id:1 , tipo:"navidad"}
]

const Guardar = ()=>{

    localStorage.setItem("data" ,  JSON.stringify(data))

}

Guardar()
const obtener = ()=>{
  let kakita = JSON.parse(localStorage.getItem("data"))
  if (!kakita){
      console.log("no hay datos")

  }else{
    kakita.map(item => console.log(item.tipo))
  }

}