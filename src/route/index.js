import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import history from './history'

////////// defalut //////////
import Header from '../component/default/Header'
import Footer from '../component/default/Footer'
import DefaultLayout from "../layout/DefaultLayout";
import SubLayout from "../layout/SubLayout";

////////// component //////////
import Index from '../component/Index'
import Portfolio from '../component/Portfolio'
import Animation from '../component/item/Animation'
import QnA from '../component/qna/QnA'
import Introduce from '../component/IntroduceBox'

////////// html //////////
import HTMLMain from '../component/study/html'
import HTML1 from '../component/study/html/html'

////////// css //////////
import CssMain from '../component/study/css'
import MediaQuery from '../component/study/css/MediaQuery'

////////// javascript //////////
import JavaScriptMain from '../component/study/javascript'

////////// react //////////
import ReactMain from '../component/study/react'
import ReduxPersist from '../component/study/react/ReduxPersist'

////////// vue //////////
import VueMain from '../component/study/vue'

////////// react-native //////////
import ReactNativeMain from '../component/study/react-native'

const Routes = ({ auth }) => {
  return (

    <Router
      history={history}
    >

      <Route exact path={[
        '/MoPE-hub',
        '/MoPE-hub/intro',
        '/MoPE-hub/portfolio',
        '/MoPE-hub/util',
        '/MoPE-hub/qna'
      ]}>
        <DefaultLayout>
          <Switch>

            <Route exact path="/MoPE-hub" component={Index} />
            <Route exact path="/MoPE-hub/intro" component={Introduce} />
            {/*<Route exact path="/" component={Login} />*/}
            <Route exact path="/MoPE-hub/portfolio" component={Portfolio} />
            <Route exact path="/MoPE-hub/util" component={Animation} />
            <Route exact path="/MoPE-hub/qna" component={QnA} />
          </Switch>
        </DefaultLayout>
      </Route>

      {/*<Footer />*/}

      <Route path={[
        '/MoPE-hub/html',
        '/MoPE-hub/css',
        '/MoPE-hub/javascript',
        '/MoPE-hub/react',
        '/MoPE-hub/vue',
        '/MoPE-hub/react-native',

        // HTML
        '/MoPE-hub/html/1',

        // CSS
        '/MoPE-hub/css/1',

        // JavaScript

        // React
        '/MoPE-hub/react/1',

        // Vue

        // React-Native

      ]}>
        <SubLayout>
          <Switch>

            <Route exact path="/MoPE-hub/html" component={HTMLMain} />
            <Route exact path="/MoPE-hub/css" component={CssMain} />
            <Route exact path="/MoPE-hub/javascript" component={JavaScriptMain} />
            <Route exact path="/MoPE-hub/react" component={ReactMain} />
            <Route exact path="/MoPE-hub/vue" component={VueMain} />
            <Route exact path="/MoPE-hub/react-native" component={ReactNativeMain} />

            {/* HTML */}
            <Route exact path="/MoPE-hub/html/1" component={HTML1} />

            {/* CSS */}
            <Route exact path="/MoPE-hub/css/1" component={MediaQuery} />

            {/* JavaScript */}

            {/* React */}

            <Route exact path="/MoPE-hub/react/1" component={ReduxPersist} />

            {/* Vue */}

            {/* React-Native */}

          </Switch>
        </SubLayout>
      </Route>

    </Router>



  )
}

const mapStateToProps = state => ({
  auth: state.auth,
})

// export default withRouter(Routes)

export default Routes
