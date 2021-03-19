import React, { Fragment } from 'react';
import Home from '../components/home' 
import Disposicion from '../components/disposicion'

class Main extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = {screen: ''};
    }

    screen = (screen) =>{
        this.setState({screen})
    }

    render(){
        console.log("state ", this.state)    
        return(
            <Fragment>
            
            <div className="mainContainer">
                
                {this.state.screen === '' ?
                    <div>
                        <div className="title">
                            Pantallas
                        </div>
                        
                        <div style={{cursor:"pointer"}} className="mainContainer__button" onClick = {() => this.screen('home')}>
                            Home
                        </div>

                        <div style={{cursor:"pointer"}} className="mainContainer__button" onClick = {() => this.screen('disp')}>
                            Disposición
                        </div>
                    </div>
                    : this.state.screen === 'home' ? 
                        <Home/>
                    : <Disposicion/>
                }
            </div>
            
            </Fragment>
            
        )
    }
}

export default Main;