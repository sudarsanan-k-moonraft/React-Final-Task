import styled from 'styled-components';

export const FirstPageHeading = styled.h1`
  font-size: 1rem;
  color: white;
`;

export const HeadingWrapper = styled.div`
  padding: 1rem;
  background-color: #4c5c7a;
`;

export const SearchContainer = styled.div`
  background-color: #4f6a99;
  padding: 1rem;
`;

export const SearchQuestion = styled.h1`
  padding: 1rem;
  color: white;
  font-size: 1rem;
`;

export const DoctorContainer = styled.div`
  background-color: white;
  width: 40%;
  margin: 1rem;
  padding: 1rem;
  border-radius: 20px;
`;

export const DoctorHeading = styled.h1`
  font-size: 1rem;
  text-align: center;
`;

export const DoctorContent = styled.p`
  font-size: 12px;
  text-align: center;
`;

export const SearchButton = styled.button`
  padding: 5px;
  background-color: #1c60d6;
  border: none;
  border-radius: 10px;
  color: white;
  &:hover{
    cursor: pointer;
  }
`;

export const DrugContainer = styled.div`
  background-color: white;
  width: 40%;
  margin: 1rem;
  padding: 1rem;
  border-radius: 20px;
`;

export const DrugHeading = styled.h1`
  font-size: 1rem;
  text-align: center;
`;

export const DrugContent = styled.div`
  font-size: 12px;
  text-align: center;
  padding-bottom: 1rem;
`;

export const ContainerWrapper = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

