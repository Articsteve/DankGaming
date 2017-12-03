import React, {Component} from 'react'
import ReactDom from 'react-dom'
import { Footer } from './components/index.js'
import { Header } from './components/index.js'
import { Loginform } from './components/index.js'

class App extends Component{
	render(){
		return(
			<div>
				<Header />
				<Loginform />
				<Footer />
			</div>
			)
	}
}

ReactDom.render(<App/>, document.getElementById('root'))