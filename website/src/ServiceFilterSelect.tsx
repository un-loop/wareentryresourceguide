import * as React from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";

export default class ServiceFilterSelect extends React.Component<{}, {}> {
  public render() {
    return (
         <FormGroup controlId="formControlsSelect">
            <ControlLabel>Service</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
                <option value="Housing">Housing</option>
                <option value="Employment">Employment</option>
            </FormControl>
        </FormGroup>
    );
  }
}
