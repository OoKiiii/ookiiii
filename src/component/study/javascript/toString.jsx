import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from "react-redux";

const NumberInstance = (props) => {

  return(
    <React.Fragment>
      <div className="description-box">
        <h4 className="title">toString()</h4>

        <div className="explain-box">
          <span className="explain">
            data : 변환 대상
            <br />
            파라미터 : 진수(2~36)opt, 디폴트 : 10진수
            <br />
            반환 : 변환한 값
            <br />
            *data를 string타입으로 변환
          </span>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
const value = 20;

console.log(20 === value.toString());

// 숫자 20과 문자열 20은 type이 다르기때문에 false

console.log(value.toString(16));

// 20을 16진수로 변환하면 14
              `}
            </code>
          </pre>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
// 유동 소수점 사용

console.log(20..toString());

// 1. 20.toString() 형태로 작성하면 에러가 발생. 20.으로 작성시 20.0으로 인식
// 하기 때문에 .이 없는 valuetoString()형태가 됨.
// 그렇기 때문에 위에 처럼 20..을 씀.
              `}
            </code>
          </pre>
        </div>

        <h5 className="sub-title">toLocalString()</h5>
        <div className="explain-box">
          <span className="explain">
            data : 변환 대상

            파라미터 : 사용X

            반환 : 변환한 값

            *ES5 : 파라미터 사용 불가

            *ES6 : 언어타입의 파라미터 사용 가능
          </span>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
const value = 1234.56

console.log(value.toLocalString());
//1,234.56

console.log(value.toLocalString('de-DE')); //독일
//1.234,56

console.log(value.toLocalString('zh-Hans-CN-u-nu-hanidec')); //중국
//一,二三四.五六
              `}
            </code>
          </pre>
        </div>

        <br />

        <div className="explain-box">
          <span className="explain">
            공부 사이트
            <br />
            <a href="https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88/dashboard" traget="_blank">
              https://www.inflearn.com/course/자바스크립트-비기너
            </a>
          </span>
        </div>
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
)(NumberInstance)
