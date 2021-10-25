import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from "react-redux";

const EtcMain = (props) => {

  return(
    <React.Fragment>
      <div className="description-box">
        <h4 className="title">일기장</h4>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  //
})

const actionCreators = {
  //
}

export default connect(
  mapStateToProps,
  actionCreators,
)(EtcMain)
