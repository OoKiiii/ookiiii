import React, { useEffect, useState } from 'react';
import Header from '../component/default/Header';
import Navigation from '../component/default/Navigation';

const SubLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Navigation />
            {children}
        </React.Fragment>
    );
};

export default SubLayout;
