
import React,{Component} from 'react';
 
class ViewBuilding extends  Component {

	render() {
		
 
		const { data, selectedBuilding } = this.props;
			
		let myOutput = (
			 
				<div>
			<p>
				{' '}				
				<i>Click on a name to view more information </i>
				 
			</p>
		</div>
		
		)
		if(selectedBuilding !==0 && data[selectedBuilding] !== null){
			 
			myOutput = (
				<div>
					{console.log(data)}
				<p>
				
				 <i>Code : {data[selectedBuilding-1].code}</i>
				  <br />
				  <i>Name : {data[selectedBuilding-1].name}</i>
				  <br />
				  <i>Address : {data[selectedBuilding-1].address}</i>
				  {data[selectedBuilding-1].coordinates !== undefined && (
					<div>
					  <br />
					  <i>Coordinates</i>
					  <br />
					  <i>Latitude : {data[selectedBuilding-1].coordinates.latitude}</i>
					  <br />
					  <i>
						Longitude : {data[selectedBuilding-1].coordinates.longitude}
					  </i>
					</div>
				  )}
				</p>
			  </div>


			)
		}
		return myOutput;
	}

}
export default ViewBuilding;