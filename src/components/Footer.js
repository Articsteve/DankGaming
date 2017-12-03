import React, {Component} from 'react'

class Footer extends Component{
	render(){
		return (
			<footer id="footer">
				<ul className="icons">
					<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
					<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
					<li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
					<li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
				</ul>
				<ul className="copyright">
					<li>Dank Gaming.</li>
				</ul>
			</footer>
			)
	}
}
export default Footer