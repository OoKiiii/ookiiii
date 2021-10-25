import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from "react-redux";

const EtcMain = (props) => {

  return(
    <React.Fragment>
      <div className="description-box">
        <h4 className="title">IntelliJ 사용기</h4>

        <div className="explain-box">
          <span className="explain">
            내가 여태까지 사용했던 툴들...
            <br />
            HTML : bucket?(이름이 기억안난다..모르겠다..) → atom → VSC → WebStorm
            <br />
            JAVA : 이클립스 → IntelliJ
            <br />
            지금은 IntelliJ만 사용
            <br />
            <br />
            회사에 입사하자마자 웹사이트 유지보수를 하게 되었는데 이클립스를 사용해서 tomcat을 돌려 서버를 열고 작업을 해야했었다.
            <br />
            <br />
            이클립스도 처음이었고 tomcat이라는 것도 처음이었다. 여차저차해서 서버를 열고 작업을 했었다.
            <br />
            처음 이클립스를 봤을 때 일단 UI가 괭장히 구려보였다.
            <br />
            그때는 이런 JAVA IDE가 처음이었기에 "이클립스가 좋고 이런 프로젝트는 로딩이 오래걸리는 거구나..."라는 생각을 했었다.
            <br />
            <br />
            그런생각을 하고 있던 중 회사에 계시던 프리랜서 분이 IntelliJ툴을 사용하고 있었다.
            <br />
            IntelliJ에 대해서 여러방면으로 찾아보던중 같은 회사에 만든 WebStorm이라는 툴이 있길래 사용하게 되었고 아주 마음에 들었다.
            <br />
            (맥 기준 한글을 쓰면 씹히는 현상이 있기는 하다.)
            <br />
            <br />
            그렇게 이클립스와 WebStrom을 병행해서 작업을 진행했었다.
            <br />
            시간이 흐르고 회사에서 React 프로젝트를 진행하게 되었다.
            <br />
            프로젝트 진행 초반까지만 해도 이클립스를 사용하고 있었는데 주변에 있는 사람들이 IntelliJ가 좋다며 추천을 해주었다.
            <br />
            먼저 체험판을 사용해보고 마음에 들면 구입을 하기로 했다.
            <br />
            <br />
            그렇게 IntelliJ를 설치해보고 뽕을 맞은 것이다.
            <br />
            <br />
            이클립스와는 전혀 다른 속도와 UI가 정말 마음에 들었다.
            <br />
            그리고 기본적인 기능들이 이미 plugin으로 설치되어서 특별히 더 설치해야 되는게 없다는 점까지 정말 마음에 들었다.
            <br />
            <br />
            처음에는 이클립스와 많이 달라서 오류가 뜨면 여기저기 물어보러 다니고 인터넷 검색을 하기 바빴지만 지금은 간단 오류들 정도는 고치고 서버를 열고 작업까지도 가능하게 되었다.
            <br />
            <br />
            그래도 아직 JAVA 코드 자체를 고쳐가면서 작업하는건 어렵다...
            <br />
            <br />
            그래도 나는 아주 만족하며 Jetbrain사의 툴을 사용하고 있다.
            <br />
            한글이 씹히는 현상은 시간이 지나면 자연스럽게 익숙해진다.
            <br />
            지금은 전혀 신경을 쓰지않는다.
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
)(EtcMain)
