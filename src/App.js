import React from 'react';
import Search from './components/Search';
import RepoCard from './components/RepoCard';

import '././scss/main.css';

class App extends React.Component {
  render() {
    return (
			<div className="App">
				<header className="header__title">
					<h1>Repos at Adalab in GitHub</h1>
				</header>
				<main className="wrapper">
					<Search />
					<RepoCard />
				</main>
			</div>
    );
  }
}

export default App;
