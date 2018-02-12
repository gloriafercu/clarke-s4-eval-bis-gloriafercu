import React from 'react';

class RepoCard extends React.Component {
	render() {
		return (
			<ul className="repo__details">
				<li className="repository__item"><a href={this.props.url}>{this.props.name}</a></li>
				<li className="repository__item">{this.props.description}</li>
				<li className="repository__item"><span className={`circle circle--${this.props.lang.toLowerCase()}`}></span><span>{this.props.lang}</span></li>
			</ul>
		);
	}
}

export default RepoCard;
