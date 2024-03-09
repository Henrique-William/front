import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../Titulo';
import imagemLivro from '../../imagens/livro2.png';

import CardRecomenda from '../CardRecomenda';

import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#EB9B00" 
                tamanhoFonte="36px" 
                alinhamento="center"
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src} alt=''/>
                ) ) }
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo="talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="construindo uma aplicação com a plataforma google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    );
};

export default UltimosLancamentos;