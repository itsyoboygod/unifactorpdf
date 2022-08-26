import React, { Component } from "react";
import Doc from "../Pdf";
import PDF from "../Pdf";
import MyQRCode from "../QRcode";

import "./style.css";

class Post extends Component {
  state = {
    titleproj: "",
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
    postSubmmited: false,
  };
  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  submmitPost = (e) => {
    console.log(this.state);
    this.setState({
      postSubmmited: true,
    });
  };

  render() {
    return (
      <>
        {!this.state.postSubmmited ? (
          <div className="form-container">
            <form>
              <div className="left">
                <h1>INFORMAÇÃO GERAL</h1>
                <p>Nome do projeto:</p>
                <input
                  onChange={this.onChange("titleproj")}
                  name="titleproj"
                  placeholder="Ex: SpaceX"
                />
                <p>Nome do cliente:</p>
                <input
                  onChange={this.onChange("firstname")}
                  name="firstname"
                  placeholder="Ex: Vinicius"
                />
                <p>Sobrenome do cliente:</p>
                <input
                  onChange={this.onChange("lastname")}
                  name="lastname"
                  placeholder="Ex: Kaique"
                />
                <p>E-mail:</p>
                <input
                  onChange={this.onChange("email")}
                  name="email"
                  placeholder="Ex: vinicius.kaique@hotmail.com"
                />
                <p>Número de contato:</p>
                <input
                  onChange={this.onChange("contact")}
                  name="contact"
                  placeholder="Ex: 9 1234-5678"
                />
                <p>Endereço do cliente:</p>
                <input
                  onChange={this.onChange("end")}
                  name="end"
                  placeholder="Ex: Av. Maria Coelho Aguiar"
                />
                <p>Endereço do local da entrega:</p>
                <input
                  onChange={this.onChange("retirada")}
                  name="retirada"
                  placeholder="Ex: Av. Paulista 123, apto 321"
                />
              </div>
              <div className="right">
                <h1>INFORMAÇÃO TÉCNICA</h1>
                <p>Produto:</p>
                <input
                  onChange={this.onChange("product")}
                  name="product"
                  placeholder="Ex: cubo"
                />
                <p>Cor:</p>
                <input
                  onChange={this.onChange("color")}
                  name="color"
                  placeholder="Ex: azul"
                />
                <p>Peso:</p>
                <input
                  onChange={this.onChange("weight")}
                  name="weight"
                  placeholder="Ex: 123g"
                />
                <p>Dimensoes:</p>
                <input
                  onChange={this.onChange("dimen")}
                  name="dimen"
                  placeholder="Ex: 30x8.5x7 cm"
                />
                <p>Unidades:</p>
                <input
                  onChange={this.onChange("units")}
                  name="units"
                  placeholder="Ex: 20u"
                />
              </div>
            </form>
            <button id="id-create-btn" onClick={this.submmitPost} type="submit">
              Done
            </button>

            {/* <MyQRCode /> */}
          </div>
        ) : (
          <PDF
            titleproj={this.state.titleproj}
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            email={this.state.email}
            contact={this.state.contact}
            // end={this.state.contact}
            retirada={this.state.retirada}
            product={this.state.product}
            end={this.state.end}
            project={this.state.project}
            units={this.state.units}
            color={this.state.color}
            weight={this.state.weight}
          />
        )}
      </>
    );
  }
}

export default Post;
