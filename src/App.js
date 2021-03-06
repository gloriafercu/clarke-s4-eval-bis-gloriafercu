import React from 'react';
import Search from './components/Search';
import Repolist from './components/Repolist';

import '././scss/main.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleOnchangeSelect = this.handleOnchangeSelect.bind(this);
		this.handleOnchangeInput = this.handleOnchangeInput.bind(this);
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

	handleOnchangeSelect(event) {
		const valueSelect = event.target.value.toLowerCase();


		this.setState({
			select: valueSelect
		});
	}

	handleOnchangeInput(event) {
		const valueInput= event.target.value.toLowerCase();
		this.setState({
			input: valueInput
		});
	}

	printRepositories() {
 		const listRepos = this.state.repositories.filter(item =>
			item.language.toLowerCase().includes(this.state.select));
		const listReposRefilter = listRepos.filter(item => item.name.toLowerCase().includes(this.state.input));

		return (
			<div >
				<p className="counter">{ listReposRefilter.length } repositories</p>
				<Repolist repos={listReposRefilter}/>

			</div>
		);
	}

 render() {
		return (
			<div className="App">
				<header className="header__container">
					<h1 className="header__title">Repos at Adalab in GitHub</h1>
				</header>
				<main className="wrapper">
					<Search changeInput={this.handleOnchangeInput} changeSelect={this.handleOnchangeSelect}/>
					{ this.printRepositories() }

				</main>
			</div>
    );
  }
}

export default App;
