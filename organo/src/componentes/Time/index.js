import Colaborador from "../Colaborador";
import "./time.css";

const Time = ({props, aoDeletar}) => {
  const css = { backgroundColor: props.corSecundaria };

  return props.colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

      <div className="colaboradores">
        {props.colaboradores.map((colaborador, indice) => {
          return (
            <Colaborador
              key={indice}
              corDeFundo={props.corPrimaria}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              aoDeletar={aoDeletar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    <section></section>
  );
};

export default Time;
