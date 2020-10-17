import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowRight} from 'react-icons/fi';
import logoImg from '../images/Logo.svg';
import '../styles/pages/landing.css';

function Landing(){
    return(
        <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Icon Happy"/>

        <main>
          <h1>Leve Felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Teresina</strong>
          <span>Piauí</span>
        </div>

        <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.5)"/>
        </Link>
      </div>
    </div>
    );
}

export default Landing;