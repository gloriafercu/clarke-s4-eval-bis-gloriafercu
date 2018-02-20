import React from 'react';
import Filterlanguage from './Filterlanguage';

class Search extends React.Component {
	render () {
		return (
			<div className="search__containers">
				<input type="text" className="input__search" name="input__search" placeholder="Search repositories" onChange = {this.props.changeInput}/>
				<Filterlanguage changeSelect= {this.props.changeSelect}/>


			</div>
		);
	}
}

export default Search;
