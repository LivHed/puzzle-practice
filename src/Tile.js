import React, { Component } from "react";
import './App.css';

class Tile extends Component {

	constructor(props) {
		super(props);
	
		this.click = this.click.bind(this);
		this.state = {number: props.number};
	}

	click() {
		//alert('du klickade på ' + this.props.number);
		//alert('du klickade på ' + this.state.number);
		this.setState({
			number: this.state.number + 1
		  });
	}

	render() {
		return (
			<div className="Tile" onClick={this.click}>
			   {this.state.number} <br/>
			   {this.props.column},{this.props.row}
			</div>
		);
	}
}

export default Tile;