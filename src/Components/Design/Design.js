import React, { Component } from 'react';
import { Markup } from 'interweave';




class Design extends Component { 

    render () {
    
        return (
            <div>
                 <Markup content={this.props.botMessege} /> 
            </div>
            
    )
            }
}

export default Design;