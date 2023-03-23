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

                        <Link to={`/category/${"Hombre"}`} style = {{textDecoration: 'none'}}>
                            <p href="#">Hombre</p>
                        </Link>

                        <Link to={`/category/${"Mujer"}`} style = {{textDecoration: 'none'}}>
                            <p href="#">Mujer</p>
                        </Link>

                        <Link to={`/category/${"Niño"}`} style = {{textDecoration: 'none'}}>
                            <p href="#">Niños</p>
                        </Link>

                    </div>

                </div>

            </div>

            <Link to={"/cart"} className='card-title'>
                <Cartwidget/>
            </Link>


        </section>
    </>
    )
}

export default NavBar