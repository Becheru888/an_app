import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

function Nav() {

    return (<> 
    
    <Link to={'/'}>Home</Link>
    <Link to={'/services'}>Services</Link>
    <Link to={'/product'}>Product</Link>
    <Link to={'/about'}>About</Link>
    <Link to={'/contact'}>Contact</Link>

    </>)
}

export default Nav