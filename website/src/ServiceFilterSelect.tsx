import * as React from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";

interface IServiceFilterSelectProps
{
  onChange: (service: string) => void;
  service: string;
}

export class GenderFilterSelect extends React.Component<IServiceFilterSelectProps, {}>
{
  public constructor(props: IServiceFilterSelectProps)
  {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public render()
  {
    return (
         <FormGroup controlId="formControlsSelect">
            <ControlLabel>Service</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={this.handleChange}
              value={this.props.service}
            >
                <option value="Education">Education</option>
                <option value="Employment">Employment</option>
                <option value="Health">Health</option>
                <option value="Housing">Housing</option>
                <option value="Legal">Legal</option>
                <option value="Other">Other</option>
            </FormControl>
        </FormGroup>
    );
  }

  private handleChange(e: any)
  {
    this.props.onChange(e.target.value);
  }
}
