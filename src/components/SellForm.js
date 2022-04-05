import React, { Component } from "react";
import { ethers } from "ethers";
import ethLogo from "./eth-logo.png";
import tokenLogo from "./token-logo.png";

class SellForm extends Component {
	constructor() {
		super()
		this.state = {
			ethQuantity: 0,
			exchangeRate: 100
		}
	}

	doExchange = e => {
		const { exchangeRate } = this.state
		let token2Eth = e.target.value / exchangeRate;
		this.setState({
			ethQuantity: token2Eth
		})
	}

	makeExchange = async e => {
		e.preventDefault()
		const { ethQuantity, exchangeRate } = this.state;
		let DanQty = String(ethQuantity * exchangeRate);
		let DanQtyWei = await ethers.utils.parseEther(DanQty).toString()
		this.props.sellToken(DanQtyWei)
	}

	render() {
		const { ethBalance, tokenBalance } = this.props;
		const { ethQuantity, exchangeRate } = this.state;
		return(
			<form className="mb-3" onSubmit={this.makeExchange}>
				<div>
					<label className="float-left"><b>Input</b></label>
					<span className="float-right text-muted">
						Balance: {tokenBalance}
					</span>
				</div>
				 <div className="input-group mb-4">
					<input
						onChange={this.doExchange}
						type="text"
						className="form-control form-control-lg"
						placeholder="0"
						required />	          	
					<div className="input-group-append">
						<div className="input-group-text">
						<img src={tokenLogo} height='32' alt=""/>
							&nbsp;&nbsp;&nbsp; DAN
						</div>
					</div>
				</div>
				<div>
					<label className="float-left"><b>Output</b></label>
					<span className="float-right text-muted ">
						Balance: {ethBalance}
					</span>
				</div>
				<div className="input-group mb-2">
					<input
						type="text"
						className="form-control form-control-lg"
						placeholder="0"
						value={ethQuantity}
						disabled
					/>
					<div className="input-group-append">
						<div className="input-group-text">
							<img src={ethLogo} height='32' alt=""/>
							 	&nbsp; ETH
						</div>
					</div>
				</div>
				<div className="mb-5">
					<span className="float-left text-muted">Exchange Rate</span>
					<span className="float-right text-muted">100 DAN = {exchangeRate / 100} ETH</span>
				</div>
				<button type="submit" className="btn btn-success btn-block btn-lg">SELL!</button>
			</form>
		)
	}
}

export default SellForm;