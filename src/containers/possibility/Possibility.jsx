import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>A inovação está no nosso sangue!</h4>
      <h1 className="gradient__text">As possibilidades estão <br /> além da sua imaginação</h1>
      <p>Nós acreditamos no poder da inovação e nas infinitas possibilidades que ela traz. Ultrapassando constantemente os limites e pensando fora da caixa, estamos criando novas soluções que moldam o futuro.</p>
      <div className='gpt3_possibility-content_examples'>

    </div>
    </div>
  </div>
);

export default Possibility;
