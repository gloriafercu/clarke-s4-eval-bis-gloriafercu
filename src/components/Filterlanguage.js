import React from 'react';

class Filterlanguage extends React.Component {
	render () {
		return (
			<select className="input__select" onChange = {this.props.changeSelect}>
				<option value="">All</option>
				<option value="HTML">HTML</option>
				<option value="CSS">CSS</option>
				<option value="JavaScript">JavaScript</option>
			</select>

		);
	}
}
export default Filterlanguage;
