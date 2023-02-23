import React from 'react'
import { Link } from 'react-router-dom'
import Cartwidget from '../CardWidget/Cartwidget'

const NavBar = () => {
    return (
        <>

        <section>
            
            <div className='container-logo'>
                <div className='avatar'>
                    <img src="src/assets/imgs/Logos.png" alt="" />
                </div>
                <Link to={"/"} className='title'>
                    <h2 >CC Store</h2>
                </Link>
            </div>


            <div className='container-button'>

                <Link to={"/catalogue"}>
                    <button className='catalogobtn'>Catálogo</button>
                </Link>

                <div className="dropdown">
                    <button className="dropbtn">Categorias 
                        <span className="material-symbols-outlined">arrow_drop_down</span>
                    </button>

                    <div className="dropdown-content">

                        <Link to={`/category/${"Hombre"}`}>
                            <a href="#">Hombre</a>
                        </Link>

                        <Link to={`/category/${"Mujer"}`}>
                            <a href="#">Mujer</a>
                        </Link>

                        <Link to={`/category/${"Niño"}`}>
                            <a href="#">Niños</a>
                        </Link>

                    </div>

                </div>

            </div>

            <Cartwidget/>

        </section>
    </>
    )
}

export default NavBar