
import React, { useState } from 'react';
import { SketchPicker } from 'react-color'

const EditContainerModal = ({ content, closeContainerModal, saveEditContainerModal }) => {
    const [editContent, setEditContent] = useState(
        {
            title: content.title,
            subtitle: content.subtitle,
            color: content.color
        });
    return (
        <div className="modal modal-visible" id="modal" tabIndex="-1">
            <div className="modal-backdrop" id="modal-backdrop" style={{ height: "722px" }}></div>
            <div className="modal-dialog modalsize">
                <div className="section-container modal-container" id="modal-container" style={{ backgroundColor: content.color, borderColor: content.color }}>
                    <div className="section-title" id="modal-title">EDIT<span className="float-right">{content.title}</span></div>
                    <div className="section-content" style={{ maxHeight: "450px", overflowY: "scroll", position: "relative" }}>
                        <div>
                            <label>Title: </label>
                            <input
                                type="text"
                                value={editContent.title}
                                onChange={(e) => {
                                    setEditContent({ ...editContent, title: e.target.value })
                                }}></input>
                        </div>
                        <div>
                            <label>SubTitle: </label>
                            <input
                                type="text"
                                value={editContent.subtitle}
                                onChange={(e) => {
                                    setEditContent({ ...editContent, subtitle: e.target.value })
                                }}></input>
                        </div>
                        <div>
                            <label>Color: </label>
                            <input
                                type="text"
                                value={editContent.color}
                                onChange={(e) => {
                                    setEditContent({ ...editContent, color: e.target.value })
                                }}></input>
                            <SketchPicker 
                                color={editContent.color}
                                onChange={(color, event) => {
                                    setEditContent({ ...editContent, color: color.hex })
                            }}/>
                        </div>

                    </div>
                    <div className="section-row text" id="modal-reference" style={{ textAlign: "center" }}>
                        <button className="modal-button"
                            style={{ backgroundColor: "#797979", borderColor: "#797979", float: "left" }}
                            onClick={closeContainerModal}>Cancel</button>
                        <button className="modal-button"
                            style={{ backgroundColor: "#797979", borderColor: "#797979", float: "right" }}
                            onClick={() => saveEditContainerModal(content, editContent)}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditContainerModal;