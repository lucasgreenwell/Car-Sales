import React from 'react';
import {connect} from 'react-redux';

export const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



const mapStateToProps = state => {
  return {
    feature: {
      name: state.feature.name,
      price: state.feature.price
    }
  }
}

export default connect(mapStateToProps, {})(AdditionalFeature);