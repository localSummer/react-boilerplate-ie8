/* eslint-disable react/jsx-filename-extension */
// We only need to import the modules necessary for initial render
import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router'
import App from '../components/App'
import Inbox from '../components/Inbox'
import Message from '../components/Message'
import Count from '../components/Count'
import Echarts from '../components/Echarts'
import Video from '../components/Video'
import Video2 from '../components/Video2'
import Video3 from '../components/Video3'
import Video4 from '../components/Video4'

const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Inbox} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
      <Route path="count" component={Count} />
      <Route path="chart" component={Echarts} />
      <Route path="video" component={Video} />
      <Route path="video2" component={Video2} />
      <Route path="video3" component={Video3} />
      <Route path="video4" component={Video4} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
)

export default Routes
