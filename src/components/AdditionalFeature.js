import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../reducers/actionCreators'

export const AdditionalFeature = props => {

  
  console.log(addFeature(props.feature))
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={ e => {
        addFeature(props.feature)
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return  {
    addedFeatures: state.car.features
}
}




export default connect(mapStateToProps, {addFeature})(AdditionalFeature)