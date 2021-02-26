import React from "react";
import Pdf from "react-to-pdf"

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props.project}</h1>
        <h1>{props.firstname}</h1>
        <h1>{props.lastname}</h1>
        <h1>{props.email}</h1>
        <h1>{props.contact}</h1>
        <h1>{props.end}</h1>
        <h1>{props.retirada}</h1>



  </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Create PDF</button>}
      </Pdf>
    </>
  )
};

export default PDF;
