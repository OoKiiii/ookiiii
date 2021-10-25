import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from "react-redux";

const PrimitiveValue = (props) => {

  return(
    <React.Fragment>
      <div className="description-box">
        <h4 className="title">Primitive Valute</h4>

        <div className="explain-box">
          <span className="explain before-dot">
            언어에 있어 가장 낮은 단계의 값
          </span>
          <span className="explain before-dot">
            const book = "책"
          </span>
          <span className="explain">
            * 책은 이 이상 분해, 전개 불가
          </span>
        </div>

        <h5 className="sub-title">Primitive Type</h5>

        <div className="explain-box">
          <span className="explain before-dot">
            Number, String, Boolean: 인스턴스 생성 가능
          </span>
          <span className="explain before-dot">
            Null, Undefined: 인스턴스 생성 불가
          </span>
          <span className="explain before-dot">
            Object는 프리미티브 값을 제공하지 않음
          </span>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
const book = "책";
const point = 123;

//위가 프리미티브 값
              `}
            </code>
          </pre>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
const obj = { book: "책" };

//위의 값은 프리미티브 값이 아님.(전개가 가능)
              `}
            </code>
          </pre>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
const instance = new Number(456);

//인스턴스의 프리미티브 값 형태
//이름을 따로 정하지 않았기때문에 [[primitiveValue]]를 자바스크립트 자체에서 생성
              `}
            </code>
          </pre>
        </div>

        <br />

        <div className="w-full">
          <pre>
            <code>
              {`
const obj = new Number(123);
console.log(obj + 200)
              `}
            </code>
          </pre>
        </div>

        <div className="explain-box">
          <span className="explain">
            1. new Number(123)로 인스턴스를 생성하여 obj에 할당한 후 obj에 값을 더하면 값이 더해짐.
            <br />
            2. 원래대로라면 obj가 인스턴스 이기 때문에 안돼지만, 123을 인스턴스의 프리미티브 값으로 설정하기 때문에 가능.
          </span>
        </div>

        <br />

        <h5 className="sub-title">valueOf()</h5>

        <div className="explain-box">
          <span className="explain">
            data : Number 인스턴스, 숫자
            <br />
            파라미터 : 사용X
            <br />
            반환 : 프리미티브 값
          </span>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
const obj = new Number("123");
console.log(obj.valueOf())
              `}
            </code>
          </pre>
        </div>

        <div className="explain-box">
          <span className="explain">
            obj의 프리미티브 값을 반환
            <br />
            실행 결과 :
            <br />
            123
          </span>
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
)(PrimitiveValue)
