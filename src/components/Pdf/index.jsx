import React from "react";
import Pdf from "react-to-pdf";
import "./style.css";
import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  StyleSheet,
  Image,
  Font,
  // source
} from "@react-pdf/renderer";

import source from "../Pdf/Fonts/Roboto-Italic.ttf";

// Register font
Font.register({ src: source, family: "Roboto-Italic" });

const ref = React.createRef();

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    minHeight: "100%",
  },

  pageBackground: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    display: "block",
    height: "100%",
    width: "100%",
  },
  // container: {
  //   background:
  //     'url("https://avatars.githubusercontent.com/u/58955082?s=460&u=3d9b29530643113cb524d34984e5c32309e60cad&v=4") no-repeat center center fixed',
  // },
});

const Doc = (props) => (
  <Document>
    <Page size="A4">
      <Image
        src="https://avatars.githubusercontent.com/u/58955082?s=460&u=3d9b29530643113cb524d34984e5c32309e60cad&v=4"
        style={styles.pageBackground}
      ></Image>
      <View ref={ref}>
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
        >
          <View className="left" style={{ margin: "auto", width: "45%" }}>
            <Text style={{ margin: "10px" }}>INFORMAÇÃO GERAL</Text>
            <Text>Nome do projeto:</Text>
            <Text>{props.titleproj}</Text>
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
          <Text
            style={{
              margin: "auto",
              fontFamily: "Roboto-Italic",
            }}
          >
            SÃO PAULO
          </Text>
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

function PDF(props) {
  return (
    <div style={{ height: "99vh" }}>
      <PDFViewer
        size="A4"
        targetRef={ref}
        filename="post.pdf"
        height="100%"
        width="99.7%"
      >
        <Doc props={props} />
      </PDFViewer>
    </div>
  );
}

export default PDF;
