
import React from 'react';
import DOMPurify from 'dompurify';

const ViewModal = ({ content, closeModal, containers }) => {
    //get parent container to match colors
    const containerInfo = containers.find(item => content.containerId === item.id);
    return (
        <div className="modal modal-visible" id="modal" tabIndex="-1">
            <div className="modal-backdrop" id="modal-backdrop" style={{ height: "722px" }}></div>
            <div className="modal-dialog modalsize">
                <div className="section-container modal-container" id="modal-container" style={{ backgroundColor: containerInfo.color, borderColor: containerInfo.color }}>
                    <div className="section-title" id="modal-title">{content.title}<span className="float-right">{containerInfo.title}</span></div>
                    <div className="section-content">
                        <div className="section-row section-subtitle text" id="modal-subtitle">{content.description}</div>
                        <div className="section-row text">
                            <div id="modal-bullets">
                                {content.bullets.map((item, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            {/*Always sanitize when using dangerouslySetInnerHTML!*/}
                                            <p className="fonstsize" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }}></p>
                                            <hr />
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="section-row text" id="modal-reference">{content.reference}</div>
                        <div className="section-row text" id="modal-reference" style={{ textAlign: "center" }}>
                            <button className="modal-button" style={{backgroundColor:containerInfo.color, borderColor: containerInfo.color}} onClick={closeModal}>Close</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewModal;