import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from "react-redux";

const ToString = (props) => {

  return(
    <React.Fragment>
      <div className="description-box">
        <h4 className="title">String()</h4>

        <div className="explain-box">
          <span className="explain">
            파라미터 : 변환 대상opt
            <br />
            반환 : 변환한 값
          </span>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
const value = String(123);

console.log(value)
// 123
console.log(typeof value);
// string

console.log(typeof ("" + 123));
// string
              `}
            </code>
          </pre>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
const obj = new String(123);

console.log(typeof obj);
//object
              `}
            </code>
          </pre>
        </div>

        <h5 className="sub-title">valueOf()</h5>

        <div className="explain-box">
          <span className="explain">
            data : String 인스턴스, 문자
            <br />
            파라미터 : 사용하지 않음
            <br />
            반환 : 프리미티브 값
          </span>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
const value = new String(123);

console.log(value.valueOf());
// 123
              `}
            </code>
          </pre>
        </div>

        <div className="explain-box">
          <span className="explain">
            value는 String 인스턴스이고 파라미터 값 123이 String 인스턴스의 프리미티브 값으로 설정됨.
          </span>
        </div>

        <h5 className="sub-title">length 프로퍼티</h5>

        <div className="explain-box">
          <span className="explain">
            문자 수 반환
          </span>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
const value = "ABC";

console.log(value.length);
// 3
              `}
            </code>
          </pre>
        </div>

        <div className="w-full">
          <pre>
            <code>
              {`
const value = "ABC";

for (let k=0; k<value.length; k++) {
  console.log(value[k]);
}

// A
// B
// C
              `}
            </code>
          </pre>
        </div>

        <h5 className="sub-title">trim()</h5>

        <div className="explain-box">
          <span className="explain">
            data : 삭제 대상
            <br />
            파라미터 : 사용하지 않음
            <br />
            반환 : 삭제한 결과
            <br />
            문자열 앞뒤에 화이트 스페이스 삭제
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
)(ToString)
