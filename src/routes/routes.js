import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../components/app_layout/home/home'
import About from '../components/app_layout/about/about'

function Routes(){

    return(<>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About}/>
    </>
    )
}

export default Routes
