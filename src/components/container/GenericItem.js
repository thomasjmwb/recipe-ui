import React, { Component } from 'react';
class GenericItem extends Component {
  constructor({model, componentMode, handleCreate, handleUpdate, handleDelete}){
    super();
    this.state = {
      model: model,
      updateModel: Object.assign({}, model),
      componentMode: componentMode ? componentMode : 'preview', // need to model this way better

    };
    this.handleCreate = handleCreate;
    this.handleUpdate = handleUpdate;
    this.handleDelete = handleDelete;
    this.handleReset = this.handleReset.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  };

  handleReset(){
    let originalModel = this.state.model;
    this.setState({ updateModel: originalModel });
  };

  handleFormChange(event){
    let updateModel = this.state.updateModel;
    updateModel[event.target.id] = event.target.value;
    this.setState({ updateModel });
  };


  toggleEditMode(){
    let editStatus = this.state.componentMode;
    if(editStatus==='preview'){ return this.setState({componentMode: 'edit'}); }
    if(editStatus==='edit'){ this.handleReset(); return this.setState({componentMode: 'preview'}); }
    if(editStatus==='new'){ this.handleReset(); return this.setState({componentMode: 'preview'}); }
  }

  onSubmitClick(){
    const updateModel = this.state.updateModel,
    submitFunction = this.state.componentMode==="edit" ? this.handleUpdate : this.handleCreate;
    submitFunction(updateModel);
  }
  
  render(){
    return (<div></div>);
  }
};

export default GenericItem;
