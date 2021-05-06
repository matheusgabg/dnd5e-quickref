import ActionItem from './actionItem.js';
import React, { useState } from 'react';

const ContainerList = (props) => {
    //Controls object dragging
    const [dragState, setDragState] = useState(
        {
            draggedOverId: undefined,
            beingDragged: undefined,
        })

    //maintains history of where item was and where is it going (if changing containers)
    const [containerMoveState, setContainerMoveState] = useState(
        {
            itemOrderId: undefined,
            originContainer: undefined,
            destinationContainer: undefined,
        })

    const updateState = (item, draggedOverId) => {
        //resets to match current item
        setDragState({ draggedOverId: draggedOverId, beingDragged: draggedOverId })

        //reorganize list, from top to bottom based on order property
        let newOrder = 0;
        props.containers.forEach((cont, j) => {
            item.forEach((elem, i) => {
                if (elem.containerId === cont.order) {
                    elem.order = newOrder;
                    newOrder++;
                };
            })
        })

        item.sort((a, b) => (a.order > b.order) ? 1 : -1)

        props.handleDataChanged(item)
    }

    const dragStart = (e) => {
        // Update our state with the item that is being dragged
        const beingDragged = Number(e.target.dataset.id);
        setDragState({ beingDragged: beingDragged })

        //Set item move state
        const closestContainer = e.target.closest('.section-container');
        const containerId = closestContainer?.dataset.containerId;
        setContainerMoveState({ originContainer: containerId, destinationContainer: containerId, itemOrderId: beingDragged })

        e.dataTransfer.effectAllowed = 'move'
    }

    const dragOver = (e) => {
        e.preventDefault()
        //gets current item being dragged
        let from = dragState.beingDragged;

        //gets "destination" container
        const closestContainer = e.target.closest('.section-container');
        const containerId = closestContainer?.dataset.containerId;

        //highlight target container
        if (closestContainer) {
            clearHighlightedContainers();
            closestContainer.classList.add("highlighted")
        }

        //attempt to get location to move current item being dragged
        let id = e.target.dataset.id || e.target.parentElement.dataset.id || e.target.parentElement.parentElement.dataset.id;
        let to = Number(id);

        //Sets current dragging state
        setContainerMoveState({ ...containerMoveState, destinationContainer: containerId })
        setDragState({ ...dragState, draggedOverId: to });

        //if item is being moved to another container, just ignore 'onDragOver' event, it will be handled on 'onDragEnd' when changing containers
        if (containerId !== undefined && containerMoveState.originContainer !== containerId) return;

        //if can't find location, consider the last move state (it won't move object)
        if (isNaN(to)) {
            to = containerMoveState.itemOrderId;
        }

        // reorder the array with the current hover position
        let items = props.data;
        items.splice(to, 0, items.splice(from, 1)[0]);
        updateState(items, to)

    }

    //this will be triggered on mouseUp when dragging stops
    const dragEnd = (e) => {
        //handling data when changing containers
        if (containerMoveState.originContainer !== containerMoveState.destinationContainer) {
            const items = [...props.data];
            const itemToChange = items.find(i => i.order === containerMoveState.itemOrderId);//find item that was moved
            itemToChange.containerId = Number(containerMoveState.destinationContainer);//update new containerId on the object

            updateState(items, containerMoveState.itemOrderId);//update state with new Id
        }


        // Update state to force removal of the class
        setDragState(props.data, undefined);
        clearHighlightedContainers();
    }

    //Clears the highlighted effect on container
    const clearHighlightedContainers = () => {
        const highlighted = document.querySelectorAll('.highlighted');

        highlighted.forEach(i => {
            i.classList.remove('highlighted');
        });
    }

    //Handles dynamic rendering, looping the JSON provided
    let sequenceIndex = -1;
    const containerList = props.containers.map((container, i) => {
        const ownedItems = props.data
            .filter(item => item.containerId === container.id)
            .map((item, j) => {
                sequenceIndex++;
                return (
                    <ActionItem
                        key={j}
                        {...item}
                        color={container.color}
                        dataId={sequenceIndex}
                        handleItemClick={props.handleItemClick}
                        handleEditClick={props.handleEditClick}
                        handleDeleteClick={props.handleDeleteClick}
                        isEditMode={props.isEditMode}
                        dragStart={dragStart}
                        dragEnd={dragEnd}
                    />
                )
            });

        return (
            <React.Fragment key={i}>
                <div className={`section-container`} key={i} data-container-id={container.id}
                    style={{ backgroundColor: container.color, borderColor: container.color }}>
                    <div className="section-title">
                        {container.title} <span className="float-right">{container.subtitle}</span>
                    </div>
                    <div className="section-content">
                        <div className="section-row" id="basic-movement">
                            {ownedItems}
                        </div>
                        {props.isEditMode ?
                            <div style={{ cursor: "pointer", display: "inline-block" }} onClick={() => {
                                props.handleAddNewItem(container.id);
                            }}>
                                <i className="fas fa-plus-circle" style={{ color: "green", paddingRight: "5px" }}></i>
                            Add New Item
                        </div>
                            :
                            null
                        }
                    </div>
                    {props.isEditMode ?
                        <>
                            <div className="edit-icon">
                                <button onClick={() => props.handleEditContainer(container)}>
                                    EDIT CONTAINER
                            </button>
                                <button onClick={() => props.handleDeleteContainer(container)}>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                            <div style={{ textAlign: "center", fontSize: "30px" }}>
                                <i className="fas fa-caret-up arrow-btn" onClick={() => props.handleMoveContainer("up", container)}></i>
                                <i className="fas fa-caret-down arrow-btn" onClick={() => props.handleMoveContainer("down", container)}></i>
                            </div>
                        </>
                        : null
                    }
                </div>
            </React.Fragment>
        )
    });



    return (
        <div onDragOver={dragOver}>
            {containerList}
        </div>
    )
}

export default ContainerList;