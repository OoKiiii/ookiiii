import React from "react";
import { Link } from "react-router-dom";

const NumberInstance = () => {
    return (
        <React.Fragment>
            <div className="description-box">
                <h4 className="title">Number 인스턴스</h4>

                <div className="explain-box">
                    <span className="explain">
                        contructor : 생성자
                        <br />
                        파라미터 : 값 option
                        <br />
                        반환 : 생성한 인스턴스
                    </span>
                </div>

                <div className="w-full">
                    <pre>
                        <code>
                            {`
const obj = new Number();
console.log(typeof obj);
              `}
                        </code>
                    </pre>
                </div>

                <div className="explain-box">
                    <span className="explain">
                        1. 빌트인 Number 오브젝트로 인스턴스를 생성하여 반환
                        <br />
                        2. 생성한 인스턴스 타입은 object
                    </span>
                </div>

                <div className="explain-box">
                    <span className="explain">
                        실행결과 :
                        <br />
                        object
                    </span>
                </div>

                <br />

                <div className="explain-box">
                    <span className="explain">
                        * 대문자 Object와 소문자 object 반드시 구분이 필요
                        <br />
                        new와 첫문자가 대문자 일 때 인스턴스를 생성하겠다는
                        의도가 내포되어 있음.
                    </span>
                </div>

                <div className="w-full">
                    <pre>
                        <code>
                            {`
const oneObj = new Number("123");
console.log(oneObj.valueOf());

const twoObj = new Number("456");
console.log(twoObj.valueOf());
              `}
                        </code>
                    </pre>
                </div>

                <div className="explain-box">
                    <span className="explain">
                        실행결과 :
                        <br />
                        123
                        <br />
                        456
                    </span>
                </div>

                <div className="explain-box">
                    <span className="explain">
                        new Numer() 를 사용하면 새로운 생성자 함수 Number를 생성
                        <br />
                        파라미터 : 값 option
                        <br />
                        반환 : 생성한 Number 인스턴스
                    </span>
                </div>

                <div className="w-full">
                    <pre>
                        <code>
                            {`
const obj = new Number("123");
console.log(obj.valueOf());
              `}
                        </code>
                    </pre>
                </div>

                <div className="explain-box">
                    <span className="explain">
                        1. 빌트인 Number 오브젝트로 인스턴스를 생성하여 반환.
                        <br />
                        2. 파라미터 값이 문자열이면 숫자로 변환하여
                        <br />
                        3. 생성한 인스턴스에 파라미터 값을 설정
                    </span>
                </div>

                <div className="explain-box">
                    <span className="explain">
                        실행 결과 :
                        <br />
                        123
                    </span>
                </div>

                <div className="explain-box">
                    <span className="explain">
                        * 인스턴스 생성 기준은 prototype을 기준으로 연결되어
                        있는 함수만 가지고 옴.
                    </span>
                </div>

                <br />

                <div className="explain-box">
                    <span className="explain">
                        공부 사이트
                        <br />
                        <a
                            href="https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88/dashboard"
                            traget="_blank"
                        >
                            https://www.inflearn.com/course/자바스크립트-비기너
                        </a>
                    </span>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NumberInstance;
