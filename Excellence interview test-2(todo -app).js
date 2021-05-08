
import React from 'react'


class ToDo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        newItem: "",
        list: []
      };
    }
  
  
    updateInput(key, value) {
      this.setState({ [key]: value });
    }
    addItem() {
      
      const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
   
      };
  
    
      const list = [...this.state.list];

      list.push(newItem);
      this.setState({
        list,
        newItem: ""
      });
    }
  
    // deleteItem(id) {
    //   const list = [...this.state.list];
    //   const updatedList = list.filter(item => item.id !== id);
    //     this.setState({ list: updatedList });
    // }
    
    render() {
      return (
        <div
        style={{
                        
        }}
        className="text-center"
        >
  
        <h1 className="text-white">TO DO LIST</h1>
          
          <div className="container">
          <div>
            <br />
            <input
              type="text"
              placeholder="Enter the value here"
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
              className="form-control"
            /> <br/>
            <button             
              onClick={() => this.addItem()}  
              className="form-control bg-warning text-white"            
            >
               Click to add
            </button>
            <br /> <br />
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id} className="text-white">
                      
                    {item.value}
                    {/* <button className="btn btn-floating text-danger" onClick={() => this.deleteItem(item.id)}>
                      Dlt
                    </button> */}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        </div>
      );
    }
  }

  export default ToDo;