import React from 'react';
import RepoCard from './RepoCard';

class Repolist extends React.Component {
	render () {
		return (
			<ul className="list__repos">
				{ this.props.repos.map((list, index)=>
					<li className="repo__card" key = {index}>
						<RepoCard
							name = {list.name}
							url = {list.html_url}
							description = {list.description? list.description : '**Not description**'}
							lang = {list.language}
						/>
					</li>)
				}
			</ul>
		);
	}
}

export default Repolist;
