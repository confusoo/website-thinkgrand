import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Redução de custos e prazos',
    text: 'Com a IA, o desenvolvimento de software pode se tornar mais eficiente e rápido, reduzindo os custos de desenvolvimento, teste e manutenção...',
  },
  {
    title: 'Tomada de decisões mais efetivas',
    text: 'A IA pode analisar dados e fornecer insights que podem ajudar as empresas a tomar melhores decisões e melhorar seu desempenho geral, com base em um banco de dados gigantesco.',
  },
  {
    title: 'Automação de tarefas repetitivas',
    text: 'A IA pode automatizar tarefas repetitivas e demoradas, como entrada de dados, testes e correção de bugs, liberando os desenvolvedores para se concentrarem em tarefas mais complexas.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Na Think Grand, acreditamos que a Inteligência Artificial (IA) é o futuro do desenvolvimento de software.</h1>
      <p>Entre em contato agora e participe<br/> do futuro!</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
