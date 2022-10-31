import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FirstPageHeading = styled.h1`
  font-size: 1rem;
  color: black;
`;

export const HeadingWrapper = styled.div`
  padding: 1rem;
  background-color: 'white';
 
`;

export const DrugHeading= styled.h3`
`
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
  @media (max-width: 768px){
     width: 80%;
  }
  @media (max-width: 425px){
     width: 90%;
     font-size: 14px;
  }
`;
export const PlanText = styled.div`
  margin-left: 1rem; ;
`;
export const SecondWrapper = styled.div`
  padding: 1rem;
  @media (max-width: 425px){
     width: 90%;
     font-size: 14px;
  }
`;

export const Plan = styled.div`
  display: flex;
  padding: 1rem;
`;

export const SelectTag = styled.select`
`;

export const OptionTag = styled.option`
`;

export const DrugSearchWrapper = styled.div`
`;

export const BeginHeading = styled.p`
`;

export const SearchHeading = styled.h2`
`;

export const SearchBar = styled.div`
  padding: 1rem;
  position: relative;

`;
export const SearchInput = styled.input`
  width: 90%;
  margin: 0 auto;
  height: 3rem;
`;

export const SearchButton = styled.button`
  background-color: blue;
  color: white;
  border-radius: 20px;
  border: none;
  padding: 12px;
  width: 100px;
  position: absolute;
  right: 11%;
  top: 25px;
  @media (max-width: 425px) {
    width: 80px;
    right:12%;
  }
`;


export const DrugHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width:768px) {
    font-size: 10px;
  }
`;

export const Generic = styled.p`
  margin: 1rem;
  border: none;
  color: white;
  padding: 5px;
  font-size: 10px;
  background-color: #27039e;
 
`;

export const DrugContainer = styled.div`
  padding: 3rem 4rem;
  @media (max-width:768) {
    padding: 1rem 1rem;
  }
  @media (max-width:425px) {
    padding: 1rem 1rem;
  }
`;

export const DrugWrapper = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 4px 2px grey;
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 12px;
  }
  @media (max-width: 425px) {
    padding: 10px;
    font-size: 10px;
  }
`;

export const AlertMessages = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Img = styled.img`
  object-fit: contain;
`;

export const DrugDetailsWrapper = styled.div`
  display: flex;
`;

export const Alerts = styled.div`
  width: 65%;
  @media (max-width: 768px) {
    width: 50%;
    margin-right: 1rem;
  }
`;

export const AlertHeading= styled.h3`
font-size:12px ;
`
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 40%;
  background-color: whitesmoke;
  border-radius: 1rem;
  padding: 3rem;
  @media  (max-width: 768px){
    width:35%;
    padding: 2.5rem;
  }
  @media (max-width:425px ) {
    padding: 1rem;
  }
`

export const AlertText = styled.p`
  width: 85%;
`;

export const InputLabel = styled.h4`
  margin: 0;
`;

export const Note = styled.p`
  margin: 0;
`;

export const Count = styled.input`
  margin: 8px 0;
  width: 100%;
  border: 1px solid white;
  box-shadow: 1px 1px 2px 2px grey;
  padding: 10px;
  border-radius: 0.5rem;
  color: blue;
  @media (max-width:425px ) {
    width: 80%;
  }
`;

export const Select = styled.select`
  margin: 8px 0;
  width: 100%;
  border: 1px solid white;
  box-shadow: 1px 1px 2px 2px grey;
  padding: 10px;
  border-radius: 0.5rem;
`;

export const ButtonContent = styled.div`
  display: flex;
  gap: 6px;
  @media (max-width: 425px) {
    width: 90%;
    padding: 5px;
    justify-content: space-between;

   }
`;

export const Buttons = styled.button`
  width: 50%;
  margin: 8px 0;
  background-color: white;
  border: 1px solid white;
  box-shadow: 1px 1px 2px 2px grey;
  padding: 10px;
  border-radius: 0.5rem;
  &:hover{
    border: 1px solid blue;
  }
  @media (max-width: 425px) {
    
   padding: 5px;
   
  }
`;

export const Button = styled.button`
  background-color: blue;
  color: white;
  border: 1px solid blue;
  border-radius: 0.5rem;
  padding: 10px;
`;

export const GenericLink = styled(Link)`
  text-decoration: none;
  color: blue;
`;

export const Information = styled.div`
  padding-left: 4rem;
 @media (max-width:425px ) {
   font-size: 12px;
   padding-left: 2rem;
 }
`;
export const TherapyInfo = styled.p`
  width: 80%;
`;

