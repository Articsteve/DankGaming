
import React, {Component} from 'react'

class Loginform extends Component{
	render(){
		return (
			<form id="signup-form" method="post" action="#">
				<input type="email" name="email" id="email" placeholder="Email Address"/>
				<input type="text" name="user" id="user" placeholder="UserName"/>
				<input type="password" name="password" id="password" placeholder="Password"/>
				<input type="submit" value="Sign Up"/>
			</form>	
			)
	}
}

export default Loginform

