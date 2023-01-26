import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Quem somos?" text="Com uma equipe de desenvolvedores, designers e gerentes de projeto
       especializados, nos especializamos na criação de aplicativos móveis e web personalizados, adaptados às suas necessidades exclusivas. Do conceito ao lançamento, trabalhamos em estreita colaboração com nossos clientes para 
      oferecer produtos de alta qualidade, fáceis de usar e eficientes que superem as expectativas.." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Deixa que a gente se preocupa com a solução!</h1>
      <p><a href='#blog'>Conheça nosso portifólio</a></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Websites" text="Seu website pode ser o primeiro contato que o cliente vai ter com a empresa, então deixa que a gente cuida disso! Com nossa equipe de especialistas seu website vai ser um diferencial." />
      <Feature title="Apps Android" text="Desenvolvimento de aplicativos android também é um de nossos departamentos, contate-nos para receber um orçamento." />
      <Feature title="Consultorias" text="Quando seus projetos precisarem de uma forcinha a mais, pode contar conosco! Fornecemos consultorias direcionadas para suas necessidades." />
    </div>
  </div>
);

export default WhatGPT3;
