import React from "react";
import Pdf from "react-to-pdf";
import "./style.css";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="document" ref={ref} style={{
        display: "flex",
        maxWidth: "793px",
        margin: "auto",
        backgroundColor: "brown",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: "montserrat",
        border:"solid 5px"
      }}>
        <div className="header">
          <h1>header</h1>
        </div>

        <div className="post">
          <div className="left">
            <p>INFORMAÇÃO GERAL</p>
            <h2>Nome do projeto:</h2>
            <h1>{props.project}</h1>
            <h2>Nome do proprietário:</h2>
            <h1>{props.firstname}</h1>
            <h2>Sobrenome do proprietário:</h2>
            <h1>{props.lastname}</h1>
            <h2>Email do proprietário:</h2>
            <h1>{props.email}</h1>
            <h2>Contato do proprietário:</h2>
            <h1>{props.contact}</h1>
            <h2>Endereço do proprietário:</h2>
            <h1>{props.end}</h1>
            <h2>Local de retirado do produto:</h2>
            <h1>{props.retirada}</h1>
        </div>
          <div className="right">
            <p>INFORMAÇÃO TÉCNICA</p>
            <h2>Produto:</h2>
            <h1>{props.product}</h1>
            <h2>Unidades:</h2>
            <h1>{props.units}</h1>
            <h2>Peso do produto:</h2>
            <h1>{props.weight}</h1>
            <h2>Cor do produto:</h2>
            <h1>{props.color}</h1>
          </div>
          
        </div>

        <div className="footer">
          <div className="uni-logo">
            <p>UNIFACTOR</p>
            <span>3D</span>
          </div>
          <h3>SÃO PAULO</h3>
        </div>


        <Pdf targetRef={ref} filename="form.pdf">
        {({ toPdf }) => (
          <button id="btn-create-pdf" onClick={toPdf} target="_blank">
            Create PDF
          </button>
        )}
      </Pdf>
      </div>

      
    </>
  );
};

export default PDF;
