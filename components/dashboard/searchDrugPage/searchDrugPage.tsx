import content from '../../../resources/strings';
import {
  HeadingWrapper,
  FirstPageHeading,
  SearchWrapper,
  Coverage,
  FirstWrapper,
  PlanText,
  SecondWrapper,
  Plan,
  SelectTag,
  OptionTag,
  DrugSearchWrapper,
  BeginHeading,
  SearchHeading,
  SearchBar,
  SearchInput,
  SearchButton,
  AlertHeading,
  DrugContainer,
  DrugHeader,
  DrugDetailsWrapper,
  DrugHeading,
} from './searchDrugPageStyle';

import {
  Button,
  DrugWrapper,
  Generic,
  AlertMessages,
  Img,
  Alerts,
  Inputs,
  AlertText,
  InputLabel,
  Note,
  Count,
  Select,
  Buttons,
  ButtonContent,
  GenericLink,
  Information,
  TherapyInfo,
} from './searchDrugPageStyle';

import { hydro } from '../../../resources/strings';
import { images } from '../../../resources/images';
import { useEffect, useState } from 'react';
import Footer from '../../common/footer/footer';
import { drugNames } from '../../../data/drugContent';
import { mapDrugs } from '../../utils/mapDrugs';
import { DrugModel } from '../../../modals/drugModel';

//Functional Component for SearchDrugPage

const SearchDrugPage: React.FC = (): JSX.Element => {
  //DisplayItems function to display the Items

  const [drugData, setDrugData] = useState<DrugModel[] | null>(null);
  const [term, setTerm] = useState<string>('');

  useEffect(() => {
    const mappedDrugs = mapDrugs(drugNames);
    setDrugData(mappedDrugs);
  }, []);

  //Function which executes onChange event

  const displayItems = (searchTerm: string) => {
    if (drugData === null) {
      return;
    }
    setTerm(searchTerm);
  };

  if (drugData === null) {
    return <p>Loading</p>;
  }

  let allDrugData = drugData;

  //Condition to filter the drug data

  if (term != null) {
    const drugCopy = [...drugData];
    allDrugData = drugCopy.filter((drug) =>
      drug.name.toLowerCase().includes(term)
    );
  }

  return (
    <>
      <HeadingWrapper>
        <FirstPageHeading>{content.firstPageHeading}</FirstPageHeading>
      </HeadingWrapper>
      <SearchWrapper>
        <FirstWrapper>
          <Coverage>{content.coverage}</Coverage>
          <Plan>
            <PlanText>{content.planText}</PlanText>
            <SelectTag>
              <OptionTag value="current">Current Year</OptionTag>
              <OptionTag value="next">Next Year</OptionTag>
            </SelectTag>
          </Plan>
        </FirstWrapper>
        <SecondWrapper>
          <DrugSearchWrapper>
            <BeginHeading>{content.begin}</BeginHeading>
            <SearchHeading>{content.drugSearchHeading}</SearchHeading>
          </DrugSearchWrapper>
        </SecondWrapper>

        <SearchBar>
          <SearchInput
            type="text"
            onChange={(e: any) => displayItems(e.target.value)}
          ></SearchInput>
          <SearchButton>Search</SearchButton>
        </SearchBar>
      </SearchWrapper>

      {/* Mapping all the items from the allDrugData Object */}

      {allDrugData.map((drug, i: number) => {
        return (
          <>
            <DrugContainer key={i.toString}>
              <DrugWrapper>
                <DrugHeader>
                  <DrugHeading>{drug.name}</DrugHeading>
                  <Generic>GENERIC</Generic>
                </DrugHeader>
                <DrugDetailsWrapper>
                  <Alerts>
                    <AlertHeading>{hydro.alerts}</AlertHeading>
                    <AlertMessages>
                      <Img src={images.coin} alt="money" />
                      <AlertText>
                        {hydro.costSaving}
                        <GenericLink>{hydro.link}</GenericLink>
                      </AlertText>
                    </AlertMessages>
                    <AlertMessages>
                      <Img src={images.message} alt="tool" />
                      <AlertText>{hydro.therapy}</AlertText>
                    </AlertMessages>
                  </Alerts>
                  <Inputs>
                    <div>
                      <InputLabel>{hydro.quantity}</InputLabel>
                      <Count type="number" />
                    </div>

                    <div>
                      <InputLabel>{hydro.type}</InputLabel>
                      <ButtonContent>
                        <Buttons>Retail</Buttons>
                        <Buttons>Mail Order</Buttons>
                      </ButtonContent>
                    </div>

                    <div>
                      <InputLabel>{hydro.refill}</InputLabel>
                      <Select>
                        <option>Every 1 month</option>
                        <option>Every 3 month</option>
                        <option>Every 6 month</option>
                        <option>Every 1 year</option>
                      </Select>
                    </div>

                    <div>
                      <Note>{hydro.note}</Note>
                      <Note>{hydro.availability}</Note>
                      <Note>{hydro.date}</Note>
                    </div>

                    <Button>Add Drug to List</Button>
                  </Inputs>
                </DrugDetailsWrapper>
              </DrugWrapper>
            </DrugContainer>
          </>
        );
      })}
      <Information>
        <h3>Important Information</h3>
        <TherapyInfo>{hydro.therapy}</TherapyInfo>
      </Information>
      <Footer />
    </>
  );
};

export default SearchDrugPage;
