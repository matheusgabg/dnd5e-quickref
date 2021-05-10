
import React, { useState, useEffect, useRef } from 'react';

const EditPresetModal = ({ addNewPreset, closePresetModal }) => {
    const [presetName, setPresetContent] = useState("New Preset");
    const input = useRef()
    useEffect(() => {
        input.current.select();
    },[]);
    return (
        <div className="modal modal-visible" id="modal" tabIndex="-1">
            <div className="modal-backdrop" id="modal-backdrop"></div>
            <div className="modal-dialog modalsize">
                <div className="section-container modal-container" id="modal-container" style={{ backgroundColor: "black", borderColor: "black" }}>
                    <div className="section-title" id="modal-title">SAVING NEW REFERENCE</div>
                    <div className="section-content" style={{ maxHeight: "450px", overflowY: "scroll", position: "relative" }}>
                        <div>
                            <label>Title: </label>
                            <input
                                ref={input}
                                type="text"
                                value={presetName}
                                onChange={(e) => {
                                    setPresetContent(e.target.value)
                                }}></input>
                        </div>
                    </div>
                    <div className="section-row text" id="modal-reference" style={{ textAlign: "center" }}>
                        <button className="modal-button"
                            style={{ backgroundColor: "#797979", borderColor: "#797979", float: "left" }}
                            onClick={closePresetModal}>Cancel</button>
                        <button className="modal-button"
                            style={{ backgroundColor: "#797979", borderColor: "#797979", float: "right" }}
                            onClick={() => addNewPreset(presetName)}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPresetModal;