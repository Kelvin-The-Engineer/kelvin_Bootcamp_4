import React,{Component} from 'react';
 
export default class BuildingList extends  Component {
 
	constructor(props) {
		super(props);
		this.selectedUpdate = this.selectedUpdate.bind(this);
	 
	}
	selectedUpdate(passed){
		
		this.props.selectedUpdate(passed)
	}

	render() {
		const { data, filterText, selectedBuilding } = this.props;

		const buildingList = Object.values(data)
		.filter(name =>{
            //remove names that dont match curr filter text
            return name.name.toLowerCase().indexOf(filterText.toLowerCase())>=0
        })		
		.map(directory => {
			
 
		
		 
			return (
				
				<tr
            key={directory.id}
         
			onClick={() => 
				this.selectedUpdate(directory.id)	
				//this.props.selectedUpdate(directory.id);			
			}  
			 >

					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			)
			
		})
		
		return <div>{buildingList}</div>;
 
	}


  }
