import React, { Component } from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: []
      /*
      cartItems: [], So when we want to add items to the cart, you can just do cartItems.Push(item)
      And when you want to add or delte, you can have 2 more arrays of equal length, one to add items, and one
      to delete items, and the side cart can have 3 columns, and 
    */
    };
  }

//Done
  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
      this.setState({
      filterText: value
       });
      
  }

//Done
  selectedUpdate(id) {
    
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
      this.setState({
      selectedBuilding: id
   });
}
removeBuilding(removeThis) {

delete this.props.data[removeThis-1]

    
}
addBuilding(formSubmission){
  formSubmission.preventDefault();
  let nodeObj = {};
  let code =  formSubmission.target[0].value;
  let name =  formSubmission.target[1].value;
  let address =  formSubmission.target[2].value;
  let latitude =  formSubmission.target[3].value;
  let longitude =  formSubmission.target[4].value
  // Checks to make sure a code was entered in the field
  if (code !== undefined || code !== '' || code !==null)
  {  // If it has been entered, then add it
    nodeObj.code = code;
  } else{return;}
  console.log(nodeObj.code);
// Checks to make sure a name was entered in the field
if( name !== undefined && name !== '' && name !==null)
{
   // If it has been entered, then add it
nodeObj.name = name;

}else {return;}
console.log(nodeObj.name );

   // Checks to make sure a ddress was entered in the field
   if (address !== undefined && address !== '' && address !==null)
   {
 // If it has been entered, then add it
 nodeObj.address = address;

   }else{return;} 
   console.log(nodeObj.address  );       
   nodeObj.coordinates = {};   
  // Checks to make sure a latitude was entered in the field
  if (latitude!== undefined &&latitude !== '' && latitude !==null)
  {
  // If it has been entered, then add it
  nodeObj.coordinates.latitude = latitude;
  }else{return;}
     
 console.log(  nodeObj.coordinates.latitude );
     

 // Checks to make sure a longitude was entered in the field
 if (longitude!== undefined && longitude!== '' && longitude !==null)
 {
 // If it has been entered, then add it
 nodeObj.coordinates.longitude = longitude;
 }else{return;}        
console.log(nodeObj.coordinates.longitude);

//this.props.data.push(myarr);
this.setState(()=>{
 this.props.data.push(nodeObj)
});

}// end of add function

  render() {
    let createAStyle;
    let bgStyle = {backgroundColor: 'CornflowerBlue '};
    createAStyle = { backgroundColor: 'aquamarine' };
    return (
      <div className="bg" style = {bgStyle}>
         <Search 
    filterText={this.state.filterText}
    filterUpdate={this.filterUpdate.bind(this)}/>
   
       
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
     
        <main>
          <div className="row">
  
            <div className="column1"    style={createAStyle}>
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                             
                   <BuildingList data={this.props.data}
                   filterText={this.state.filterText}
                   selectedUpdate = {this.selectedUpdate.bind(this)}
                 
                         />
                  
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding   data={this.props.data}
                selectedBuilding={this.state.selectedBuilding}/>
                 <RemoveBuilding
                data={this.removeBuilding}
                removeBuilding = {this.removeBuilding.bind(this)}
                selectedBuilding={this.state.selectedBuilding}
             
              /> 
              <AddBuilding  data = {this.props.data} 
              addBuilding={this.addBuilding.bind(this)} />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
   
  }
}

export default App;
