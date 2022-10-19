import { explain } from '../../../resources/strings';
import {
  HeadingWrapper,
  FirstPageHeading,
  SearchWrapper,
  FirstWrapper,
  Coverage,
  Plan,
  PlanText,
  SelectTag,
  OptionTag,
  SecondWrapper,
  DrugSearchWrapper,
  BeginHeading,
  SearchHeading,
  Heading,
  Input,
  InputType,
  Inputs,
  Select,
  Choose,
  Cost,
  Button,
  PharmacyCount,
} from './searchPharmacyStyle';

import Footer from '../../common/footer/footer';
import content from '../../../resources/strings';

import AvailablePharmacies from '../../common/availablePharmacies/availablePharmacies';

import { pharmacy } from '../../../resources/strings';

//Functional Component for SearchPharmacyPage

const SearchPharmacyPage: React.FC = (): JSX.Element => {
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
            <SearchHeading>{content.SearchPharmacyHeading}</SearchHeading>
          </DrugSearchWrapper>
        </SecondWrapper>
        <Heading>
          <Input>
            <InputType>
              <label htmlFor="pharmacyName">{pharmacy.name}</label>
              <Inputs type="text" name="name" id="pharmacyName" />
            </InputType>
            <InputType>
              <label htmlFor="radius">{pharmacy.radius}</label>
              <Select id="radius">
                <option value="1">1 Mile</option>
                <option value="2">2 Mile</option>
                <option value="3">3 Mile</option>
                <option value="4">4 Mile</option>
                <option value="5">5 Mile</option>
              </Select>
            </InputType>
            <InputType>
              <label htmlFor="type">{pharmacy.pharmtype}</label>
              <Select id="type">
                <option value="all">All</option>
                <option value="hospital">Hospital</option>
                <option value="clinical">Clinical</option>
                <option value="consulting">Consulting</option>
                <option value="industrial">Industrial</option>
              </Select>
            </InputType>

            <InputType>
              <label>{pharmacy.hours}</label>
              <Choose>
                <input
                  type="checkbox"
                  name="hours"
                  id="hours"
                  value="24 hours"
                />
                <label htmlFor="hours">24-Hour Pharmacy</label>
              </Choose>
            </InputType>
            <InputType>
              <label>{pharmacy.cost}</label>
              <Cost>
                <Choose>
                  <input type="radio" name="cost" id="all" value="all" />
                  <label htmlFor="all">All</label>
                </Choose>

                <Choose>
                  <input
                    type="radio"
                    name="cost"
                    id="standard"
                    value="standard"
                  />
                  <label htmlFor="standard">Standard Cost Share</label>
                </Choose>

                <Choose>
                  <input
                    type="radio"
                    name="cost"
                    id="preferred"
                    value="preferred"
                  />
                  <label htmlFor="preferred">Preferred Cost Share</label>
                </Choose>
              </Cost>
            </InputType>

            <Button>{pharmacy.buttontext}</Button>
          </Input>
          <PharmacyCount>{pharmacy.pharmacyCount}</PharmacyCount>
        </Heading>
      </SearchWrapper>
      <AvailablePharmacies/>
      <Footer/>
   </>
  );
};

export default SearchPharmacyPage;
