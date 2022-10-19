import { Link } from 'react-router-dom';
import { PharamacyDetails } from '../../../data/pharmaciesContent';
import { images } from '../../../resources/images';
import DisplayPharmacy from '../displayPharmacy/displayPharmacy';

import {
  PharmacyContainer,
  PharmacyWrapper,
  Heading,
  PharmacyName,
  PharmacyAdress,
  PharmacyContact,
  PhoneIcon,
  DistanceIcon,
  TypeContainer,
  TypeText,
  DisplayWrapper,
  WholePageWrapper,
  Links,
} from './availablePharmaciesStyle';

import { useState } from 'react';

//Functional Component for displaying AvailablePharmacies

const AvailablePharmacies: React.FC = (): JSX.Element => {
  const [click, setClick] = useState<boolean>();
  const handleSubmit = () => {
    setClick(true);
  };
  return (
    <>
      <WholePageWrapper>
        <PharmacyWrapper>
          <Heading>Available Pharmacies(48)</Heading>
          {PharamacyDetails.map((details: any, i: any) => {
            return (
              <Links state={{ id: i }} to={''}>
                <PharmacyContainer onClick={handleSubmit}>
                  <PharmacyName>{details.name}</PharmacyName>
                  <PharmacyAdress>{details.address}</PharmacyAdress>
                  <PharmacyContact>
                    <PhoneIcon src={images.telephone} />
                    {details.phoneNo} <DistanceIcon src={images.location} />{' '}
                    {details.distance}
                  </PharmacyContact>
                  <TypeContainer>
                    {details.type.map((content: any) => {
                      return <TypeText>{content}</TypeText>;
                    })}
                  </TypeContainer>
                </PharmacyContainer>
              </Links>
            );
          })}
        </PharmacyWrapper>
        <DisplayWrapper>{click && <DisplayPharmacy />}</DisplayWrapper>
      </WholePageWrapper>
    </>
  );
};

export default AvailablePharmacies;
