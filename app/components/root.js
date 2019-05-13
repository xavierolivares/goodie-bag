import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
//Browser Router and Hash Router has a display change
import CandyList from './CandyList'

const Root = () => {
  // console.log('this is props', candies)
  return (
    <BrowserRouter>
    <div>
      <nav>
        <Link to="/">Go home</Link>
        <Link to="/candies">Candies</Link>
        Goodie Bag
      </nav>
      <main>
      {/* <Switch>
  <Route exact path="/" render= {() => (<h1>Welcome to the Goodie Bag!</h1>) } />
 <Route exact path="/candies" component={CandyList} />
 <Route exact path="/" render= {() => (<p>What a nice home page for your goodies!</p>)} />
      </Switch> */}
      <CandyList />
      </main>
    </div>
    </BrowserRouter>
  )
}

// this is not needed
// const mapStateToProps = (state) => ({
//   candies: state.candies
// })

export default Root
