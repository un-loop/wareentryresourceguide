import { Set } from "immutable";
import * as React from "react";
import { ControlLabel, FormGroup } from "react-bootstrap";
import CountyCheckboxContainer from "../Containers/CountyCheckboxContainer";
import { County } from "../State/County";

export interface ICountyFilterProps {
      counties: Set<County>;
}

export class CountyFilter extends React.Component<ICountyFilterProps, {}>
{
  public render()
  {
    const checkboxes = this.props.counties.map((county: County) =>
    (
        <CountyCheckboxContainer
          county={county as County}
          key={county}
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
}
