import { Set } from "immutable";
import * as React from "react";
import { ControlLabel, FormGroup } from "react-bootstrap";
import { County } from "../State/County";
import { CountyCheckbox } from "./CountyCheckbox";

export interface ICountyFilterStateProps {
      counties: Set<County>;
      selectedCounties: Set<County>;
}

export interface ICountyFilterDispatchProps {
    deselectCounty(county: County): void;
    selectCounty(county: County): void;
}

export type CountyFilterProps = ICountyFilterStateProps & ICountyFilterDispatchProps;

export class CountyFilter extends React.Component<CountyFilterProps, {}>
{
  public constructor(props: CountyFilterProps)
  {
    super(props);
    this.onCountySelected = this.onCountySelected.bind(this);
    this.onCountyUnselected = this.onCountyUnselected.bind(this);
  }

  public render()
  {
    const checkboxes = this.props.counties.map((county: County) =>
    (
        <CountyCheckbox
          county={county as County}
          checked={this.props.selectedCounties.some((selectedCounty: County) => selectedCounty === county)}
          onCheck={this.onCountySelected}
          onUncheck={this.onCountyUnselected}
        />
      ),
    );

    return (
         <FormGroup>
            <ControlLabel>County</ControlLabel>
            {checkboxes}
        </FormGroup>
    );
  }

  public onCountySelected(county: County)
  {
    this.props.selectCounty(county);
  }

  public onCountyUnselected(county: County)
  {
    this.props.deselectCounty(county);
  }
}
