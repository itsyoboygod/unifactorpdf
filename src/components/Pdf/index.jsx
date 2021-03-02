import React from "react";
import Pdf from "react-to-pdf";
import "./style.css";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// import { PDFViewer } from "@react-pdf/renderer";

const ref = React.createRef();

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    minHeight: "100%",
  },
});

const Doc = (props) => (
  <Document>
    <Page size="A4">
      <View
        className="document"
        ref={ref}
        style={{ margin: 0, padding: 0, top: 0 }}
      >
        <View className="header" style={{ margin: 0, padding: 0, top: 0 }}>
          <Text>header</Text>
        </View>

        <View className="post">
          <View className="left">
            <Text>INFORMAÇÃO GERAL</Text>
            <Text>Nome do projeto:</Text>
            <Text>{props.project}</Text>
            <Text>Nome do proprietário:</Text>
            <Text>{props.firstname}</Text>
            <Text>Sobrenome do proprietário:</Text>
            <Text>{props.lastname}</Text>
            <Text>Email do proprietário:</Text>
            <Text>{props.email}</Text>
            <Text>Contato do proprietário:</Text>
            <Text>{props.contact}</Text>
            <Text>Endereço do proprietário:</Text>
            <Text>{props.end}</Text>
            <Text>Local de retirado do produto:</Text>
            <Text>{props.retirada}</Text>

            <Text>INFORMAÇÃO GERAL</Text>
            <Text>Nome do projeto:</Text>
            <Text>{props.project}</Text>
            <Text>Nome do proprietário:</Text>
            <Text>{props.firstname}</Text>
            <Text>Sobrenome do proprietário:</Text>
            <Text>{props.lastname}</Text>
            <Text>Email do proprietário:</Text>
            <Text>{props.email}</Text>
            <Text>Contato do proprietário:</Text>
            <Text>{props.contact}</Text>
            <Text>Endereço do proprietário:</Text>
            <Text>{props.end}</Text>
            <Text>Local de retirado do produto:</Text>
            <Text>{props.retirada}</Text>
          </View>
          <View className="right">
            <Text>INFORMAÇÃO TÉCNICA</Text>
            <Text>Produto:</Text>
            <Text>{props.product}</Text>
            <Text>Unidades:</Text>
            <Text>{props.units}</Text>
            <Text>Peso do produto:</Text>
            <Text>{props.weight}</Text>
            <Text>Cor do produto:</Text>
            <Text>{props.color}</Text>
          </View>
        </View>

        <View className="footer">
          <View className="uni-logo">
            <Text>UNIFACTOR</Text>
            <Text>3D</Text>
          </View>
          <Text>SÃO PAULO</Text>
        </View>
      </View>
    </Page>
  </Document>
);

// {({ toPdf }) => (
//   <button id="create-pdf" onClick={toPdf} target="_blank">
//     Create PDF
//   </button>
// )}

function PDF() {
  return (
    <div style={{ height: "99vh" }}>
      <PDFViewer
        size="A4"
        targetRef={ref}
        filename="post.pdf"
        height="100%"
        width="99%"
      >
        <Doc />
      </PDFViewer>
    </div>
  );
}

export default PDF;
