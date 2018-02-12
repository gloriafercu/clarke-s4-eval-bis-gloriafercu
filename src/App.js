import React from 'react';
import Search from './components/Search';
import RepoCard from './components/RepoCard';

import '././scss/main.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			repositories: []
		};
	}

	componentDidMount() {
		fetch('https://api.github.com/orgs/Adalab/repos')
		.then(response => response.json())
		.then(json => {
			this.setState({
				repositories: json
			});
			// const listRespositories = json;
			// console.log(json.map (
			// 	list => list.name
			// ));
		});
	}

	printRepositories() {
 		const listRespositories = this.state.repositories;
		return (
			<ul className="list__repos">
				{ listRespositories.map((list, index)=>
					<li className="repo__card" key = {index}>
						<RepoCard
							name = {list.name}
							url = {list.html_url}
							description = {list.description}
							lang = {list.language}
						/>
					</li>)
				}
			</ul>
		);
	}

 render() {
		return (
			<div className="App">
				<header className="header__container">
					<h1 className="header__title">Repos at Adalab in GitHub</h1>
				</header>
				<main className="wrapper">
					<Search />
					{ this.printRepositories() }
				</main>
			</div>
    );
  }
}

export default App;
