import React, {useState} from "react"


export default function TextForm(props){
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to Upper case", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to Lower case", "success");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Clear Data", "success");
    }

    const handleReverseClick = ()=>{
        let newText = text.split(' ').reverse().join(' ');
        setText(newText)
        props.showAlert("Convert to Reverse Order", "success");
    }

    const handleRemoveExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove extra space from content", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text coppied", "success");
    }

    const onChangeHandle = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
        // setText('You click button')
    }
    // setText()
    return(
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div>
                <textarea className="form-control mb-2" id="myBox" onChange={onChangeHandle} placeholder="Enter text here" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black'}} value={text} rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minuts read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter somthing in the textbox above to preview it here'}</p>
            </div>
        </>
        
    )
    
}