
import React, { useState, useRef, useEffect } from 'react';

const JsonOutput = ({ items, containers, handleSaveJson }) => {
    const [itemsJson, setItemsJson] = useState(JSON.stringify(items, null, 2));
    const [containerJson, setContainerJson] = useState(JSON.stringify(containers, null, 2));

    useEffect(() => {
        //reset state values
        if (!itemsJson) setItemsJson(JSON.stringify(items, null, 2));
        if (!containerJson) setContainerJson(JSON.stringify(containers, null, 2));
    }, [itemsJson, items, containerJson, containers]);

    const textArea = useRef();

    const keyDownHandle = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const { selectionStart, selectionEnd } = e.target

            // set textarea value to: text before caret + tab + text after caret
            const newValue = itemsJson.substring(0, selectionStart) +
                "  " + itemsJson.substring(selectionEnd);

            setItemsJson(newValue)
            if (textArea.current) {
                textArea.current.value = newValue
                textArea.current.selectionStart = textArea.current.selectionEnd =
                    selectionStart + 2
            }
        }
    }

    return (
        <div>
            Items:
            <textarea
                ref={textArea}
                className="json-text"
                value={itemsJson}
                onChange={(e) => {
                    setItemsJson(e.target.value);
                }}
                onKeyDown={(e) => { keyDownHandle(e) }}>
            </textarea>
            Containers:
            <textarea
                className="json-text"
                value={containerJson}
                onChange={(e) => {
                    setContainerJson(e.target.value);
                }}
                onKeyDown={(e) => { keyDownHandle(e) }}>
            </textarea>

            <button onClick={() => {
                handleSaveJson(itemsJson, containerJson);
                //reset state values
                setItemsJson("");
                setContainerJson("");
            }}>Save Json</button>
        </div>
    )
}

export default JsonOutput;