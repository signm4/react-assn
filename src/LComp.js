import { Component } from 'react';

class LeftComp extends Component {
    render(){
        return(
            <div className= "LeftComp">
                <div className="position-absolute top-50 start-0">
                    <h1> Left Component </h1>
                    <p>paragraph 1</p>
                    <p>paragraph 2</p>
                </div>
            </div>
        );
        
    }
}
export default LeftComp;