import './App.css';
import Tristeza1 from './img/Tristeza1.jpg';
import Alegria2 from './img/Alegria2.jpg';
import Raiva3 from './img/Raiva3.jpg';
import Medo4 from './img/Medo4.jpg';
import Nojinho5 from './img/Nojinho5.jpg';
import Ansiedade6 from './img/Ansiedade6.jpg';
import Vergonha7 from './img/Vergonha7.jpg';
import Inveja8 from './img/Inveja8.jpg';
import Tedio9 from './img/Tedio9.jpg';

import SentimentoCard from './SentimentoCard';

function App() {

  const emocaoFotos = [
    { nome: 'Tristeza', imagem: Tristeza1, mensagem:'Tristeza' },
    { nome: 'Alegria', imagem: Alegria2, mensagem:'Alegria' },
    { nome: 'Raiva', imagem: Raiva3, mensagem:'Raiva'},
    { nome: 'Medo', imagem: Medo4, mensagem:'Medo' },
    { nome: 'Nojinho', imagem: Nojinho5, mensagem:'Nojinho' },
    { nome: 'Ansiedade', imagem: Ansiedade6, mensagem:'Ansiedade' },
    { nome: 'Vergonha', imagem: Vergonha7, mensagem:'Vergonha' },
    { nome: 'Inveja', imagem: Inveja8, mensagem:'Inveja' },
    { nome: 'Tedio', imagem: Tedio9, mensagem:'Tedio' }

  ];

  return (
    <>
      <SentimentoCard 
        titulo="Sentimentos"
        imagem={emocaoFotos}
      />
      <h1>Selecione uma imagem e descubra o sentimento</h1>
      <p id='mensagem'>vc escoleu</p>
    </>
  )
};

export default App
