"use strict";

let elements = document.querySelectorAll("[data-lang]");
const boton_lang = document.getElementById("change-lang");
const menuBtn=document.getElementById("menu-btn"); //variables para el menú hamburguesa
const navMenu=document.querySelectorAll('nav ul'); //dos uls
let curr_lang = "en";
const texts = {
    en: {
        "about": "About Me",
        "experience": "Experience",
        "skills": "Skills",
        "projects": "Projects",
        "contact": "Contact",
        "intro-1": "Hi, I'm Pablo Saavedra",
        "intro-2": "Fullstack Web Dev & Art Teacher",
        "self-description": "I'm passionate about <strong>art and technology</strong>, always looking for new forms of expression and creation. My background in visual arts, design and my teaching experience have allowed me to understand the creative process from different perspectives, while my foray into web development and 3D has opened up a world of possibilities to <strong>merge the artistic with the digital</strong>. I enjoy exploring the intersection between these fields, combining traditional techniques with innovative tools to bring unique and functional projects to life.",
        "education-title": "Education",
        "degree-web-app": "Degree in Web Applications Development",
        "time-2023-2025": "2023-2025",
        "atlántida-cid": "Atlántida CIDEP",
        "master-secondary-ed": "Master in Secondary Education",
        "time-2020-2021": "2020-2021",
        "university-almeria": "University of Almería",
        "degree-fine-arts": "Degree in Fine Arts (Mention in Animation & Design)",
        "time-2014-2018": "2014-2018",
        "university-granada": "University of Granada",
        "work-experience-title": "Work",
        "art-teacher": "Art Teacher (Secondary Education) & Robotics Camp Monitor",
        "time-2022-2023": "2022-2023",
        "agora-granada": "Agora Granada College",
        "ability-1": "Teamwork",
        "ability-2": "Proactivity",
        "project-1-title": "Shito-Ryu Sport Club",
        "project-1-description": "Web application for a fictitious karate sport club developed in PHP and Javascript. Includes several functionalities such as user sessions, external and internal API implementation and more.",
        "project-2-title": "Simon Says",
        "project-2-description": "Simon Says, the famous memory game, developed in HTML, CSS and JavaScript. Includes additional game modes.",
        "project-3-title": "Seats Selector",
        "project-3-description": "Cinema seat selection application developed in HTML, CSS and JavaScript",
        "project-4-title": "Board Game Association",
        "project-4-description": "Static website for a fictitious board game club developed in HTML and CSS",
        "download-cv": "Download CV",
        "contact-description": "Let's get in touch! You can contact me by email or phone, as well as download my complete CV.",
        "footer-text": "&copy; 2025 Pablo Saavedra. All Rights Reserved."
    },
    es: {
        "about": "Sobre Mi",
        "experience": "Experiencia",
        "skills": "Habilidades",
        "projects": "Proyectos",
        "contact": "Contacto",
        "intro-1": "Hola, soy Pablo Saavedra",
        "intro-2": "Desarrollador Fullstack & Profesor de Arte",
        "self-description": "Soy un apasionado del <strong>arte y la tecnología</strong>, siempre en búsqueda de nuevas formas de expresión y creación. Mi formación en artes visuales, diseño y mi experiencia docente me han permitido comprender el proceso creativo desde diferentes perspectivas, mientras que mi incursión en el desarrollo web y el 3D me ha abierto un mundo de posibilidades para <strong>fusionar lo artístico con lo digital</strong>. Disfruto explorando la intersección entre estos campos, combinando técnicas tradicionales con herramientas innovadoras para dar vida a proyectos únicos y funcionales.",
        "education-title": "Educación",
        "degree-web-app": "Grado Superior en Desarrollo de Aplicaciones Web",
        "time-2023-2025": "2023-2025",
        "atlántida-cid": "Atlántida CIDEP",
        "master-secondary-ed": "Máster de Profesorado en Educación Secundaria",
        "time-2020-2021": "2020-2021",
        "university-almeria": "Universidad de Almería",
        "degree-fine-arts": "Grado en Bellas Artes (Mención en Animación y Diseño)",
        "time-2014-2018": "2014-2018",
        "university-granada": "Universidad de Granada",
        "work-experience-title": "Laboral",
        "art-teacher": "Profesor de Arte (Educación Secundaria) y Monitor en Campamento de Robótica",
        "time-2022-2023": "2022-2023",
        "agora-granada": "Ágora Granada College",
        "ability-1": "Trabajo en equipo",
        "ability-2": "Proactividad",
        "project-1-title": "Club Kárate Shito-Ryu",
        "project-1-description": "Aplicación web para un club de karate ficticio desarrollado en PHP y Javascript. Incluye varias funcionalidades como sesiones de usuario, implementación de API externas e internas y más.",
        "project-2-title": "Simon Dice",
        "project-2-description": "Simon Dice, el famoso juego de memoria, desarrollado en HTML, CSS y JavaScript. Incluye modos de juego adicionales.",
        "project-3-title": "Selector de Butacas",
        "project-3-description": "Aplicación de selección de asientos de cine desarrollada en HTML, CSS y JavaScript",
        "project-4-title": "Board Game Association",
        "project-4-description": "Sitio web estático para un club ficticio de juegos de mesa desarrollado en HTML y CSS",
        "download-cv": "Descargar CV",
        "contact-description": "¡Hablemos! Puedes contactarme por correo electrónico o teléfono, así como descargar mi CV completo.",
        "footer-text": "&copy; 2025 Pablo Saavedra. Todos los derechos reservados."
    }
};

//evento para mostrar el menú escondido en resoluciones menores
menuBtn.addEventListener("click", () => {
    navMenu.forEach(
        (i) => {
            i.classList.toggle("active");
        }
    )
});

boton_lang.addEventListener("click", ()=>{
    changeLang();
    elements.forEach(
        (e) => {
            let key = e.getAttribute("data-lang");
            e.innerHTML = texts[curr_lang][key];
        }
    )
})

function changeLang(){
    curr_lang = curr_lang === "en" ? "es" : "en";
}