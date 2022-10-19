import React from 'react';
import content from '../../../resources/strings';
import {
  FirstPageHeading,
  HeadingWrapper,
  SearchContainer,
  SearchQuestion,
  DoctorContainer,
  DoctorHeading,
  DoctorContent,
  SearchButton,
  DrugContainer,
  DrugHeading,
  DrugContent,
  ContainerWrapper,
  ButtonWrapper,
} from './firstPageStyle';
import { Link } from 'react-router-dom';
import Footer from '../../common/footer/footer';

//Functional Component for First Page

const FirstPage: React.FC = (): JSX.Element => {
  return (
    <>
      <HeadingWrapper>
        <FirstPageHeading>{content.firstPageHeading}</FirstPageHeading>
      </HeadingWrapper>

      {/* Search Container Wrapper */}

      <SearchContainer>
        <SearchQuestion>{content.SearchFor}</SearchQuestion>
        <ContainerWrapper>
          {/* Doctor Container Wrapper */}

          <DoctorContainer>
            <DoctorHeading>{content.DoctorFacilities}</DoctorHeading>
            <DoctorContent>{content.DoctorContent}</DoctorContent>
            <Link to="/SearchProvider">
              <SearchButton> {content.SearchProviders}</SearchButton>
            </Link>
          </DoctorContainer>

          {/* Drug Container Wrapper */}

          <DrugContainer>
            <DrugHeading>{content.DrugFacilities}</DrugHeading>
            <DrugContent>{content.DoctorContent}</DrugContent>
            <ButtonWrapper>
              <Link to="/SearchDrug">
                <SearchButton onclick=""> {content.SearchDrugs}</SearchButton>
              </Link>
              <Link to="/SearchPharmacy">
                <SearchButton> {content.SearchPharmacy}</SearchButton>
              </Link>
            </ButtonWrapper>
          </DrugContainer>
        </ContainerWrapper>
      </SearchContainer>
      <Footer />
    </>
  );
};

export default FirstPage;
