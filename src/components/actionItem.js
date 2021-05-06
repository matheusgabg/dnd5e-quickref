const ActionItem = (props) => {
    //object with conditional draggable properties
    return (
        <div className={`item itemsize`}
            style={{ cursor: props.isEditMode ? "move" : "pointer" }}
            onClick={() => { props.handleItemClick(props); }}
            data-id={props.dataId}
            draggable={props.isEditMode}
            onDragEnd={props.isEditMode ? props.dragEnd : null}
            onDragStart={props.isEditMode ? props.dragStart : null}>

            <div className={`item-icon iconsize ${props.icon}`} style={{ backgroundColor: props.color, borderColor: props.color }}></div>
            <div className="item-text-container text" style={{ borderColor: props.color }}>
                <div className="item-title">{props.title}</div>
                <div className="item-desc">{props.subtitle}</div>
            </div>
            {props.isEditMode ?
                <div className="edit-icon">
                    <button onClick={() => props.handleEditClick(props)}>
                        EDIT
                    </button>
                    <button onClick={() => props.handleDeleteClick(props)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
                : null
            }

        </div>
    );
}

export default ActionItem;