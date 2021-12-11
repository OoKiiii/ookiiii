import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

const ReduxPersist = (props) => {

  return(
    <React.Fragment>
      <div className="description-box">
        <h4 className="title">Jest에서 사용하는 Methods 정리</h4>

        <span className="explain-box">
          <span className="explain">
            expect(비교하고자 하는 값).method(내가 생각하는 값(기댓값))
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .not : 반대되는 걸 구할 때 사용
            <br />
            Ex) expect(container).not.toBeCalled() : 한번도 호출된 적이 없으면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBe : 비교값과 기댓값이 같으면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeCalled : 한번이라도 호출된 적이 있으면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeCalledWith(param) : param을 가진 함수가 한번이라도 호출된 적이 있으면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeCalledTimes(param) : param(number)만큼(횟수) 호출되면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .lastCalledWith() : 마지막으로 호출된 함수가 맞으면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .nthCalledWith(nthCall, arg1, …) : n번째 함수가 호출되면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toReturn() : 한번 이상 함수가 오류이상 없이 통과 되었다면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toReturnedTimes(number) : 함수가 number 만큼(횟수) 통과 되었으면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toReturnWith(value) : mock 함수의 리턴 된 value가 같으면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .lastReturnedWith(value) : mock 함수가 마지막으로 호출 됐을 때 리턴 값과 기댓값이 같으면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .nthReturnedWith(nthCall, value) : mock 함수가 n번째 호출 됐을 때 리턴값이 value(기댓값)와 맞으면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toHaveLength : 비교값의 length가 맞으면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toHaveProperty(keyPath, value?) : 비교하고자 하는 요소에 keyPath의 값이 value가 맞으면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeCloseTo(number, numDigits?) : 소수점 숫자를 비교
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeDefined() : 변수가 선언되지 않았으면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeFalsy() : boolean 값이 false 일 때 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeTruthy() : boolean 값이 true면 통과
            <br />
            총 6개의 falsy가 있음(false, '', 0, null, undefined, NaN). 이외의 모든 것은 true
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeGreaterThan(number | bigint) : 비교값 &lt; 기댓값이면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeGreaterThanOrEqual(number | bigint) : 비교값 &lt;= 기댓값이면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeLessThan(number | bigint) : 비교값 &gt; 기댓값이면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeInstanceOf(Class) : 객체가 class이면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeNull() : null이면 통과
            <br />
            .toBe(null)과 동일하지만 에러메세지가 조금 더 디테일 함.
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeUndefined() : undefined 일 때 통과
            <br />
            .toBe(undefined)와 동일
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeNaN() : NaN 일 때 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeContain() : 비교하고자 하는 것이 배열안에 있으면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toContainEqual(item) : 특정 구조와 값을 가진 항목이 배열에 포함되어 있으면 통과
          </span>
        </span>

        <span className="explain-box">
          <span className="explain">
            .toBeEqual(item) : 객체 인스턴스의 모든 속성이 동일하면 통과 (=== 보다 엄격)
          </span>
        </span>

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
)(ReduxPersist)
