import React, {Component} from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.span `
display:flex;
width: 100%;
background-color: #0590ee;
justify-content:center

`

const HeadlineStyle = styled.a `
padding: 2em ;
text-align:center;
&:visited {
  color:white
}
`
const LogoStyle = styled.a `
margin:0;
padding:0;
border:
`


class Header extends Component{
  render(){
  return(
      <HeaderStyle>
        <LogoStyle id="logo" href='https://bravedevelopers.com/'>
          <img src="https://static.tildacdn.com/tild6238-6163-4237-a333-316364323565/Logo_Brave_Developer.svg" alt="logo" />
          </LogoStyle>
        <HeadlineStyle href="/about">    
          ТЕСТОВЫЙ ПРОЕКТ ДЛЯ BRAVEDEVELOPERS
        </HeadlineStyle>
        </HeaderStyle>
   )
  }
}

export default Header