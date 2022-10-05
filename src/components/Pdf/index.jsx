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
    // backgroundColor: "#E4E4E4",
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
  }
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
        <Image
          src="https://previews.123rf.com/images/artefy/artefy1103/artefy110300007/9216253-arri%C3%A8re-plan-de-document-s%C3%A9curis%C3%A9-.jpg?fj=1"
          style={styles.pageBackground}
        ></Image>
        <View ref={ref} style={{
              minHeight:"99%", 
              display:"flex", 
              justifyContent:"space-between", 
              margin:"0 auto",
              // backgroundColor:"lightblue"
              }}>

{/* ------------- BODY */}
          <View className="body" style={{
             width:"100vw",
             display:"flex", 
             justifyContent:"center", 
             flexDirection:"column",
             margin:"0 auto",
            //  backgroundColor:"green",
             
             }}>

              {/* ------------- HEADER */}
              <View className="header">
                <Text style={{
                    margin: "0 auto",
                    padding: "30px",
                    fontSize:"25px",
                    fontFamily: "Roboto-Bold",
                    // backgroundColor:"pink"
                  }}>
                  RESUME
                </Text>
              </View>

              <View className="header" style={{
                  margin:"10px 100px 10px 100px",
                  // backgroundColor:"gray",
                  alignSelf:"center",
                }}>
                <Text style={{
                        margin:"10px"
                      }}>
                  <h5>
                    <p style={{
                        fontSize:"10px"
                      }}>
                      What is Lorem Ipsum
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </h5>
                </Text>
              </View>

              <View className="left-right" style={{
                  display:"flex",
                  flexDirection:"row", 
                  // backgroundColor:"grey",
                  justifyContent:"center",
                  alignContent:"center",
                  width:"100%",
                  fontSize:"10px"
                }}>

                  <View className="left" style={{ 
                      display:"flex",
                      flexDirection:"column", 
                      width: "45%",
                      top:"0",
                      minHeight:"50%",
                      alignItems:"flex-start",
                      // backgroundColor:"red",
                      padding:"30px",
                      }}>
                    <Text style={{ 
                      margin: "10px auto", 
                      fontFamily: "Roboto-Bold",
                      // backgroundColor:"lightgreen"
                      }}>
                      INFORMAÇÃO GERAL
                    </Text>
                    <View style={{
                        margin:"20px auto",
                        // backgroundColor:"yellow",
                        justifyContent:"space-evenly",
                        minHeight:"100px"
                      }}>
                      <Text>Nome do projeto:</Text>
                      <Text style={{fontFamily: "Roboto-Italic"}}> {props.titleproj}</Text>
                      <Text>Nome do proprietário:</Text>
                      <Text style={{fontFamily: "Roboto-Italic"}}> {props.firstname}</Text>
                      <Text>Sobrenome do proprietário:</Text>
                      <Text style={{fontFamily: "Roboto-Italic"}}> {props.lastname}</Text>
                      <Text>Email do proprietário:</Text>
                      <Text style={{fontFamily: "Roboto-Italic"}}> {props.email}</Text>
                      <Text>Contato do proprietário:</Text>
                      <Text style={{fontFamily: "Roboto-Italic"}}> {props.contact}</Text>
                      <Text>Endereço do proprietário:</Text>
                      <Text style={{fontFamily: "Roboto-Italic"}}> {props.end}</Text>
                      <Text>Local de retirada do produto:</Text>
                      <Text style={{fontFamily: "Roboto-Italic"}}> {props.retirada}</Text>
                    </View>
                  </View>
                  <View className="right" style={{ 
                      display:"flex",
                      flexDirection:"column", 
                      width: "45%",
                      top:"0",
                      minHeight:"50%",
                      alignItems:"flex-start",
                      // backgroundColor:"blue",
                      padding:"30px",
                    }}>
                    <Text style={{
                      //  margin: "10px 0px 0px 30px", 
                      margin: "10px auto", 
                      fontFamily: "Roboto-Bold", 
                      display:"flex", 
                      // backgroundColor:"lightgreen"
                      }}>
                        INFORMAÇÃO TÉCNICA
                    </Text>
                    <View style={{
                        margin:"20px auto",
                        // backgroundColor:"yellow",
                        justifyContent:"space-evenly",
                        minHeight:"100px"
                      }}>
                      <Text>Produto:</Text>
                      <Text style={{fontFamily: "Roboto-Italic"}}> {props.product}</Text>
                      <Text>Cor do produto:</Text>
                      <Text style={{fontFamily: "Roboto-Italic"}}> {props.color}</Text>
                      <Text>Peso do produto:</Text>
                      <Text style={{fontFamily: "Roboto-Italic"}}> {props.weight}</Text>
                      <Text>Dimensões do produto:</Text>
                      <Text style={{fontFamily: "Roboto-Italic"}}> {props.dimen}</Text>
                      <Text>Unidades:</Text>
                      <Text style={{fontFamily: "Roboto-Italic"}}> {props.units}</Text>
                    </View>
                  </View>
              </View>
            </View>
{/* ------------- FOOTER */}
          <View className="footer" style={{
                display: "flex",
                margin:"0 auto",
                flexDirection:"column",
                bottom:"0px",
                left:"0",
                right:"0",
              }}>
              <View style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width:"100vw",
                  margin:"20px auto",
                  fontSize:"13px"
                }}>
                <View>
                  <Text>_______________________</Text>
                  <Text style={{ margin: "auto" }}>Assinatura do cliente</Text>
                </View>
                <View>
                  <Text>_______________________</Text>
                  <Text style={{ margin: "auto" }}>Assinatura do representante</Text>
                </View>
              </View>
              <View style={{ 
                 margin: "50px", 
                 bottom:"0", 
                 display:"flex", 
                 justifyContent:"center", 
                 alignItems:"center",
                 fontSize:"13px"
                 }}>
                <View className="uni-logo" style={{ flexDirection: "row", margin: "auto" }}>
                  <Text style={{
                      fontFamily: "Roboto-Bold",
                      margin: "5px",
                    }}>
                    UNIFACTOR
                  </Text>
                  <Text style={{
                      margin: "auto",
                      fontFamily: "Monoton-Regular",
                      // color: "blue",
                    }}>
                    3D
                  </Text>
                </View>
                <Text style={{
                    display: "flex",
                    textAlign: "center",
                    fontFamily: "Roboto-Italic",
                    margin:"0 auto",
                    justifyContent:"center"                    
                  }}>
                  SÃO PAULO {date}
                </Text>
              </View>
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
