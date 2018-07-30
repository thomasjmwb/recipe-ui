import React, { Component } from 'react';
import DeleteListItemButton from '../presentational/DeleteListItemButton';
import SubmitListItemButton from '../presentational/SubmitListItemButton';
class ItemList extends Component {
  constructor({itemType}){
    super();
    this.state = {
      list: [],
      itemType: itemType,
      newItem: {}
    };
    this.handleItemCreateClick = this.handleItemCreateClick.bind(this);
    this.handleItemUpdateClick = this.handleItemUpdateClick.bind(this);
    this.handleDeleteItemClick = this.handleDeleteItemClick.bind(this);
  };
  handleItemCreateClick(createModel){
    debugger;
    let list = this.state.list.slice();
    list.unshift(createModel);
    this.setState({list});
  };
  handleItemUpdateClick(oldModel, updatedModel){
    let list = this.state.list.slice(),
    index = list.indexOf(oldModel);
    list.splice(index, 1, updatedModel);
    this.setState({list});
  };
  handleDeleteItemClick(deleteModel){
    let list = this.state.list.slice(),
    index = list.indexOf(deleteModel);
    list.splice(index, 1);
    this.setState({list});
  };

  render(){
    const itemType = this.state.itemType,
      ListItem = itemType.ListItem;
    return (
      <div className="list-container">
        <div className="list-item">
          <ListItem 
            model={this.state.newItem} 
            componentMode="new"
            handleCreate={this.handleItemCreateClick}
            handleUpdate={this.handleItemUpdateClick}
            handleDelete={this.handleDeleteItemClick}
          />
        </div>
        {this.state.list.forEach((item)=>{
          return (
            <div className="list-item">
              <ListItem 
                model={item} 
                handleCreate={this.handleItemCreateClick}
                handleUpdate={this.handleItemUpdateClick}
                handleDelete={this.handleDeleteItemClick}
              />
            </div>
          );
        })}
      </div>
    );
  };
};

export default ItemList;