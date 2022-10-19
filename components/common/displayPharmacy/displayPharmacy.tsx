import { useLocation } from 'react-router';
import {
  PharamacyDetails,
  StandardShare,
} from '../../../data/pharmaciesContent';
import { images } from '../../../resources/images';
import { explain } from '../../../resources/strings';
import { TypeText } from '../availablePharmacies/availablePharmaciesStyle';
import {
  Name,
  Address,
  PharmacyContact,
  PhoneIcon,
  DistanceIcon,
  FacilitiesWrapper,
  ExtendedName,
  Tt,
  FirstWrapper,
  SecondWrapper,
  Timing,
  TtCount,
  Hr,
  TypeWrapper,
  TypeHeading,
  TypeContainer,
  PrefferedContainer,
  PrefferedHeading,
  PrefferedDrug,
  PrefferedDrugs,
  StandardContainer,
  StandardHeading,
} from './displayPharmacyStyle';

import { CostShare } from '../../../data/pharmaciesContent';

//Functional Component to display Pharmacy Details

const DisplayPharmacy: React.FC = (): JSX.Element => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      {PharamacyDetails.map((details: any, i: any) => {
        return (
          <>
            {state.id === details.id && (
              <>
                <Name key={i}>{details.name}</Name>
                <Address>{details.address}</Address>
                <PharmacyContact>
                  <PhoneIcon src={images.telephone} />
                  {details.phoneNo} <DistanceIcon src={images.location} />{' '}
                  {details.distance}
                </PharmacyContact>
                <FacilitiesWrapper>
                  <FirstWrapper>
                    <ExtendedName>{explain.extHours}</ExtendedName>
                    <Tt>{explain.tt}</Tt>
                  </FirstWrapper>
                  <SecondWrapper>
                    <Timing>{explain.time}</Timing>
                    <TtCount>{explain.ttCount}</TtCount>
                  </SecondWrapper>
                  <Hr />
                  <></>
                </FacilitiesWrapper>
                <TypeWrapper>
                  <TypeHeading>{explain.pharmType}</TypeHeading>
                  <TypeContainer>
                    {details.type.map((content: any) => {
                      return <TypeText>{content}</TypeText>;
                    })}
                  </TypeContainer>
                  <p>{explain.fillup}</p>
                  <p>{explain.pricing}</p>
                </TypeWrapper>
                <PrefferedContainer>
                  <PrefferedHeading>{explain.prefer}</PrefferedHeading>
                  <PrefferedDrugs>
                    {CostShare.map((drug, i) => {
                      return (
                        <>
                          <PrefferedDrug key={i}>{drug.name}</PrefferedDrug>
                        </>
                      );
                    })}
                  </PrefferedDrugs>
                </PrefferedContainer>
                <StandardContainer>
                  <StandardHeading>{explain.standard}</StandardHeading>
                  <PrefferedDrugs>
                    {StandardShare.map((drug,i) => {
                      return (
                        <>
                          <PrefferedDrug key={i}>{drug.name}</PrefferedDrug>
                        </>
                      );
                    })}
                  </PrefferedDrugs>
                </StandardContainer>
                <Hr />
                <p>{explain.dueDate}</p>
                <p>{explain.lastUpdate}</p>
                <Hr />
                <h3>{explain.importantinfo}</h3>
                <p>{explain.info}</p>
              </>
            )}
          </>
        );
      })}
    </>
  );
};

export default DisplayPharmacy;
