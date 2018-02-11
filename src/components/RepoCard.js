import React from 'react';

class RepoCard extends React.Component {
	render() {
		return (
			<ul className="list__repos">
				<li className="repo__card">
					<ul className="repo__details">
						<li className="repository__name"><a href="html__url">Repository name</a></li>
						<li className="repository__description">Description</li>
						<li className="repository__language">Language</li>
					</ul>
				</li>
			</ul>
		);
	}
}

export default RepoCard;
