import * as React from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";
import { Gender } from "./Gender";

interface IGenderFilterSelectProps {
  onChange: (gender: Gender) => void;
  gender: Gender;
}

export default class GenderFilterSelect extends React.Component<IGenderFilterSelectProps, {}> {
  public constructor(props: IGenderFilterSelectProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    return (
         <FormGroup controlId="formControlsSelect">
            <ControlLabel>Gender</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={this.handleChange}
              value={Gender[this.props.gender]}
            >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </FormControl>
        </FormGroup>
    );
  }

  private handleChange(e: any) {
    if (e.target.value === "Male") {
      this.props.onChange(Gender.Male);
    } else {
      this.props.onChange(Gender.Female);
    }
  }
}
