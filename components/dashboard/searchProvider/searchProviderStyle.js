import styled from 'styled-components';

export const WholeWrapper=styled.div`
position: relative;
`

export const HeadingWrapper=styled.div`
display: flex;
padding: 1rem;
`

export const HomeIcon=styled.img`
width: 20px;
height: 18px;
padding: 1rem;
margin-top: 7px;
`

export const DrugHeading=styled.h3`
`

export const CoverageWrapper=styled.div`
background-color:#1e4ea1;
padding: 1rem;
color:white;
padding-bottom: 5rem;
`

export const CoverageSubHeading=styled.p`
`

export const CoverageHeading=styled.h1`
`

export const InputContainer=styled.div`
background-color:white;
padding: 1rem;
display: flex;
width: 85%;
justify-content:space-between;
border:1px solid black;
margin:0 auto;
border-radius:20px;
position:absolute;
top:250px;
right:90px;
@media (max-width:768px) {
    right: 70px;
}`

export const PinCodeWrapper=styled.div`
display: flex;
width: 25%;
flex-wrap: wrap;
@media (max-width: 768px) {
    width: 50%;
}
`

export const LocationIcon=styled.img`
width: 18px;
height: 20px;
margin: 1.5rem;
`

export const PinCodeHeading=styled.h4`
`

export const PinInput=styled.input`
padding: 10px;
border-radius: 10px;
width: 100%;
`




export const ContinueButton=styled.button`
background-color: #a1a1a1;
border: none;
padding: 1rem;
font-size: 1rem;
width: 20%;
height: 10%;
margin-top: 3%;
color: white;
border-radius: 10px;
@media (max-width:768px){
    width: 35%;
}
`

export const Information=styled.div`
position: absolute;
top:460px;
padding: 1rem;
width: 80%;
`

export const TherapyInfo=styled.p`
`
export const FooterWrapper=styled.div`
position: absolute;
top:600px;
@media (max-width: 768px){
    top:700px;
}`