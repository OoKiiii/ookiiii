import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from "react-redux";

const Etc2 = (props) => {

  return(
    <React.Fragment>
      <div className="description-box">
        <h4 className="title">AWS Amplify 도메인 연결</h4>

        <div className="explain-box">
          <span className="explain">
            예~전에 실패했던 도메인을 추가하기 위해서 다시 들어갔다가 오늘도 개고생을 했다.
            <br />
            SSL configration으로 피똥을 쌌었다.
            <br />
            알아보니.. Route53에서 문제가 생겼던 것과 ns서버 등록이 제대로 되어있지 않아서 였다.
            <br />
            <br />
            오류가 떴을 때
            <br />
            ns-***주소 4개를 도메인을 구매한 호스팅 사이트에 가서 네임서버에 등록을 해주고 돌아온 뒤
            <br />
            SSL configration 오류가 밑에 보면
            <br />
            <br />
            In order to verify domain ownership, configure the following CNAME record associated with your domain and verify that the CNAME record exists in your Domain Name Server (DNS) file.
            <br />
            라고 써져있다.
            <pre>
              <code>
                _32423442343423 CNAME 34234234234.aws234234234~~~~
              </code>
            </pre>
            <br />
            <br />
            1. Route53으로 가서 레코드 생성을 눌러 CNAME 기준 왼쪽에 있는 코드를 레코드 이름에 적어준다.
            <br />
            2. 유형을 CNAME으로 변경해준다.
            <br />
            3. CNAME 오른쪽에 있는 코드를 값/트래픽 라우팅 대상에 복붙해준다.
            <br />
            <br />
            나의 경우 예전에 삽질의 흔적으로 CNAME이 너무 많아서 얘가 혼란을 일으켜서 되지 않았던 것이다.
            <br />
            저 위에 있는 것 외에 CNAME이 있다면 저걸 제외하고 다 지워주도록 한다.
            <br />
            그리고 다시 페이지에 가면 이제 문구가 바뀌어 있다.
            <br />
            내용은 불라불라 8시간동안 안되면 깃헙 이슈에 문의를 남겨라.. 뭐 이런글이다.
            <br />
            그리고 조금 지나면 ACTIVE로 넘어간다.
            <br />
            여기서도 예전에 적어 뒀던게 아니라면 또 무언가 하라고 한다.
            <br />
            <br />
            왼쪽 위에 보면 작업 버튼이 있는데 이걸 클릭하면 첫번째는 비활성화 되어 있고 DNS 레코드 보기가 활성화 되어있다. 이곳을 클릭하면 1번의 방법과 2번의 방법이 있는데
            <br />
            나의 경우 2번으로 했다.
            <br />
            <br />
            위와 같은 방법으로 CNAME을 하나 더 적어준다.
            <br />
            그러면 몇 분뒤 끝!
            <br />
            <br />
            *원래는 저 작업 없이 도메인 영역 레코드에 A와 SOA만 있으면 알아서 다 등록을 해준다. 외적인 CNAME이나 필요없는 레코드가 있으면 저 과정을 해주어야 한다.
            <br />
            즉.. CNAME이 저게 맞는가? 아니면 수정해라 라고 하는 작업이다.
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
)(Etc2)
