import * as React from "react";
import { ControlLabel, FormGroup } from "react-bootstrap";
import CountyCheckbox from "./CountyCheckbox";

interface ICountyFilterProps {
  onChange: (selectedCounties: string[]) => void;
  selectedCounties: string[];
  counties: string[];
}

export default class CountyFilter extends React.Component<ICountyFilterProps, {}> {
  public constructor(props: ICountyFilterProps) {
    super(props);
    this.onCountySelected = this.onCountySelected.bind(this);
    this.onCountyUnselected = this.onCountyUnselected.bind(this);
  }

  public render() {
    return (
         <FormGroup>
            <ControlLabel>County</ControlLabel>
            {this.getCountyCheckboxes()}
        </FormGroup>
    );
  }

  public onCountySelected(county: string) {
    this.props.onChange(this.props.selectedCounties.concat(county));
  }

  public onCountyUnselected(county: string) {
    this.props.onChange(this.props.selectedCounties.filter((selectedCounty) => selectedCounty !== county));
  }

  private getCountyCheckboxes(): JSX.Element[] {
    return this.props.counties.map((county) =>
                  (
                  <CountyCheckbox
                    county={county}
                    checked={this.props.selectedCounties.some((selectedCounty) => selectedCounty === county)}
                    onCheck={this.onCountySelected}
                    onUncheck={this.onCountyUnselected}
                  />
                  ),
              );
  }
}
