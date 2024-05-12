import { useEffect, useState,React } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

const CodeView = ({ code }) => {
  const [codet, setCode] = useState(code); 

  const options = {
    lineNumbers: true, 
    mode: 'javascript', 
  };

  useEffect(() => {
    setCode(code);
  }, [code]);

  return (
    <div>
      <CodeMirror
        value={codet} 
        options={options} 
        onBeforeChange={(editor, data, value) => setCode(value)} 
      />
    </div>
  );
};

export default CodeView;
