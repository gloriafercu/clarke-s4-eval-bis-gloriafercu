import React from 'react';

class Search extends React.Component {
	render () {
		return (
			<div className="search__containers">
				<input type="text" className="input__search" name="input__search" placeholder="Search repositories" onChange = {this.props.changeInput}/>
				<select className="input__select" onChange = {this.props.changeSelect}>
					<option value="">All</option>
					<option value="HTML">HTML</option>
					<option value="CSS">CSS</option>
					<option value="JavaScript">JavaScript</option>
				</select>
			</div>
		);
	}
}

export default Search;
