import React from 'react';
import logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Quer chegar no futuro primeiro antes que os outros?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicitar contato</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
      <p><a href='#home'><img src={logo} alt="logo"/></a></p>
        <p>Temos que inserir aqui o endereço, <br /> Todos os direitos reservados</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Blog</p>
        <p>Instagram</p>
        <p>Nossos parceiros</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Empresa</h4>
        <p>Termos & Condições </p>
        <p>Política de privacidade</p>
        <p>Contato legal</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contate-nos</h4>
        <p>Inserir aqui endereço</p>
        <p>085-132567</p>
        <p>info@thinkgrand.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Think Grand. Todos os direitos reservados.</p>
    </div>
  </div>
);

export default Footer;