import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends Component {

  render() {
    return(
      <React.Fragment>
        <div className="introduce-box">
          <h4 className="title">INTRODUCE</h4>
          <div className="introduce">
            <div className="my-photo"></div>
            <div className="introduce-text">
              <ul>
                <li>웹퍼블리셔</li>
                <li>옥</li>
                <li>1995.09.19</li>
                <li>010-2510-4676</li>
                <li>okseongeun4@gmail.com</li>
                <li>html, css, js, react</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="portfolio-box">
          <div>
            <h4 className="title">PORTFOLIO</h4>
            <ul className="portfolio-list">
              <li>
                <div className="dis-flex-center">
                  <ul className="text-left">
                    <li className="explain">KT Paperless 개편 사이트</li>
                    <li className="explain">제작기간 : 3주</li>
                    <li className="explain">사용언어 : html, css(scss), js</li>
                    <li className="explain">최소한의 js를 사용</li>
                    <li className="explain"><a href="https://paperless.kt.com/main/welcome_new.htm" target="_blank">웹사이트 이동</a></li>
                  </ul>
                  <span className="portfolio-img"></span>
                </div>
              </li>
              <li>
                <div className="dis-flex-center">
                  <span className="portfolio-img"></span>
                  <ul className="text-right">
                    <li className="explain">KT Paperless 개편 사이트 (React version)</li>
                    <li className="explain">제작기간 : 제작중</li>
                    <li className="explain">사용언어 : React</li>
                  </ul>
                </div>
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
          <g id="Background">
            <path fill="#000000" d="M0 0h800v800H0z"/>
            <g id="stars" fill="#FFF">
              <circle opacity=".8" cx="50" cy="100" r="5"/>
              <circle opacity=".8" cx="50" cy="400" r="5"/>
              <circle opacity=".8" cx="150" cy="400" r="5"/>
              <circle opacity=".8" cx="150" cy="300" r="5"/>
              <circle opacity=".8" cx="250" cy="300" r="5"/>
              <circle opacity=".8" cx="250" cy="400" r="5"/>
              <circle opacity=".8" cx="350" cy="400" r="5"/>
              <circle opacity=".8" cx="350" cy="100" r="5"/>
              <circle opacity=".8" cx="250" cy="100" r="5"/>
              <circle opacity=".8" cx="250" cy="200" r="5"/>
              <circle opacity=".8" cx="150" cy="200" r="5"/>
              <circle opacity=".8" cx="150" cy="100" r="5"/>

              <path d="M50,100 V400z" stroke="white" stroke-width="1px" opacity=".5" className="ani-opacity-07"/>
              <path d="M50,400 H150z" stroke="white" stroke-width="1px" className="ani-opacity-15"/>
              <path d="M150,400 V300z" stroke="white" stroke-width="1px" className="ani-opacity-1"/>
              <path d="M150,300 H250z" stroke="white" stroke-width="1px" className="ani-opacity-15"/>
              <path d="M250,300 V400z" stroke="white" stroke-width="1px" className="ani-opacity-13"/>
              <path d="M250,400 H350z" stroke="white" stroke-width="1px" className="ani-opacity-07"/>
              <path d="M350,100 V400z" stroke="white" stroke-width="1px" className="ani-opacity-15"/>
              <path d="M250,100 H350z" stroke="white" stroke-width="1px" className="ani-opacity-18"/>
              <path d="M250,100 V200z" stroke="white" stroke-width="1px" className="ani-opacity-1"/>
              <path d="M150,200 H250z" stroke="white" stroke-width="1px" className="ani-opacity-07"/>
              <path d="M150,100 V200z" stroke="white" stroke-width="1px" className="ani-opacity-15"/>
              <path d="M50,100 H150z" stroke="white" stroke-width="1px" className="ani-opacity-13"/>

              <circle opacity=".5" cx="400" cy="100" r="5"/>
              <circle opacity=".5" cx="400" cy="400" r="5"/>
              <circle opacity=".5" cx="500" cy="400" r="5"/>
              <circle opacity=".5" cx="500" cy="300" r="5"/>
              <circle opacity=".5" cx="600" cy="400" r="5"/>
              <circle opacity=".5" cx="700" cy="400" r="5"/>
              <circle opacity=".5" cx="550" cy="250" r="5"/>
              <circle opacity=".5" cx="700" cy="100" r="5"/>
              <circle opacity=".5" cx="600" cy="100" r="5"/>
              <circle opacity=".5" cx="500" cy="200" r="5"/>
              <circle opacity=".5" cx="500" cy="100" r="5"/>

              <path d="M400,100 V400z" stroke="white" stroke-width="1px" className="ani-opacity-07"/>
              <path d="M400,400 H500z" stroke="white" stroke-width="1px" className="ani-opacity-15"/>
              <path d="M500,300 V400z" stroke="white" stroke-width="1px" className="ani-opacity-1"/>
              <path d="M500,300 L600,400z" stroke="white" stroke-width="1px" className="ani-opacity-15"/>
              <path d="M700,400 H600z" stroke="white" stroke-width="1px" className="ani-opacity-13"/>
              <path d="M700,400 L550,250z" stroke="white" stroke-width="1px" className="ani-opacity-07"/>
              <path d="M550,250 L700,100z" stroke="white" stroke-width="1px" className="ani-opacity-15"/>
              <path d="M600,100 H700z" stroke="white" stroke-width="1px" className="ani-opacity-18"/>
              <path d="M500,200 L600,100z" stroke="white" stroke-width="1px" className="ani-opacity-1"/>
              <path d="M500,100 V200z" stroke="white" stroke-width="1px" className="ani-opacity-07"/>
              <path d="M400,100 H500z" stroke="white" stroke-width="1px" className="ani-opacity-15"/>
              {/*<path d="M50,100 H150z" stroke="white" stroke-width="1px" className="ani-opacity-13"/>*/}

              {/*<path d="M 150 50 Q 150 550 150 550 L 300 550 L 300 350 L 400 350 L 400 550 L 550 550 L 550 50 L 400 50 L 400 250 L 300 250 L 300 50 L 150 50"/>*/}

            </g>
          </g>
        </svg>
      </React.Fragment>
    )
  }
}

export default Main