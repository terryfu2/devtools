import React, { useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { buttons, text } from "./Items/Items";
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Tooltip from '@mui/material/Tooltip';
import { EditorView } from "@codemirror/view"


const LiGenerator = () => {
    const { theme } = React.useContext(ThemeContext);
    const [code, setCode] = useState("");
    const [checked, setChecked] = React.useState(true);

    const handleButtonClick = (button) => {
        let textToAdd = "";
        if (checked) {
            textToAdd = text[0].text;
        }

        if (button === "Sentence" && !checked) {
            const randomNumber = Math.floor(Math.random() * 16);
            textToAdd = text[randomNumber].text;
        } else if (button === "Paragraph") {
            for (let i = 0; i <= 5; i++) {
                const randomNumber = Math.floor(Math.random() * 16);
                textToAdd += text[randomNumber].text;
            }
        } else if (button === "Clear") {
            setCode("");
            return;
        }
        setCode(code + textToAdd + "\n");
    };

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(code).then(() => {
            
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    };
    return (
        <div>
            <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                fontSize: "1.5rem", 
                color: theme.font, 
                fontWeight: "bolder" 
            }}>
                Lorem Ipsum Generator
                <Tooltip title="Start with Lorem ipsum...." arrow>
                    <Switch
                        checked={checked}
                        onChange={handleCheckboxChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </Tooltip>
                <Button variant="contained" startIcon={<ContentPasteIcon />}  onClick={handleCopyClick}>
                    Copy
                </Button>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ marginRight: "10px", display: "flex", flexDirection: "column" }}>
                    {buttons.map((button, index) => (
                        <Button variant="contained" key={index} onClick={() => handleButtonClick(button.label)} style={{ marginBottom: "5px" }}>
                            {button.label}
                        </Button>
                    ))}
                </div>
                <div>
                    <CodeMirror 
                        width="935px" 
                        height="600px"
                        extensions={[EditorView.lineWrapping]} 
                        value={code} 
                        theme={vscodeDark} 
                        style={{ overflowX: "wrap" }} 
                    />
                </div>
            </div>
        </div>
    );
};

export default LiGenerator;
