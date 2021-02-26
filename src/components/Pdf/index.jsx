import React from "react";
import Pdf from "react-to-pdf";
import "./style.css";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="post" ref={ref}>
        <h1>{props.project}</h1>
        <h1>{props.firstname}</h1>
        <h1>{props.lastname}</h1>
        <h1>{props.email}</h1>
        <h1>{props.contact}</h1>
        <h1>{props.end}</h1>
        <h1>{props.retirada}</h1>



  </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button id="create-pdf" onClick={toPdf}>Create PDF</button>}
      </Pdf>
    </>
  )
};

export default PDF;
