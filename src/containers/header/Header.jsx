import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Vamos construir algo novo com a ThinkGrand!</h1>
        <p>Bem-vindo à Think Grand, uma empresa de desenvolvimento de software de serviço completo dedicada à criação de soluções inovadoras que impulsionam o sucesso dos negócios.
        Vamos levar o seu negócio para o próximo nível com tecnologia de ponta. Entre em contato conosco hoje para saber mais!</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder="Seu endereço de email"/>
          <button type='button'> Receber contato</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 pessoas solicitaram um contato nos últimos 7 dias</p>
        </div>
      </div>
        <div className='gpt3__header-image'>
         <img src={ai}/>
        </div>
    </div>
  )
}

export default Header