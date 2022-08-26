import React from "react";
// import Pdf from "react-to-pdf";
import "./style.css";
// import MyQRCode from "../QRcode";

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

import source1 from "../Pdf/Fonts/Roboto-Italic.ttf";
import source2 from "../Pdf/Fonts/Monoton-Regular.ttf";
import source3 from "../Pdf/Fonts/Roboto-Bold.ttf";

// Register font
Font.register({ src: source1, family: "Roboto-Italic" });
Font.register({ src: source2, family: "Monoton-Regular" });
Font.register({ src: source3, family: "Roboto-Bold" });

const ref = React.createRef();

var date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    minHeight: "100%",
  },

  pageBackground: {
    display: "block",
    position: "absolute",
    height: "99.99vh",   
    width: "99.99vw"
  },

  titles:{
    source1
  },
  // container: {
  //   background:
  //     'url("https://avatars.githubusercontent.com/u/58955082?s=460&u=3d9b29530643113cb524d34984e5c32309e60cad&v=4") no-repeat center center fixed',
  // },
});

const Doc = (props) => {
  React.useEffect(
    function () {
      console.log("doc", props);
    },
    [props]
  );
  return (
    <Document>
      <Page size="A4">
        {/* <Image
        src="https://avatars.githubusercontent.com/u/58955082?s=460&u=3d9b29530643113cb524d34984e5c32309e60cad&v=4"
        style={styles.pageBackground}
        ></Image> */}
        <Image
        src="https://previews.123rf.com/images/artefy/artefy1103/artefy110300007/9216253-arri%C3%A8re-plan-de-document-s%C3%A9curis%C3%A9-.jpg?fj=1"
        style={styles.pageBackground}
        ></Image>
        <View ref={ref} style={{ width: "100%" }}>
          <View className="header">
            <Text
              style={{
                margin: "auto",
                padding: "10px",
                top: 0,
                // border: 5,
              }}
            >
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
              <Text style={{ margin: "10px", fontWeight: "bold" }}>
                INFORMAÇÃO GERAL
              </Text>
              <Text style={{fontFamily: "Roboto-Italic"}}>Nome do projeto:</Text>
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View>
              <Text>_______________________</Text>
              <Text style={{ margin: "auto" }}>Assinatura do cliente</Text>
            </View>
            <View style={{}}>
              <Text>_______________________</Text>
              <Text style={{ margin: "auto" }}>Assinatura do representante</Text>
            </View>
          </View>
          <View className="footer" style={{ margin: "50px" }}>
            <View
              className="uni-logo"
              style={{ flexDirection: "row", margin: "auto" }}
            >
              <Text
                style={{
                  fontFamily: "Roboto-Bold",
                  margin: "5px",
                }}
              >
                UNIFACTOR
              </Text>
              <Text
                style={{
                  margin: "auto",
                  fontFamily: "Monoton-Regular",
                  // color: "blue",
                }}
              >
                3D
              </Text>
            </View>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Roboto-Italic",
              }}
            >
              SÃO PAULO {date}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
// {({ toPdf }) => (
//   <button id="create-pdf" onClick={toPdf} target="_blank">
//     Create PDF
//   </button>
// )}

function PDF(props) {
  React.useEffect(
    function () {
      console.log(props);
    },
    [props]
  );
  return (
    <div style={{ height: "99vh" }}>
      <PDFViewer
        size="A4"
        targetref={ref}
        filename="post.pdf"
        height="100%"
        width="99.7%"
      >
        <Doc {...props} />
        {/* <MyQRCode /> */}
      </PDFViewer>
    </div>
  );
}

export default PDF;
