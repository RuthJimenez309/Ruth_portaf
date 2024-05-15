const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalTechnologies = document.getElementById("modalTechnologies");
const urlGithub = document.getElementById('RepositorioProyectos');

const projects = document.querySelectorAll(".projects-row-detail img");

let gestionGasolineta = "Una gestion de gasolinera, con interfaz grafica"
let arbolesAlgoritmo = "Un algoritmo que permite crear arboles, hacer recoridos sobre el arbol"
let Readigo = "Una pagina web de entregas condistintos niveles de acceso, administrador, motorista y cliente"

projects.forEach((project, index) => {
    project.addEventListener("click", () => {
        const projectImages = ["ProyectoHomero.jpg", "Inmobiliaria.jpg"]; // Nombres de las imágenes de proyectos
        const projectDescriptions = [ProyectoHomero, Inmobiliaria]; // Descripciones de los proyectos
        const url =["https://github.com/RuthJimenez309/Homero_Proyect/blob/master/Homero_Clientes/index.html","https://github.com/RuthJimenez309/Inmobiliaria"]
        const projectTechnologies = [
            ["java.png"],
            ["java.png"],
            ["2.webp", "js.png", "css.png", "ts.png", "mongodb.png","nodejs.png"]
        ]; // Imágenes de las tecnologías por proyecto

        modalImage.src = `assets/img/${projectImages[index]}`;
        modalDescription.textContent = projectDescriptions[index];
        urlGithub.href = url[index]

        modalTechnologies.innerHTML = projectTechnologies[index]
            .map(tech => `<img src="assets/img/${tech}" alt="${tech.replace('.png', '')}">`)
            .join("");

        modal.style.display = "block";
    });
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


//TODO Funcion para regresar al inicio
//notificaciones
// <li><a href="#about">Sobre mi</a></li>
//<li><a href="#proyectos">proyectos</a></li>
//<li><a href="#tecnologias">Tecnologias</a></li>
//<li><a href="#contact">Contactarme</a></li>
const menu = 1;
const Sobremi = 2;
const proyectos= 3;
const Tecnologias= 4;
const Contactarmes = 5;
function opcionesSubmenu (opcion){

    switch (opcion) {
        case Sobremi:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('Sobremi').style.display = "none";
            document.getElementById('proyectos').style.display = "block";
            document.getElementById('Tecnologias').style.display="block";
            document.getElementById('Contactarmes').style.display="none";
        
            break;
            case proyectos:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('Sobremi').style.display = "none";
            document.getElementById('proyectos').style.display = "block";
            document.getElementById('Tecnologias').style.display="block";
            document.getElementById('Contactarmes').style.display="none";
            break;
            case Tecnologias:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('Sobremi').style.display = "none";
            document.getElementById('proyectos').style.display = "block";
            document.getElementById('Tecnologias').style.display="block";
            document.getElementById('Contactarmes').style.display="none";
            break;
            

            case Contactarmes:
                document.getElementById('contenido-1').style.display = "block";
                document.getElementById('Sobremi').style.display = "none";
                document.getElementById('proyectos').style.display = "block";
                document.getElementById('Tecnologias').style.display="block";
                document.getElementById('Contactarmes').style.display="none";
                break;
                
    
            default:
                break;
        }
    }