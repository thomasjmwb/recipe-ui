import React, { Component } from 'react';
import GenericItem from './GenericItem';
import FormInput from '../presentational/FormInput';

import IconButton from '../presentational/IconButton';
class IngredientItem extends GenericItem {
  constructor(){ super(...arguments); }
  render(){
    const model = this.state.model,
      updateModel = this.state.model,
      componentMode = this.state.componentMode;

    if(componentMode==="preview"){
      return (
        <div className="ingredient-item preview">
          <div>{model.name}</div>
        </div>
      );
    }

    else if(componentMode==="expanded"){ 
      return (
        <div className="ingredient-item expanded">
          <div>{model.name}</div>
        </div>
      );
    }

    else if(componentMode==="edit"){ 
      return (
        <div className="ingredient-item edit">
          <div>{model.name}</div>
          <FormInput 
            label="name"
            text="Name: "
            type="text"
            id="name"
            value={updateModel.name}
            handleChange={this.handleFormChange}
          />
          <FormInput 
            label="unit"
            text="Unit: "
            type="text"
            id="unit"
            value={updateModel.name}
            handleChange={this.handleFormChange}
          />
        </div>
      );
    }
  }
};

export default IngredientItem;

export const IngredientType = {
  ListItem: IngredientItem
};