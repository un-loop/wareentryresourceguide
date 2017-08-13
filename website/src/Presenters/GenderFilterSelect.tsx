import * as React from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";
import { GenderOption } from "../State/GenderOption";

interface IGenderFilterSelectProps
{
  onChange: (gender: GenderOption) => void;
  gender: GenderOption;
}

export class GenderFilterSelect extends React.Component<IGenderFilterSelectProps, {}>
{
  public constructor(props: IGenderFilterSelectProps)
  {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public render()
  {
    return (
         <FormGroup controlId="formControlsSelect">
            <ControlLabel>Gender</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={this.handleChange}
              value={GenderOption[this.props.gender]}
            >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </FormControl>
        </FormGroup>
    );
  }

  private handleChange(e: any)
  {
    if (e.target.value === "Male")
    {
      this.props.onChange(GenderOption.Male);
    }
    else
    {
      this.props.onChange(GenderOption.Female);
    }
  }
}
