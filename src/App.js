import React from 'react';
import Search from './components/Search';
import RepoCard from './components/RepoCard';

import '././scss/main.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleOnchange = this.handleOnchange.bind(this);
		this.state = {
			repositories: [],
			select: '',
			input: ''
		};
	}

	componentDidMount() {
		fetch('https://api.github.com/orgs/Adalab/repos')
		.then(response => response.json())
		.then(json => {
			this.setState({
				repositories: json
			});
		});
	}

	handleOnchange(event) {
		const valueSelect = event.target.value.toLowerCase();
		const valueInput= event.target.value.toLowerCase();
		console.log(valueInput);
		this.setState({
			select: valueSelect,
			input: valueInput
		});
	}

	printRepositories() {
 		const listRepos = this.state.repositories.filter(item =>
			item.language.toLowerCase().includes(this.state.select));
		const listReposRefilter = listRepos.filter(el => el.name.toLowerCase().includes(this.state.select));






		return (
			<ul className="list__repos">
				{ listReposRefilter.map((list, index)=>
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
					<Search changeSelect={this.handleOnchange} changeInput={this.handleOnchange}/>
					{ this.printRepositories() }
				</main>
			</div>
    );
  }
}

export default App;
