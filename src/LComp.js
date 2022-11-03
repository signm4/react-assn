import { Component } from 'react';
import Clock from './clock'

class LeftComp extends Component {
    render(){
        return(
            <div className= "LeftComp">
                <div className="position-absolute top-50 start-0">
                    <h1> Left Component </h1>
                    <p>This is the clock </p>
                    <Clock />
                </div>
            </div>
        );
        
    }
}
export default LeftComp;