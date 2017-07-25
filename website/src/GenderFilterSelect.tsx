import * as React from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";

export default class GenderFilterSelect extends React.Component<{}, {}> {
  public render() {
    return (
         <FormGroup controlId="formControlsSelect">
            <ControlLabel>Gender</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </FormControl>
        </FormGroup>
    );
  }
}
