import { useState } from "react"

export default function Textarea(props) {
    const [text, setText] = useState("")
    // ON CHANGE HANDLER 
    const onchangehandler = (event) => {
        setText(event.target.value)
    }
    // FUNCTION TO CONVERT TEXT INTO UPPERCASE
    const toUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        if (text.length !== 0) {
            props.showAlert("Converted into Uppercase", "success")
        }
        else {
            props.showAlert("Nothing to convert, please write something...", "danger")
        }
    }
    // FUNCTION TO CONVERT TEXT INTO LOWERCASE
    const toLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        if (text.length !== 0) {
            props.showAlert("Converted into Lowercase", "success")
        }
        else {
            props.showAlert("Nothing to convert, please write something...", "danger")
        }
    }
    // FUNCTION TO CLEAR TEXT
    const clearText = () => {

        if (text.length !== 0) {
            if (window.confirm("Are you sure you want to Clear Text") === true) {
                setText("")
            }
            props.showAlert("Text Cleared Successfully", "success")
        }
        else {
            props.showAlert("Nothing to Clear", "danger")
        }
    }
    // FUNCTION TO COPY TEXT
    const copytext = () => {
        let text = document.getElementsByClassName("box")
        text[0].select();
        navigator.clipboard.writeText(text[0].value);
        props.showAlert("Text copied to Clipboard", "success")
    }
    // FUNCTION TO SPEAK TEXT
    const speech = () => {
        const textInput = document.querySelector(".text-to-speech");
        const speech = new SpeechSynthesisUtterance();
        speech.text = textInput.value;
        speech.voice = speechSynthesis.getVoices()[0];
        speechSynthesis.speak(speech);
        props.showAlert("Speaking Text...", "success")
    }
    const stopSpeaking = () => {
        speechSynthesis.cancel();
    }
    // FUNCTION TO REMOVE EXTRA SPACES
    const removeSpaces = () => {
        let newText = text.replace(/\s+/g, ' ')
        setText(newText)
    }
    return (
        <>
            <div style={{ backgroundColor: props.mode === "light" ? "white" : "#181818", color: props.mode === "light" ? "black" : "white" }}>
                <div className="container my-3">
                    <h2>Enter Your Text here</h2>
                    <div className="mb-3">
                        <textarea value={text} onChange={onchangehandler} className="form-control my-3 box text-to-speech" style={{ backgroundColor: props.mode === "light" ? "white" : "#212121", color: props.mode === "light" ? "black" : "white" }} id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                    <button type="button" onClick={toUppercase} className="btn btn-primary mx-2 my-2">Convert To Uppercase</button>
                    <button type="button" onClick={toLowercase} className="btn btn-success mx-2 my-2">Convert To LowerCase</button>
                    <button type="button" onClick={clearText} className="btn btn-danger mx-2 my-2">Clear Text</button>
                    <button type="button" onClick={copytext} className="btn btn-info mx-2 my-2">Copy Text</button>
                    <button style={{ padding: "10px 20px", backgroundColor: "grey" }} type="button btn" onClick={speech} className="btn mx-2 my-2 speak-button"><i style={{ fontSize: "20px", color: "white" }} className="fa-solid fa-volume-high"></i></button>
                    <button style={{ padding: "10px 20px", backgroundColor: "coral" }} type="button" onClick={stopSpeaking} className="btn btn-info mx-2 my-2"><i style={{ fontSize: "20px", color: "white" }} className="fa-solid fa-volume-xmark"></i></button>
                    <button style={{ backgroundColor: props.mode === "light" ? "#f8f9fa" : "#212529", color: props.mode === "light" ? "black" : "white" }} type="button" onClick={removeSpaces} className={`btn btn mx-2 my-2`}>Remove Extra Spaces</button>
                    <h2>Your Text Summary</h2>
                    <p><strong>{text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} Words and {text.length} Characters</strong></p>
                    <p><strong>{0.008 * text.split(" ").filter((e) => { return e.length !== 0 }).length} Minutes to Read</strong></p>
                    <h3>Preview</h3>
                    <p className="para">{text.length === 0 ? "Type something to see text here...." : text}</p>
                </div>
            </div>
        </>
    )
}
