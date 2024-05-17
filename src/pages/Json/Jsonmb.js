import React, { useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import Button from '@mui/material/Button';
import { EditorView } from "@codemirror/view"
import "./Jsonmb.css"

const Jsonmb = () => {
    const { theme } = React.useContext(ThemeContext);
    const [leftCode, setLeftCode] = useState("");
    const [rightCode, setRightCode] = useState("");

    const handleBeautify = () => {
        try {
            const obj = JSON.parse(leftCode);
            const str = JSON.stringify(obj, null, 2);
            setRightCode(str);
        } catch (error) {
            setRightCode("Invalid JSON: " + error.message);
        }
    };

    const handleMinify = () => {
        try {
            const obj = JSON.parse(rightCode);
            const minified = JSON.stringify(obj);
            setLeftCode(minified);
        } catch (error) {
            setLeftCode("Invalid JSON: " + error.message);
        }
    };

    const handleAddDummyDataLeft = () => {
        setLeftCode('{"a":1, "b":"foo", "c":["false","false","null", "null", {"d":{"e":"1.3e5","f":"1.3e5"}}]}');
    };

    const handleAddDummyDataRight = () => {
        var obj = {a:1, 'b':'foo', c:[false,'false',null, 'null', {d:{e:1.3e5,f:'1.3e5'}}]};
        const str = JSON.stringify(obj, null, 2);
        setRightCode(str);
    };


    const handleClearCodeLeft = () => {
        setLeftCode("");
    };

    const handleClearCodeRight= () => {
        setRightCode("");
    };

    const handlePasteCodeRight = () => {
        navigator.clipboard.readText().then((text) => {
            setRightCode(text);
        }).catch(err => {
            console.error("Failed to paste: ", err);
        });
    };

    const handlePasteCodeLeft = () => {
        navigator.clipboard.readText().then((text) => {
            setLeftCode(text);
        }).catch(err => {
            console.error("Failed to paste: ", err);
        });
    };

    const handleCopyCodeLeft = () => {
        navigator.clipboard.writeText(leftCode).then(() => {
            
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    };

    const handleCopyCodeRight = () => {
        navigator.clipboard.writeText(rightCode).then(() => {
            
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    };

    return (
        <div>
            <div style={{ fontSize: "1.5rem", color: theme.font, fontWeight: "bolder", marginBottom: "20px" }}>
                Json Minify/Beautify
            </div>
            <div style={{ display: "flex" }}>
                
                <div style={{ flex: 1, marginRight: "10px" }}>
                    <div >
                        <Button variant="contained" onClick={handleAddDummyDataLeft} style={{ marginRight: "10px" }}>
                            Add Dummy Data
                        </Button>
                        <Button variant="contained" onClick={handleClearCodeLeft} style={{ marginRight: "10px" }}>
                            Clear
                        </Button>
                        <Button variant="contained" onClick={handlePasteCodeLeft} style={{ marginRight: "10px" }}>
                            Paste
                        </Button>
                        <Button variant="contained" onClick={handleCopyCodeLeft} style={{ marginRight: "10px" }}>
                            Copy
                        </Button>
                    </div>
                    <CodeMirror
                        width="500px"
                        height="550px"
                        value={leftCode}
                        theme={vscodeDark} 
                        extensions={[EditorView.lineWrapping]}
                        onChange={(value) => setLeftCode(value)}
                        options={{
                            mode: 'javascript',
                            json: true, // Enable JSON mode
                            autoCloseBrackets: true, // Automatically close brackets
                            lineNumbers: true, // Show line numbers
                            indentUnit: 2,
                            lineWrapping: true,
                            overflowX: "auto" // Set overflow to auto
                        }}
                    />
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", margin: "0 10px" }}>
                    <Button variant="contained" style={{ marginBottom: "10px" }} onClick={handleBeautify}>
                        Beautify
                    </Button>
                    <Button variant="contained" onClick={handleMinify}>
                        Minify
                    </Button>
                </div>


                <div style={{ flex: 1, marginLeft: "10px" }}>
                    <div>
                        <Button variant="contained" onClick={handleAddDummyDataRight} style={{ marginRight: "10px" }}>
                            Add Dummy Data
                        </Button>
                        <Button variant="contained" onClick={handleClearCodeRight} style={{ marginRight: "10px" }}>
                            Clear
                        </Button>
                        <Button variant="contained" onClick={handlePasteCodeRight} style={{ marginRight: "10px" }}>
                            Paste
                        </Button>
                        <Button variant="contained" onClick={handleCopyCodeRight} style={{ marginRight: "10px" }}>
                            Copy
                        </Button>
                    </div>
                <CodeMirror
                        width="500px"
                        height="550px"
                        value={rightCode}
                        theme={vscodeDark} 
                        extensions={[EditorView.lineWrapping]}
                        onChange={(value) => setRightCode(value)}
                        options={{
                            mode: 'javascript',
                            json: true, // Enable JSON mode
                            autoCloseBrackets: true, // Automatically close brackets
                            lineNumbers: true, // Show line numbers
                            indentUnit: 2,
                            lineWrapping: true,
                            overflowX: "auto" // Set overflow to auto
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Jsonmb;