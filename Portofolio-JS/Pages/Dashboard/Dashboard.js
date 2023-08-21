import { initControler } from "../../Utils/route";
import "./Dashboard.css";


//1ero-->funcion template
//ponemos figure para estructurar que tenemos texto y figura y poder hacer click en estos elementos
//PONEMOS ID para identificar unitariamente un elemento

const template=() => `
<div id= "ContainerDashboard"> 
    <ul>
    
<li>
<figure id="figurePokemon" class"figureDashboard">
<H1>POKEMON</H1><h2>Haz click en la imagen y disfruta viendo los 150 Pokemon</h2>
<img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683535723/ProyectoMarc/images_rlmlmr.png" alt="logoPokemon" />

</figure>
</li>
<li>

<figure id="figureWakamole" class"figureDashboard">
<h1>WAKAMOLE</h1><h2>Si eres hábil serás capaz de cazar los topos saliendo de su agujero</h2>
    <img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683814516/ProyectoMarc/un-juego-para-golpear-al-topo_lusgdi.jpg" alt="logowakamole" />

</figure>
</li>
    </ul>
</div>
`;

export const printTemplate =()=>{
    document.querySelector("main").innerHTML = template();
    };