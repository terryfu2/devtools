import React, { useState } from "react";
import { themes, ThemeContext } from "../../contexts/ThemeContext";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { buttons, text } from "./Items/Items";

const LiGenerator = () => {
    const { theme } = React.useContext(ThemeContext);
    const [code, setCode] = useState("");
    const [isChecked, setIsChecked] = useState(false); 

    const handleButtonClick = (button) => {
        let textToAdd = "";
        if(isChecked){
            textToAdd = text[0].text; 
        }
        
        if (button === "Sentence" && !isChecked) {

            const randomNumber = Math.floor(Math.random() * 16);
            textToAdd = text[randomNumber].text; 
            
        }
        else if(button === "Paragraph"){
            for(var i = 0;i<=5;i++){
                const randomNumber = Math.floor(Math.random() * 16);
                textToAdd = textToAdd + text[randomNumber].text;  
            }
        }
        else if(button === "Clear"){
            setCode("");
            return;
        }
        setCode(code + textToAdd + "\n");
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <div style={{ fontSize: "1.5rem", color: theme.font, fontWeight: "bolder" }}>
                Lorem Ipsum Generator
                
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            </div>
            <div style={{ display: "flex" }}>
                
                <div style={{ marginRight: "10px", display: "flex", flexDirection: "column" }}>

                    {buttons.map((button, index) => (
                        <button key={index} onClick={() => handleButtonClick(button.label)} style={{ marginBottom: "5px" }}>
                        {button.label}
                        </button>
                    ))}
                </div>

                <div>
                    <CodeMirror width="900px" height="600px" value={code} theme={vscodeDark} style = {{overflowX:"wrap"}}/>
                </div>
            </div>
        </div>
    );
};

export default LiGenerator;
