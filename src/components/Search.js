import React from 'react';

class Search extends React.Component {
	render () {
		return (
			<div className="search__containers">
				<input type="text" className="input__search" name="input__search" placeholder="Search repositories"/>
				<select className="input__select">
					<option value="HTML">HTML</option>
					<option value="CSS">CSS</option>
					<option value="JS" >JS</option>
				</select>
			</div>
		);
	}
}

export default Search;
