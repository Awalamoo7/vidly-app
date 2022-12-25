import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import MovieForm from "./components/movieForm";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import "./App.css";
class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<main className="container">
					<Switch>
						<Route path="/login" component={LoginForm} />
						<Route path="/movies/:id" component={MovieForm}></Route>
						<Route path="/movies" component={Movies}></Route>
						<Route path="/customers" component={Customers}></Route>
						<Route path="/rentals" component={Rentals}></Route>
						<Route path="/not-Found" component={NotFound}></Route>
						<Redirect from="/" exact to="/movies" />
						<Redirect to="/not-Found" />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
