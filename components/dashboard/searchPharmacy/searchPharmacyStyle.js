import styled from 'styled-components';

export const FirstPageHeading = styled.h1`
  font-size: 1rem;
  color: black;
`;

export const HeadingWrapper = styled.div`
  padding: 1rem;
  background-color: 'white';
`;

export const SearchWrapper = styled.div`
  background-color: #1a4a9d;
  color: white;
`;
export const Coverage = styled.p`
  font-size: 1rem;
`;

export const FirstWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 1rem;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
export const PlanText = styled.div`
  margin-left: 1rem; ;
`;
export const SecondWrapper = styled.div`
  padding: 1rem;
`;

export const Plan = styled.div`
  display: flex;
  padding: 1rem;
`;

export const SelectTag = styled.select``;

export const OptionTag = styled.option``;


export const DrugSearchWrapper = styled.div``;
export const BeginHeading = styled.p``;

export const SearchHeading = styled.h2``;



export const Heading = styled.div`
width: 95%;
`

export const Input = styled.div`
display:grid;
grid-template-columns:35% 35% 35%;
margin:0 1rem;
row-gap:1.5rem;
background-color:white;
color:black;
padding:1rem;
border-radius:6px;
@media (max-width: 768px) {
  width: 90%;
}`

export const InputType = styled.div`
display:flex;
flex-direction:column;
row-gap:4px;`

export const Inputs = styled.input`
width:60%;
`
export const Select = styled.select`
width:60%;
`
export const Choose = styled.div`
display:flex;
align-items:center;
column-gap:5px;
`
export const Cost = styled.div`
display:flex;
flex-wrap:wrap;`

export const Button = styled.button`
width: 50%;
margin-left:10%;
height: 40px;
background-color: rgb(33,101,219);
padding: 1%;
border-radius: 6px;
border-color: rgb(33,101,219);
color:white`

export const Blue = styled.p`
background-color:red;`

export const Box = styled.div`
background-color:white;
margin:0;`

export const PharmacyCount = styled.p`
margin:0;
padding:1rem 4rem;
color:white;`

export const Invalid = styled.h1`
text-align:center;`