import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const OperatorStyle = styled.a`
text-align:center;
border:1px solid #0590ee;
border-radius:5px;
margin:5px;
`

const Operator = props => (
    <OperatorStyle href={props.name}>
     
        <h3 > 
            {props.name}
        </h3>
        
        <img src={props.logo}alt="logo" />
        {/* <Link href={`/name?name=${props.name}`}>
            <a>{props.name}</a>
        </Link> */}
    </OperatorStyle>

)

export default Operator