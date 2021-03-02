import React from "react";
import Pdf from "react-to-pdf";
import "./style.css";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

import { PDFViewer } from "@react-pdf/renderer";

const ref = React.createRef();

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    height: "auto",
    left: "0",
    marginTop: "0",
    // margin: "0 auto",
  },
});

const PDF = (props) => {
  return (
    <>
      {/* <PDFViewer>
        <View> */}
      <div size="A4" className="document" ref={ref} style={styles.page}>
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
      </div>
      {/* </View>
      </PDFViewer> */}

      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => (
          <button id="create-pdf" onClick={toPdf} target="_blank">
            Create PDF
          </button>
        )}
      </Pdf>
    </>
  );
};

export default PDF;
