import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from "react-redux";

const ToExponential = (props) => {

  return(
    <React.Fragment>
      <div className="description-box">
        <h4 className="title">toExponential()</h4>

        <div className="explain-box">
          <span className="explain">
            data : 변환 대상
            <br />
            파라미터 : 소수 이하 자릿수(0~20)
            <br />
            반환 : 변환한 값
          </span>
        </div>

        <div className="explain-box">
          <span className="explain">
            숫자를 지수 표기로 변환하여 문자열로 반환
          </span>
          <span className="explain before-dot">
            파라미터에 소수 이하 자릿수 작성, 0~20까지
          </span>
        </div>

        <div className="explain-box">
          <span className="explain">표시방법</span>
          <span className="explain before-dot">
            변환 대상의 첫 자리만 소수점(.) 앞에 표시
          </span>
          <span className="explain before-dot">
            나머지는 소수 아래 표시
          </span>
          <span className="explain before-dot">
            지수(e+) 다음에 정수에서 소수로 변환된 자릿수 표시
          </span>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
const value = 1234;
console.log(value.toExponential());

//1.234e+3

//파라미터의 값을 작성하지 않아 1을 소수점 앞에 표시하고 234가 3자리 이므로 3이 표시
              `}
            </code>
          </pre>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
const value = 123456;
console.log(value.toExponential(3));

// 1.235e+5

// 파라미터 값을 3으로 주었기 때문에 3자리만 표시를 하고 4번째의 숫자에 따라 반올림을 하여 표시를 한다.
// 1.23456에서 4번째에 5가 있기 때문에 반올림을 해서 1.235로 표시.
              `}
            </code>
          </pre>
        </div>

        <h5 className="sub-title">toFixed()</h5>

        <div className="explain-box">
          <span className="explain">
            data : 변환 대상
            <br />
            파라미터 : 변환할 소수 이하 자릿수
            <br />
            변환 : 변환한 값
          </span>
        </div>

        <div className="explain-box">
          <span className="explain">
            고정 소숫점 표기로 변환하여 문자열로 반환
          </span>
          <span className="explain before-dot">
            파라미터에서 소수 이하 자릿수 작성, 0~20까지
          </span>
        </div>

        <div className="explain-box">
          <span className="explain">
            표시방법
          </span>
          <span className="explain before-dot">
            파라미터 값보다 소수 자릿수가 길면 작성한 자릿수에 1을 더한 위치에서 반올림
          </span>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
const value = 1234.567;

console.log(value.toFixed(2));

// 1234.57

// 파라미터에 2를 작성했으므로 소수 두째자리까지 표기, 셋째 자리에서 반올림

console.log(value.toFixed());

// 1235

// 파리미터값을 작성하지 않으면 0으로 간주, 소수 첫째자리에서 반올림하여 정수값을 표시
              `}
            </code>
          </pre>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
const value = 1234.567;

console.log(value.toFixed(5));

// 1234.56700

// 변환 대상 값보다 파라미터값이 크면 0으로 표시
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
)(ToExponential)
