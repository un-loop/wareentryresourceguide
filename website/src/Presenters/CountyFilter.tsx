import * as React from "react";
import { ControlLabel, FormGroup } from "react-bootstrap";
import {CountyFilterProps} from "../Containers/CountyFilterSelector";
import { County } from "../State/County";
import { CountyCheckbox } from "./CountyCheckbox";

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
    return (
         <FormGroup>
            <ControlLabel>County</ControlLabel>
            {this.getCountyCheckboxes()}
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

  private getCountyCheckboxes(): JSX.Element[]
  {
    return this.props.counties.map((county: County) =>
      (
        <CountyCheckbox
          county={county as County}
          checked={this.props.selectedCounties.some((selectedCounty: County) => selectedCounty === county)}
          onCheck={this.onCountySelected}
          onUncheck={this.onCountyUnselected}
        />
      ),
    ).toArray();
  }
}
