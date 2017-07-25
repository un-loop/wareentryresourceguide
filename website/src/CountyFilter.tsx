import * as React from "react";
import { Checkbox, ControlLabel, FormGroup } from "react-bootstrap";

export default class CountyFilter extends React.Component<{}, {}> {
  public render() {
    return (
         <FormGroup>
            <ControlLabel>County</ControlLabel>
            <Checkbox value="King">King</Checkbox>
            <Checkbox value="Benton">Benton</Checkbox>
        </FormGroup>
    );
  }
}
