import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux";
const CakeContainer = ({numOfCakes,buyCake}) => {
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={buyCake}>Buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
        // buycake: () => dispatch({type:"buyCake"}) 
        buyCake(){
          dispatch(buyCake())
        }
};
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
