import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {commonActions, navigationActions} from '../../store/actions'
import isNav from "../../store/reducers/common.reducers";
import NavigationList from "./HeaderList";

const Header = props => {

  const [ state, setState ] = useState({})

  // const { nav } = props
  // useEffect(() => {
  //   props.NavLoad()
  // }, [])

  return(
    <React.Fragment>
      <header>
        <div className="header-box">
          <div>
            {/*<span className="icon-gnb" onClick={() => props.navOpen()}></span>*/}
          </div>
          <ul>
            {
              NavigationList.map((data, index) => {
                return (
                  <li onClick={() => props.NavLoad(data.title)} key={index}>
                    <Link to={data.link}>{data.title}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </header>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    common: state.common,
    SubNav: state.navigation
  }
}

const actionCreators = {
  navOpen: commonActions.navOpen,
  NavLoad: navigationActions.NavLoad
}

export default connect(
  mapStateToProps,
  actionCreators
)(Header)