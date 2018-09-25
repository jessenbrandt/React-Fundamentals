import React from 'react'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo'
import JSXRules from '../concepts/JSXRules'
import ClassComponentDemo from '../concepts/ClassComponentDemo'
import PropsDemo from '../concepts/PropsDemo'
// import LifeCycleCodepen from '../concepts/lifecyclecodepen'
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp'
import ReactConceptApp from '../apps/concept-list-app/ReactConceptApp'
import MovieSearchApp from '../apps/movie-search-app/MovieApp'
import NytApp from '../apps/nyt-app/NytApp'
import FriendListApp from '../apps/friend-list-app/FriendListApp'

const Sidebar = () => (

  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rationale">Rationale</Link></li>
        <li><Link to="/functionalcomponent">Functional Component</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/jsxrules">JSX Rules</Link></li>
        <li><Link to="/classcomponent">Class Component</Link></li>
        <li><Link to="/propsdemo">Props Demo</Link></li>
        <li><Link to="/timepiecesapp">Timers</Link></li>
        <li><Link to="/reactconceptlist">React Concepts Checklist</Link></li>
        <li><Link to="/movie">Movie Search App</Link></li>
        <li><Link to="/nytapp">NY Times App</Link></li>
        <li><Link to="/friendlistapp">Friend List</Link></li>

      </ul>
    </div>
    <div className="sidebar-route">
        <Switch>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/resources"><Resources /></Route>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
            <Route exact path="/jsxrules"><JSXRules /></Route>
            <Route exact path="/classcomponent"><ClassComponentDemo /></Route>
            <Route exact path="/propsdemo"><PropsDemo /></Route>
            <Route exact path="/timepiecesapp"><TimePiecesApp /></Route>
            <Route exact path="/reactconceptlist"><ReactConceptApp /></Route>
            <Route exact path="/movie"><MovieSearchApp /></Route>
            <Route exact path="/nytapp"><NytApp /></Route>
            <Route exact path="/friendlistapp"><FriendListApp /></Route>
        </Switch>
    </div>
  </div>

)

export default Sidebar;