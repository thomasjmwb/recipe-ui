import React, { Component } from 'react';
import DeleteListItemButton from '../presentational/DeleteListItemButton';
import SubmitListItemButton from '../presentational/SubmitListItemButton';
class ItemList extends Component {
  constructor({itemType}){
    super();
    this.state = {
      list: [],
      itemType: itemType,
      newItem: {},
    };
    this.handleResetItemClick = this.handleResetItemClick.bind(this);
  };

  handleResetItemClick(){
    this.setState({newItem: {} });
  };
  handleItemSubmitClick(model){
    let list = this.state.list.slice();
    list.unshift(model);
    this.setState({list});
  };
  handleItemUpdateClick(model){

  };
  handleDeleteItemClick(model){
    console.log(`delete: ${model}`);
  };

  render(){
    const itemType = this.state.itemType,
      ListItem = itemType.ListItem;
    return (
      <div className="list-container">
        <div className="list-item">
          <ListItem model={this.state.newItem} componentMode="edit" />
          <SubmitListItemButton text="Y" />
          <DeleteListItemButton text="X" handleClick={this.handleResetItemClick} />
        </div>
        {this.state.list.forEach((item)=>{
          return (
            <div className="list-item">
              <ListItem model={item} />
              <SubmitListItemButton text="Y" />
              <DeleteListItemButton text="X" handleClick={this.handleDeleteItemClick.bind(this, item)} />
            </div>
          );
        })}
      </div>
    );
  };
};

export default ItemList;