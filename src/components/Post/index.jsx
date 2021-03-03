import React, { Component } from "react";
import Doc from "../Pdf";
import PDF from "../Pdf";

import "./style.css";

class Post extends Component {
  state = {
    project: "",
    firstname: "",
    lasttname: "",
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
                  onChange={this.onChange("project")}
                  name="project"
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
                  onChange={this.onChange("lasttname")}
                  name="lasttname"
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
                  onChange={this.onChange("phone")}
                  name="phone"
                  placeholder="Ex: 9 1234-5678"
                />
                <p>Endereço do cliente:</p>
                <input
                  onChange={this.onChange("end")}
                  name="end"
                  placeholder="Ex: Av. Maria Coelho Aguiar"
                />
<<<<<<< HEAD
                <p>Endereço de entrega:</p>
=======
                <p>Endereço do local da entrega:</p>
>>>>>>> c2a7b226cef742fbe1adbbb9781f7b44dfc49798
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
                  onChange={this.onChange("produto")}
                  name="produto"
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
          </div>
        ) : (
          <PDF
            title={this.state.product}
            firstname={this.state.firstname}
            lasttname={this.state.lasttname}
            product={this.state.product}
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

<<<<<<< HEAD
export default Post;
=======
export default Post;
>>>>>>> c2a7b226cef742fbe1adbbb9781f7b44dfc49798
