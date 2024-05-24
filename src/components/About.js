import React from 'react'

export default function About(props) {
  return (
    <div className="container my-4 ">
      <div className="accordion " id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={{ backgroundColor: props.mode === "light" ? "white" : "#212529", color: props.mode === "light" ? "black" : "white" }} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              About TextUtils
            </button>
          </h2>
          <div style={{ backgroundColor: props.mode === "light" ? "white" : "#212529", color: props.mode === "light" ? "black" : "white" }} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtils is a word counter and character counter utility used to manipulate your text in the way you want.You can remove extraspaces, convert text from Lowercase to Uppercase and from Uppercase to Lowercase.You can also listen the text you have written.And manipulate your text in a way that you want
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={{ backgroundColor: props.mode === "light" ? "white" : "#212529", color: props.mode === "light" ? "black" : "white" }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Demo
            </button>
          </h2>
          <div style={{ backgroundColor: props.mode === "light" ? "white" : "#212529", color: props.mode === "light" ? "black" : "white" }} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul>
                <li>If you want to convert your text into Uppercase the write the text and click on the Convert to Uppercase button.</li>
                <li>If you want to convert your text into LowerCase the write the text and click on the Convert to LowerCase button.</li>
                <li>If you want to clear the text click on the Clear text button.</li>
                <li>If you want to Copy the text click on the Copy text button.</li>
                <li>If you want to Listen the text click on the speaker button</li>
                <li>If you want to remove the extra whitespaces click on the remove extra spaces button</li></ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={{ backgroundColor: props.mode === "light" ? "white" : "#212529", color: props.mode === "light" ? "black" : "white" }} className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Credits
            </button>
          </h2>
          <div style={{ backgroundColor: props.mode === "light" ? "white" : "#212529", color: props.mode === "light" ? "black" : "white" }} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Made by Harsh Bisla
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
