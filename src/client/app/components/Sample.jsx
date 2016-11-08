import React from 'react';
import { connect } from 'react-redux';

class Sample extends React.Component{

  render(){
    return(
      <div className='track'>
        <div className={this.props.step.class}
          onClick={() => {
            if(!this.props.step.toggled) this.props.sound.play();
            this.props.toggleMatrix.call(null, this.props.index);
          } 
        }>
        </div>
      </div>
    )
  }
}

export default Sample;
