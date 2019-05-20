import React from 'react';

 class Mouser extends React.Component {
    state = { x: 0, y: 0 };

    handleMouseMove = (evt) => {
        this.setState({ x: evt.clientX, y: evt.clientY });
    };

    render() {
        const { x, y } = this.state;
        return (
            <div style={{ height: "500px" }} onMouseMove={this.handleMouseMove} >
                <h1>The mouse position is: ({x}, {y})</h1>
            </div>             
        );
    }
}

export default Mouser; 

//Higher order Function:  
//function, that return a new function with added functionality 


//Higher Order Component:
//function, takes a "child" component, 
//returns a parent component to push props down 
//to this child component


