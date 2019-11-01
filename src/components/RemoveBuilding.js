import React,{Component} from 'react';

export default class RemoveBuilding extends Component {

  removeBuilding(index){

		this.props.removeBuilding(index);
	}
  render() {
    
		const { removeBuilding, selectedBuilding } = this.props;
    return (
      <div>
        <button onClick={()=> this.removeBuilding(selectedBuilding)}>
          Remove Selected Building
        </button>
      </div>
    );
  }
}