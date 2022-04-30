import React, { useEffect, useState } from 'react';

import Header from '../component/default/Header';

const DefaultLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    );
};

export default DefaultLayout;
