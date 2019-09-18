import React, {Component} from 'react'
import styled from 'styled-components'
import Operator from './Operator'
import MTS from '../../static/MTS.png'
import BeeLine from '../../static/BeeLine.png'
import MegaFon from '../../static/MegaFon.png'
import Tele2 from '../../static/Tele2.png'



const OperatorsStyle = styled.span`
padding:20px;
margin:0 20px;
display:flex;
flex-wrap:wrap;
justify-content:center;
flex-grow:1;
border:2px solid #0590ee;
border-radius:5px;
box-sizing:border-box
`
const Headline = styled.h1 `
margin:50px;
text-align:center
` 

class Operators extends Component {
    state={
        operators:[
            {
                name:'MTS',
                link:"/MTS",
                logo: MTS
            },
            {
                name:'BeeLine',
                link:"/BeeLine",
                logo: BeeLine
                },
            {
                name:'Tele2',
                link:"/Tele2",
                logo: Tele2
                },
            {
                name:'Megafon',
                link:"/Megafon",
                logo: MegaFon
            }
        ]
    }
// changeNameHandler = ()=> {
//     console.log('Element clicked')
// }
    
    render(){
        
        const operators= this.state.operators
        
        return(
            
            <Headline>
                Выберите оператора
            
            <OperatorsStyle>
                {/* <button onClick = {this.changeNameHandler}>Hello</button> */}
                <Operator name={operators[0].name} link={operators[0].link} logo={operators[0].logo} /> 
                <Operator name={operators[1].name} link={operators[1].link} logo={operators[1].logo} /> 
                <Operator name={operators[2].name} link={operators[2].link} logo={operators[2].logo} /> 
                <Operator name={operators[3].name} link={operators[3].link} logo={operators[3].logo} /> 
                
            </OperatorsStyle>
            
            </Headline>
        )
    }
}

export default Operators