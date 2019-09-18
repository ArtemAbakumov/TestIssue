import React, {Component} from 'react';
import styled from 'styled-components'
import Header from '../components/Header/Header'

import Operators from '../components/OperatorsPage/Operators'

const LayoutStyle = styled.div `
`


class Layout extends Component{
    render(){
        return(
            <LayoutStyle>
                <Header />
                <Operators />
            </LayoutStyle>
        )
    }
}

export default Layout