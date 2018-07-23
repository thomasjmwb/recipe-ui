import React, { Component } from 'react';

class RecipeItem extends Component {
  constructor({model, componentMode}){
    super();
    this.state = {
      model: model,
      componentMode: componentMode ? componentMode : 'preview',
    }
  };

  render(){
    const model = this.state.model,
      componentMode = this.state.componentMode;

    if(componentMode==="preview"){
      return (
        <div class="recipe-item preview">
          <div>{model.name}</div>
        </div>
      );
    }

    else if(componentMode==="expanded"){ 
      return (
        <div class="recipe-item expanded">
          <div>{model.name}</div>
        </div>
      );
    }

    else if(componentMode==="edit"){ 
      return (
        <div class="recipe-item edit">
          <div>{model.name}</div>
        </div>
      );
    }
  }
};

export default RecipeItem;

export const RecipeType = {
  ListItem: RecipeItem
};