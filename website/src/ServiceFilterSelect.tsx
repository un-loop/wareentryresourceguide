import * as React from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";

interface IServiceFilterSelectProps {
  onChange: (service: string) => void;
  service: string;
}

export default class GenderFilterSelect extends React.Component<IServiceFilterSelectProps, {}> {
  public constructor(props: IServiceFilterSelectProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    return (
         <FormGroup controlId="formControlsSelect">
            <ControlLabel>Service</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={this.handleChange}
              value={this.props.service}
            >
                <option value="Housing">Housing</option>
                <option value="Other Stuff">Other Stuff</option>
                <option value="Fake stuff.">Fake stuff.</option>
            </FormControl>
        </FormGroup>
    );
  }

  private handleChange(e: any) {
    this.props.onChange(e.target.value);
  }
}
