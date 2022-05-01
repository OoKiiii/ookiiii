import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FixBackground from "../../assets/images/bg-fix.png";
import { useStoreCommon } from "../../store";
import SubNavList from "../../json/SubNavList.json";
import styled from "@emotion/styled";

const Navigation = () => {
    const [list, setList] = useState([]);
    const common = useStoreCommon((state) => state);

    const setData = () => {
        switch (common.isType) {
            case "":
                setList([]);
            case "html":
                setList(SubNavList.NavigationList.HTML);
                break;
            case "css":
                setList(SubNavList.NavigationList.CSS);
                break;
            case "javascript":
                setList(SubNavList.NavigationList.JavaScript);
                break;
            case "react":
                setList(SubNavList.NavigationList.React);
                break;
            case "vue":
                setList(SubNavList.NavigationList.Vue);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        setData();
    }, [common.isType]);

    return (
        <NavigationWrapper>
            <NavigationBox>
                <NavigationList>
                    {list.length > 0 &&
                        list.map((data, index) => {
                            return (
                                <li key={index}>
                                    <Link to={data.path}>{data.title}</Link>
                                </li>
                            );
                        })}
                </NavigationList>
            </NavigationBox>
            <NavigationImage
                src={FixBackground}
                className="img-navigation"
                alt="네비게이션 이미지"
            />
        </NavigationWrapper>
    );
};

const NavigationWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 30rem;
    height: 100vh;
    background: #4775bf;
    border-right: 0.1rem solid #ffffff;
    z-index: 999999;
    overflow-y: hidden;
`;

const NavigationBox = styled.div`
    height: 85rem;
    padding: 10rem 3rem;
`;

const NavigationList = styled.ul`
    height: 100%;
    overflow-y: scroll;
    li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 2rem 0;
        font-size: 1.6rem;
        cursor: pointer;
        #icon-arrow-right {
            background: #4775bf;
            margin-right: 2rem;
        }
        &:hover {
            #icon-arrow-right {
                fill: #ffffff;
            }
        }
    }
`;

const NavigationImage = styled.img`
    position: fixed;
    left: -2rem;
    bottom: -2rem;
    width: 30rem;
`;

export default Navigation;
