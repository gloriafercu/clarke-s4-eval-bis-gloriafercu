import React from 'react';

class RepoCard extends React.Component {
	render() {
		return (
			<ul className="repo__details">
				<li className="repository__name"><a href={this.props.url}>{this.props.name}</a></li>
				<li className="repository__description">{this.props.description}</li>
				<li className="repository__language">{this.props.lang}</li>
			</ul>
		);
	}
}

export default RepoCard;
