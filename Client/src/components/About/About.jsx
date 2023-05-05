import style from "./About.module.css"
import logo from "../Assets/img/H.png"

const About = () => {
    return(
        <div className={style.container}>
            <h1>¿QUE SOY?</h1>
            <p className={style.pContent}>Soy una aplicación de prueba para el proyecto integrador de Henry, 
            la cual busca aplicar todos los conocimientos obtenidos durante los modulos 2, 3 Y 4 del curso, los cuales
            estubieron enfocados en react, css, html, javascript, webserver, express, promises, midlewere, DBA, ORM, Sequelize, Postgres, etc.</p>
            <img src={logo} alt="" className={style.imgLogo} />
        </div>

    )
}

export default About;