
import React, { useState } from 'react';
import { iconList } from '../presets/iconReference';

const EditModal = ({ content, closeModal, saveEditModal, containers }) => {
    const [searchIcon, setSearchIcon] = useState(content.icon);
    const [viewIcons, setViewIcons] = useState(false);

    const [editContent, setEditContent] = useState(
        {
            title: content.title,
            subtitle: content.subtitle,
            description: content.description,
            bullets: content.bullets,
            reference: content.reference,
            icon: content.icon
        });

    const closeIconSelectionifOpen = (e) => {
        //closes if clicked outside of icon area;
        if (document.getElementById('icons-container') !== null && viewIcons) {
            if (document.getElementById('icons-container').contains(e.target) ||
                document.getElementById('icon-input').contains(e.target)) {
                // Clicked in box
            } else {
                // Clicked outside the box
                setViewIcons(false);
            }
        }
    }

    const selectIcon = (icon) => {
        //close div
        setEditContent({ ...editContent, icon: icon })
        setSearchIcon(icon);
        setViewIcons(false);
    }

    //get parent container to match colors
    const containerInfo = containers.find(item => content.containerId === item.id);
    const iconSelector = () => {
        return (
            <>
                <label>Icon: </label>
                <input
                    id="icon-input"
                    type="text"
                    value={searchIcon}
                    onFocus={() => { setViewIcons(true) }}
                    onChange={(e) => { setSearchIcon(e.target.value); setViewIcons(true) }} />
                {
                    viewIcons ?
                        <div id="icons-container" >
                            {iconList.filter(x => x.includes(searchIcon)).slice(0, 50).map((icon, i) => {
                                return (
                                    <div
                                        key={i}
                                        onClick={() => selectIcon(icon)}
                                        data-toggle="tooltip"
                                        title={icon}
                                        className={`item-icon iconsize ${icon}`}
                                        style={{ backgroundColor: "black", borderColor: "black" }}>
                                    </div>
                                )

                            })}
                        </div>
                        :
                        null
                }
            </>
        )
    }

    const bulletEditor = () => {
        return (
            <div>
                <label>Bullets: </label>
                {editContent.bullets.map((item, i) => {
                    return (
                        <React.Fragment key={i}>
                            <textarea
                                className="bullet-text"
                                value={editContent.bullets[i]}
                                onChange={(e) => {
                                    let newBullets = [...editContent.bullets];
                                    newBullets[i] = e.target.value;
                                    setEditContent({ ...editContent, bullets: newBullets })
                                }}></textarea>
                            <div
                                style={{ cursor: "pointer", display: "inline-block" }}
                                onClick={() => {
                                    let newBullets = [...editContent.bullets];
                                    newBullets.splice(i, 1);
                                    setEditContent({ ...editContent, bullets: newBullets });
                                }}>
                                <i className="fas fa-times-circle" style={{ color: "red", paddingRight: "5px" }}></i>
                                Delete
                            </div>
                            <hr />
                        </React.Fragment>
                    )
                })}
                <div style={{ cursor: "pointer", display: "inline-block" }} onClick={() => {
                    let newBullets = [...editContent.bullets];
                    newBullets.push("");
                    setEditContent({ ...editContent, bullets: newBullets });
                }}>
                    <i className="fas fa-plus-circle" style={{ color: "green", paddingRight: "5px" }}></i>
                    Add New Bullet
                </div>
            </div>
        );
    }

    return (
        <div className="modal modal-visible" id="modal" tabIndex="-1" onClick={closeIconSelectionifOpen}>
            <div className="modal-backdrop" id="modal-backdrop" style={{ height: "722px" }}></div>
            <div className="modal-dialog modalsize">
                <div className="section-container modal-container" id="modal-container" style={{ backgroundColor: containerInfo.color, borderColor: containerInfo.color }}>
                    <div className="section-title" id="modal-title">EDIT<span className="float-right">{containerInfo.title}</span></div>
                    <div className="section-content" style={{ maxHeight: "450px", overflowY: "scroll", position: "relative" }}>
                        {iconSelector()}
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
                            <label>Description: </label>
                            <textarea
                                className="bullet-text"
                                type="text"
                                value={editContent.description}
                                onChange={(e) => {
                                    setEditContent({ ...editContent, description: e.target.value })
                                }}></textarea>
                        </div>

                        {bulletEditor()}

                        <div>
                            <label>Reference: </label>
                            <input
                                type="text"
                                value={editContent.reference}
                                onChange={(e) => {
                                    setEditContent({ ...editContent, reference: e.target.value })
                                }}></input>
                        </div>
                    </div>
                    <div className="section-row text" id="modal-reference" style={{ textAlign: "center" }}>
                        <button className="modal-button"
                            style={{ backgroundColor: "#797979", borderColor: "#797979", float: "left" }}
                            onClick={closeModal}>Cancel</button>
                        <button className="modal-button"
                            style={{ backgroundColor: "#797979", borderColor: "#797979", float: "right" }}
                            onClick={() => saveEditModal(content, editContent)}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal;