import React from 'react';

class MyComponent extends React.Component{
	/*
	JSX => Phải return lại 1 khối (chung 1 cha)
	//in ra console trong html {console.log("My name is", name)}
	*/
	state = {
		name: 'Eric',
		channel: 'Hoi Dan IT'
	}
	handelOnChangeName = (event)=>{
		this.setState({
			name: event.target.value
		})
		
	}
	render(){
		
		return(
			<>
				<div className="abcd">
					<input value={this.state.name} type="text"
					onChange = {(event) => this.handelOnChangeName(event)} />
					<div className="first">
						
						Hello my csomponent, My name is {this.state.name}
					</div>
					<div className="second">
						My channel is {this.state.channel}
					</div>
				</div>
			</>
		)
	}
	
	
}

export default MyComponent;