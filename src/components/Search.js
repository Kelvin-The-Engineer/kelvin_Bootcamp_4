import React, {Component}  from 'react';

class Search extends Component {
 
	filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		 const val = this.myValue.value
       // this.props.filterUpdate(val)
      this.props.filterUpdate(val) 
	}

	selectedUpdate(){
		const val = this.myValue.id
		this.props.selectedUpdate(val)
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes // DONE?
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
			<header>
			<form>
				  <input 
                type="text"
                ref={(value)=>this.myValue=value}
                 placeholder="Type to Filter"
                 onChange={this.filterUpdate.bind(this)}>

                 </input>
			</form>
			</header>
		);
	}
}
export default Search;
