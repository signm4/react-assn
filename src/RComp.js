import { Component } from 'react';
import Counter from './buttonClicker';

class RightComp extends Component {
    render(){
        return(
            <div className= "RightComp">
            <h1> Right Component </h1>
            <Counter />
            </div>
        );
        
    }
}
export default RightComp;