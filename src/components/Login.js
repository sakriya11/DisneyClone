import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
         
                <Group>
                    <LogoOne src="/disney/images/cta-logo-one.svg"/>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        You can get it freee beacuse its covid bruh
                    </Description>
                    <LogoTwo src="/disney/images/cta-logo-two.png"/>
                </Group>
         
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    z-index: -1;
    display: flex;
    justify-content: center;
    align-item: top;
 

 

    &:before {
        background-image: url("/disney/images/login-background.jpg");
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // opacity: 0.7;
        z-index: -1;
        
      
      }
`



const Group = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 45px
    align-item: center;
   

`

const LogoOne = styled.img`

`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5px;
    margin-bottom: 15px;
`

const LogoTwo = styled.img`
  width: 90%;

`
