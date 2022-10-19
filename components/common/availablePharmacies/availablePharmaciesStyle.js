import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const PharmacyContainer = styled.div`
border-top: 1px solid #eeeeee;
padding:1rem;
&:hover{
    border-left: 3px solid blue;
}
`

export const PharmacyWrapper = styled.div`
margin: 2rem;
width: 30%;
border: 1px solid #eeeeee;
box-shadow: 0.5px 0.5px 10px  black;
@media (max-width: 768px) {
    width: 50%;
}
`

export const Heading= styled.h2`
margin: 1rem;
@media (max-width: 768px) {
    font-size: 14px;
}
`
export const PharmacyName= styled.h4`

`
export const PharmacyAdress= styled.p`
`

export const PharmacyContact= styled.p`
`

export const PhoneIcon=styled.img`
width:15px;
margin-right: 10px;

`



export const DistanceIcon=styled.img`
width: 15px;
margin-right: 5px;
margin-left: 10px;
`

export const TypeContainer= styled.div`
display: flex;

`

export const TypeText=styled.p`
font-size: 10px;
background-color:#eeeeee;
padding:5px;
width:25%;
margin:10px;
@media (max-width: 768px) {
    font-size: 9px;
}`

export const DisplayWrapper=styled.div`
width: 60%;
@media (max-width:768px ){
    width: 40%;
}

margin-top: 1rem;

`
export const WholePageWrapper=styled.div`
display:flex;
width:100%;
@media (max-width: 768px) {
    font-size: 12px;
}`

export const Links= styled(Link)`
text-decoration:none;
color:black`