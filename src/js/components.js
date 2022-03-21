import '../css/components.css';
//import  webpacklogo  from '../assets/img/webpack-logo.png';


export const saludar=(nombre)=>{

    const saludo= document.createElement('h1');
    saludo.innerHTML=`Hola soy ${nombre}!`
    document.body.appendChild(saludo);
    console.log('Creando etiqueta h1');

  //  const img= document.createElement('img');
  //  img.src=webpacklogo;
  //  document.body.append(img);
}