import {
    ContinueButton,
  CoverageHeading,
  CoverageSubHeading,
  CoverageWrapper,
  DrugHeading,
  FooterWrapper,
  HeadingWrapper,
  HomeIcon,
  Information,
  InputContainer,
  LocationIcon,
  PinCodeHeading,
  PinCodeWrapper,
  PinInput,
  
  TherapyInfo,
  WholeWrapper,
 
} from './searchProviderStyle';
import { images } from '../../../resources/images';

import content, { hydro } from '../../../resources/strings';
import Footer from '../../common/footer/footer';

const SearchProviderPage: React.FC = (): JSX.Element => {
  return (
    <>
      <WholeWrapper>
        <HeadingWrapper>
          <HomeIcon src={images.home} />
          <DrugHeading>{content.SearchDrugHeading}</DrugHeading>
        </HeadingWrapper>
        <CoverageWrapper>
          <CoverageSubHeading>{content.beginInfo}</CoverageSubHeading>
          <CoverageHeading>{content.coverageHeading}</CoverageHeading>
        </CoverageWrapper>
        <InputContainer>
          <PinCodeWrapper>
            <LocationIcon src={images.location}></LocationIcon>
            <PinCodeHeading>{content.pinHeading}</PinCodeHeading>
            <PinInput
              type="text"
              placeholder="Enter ZIP Code & Country"
            ></PinInput>
          </PinCodeWrapper>
          
          <ContinueButton>Continue</ContinueButton>
        </InputContainer>
        <Information>
        <h3>Important Information</h3>
        <TherapyInfo>{hydro.therapy}</TherapyInfo>
      </Information>
      </WholeWrapper>
      <FooterWrapper>
      <Footer/>
      </FooterWrapper>
    </>
  );
};

export default SearchProviderPage;
