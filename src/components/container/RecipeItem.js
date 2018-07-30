import React, { Component } from 'react';
import GenericItem from './GenericItem';
import FormInput from '../presentational/FormInput';
import IconButton from '../presentational/IconButton';
import SubmitListItemButton from '../presentational/SubmitListItemButton';
class RecipeItem extends GenericItem {
  constructor(){ super(...arguments); }
  render(){
    const model = this.state.model,
      updateModel = this.state.model,
      componentMode = this.state.componentMode;

    if(componentMode==="preview"){
      return (
        <div className="recipe-item preview">
          <div>{model.name}</div>
          <IconButton
            text="Edit"
            className="edit-icon"
            onClick={this.toggleEditMode}
          />
        </div>
      );
    }

    else if(componentMode==="expanded"){ 
      return (
        <div className="recipe-item expanded">
          <div>{model.name}</div>
        </div>
      );
    }

    else if(componentMode==="edit" || componentMode==="new"){
      let submitButton;
      if(componentMode==="edit"){
        submitButton = <IconButton text="Update" className="update-icon" onClick={this.onSubmitClick} />
      } else {
        submitButton = <IconButton text="Create" className="create-icon" onClick={this.onSubmitClick} />
      }
      return (
        <div className="recipe-item edit">
          <div>{model.name}</div>
          <FormInput 
            label="name"
            text="Name: "
            type="text"
            id="name"
            value={updateModel.name}
            handleChange={this.handleFormChange}
          />
          {submitButton}
          <IconButton
            text="Cancel"
            className="reset-icon"
            onClick={this.toggleEditMode}
          />
        </div>
      );
    }
  }
};

export default RecipeItem;

export const RecipeType = {
  ListItem: RecipeItem
};