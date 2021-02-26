import React, { Component } from "react";
import "./style.css";
import "./phonemask.js";
import PDF from "../Pdf";
import MyQRCode from "../QRcode";

export default class Post extends Component {
  state = {
    project: "",
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    end: "",
    retirada: "",

    product: "",
    units: "",
    weight: "",
    color: "",

    postSubmitted: false,
  };

  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  submitPost = (e) => {
    // if (!this.state.title || !this.state.content) {
    //   alert("TODOS OS CAMPOS DEVEM SER COMPLETOS !");
    // } else {
    e.preventDefault();
    this.setState({
      postSubmitted: true,
    });
    // }
  };

  render() {
    return (
      <>
        {!this.state.postSubmitted ? (
          <div className="form-container">
            <script src="jquery-3.5.1.min.js"></script>
            <script src="https://cndjs.cloudflare.com/ajax/libs/jquery.masked/input/1.4.1/jquery.maskedinput.js"></script>

            <form className="form">
              <fieldset className="fieldset">
                <legend>Add new post</legend>

                <div className="form-inputs">
                  <div className="left">
                    <h1>INFORMAÇÃO GERAL</h1>
                    <h3>Nome do projeto:</h3>
                    <input
                      name="project"
                      onChange={this.onChange("project")}
                      type="text"
                      placeholder="Ex: Projeto SpaceX "
                      id="id-input-title"
                    />

                    <h3>Nome:</h3>
                    <input
                      name="firstname"
                      onChange={this.onChange("firstname")}
                      type="text"
                      placeholder="Ex: Vinicius"
                      id="id-input-owner-first-name"
                    />

                    <h3>Sobrenome:</h3>
                    <input
                      name="lastname"
                      onChange={this.onChange("lastname")}
                      type="text"
                      placeholder="Ex: Kaique"
                      id="id-input-owner-last-name"
                    />

                    <h3>Email:</h3>
                    <input
                      name="email"
                      onChange={this.onChange("email")}
                      type="email"
                      placeholder="Ex: example@hotmail.com"
                      id="id-input-owner-email"
                    />

                    <h3>Número de contato:</h3>
                    <input
                      name="contact"
                      onChange={this.onChange("contact")}
                      type="text"
                      placeholder="Ex: (+55) 011 91234-5678"
                      id="id-input-owner-number"
                    />

                    <h3>Endereço:</h3>
                    <input
                      name="end"
                      onChange={this.onChange("end")}
                      type="text"
                      placeholder="Ex: Santo Amaro - SP - Zs or (CEP: 05805-030)"
                      id="id-input-owner-addres"
                    />

                    <script>
                      $(document).ready(function ($)
                      $("#id-input-owner-number").mask("(099)90000-0000"));
                    </script>

                    <h3>Local de retirada do produto:</h3>
                    <input
                      name="retirada"
                      onChange={this.onChange("retirada")}
                      type="text"
                      placeholder="Ex: Santo Amaro - SP - Zs or (CEP: 05805-030)"
                      id="id-input-owner-addres-arrive"
                    />
                  </div>

                  <div className="right">
                    <h1>INFORMAÇÃO TÉCNICA</h1>
                    <h3>Produto:</h3>
                    <input
                      name="product"
                      onChange={this.onChange("product")}
                      type="text"
                      placeholder="Ex: Cubo mágico "
                      id="id-input-product"
                    />

                    <h3>Unidades:</h3>
                    <input
                      name="units"
                      onChange={this.onChange("units")}
                      type="number"
                      placeholder="Ex: 10"
                      id="id-input-units"
                    />

                    <h3>Peso:</h3>
                    <input
                      name="weight"
                      onChange={this.onChange("weight")}
                      type="number"
                      placeholder="Ex: 200g"
                      id="id-input-weight"
                    />

                    <h3>Dimensões:</h3>
                    <input
                      name="dimen"
                      onChange={this.onChange("dimen")}
                      type="text"
                      placeholder="Ex: 20cm X 15cm"
                      id="id-input-dimensions"
                    />

                    <h3>Cor:</h3>
                    <input
                      name="color"
                      onChange={this.onChange("color")}
                      type="text"
                      placeholder="Ex: azul"
                      id="id-input-owner-addres"
                    />

                    <script>
                      $(document).ready(function ($)
                      $("#id-input-owner-number").mask("(099)90000-0000"));
                    </script>

                    <h3>Project Owner Number:</h3>
                    <input
                      name=""
                      onChange={this.onChange("")}
                      type="text"
                      placeholder="Ex: (+55) 011 91234-5678"
                      id="id-input-owner-number"
                    />
                  </div>
                </div>
                <button
                  onClick={this.submitPost}
                  type="submit"
                  id="id-btn-form"
                >
                  DONE
                </button>
                <MyQRCode />
              </fieldset>
            </form>
          </div>
        ) : (
          <>
            <PDF
              className="pdf"
              project={this.state.project}
              firstname={this.state.firstname}
              lastname={this.state.lastname}
              email={this.state.email}
              contact={this.state.contact}
              end={this.state.end}
              retirada={this.state.retirada}
              product={this.state.product}
              units={this.state.units}
              weight={this.state.weight}
              color={this.state.color}
              rodape={
                <div>
                  <h1>Bruh 2</h1>
                </div>
              }
            />
          </>
        )}
      </>
    );
  }
}
