import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FixBackground from '../../assets/images/bg-fix.png';

const Navigation = props => {
    return (
        <React.Fragment>
            <div className="navigation-wrap">
                <div className="navigation-box">
                    <ul className="navigation-list">
                        {/* {
              props.navigationLoad.subNavList?.map((data, index) => {
                return (
                  <li key={index}>
                    <Link to={data.path}>{data.title}</Link>
                  </li>
                )
              })
            } */}
                    </ul>
                </div>
                <img src={FixBackground} className="img-navigation" alt="네비게이션 이미지" />
            </div>
        </React.Fragment>
    );
};

export default Navigation;
