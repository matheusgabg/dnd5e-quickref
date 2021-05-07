import './css/App.css';
import './css/icons.css';
import { actionListDnD } from './presets/dnd/actionListDnd.js';
import { actionContainerListDnd } from './presets/dnd/actionContainerListDnd.js';
import { actionListT20 } from './presets/t20/actionListT20.js';
import { actionContainerListT20 } from './presets/t20/actionContainerListT20.js';
import ViewModal from './components/viewModal.js';
import JsonOutput from './components/jsonOutput.js';
import EditModal from './components/editModal.js';
import EditContainerModal from './components/editContainerModal.js';
import EditPresetModal from './components/editPresetModal.js';
import React, { useState } from 'react';
import ContainerList from './components/containerList.js';


function App() {
  const dnd5eJson = JSON.stringify({ items: actionListDnD, containers: actionContainerListDnd });
  const t20Json = JSON.stringify({ items: actionListT20, containers: actionContainerListT20 })
  let _allItems = { ...localStorage, "dnd5e": dnd5eJson, "t20": t20Json };
  let _initialData = {}

  const _currentLocation = new URL(window.location);
  let _isStaticMode = false;
  if (_currentLocation.searchParams.get("preset")) {
    let presetParam = _currentLocation.searchParams.get("preset");
    try {
      let presetData = JSON.parse(Reflect.get(_allItems, presetParam));
      if (presetData) {
        _initialData = presetData;
        _isStaticMode = true;
      }

    }
    catch {
      console.log("Url params do not match any existing presets")
    }
  }
  else {
    _initialData.items = actionListDnD;
    _initialData.containers = actionContainerListDnd;
  }


  //Editing mode
  const [isEditMode, setEditMode] = useState(false);

  //Item list controls
  const [listItems, setListItems] = useState({ items: _initialData.items });
  const [listContainers, setListContainers] = useState({ items: _initialData.containers });

  //View Modal Controls
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewModalContent, setViewModalContent] = useState({});

  //Edit Modal controls
  const [showEditModal, setShowEditModal] = useState(false);
  const [editModalContent, setEditModalContent] = useState({});
  const [showContainerEditModal, setShowContainerEditModal] = useState(false);
  const [editContainerModalContent, setEditContainerModalContent] = useState({});
  const [showPresetEditModal, setShowPresetEditModal] = useState(false);

  //Active dataset
  const [activeDataSet, setActiveDataSet] = useState("dnd5e")


  /* ------------------------------------------------------------------------- */
  /* LOCAL STORAGE CONTROL */
  /* ------------------------------------------------------------------------- */
  const getLocalStorage = (dataSet) => {
    const data = JSON.parse(Reflect.get(_allItems, dataSet));
    setListItems({ items: data.items });
    setListContainers({ items: data.containers })
  }

  //This handles data that was edited
  const saveLocalStorage = (dataSet = activeDataSet) => {
    localStorage.setItem(dataSet, JSON.stringify({ ...listItems, containers: listContainers.items }));
  }


  /* ------------------------------------------------------------------------- */
  /* ITEM EDIT CONTROL */
  /* ------------------------------------------------------------------------- */
  const handleItemClick = (data) => {
    if (isEditMode) {

    }
    else {
      setViewModalContent(data);
      setShowViewModal(true);
    }
  }

  const handleEditClick = (data) => {
    setEditModalContent(data);
    setShowEditModal(true);
  }

  const handleDeleteClick = (data) => {
    let modifiedData = [...listItems.items];
    modifiedData.splice(modifiedData.findIndex(i => i.id === data.id), 1);
    setListItems({ items: modifiedData });
  }

  const handleAddNewItem = (containerId) => {
    //get last id
    //put new item on last position, then act as if had moved to a certain container
    let items = [...listItems.items];
    items.sort((a, b) => (a.id > b.id) ? 1 : -1);//get last id
    let nextId = items[items.length - 1].id + 1;
    items.sort((a, b) => (a.order > b.order) ? 1 : -1);//get last order
    let lastOrder = items[items.length - 1].order + 1;
    let nextItem = {
      id: nextId,
      title: "New Item",
      order: lastOrder,
      containerId: containerId,
      icon: "icon-crossed-swords",
      subtitle: "New Subtitle",
      description: "Perform a really cool action",
      reference: "-",
      bullets: [
        "When you do something cool, the DM is impressed"
      ]
    }
    items.push(nextItem);
    let containers = [...listContainers.items];
    //reorganize list, from top to bottom based on order property
    let newOrder = 0;
    containers.forEach((cont, j) => {
      items.forEach((elem, i) => {
        if (elem.containerId === cont.order) {
          elem.order = newOrder;
          newOrder++;
        };
      })
    });

    setListItems({ items: items });
  }

  //This handles data that was edited
  const handleItemsChanged = (data) => {
    setListItems({ items: data });
  }

  /* ------------------------------------------------------------------------- */
  /* PAGE EDIT CONTROL */
  /* ------------------------------------------------------------------------- */
  const saveEdit = () => {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('editing-mode');
    setEditMode(false);
    saveLocalStorage();
  }

  const cancelEdit = () => {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('editing-mode');
    setEditMode(false);
    //rollback changes getting last localStorage values
    getLocalStorage(activeDataSet);
  }

  const enableEditMode = () => {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add("editing-mode");
    setEditMode(true);
  }

  /* ------------------------------------------------------------------------- */
  /* MODAL CONTROLS */
  /* ------------------------------------------------------------------------- */

  //saves changes (from modal)
  const saveEditModal = (initialData, editData) => {
    let data = Object.assign({}, initialData);
    data.title = editData.title;
    data.subtitle = editData.subtitle;
    data.description = editData.description;
    data.bullets = editData.bullets;
    data.icon = editData.icon;

    //get current object
    let items = [...listItems.items];
    let foundIndex = items.findIndex(x => x.id === data.id);
    items[foundIndex] = data;
    setListItems({ items: items })
    setShowEditModal(false);
  }

  //Modal Control
  const closeModalIfOpen = (e) => {
    //closes if clicked outside of modal; closes if clicks on "Close" button
    if (document.getElementById('modal-container') !== null && showViewModal) {
      if (document.getElementById('modal-container').contains(e.target)) {
        // Clicked in box
      } else {
        // Clicked outside the box
        setShowViewModal(false);
      }
    }
  }

  /* ------------------------------------------------------------------------- */
  /* EDIT CONTAINERS */
  /* ------------------------------------------------------------------------- */
  const handleAddNewContainer = () => {
    //get last id
    //put new item on last position, then act as if had moved to a certain container
    let containers = [...listContainers.items];
    containers.sort((a, b) => (a.id > b.id) ? 1 : -1);//get last id
    let nextId = containers[containers.length - 1].id + 1;
    containers.sort((a, b) => (a.order > b.order) ? 1 : -1);//get last order
    let lastOrder = containers[containers.length - 1].order + 1;

    let nextContainer = {
      id: nextId,
      title: "New Container",
      order: lastOrder,
      color: "black"
    }

    containers.push(nextContainer);

    //reorganize list, from top to bottom based on order property
    let newOrder = 0;
    containers.forEach((cont, j) => {
      cont.order = newOrder;
      newOrder++;
    });

    setListContainers({ items: containers });
  }

  const saveEditContainerModal = (initialData, editData) => {
    let data = Object.assign({}, initialData);
    data.title = editData.title;
    data.subtitle = editData.subtitle;
    data.color = editData.color;

    //get current object
    let items = [...listContainers.items];
    let foundIndex = items.findIndex(x => x.id === data.id);
    items[foundIndex] = data;

    setListContainers({ items: items })
    setShowContainerEditModal(false);
  }

  const handleDeleteContainer = (data) => {
    let modifiedContainer = [...listContainers.items];
    let modifiedItems = [...listItems.items];
    modifiedContainer.splice(modifiedContainer.findIndex(i => i.id === data.id), 1);

    modifiedItems = modifiedItems.filter(i => i.containerId !== data.id)

    setListItems({ items: modifiedItems });
    setListContainers({ items: modifiedContainer })
  }

  const handleEditContainer = (container) => {
    setEditContainerModalContent(container);
    setShowContainerEditModal(true);
  }

  const handleMoveContainer = (direction, container) => {
    let containers = [...listContainers.items];
    if (direction === "up") {
      //get container in current desired position; increment it so it moves down
      //update moved container with new position
      let containerNewPosition = container.order - 1;
      if (containerNewPosition < 0) {
        return;
      }

      let containerAbove = containers.filter(item => item.order === (container.order - 1))[0];
      let containerBeingMoved = containers.filter(item => item.id === container.id)[0];
      containerAbove.order = containerAbove.order + 1;

      containerBeingMoved.order = containerNewPosition;

      containers.sort((a, b) => (a.order > b.order) ? 1 : -1);
      setListContainers({ items: containers });
    }
    if (direction === "down") {
      let containerNewPosition = container.order + 1;

      if (containerNewPosition > (containers.length - 1)) {
        return;
      }

      let containerBelow = containers.filter(item => item.order === (container.order + 1))[0];
      let containerBeingMoved = containers.filter(item => item.id === container.id)[0];
      containerBelow.order = containerBelow.order - 1;

      containerBeingMoved.order = containerNewPosition;

      containers.sort((a, b) => (a.order > b.order) ? 1 : -1);
      setListContainers({ items: containers });
    }
    //get new item order and save
    //reorganize list, from top to bottom based on order property
    let newOrder = 0;
    let items = [...listItems.items];
    containers.forEach((cont, j) => {
      items.forEach((elem, i) => {
        if (elem.containerId === cont.order) {
          elem.order = newOrder;
          newOrder++;
        };
      })
    });

    setListItems({ items: items });
  }

  /* ------------------------------------------------------------------------- */
  /* PRESETS CONTROL*/
  /* ------------------------------------------------------------------------- */

  const handlePresetsChange = (e) => {
    let value = e.target.value;
    setActiveDataSet(value);
    let dataSet = JSON.parse(Reflect.get(_allItems, value));
    setListItems({ items: dataSet.items });
    setListContainers({ items: dataSet.containers });
  }

  const addNewPreset = (presetName) => {
    setActiveDataSet(presetName);
    setEditMode(false);
    saveLocalStorage(presetName);
    setShowPresetEditModal(false);
    setEditMode(true);
  }

  /* ------------------------------------------------------------------------- */
  /* JSON EDIT */
  /* ------------------------------------------------------------------------- */
  const handleSaveJson = (itemsJson, containersJson) => {
    if (IsJsonString(itemsJson) && IsJsonString(containersJson)) {
      const newItems = JSON.parse(itemsJson);
      const newContainers = JSON.parse(containersJson);

      newContainers.sort((a, b) => (a.order > b.order) ? 1 : -1);//get last order
      //reorganize containers, from top to bottom based on order property
      let newContainerOrder = 0;
      newContainers.forEach((cont, j) => {
        cont.order = newContainerOrder;
        newContainerOrder++;
      });
      setListContainers({ items: newContainers });

      newItems.sort((a, b) => (a.order > b.order) ? 1 : -1);//get last order
      let newItemOrder = 0;
      newContainers.forEach((cont, j) => {
        newItems.forEach((elem, i) => {
          if (elem.containerId === cont.order) {
            elem.order = newItemOrder;
            newItemOrder++;
          };
        })
      });

      setListItems({ items: newItems });
    }
  }

  const IsJsonString = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  const listPresets = Reflect.ownKeys(_allItems);

  return (
    <div className="page fontsize" data-size="fullscreen" onClick={closeModalIfOpen}>
      {!_isStaticMode ?
        <div style={{ paddingBottom: "8px" }}>
          <label>Choose your preset:</label>
          <select value={activeDataSet} onChange={(e) => handlePresetsChange(e)}>
            {listPresets.map((preset, i) => {
              return (
                <option key={i} value={preset}>{preset}</option>
              );
            })}
          </select>
          {isEditMode ?
            <>
              <button className="app-button" onClick={saveEdit} >Save</button>
              <button className="app-button" onClick={cancelEdit} >Cancel Changes</button>
            </>
            :
            <>
              {activeDataSet !== "dnd5e" && activeDataSet !== "t20" ?
                <>
                  <button
                    className="app-button"
                    style={{ marginLeft: "8px" }}
                    onClick={enableEditMode}>Edit Items!</button>
                  <button
                    className="app-button"
                    style={{ marginLeft: "8px", backgroundColor: "Maroon" }}
                    onClick={() => {
                      localStorage.removeItem(activeDataSet);
                      window.location.reload();
                    }}>Delete Preset</button>
                </>
                : null
              }


              <button
                className="app-button"
                style={{ marginLeft: "8px", backgroundColor: "#075802" }}
                onClick={() => {
                  setShowPresetEditModal(true);
                }}>Start New</button>
            </>
          }
        </div>
        : null
      }

      <ContainerList
        data={listItems.items}
        containers={listContainers.items}
        handleDataChanged={handleItemsChanged}
        handleItemClick={handleItemClick}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        handleAddNewItem={handleAddNewItem}
        handleDeleteContainer={handleDeleteContainer}
        handleEditContainer={handleEditContainer}
        handleMoveContainer={handleMoveContainer}
        isEditMode={isEditMode}
      />

      {isEditMode ?
        <button style={{ cursor: "pointer", display: "inline-block" }} onClick={() => {
          handleAddNewContainer();
        }}>
          <i className="fas fa-plus-circle" style={{ color: "green", paddingRight: "5px" }}></i>
            Add New Container
          </button>
        :
        null
      }

      {showViewModal ?
        <ViewModal
          closeModal={() => setShowViewModal(false)}
          content={viewModalContent}
          containers={listContainers.items} /> : null}
      {showEditModal ?
        <EditModal
          closeModal={() => setShowEditModal(false)}
          saveEditModal={saveEditModal}
          content={editModalContent}
          containers={listContainers.items} /> : null}
      {showContainerEditModal ?
        <EditContainerModal
          closeContainerModal={() => setShowContainerEditModal(false)}
          saveEditContainerModal={saveEditContainerModal}
          content={editContainerModalContent}
          containers={listContainers.items} /> : null}
      {showPresetEditModal ?
        <EditPresetModal
          closePresetModal={() => setShowPresetEditModal(false)}
          addNewPreset={addNewPreset} /> : null}
      {isEditMode ?
        <>
          <hr />
          <JsonOutput items={listItems.items} containers={listContainers.items} handleSaveJson={handleSaveJson} />
        </>
        : null
      }
      <div className="footer">
        <a href="https://github.com/matheusgabg/dnd5e-quickref"><i className="fab fa-github"></i> Check my code here!</a>
      </div>
    </div>
  );
}

export default App;
