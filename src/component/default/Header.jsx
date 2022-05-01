import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useStoreCommon } from "../../store";

const Header = () => {
    const common = useStoreCommon((state) => state);

    return (
        <React.Fragment>
            <HeaderWrapper>
                <HeaderContainer>
                    <HeaderListBox>
                        <HeaderListContent>
                            <Link to="/" onClick={() => common.setType("")}>
                                HOME
                            </Link>
                        </HeaderListContent>
                        <HeaderListContent>
                            <Link
                                to="/html"
                                onClick={() => common.setType("html")}
                            >
                                HTML
                            </Link>
                        </HeaderListContent>
                        <HeaderListContent>
                            <Link
                                to="/css"
                                onClick={() => common.setType("css")}
                            >
                                CSS
                            </Link>
                        </HeaderListContent>
                        <HeaderListContent>
                            <Link
                                to="/javascript"
                                onClick={() => common.setType("javascript")}
                            >
                                JavaScript
                            </Link>
                        </HeaderListContent>
                        <HeaderListContent>
                            <Link
                                to="/react"
                                onClick={() => common.setType("react")}
                            >
                                React
                            </Link>
                        </HeaderListContent>
                        <HeaderListContent>
                            <Link
                                to="/vue"
                                onClick={() => common.setType("vue")}
                            >
                                Vue
                            </Link>
                        </HeaderListContent>
                    </HeaderListBox>
                </HeaderContainer>
            </HeaderWrapper>
        </React.Fragment>
    );
};

const HeaderWrapper = styled.div`
    width: 100%;
    border-bottom: 0.2rem solid #ffffff;
    height: 6rem;
    position: fixed;
    top: 0;
    background: #4775bf;
    z-index: 99999;
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    font-size: 2rem;
    color: #161616;
`;

const HeaderListBox = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`;

const HeaderListContent = styled.li`
    margin: 0 1rem;
    padding: 0 1rem;
    border-left: 0.1rem solid #ffffff;
    border-right: 0.1rem solid #ffffff;
    &:last-child {
        margin-right: 5rem;
    }
`;

export default Header;
