import * as React from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";

export default class CountyFilterSelect extends React.Component<{}, {}> {
  public render() {
    return (
         <FormGroup controlId="formControlsSelect">
            <ControlLabel>County</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
                <option value="King">King</option>
                <option value="Benton">Benton</option>
            </FormControl>
        </FormGroup>
    );
  }
}
