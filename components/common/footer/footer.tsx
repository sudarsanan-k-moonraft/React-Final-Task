import {
  FooterContainer,
  FooterHeading,
  FooterContent,
  FooterContentHeading,
  FooterText,
  FooterSecondText,
} from './footerStyle';

import content from '../../../resources/strings';

//Functional Component to display Footer

const Footer: React.FC = (): JSX.Element => {
  return (
    <>
      <FooterContainer>
        <FooterHeading> {content.footerHeading} </FooterHeading> <hr />
        <FooterContent>
          <FooterContentHeading>
            {content.footerContentHeading}
          </FooterContentHeading>
          <FooterText>{content.footerText}</FooterText>
          <FooterSecondText>{content.footerSecondText}</FooterSecondText>
        </FooterContent>
      </FooterContainer>
    </>
  );
};

export default Footer;
