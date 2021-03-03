import React from "react";
import Pdf from "react-to-pdf";
import "./style.css";
import {
  Page,
  Text,
  View,
  Document,
<<<<<<< HEAD
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

import { Font } from "@react-pdf/renderer";
=======
  PDFViewer,
  StyleSheet,
  Font,
  // source
} from "@react-pdf/renderer";

import source from "../Pdf/Fonts/Roboto-Italic.ttf"

// Register font
Font.register(
 { src: source, family: 'Roboto-Italic'}
);

>>>>>>> c2a7b226cef742fbe1adbbb9781f7b44dfc49798

const ref = React.createRef();

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    minHeight: "100%",
  },
});
<<<<<<< HEAD

const Doc = (props) => (
  <Document>
    <Page size="A4">
      <View>
        <View className="header">
          <Text style={{ margin: "auto", padding: "10px", top: 0 }}>
            header
          </Text>
        </View>

        <View
          className="post"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            margin: "auto",
          }}
          ref={ref}
        >
          <View className="left" style={{ margin: "auto", width: "45%" }}>
            <Text style={{ margin: "10px" }}>INFORMAÇÃO GERAL</Text>
            <Text>Nome do projeto:</Text>
            <Text ref={ref}>{props.project}</Text>
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
          <View className="right" style={{ margin: "auto", width: "45%" }}>
            <Text style={{ margin: "10px" }}>INFORMAÇÃO TÉCNICA</Text>
            <Text>Produto:</Text>
            <Text>{props.product}</Text>
            <Text>Unidades:</Text>
            <Text>{props.units}</Text>
            <Text>Peso do produto:</Text>
            <Text>{props.weight}</Text>
            <Text>Cor do produto:</Text>
            <Text>{props.color}</Text>
            <Text>Cor do produto:</Text>
            <Text>{props.color}</Text>
            <Text>Cor do produto:</Text>
            <Text>{props.color}</Text>
            <Text>Cor do produto:</Text>
            <Text>{props.color}</Text>
          </View>
        </View>

        <View className="footer" style={{ margin: "50px" }}>
          <View
            className="uni-logo"
            style={{ flexDirection: "row", margin: "auto" }}
          >
            <Text>UNIFACTOR</Text>
            <Text>3D</Text>
          </View>
          <Text style={{ margin: "auto", fontStyle: "italic" }}>SÃO PAULO</Text>
        </View>
      </View>
    </Page>
  </Document>
);

=======

const Doc = (props) => (
  <Document>
    <Page size="A4">
      <View ref={ref}>
        <View className="header">
          <Text style={{ margin: "auto", padding: "10px", top: 0}}>
            header
          </Text>
        </View>

        <View
          className="post"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            margin: "auto",
          }}
        >
          <View className="left" style={{ margin: "auto", width: "45%" }}>
            <Text style={{ margin: "10px" }}>INFORMAÇÃO GERAL</Text>
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
          <View className="right" style={{ margin: "auto", width: "45%" }}>
            <Text style={{ margin: "10px" }}>INFORMAÇÃO TÉCNICA</Text>
            <Text>Produto:</Text>
            <Text>{props.product}</Text>
            <Text>Unidades:</Text>
            <Text>{props.units}</Text>
            <Text>Peso do produto:</Text>
            <Text>{props.weight}</Text>
            <Text>Cor do produto:</Text>
            <Text>{props.color}</Text>
            <Text>Cor do produto:</Text>
            <Text>{props.color}</Text>
            <Text>Cor do produto:</Text>
            <Text>{props.color}</Text>
            <Text>Cor do produto:</Text>
            <Text>{props.color}</Text>
          </View>
        </View>

        <View className="footer" style={{ margin: "50px" }}>
          <View
            className="uni-logo"
            style={{ flexDirection: "row", margin: "auto" }}
          >
            <Text>UNIFACTOR</Text>
            <Text>3D</Text>
          </View>
          <Text style={{ margin: "auto", fontFamily: 'Roboto-Italic' }}>SÃO PAULO</Text>
        </View>
      </View>
    </Page>
  </Document>
);

>>>>>>> c2a7b226cef742fbe1adbbb9781f7b44dfc49798
// {({ toPdf }) => (
//   <button id="create-pdf" onClick={toPdf} target="_blank">
//     Create PDF
//   </button>
// )}

<<<<<<< HEAD
function PDF() {
=======
function PDF(props) {
>>>>>>> c2a7b226cef742fbe1adbbb9781f7b44dfc49798
  return (
    <div style={{ height: "99vh" }}>
      <PDFViewer
        size="A4"
        targetRef={ref}
        filename="post.pdf"
        height="100%"
        width="99.7%"
      >
<<<<<<< HEAD
        <Doc />
=======
        <Doc props={props}/> 
        
>>>>>>> c2a7b226cef742fbe1adbbb9781f7b44dfc49798
      </PDFViewer>
    </div>
  );
}

export default PDF;