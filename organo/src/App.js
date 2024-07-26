import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      nome: 'Devops',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    },
  ]

  const inicial = [
    {
      nome: "Henrique William Oliveira da Silva",
      cargo: "Vagabundo",
      imagem: "https://github.com/Henrique-William.png",
      time: times[0].nome,
    },
    {
      nome: "Fabricio Leal Mariano",
      cargo: "Gamer",
      imagem: "https://github.com/fabriciolm7.png",
      time: times[0].nome,
    },
    {
      nome: "Renan Onofre",
      cargo: "Hipster",
      imagem: "https://github.com/RenanOnofre.png",
      time: times[0].nome,
    },
    {
      nome: "Lucas Macharete",
      cargo: "Desenvolvedor",
      imagem: "https://github.com/MachareteL.png",
      time: times[0].nome,
    },
    {
      nome: "Henrique William Oliveira da Silva",
      cargo: "Vagabundo",
      imagem: "https://github.com/Henrique-William.png",
      time: times[1].nome,
    },
    {
      nome: "Fabricio Leal Mariano",
      cargo: "Gamer",
      imagem: "https://github.com/fabriciolm7.png",
      time: times[1].nome,
    },
    {
      nome: "Renan Onofre",
      cargo: "Hipster",
      imagem: "https://github.com/RenanOnofre.png",
      time: times[1].nome,
    },
    {
      nome: "Lucas Macharete",
      cargo: "Desenvolvedor",
      imagem: "https://github.com/MachareteL.png",
      time: times[1].nome,
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador() {
    console.log('deletando colaborador');
  }


  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => <Time key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
