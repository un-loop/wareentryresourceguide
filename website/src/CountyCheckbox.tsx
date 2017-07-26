import * as React from "react";
import { Checkbox } from "react-bootstrap";

interface ICountyCheckboxProps {
  onCheck: (county: string) => void;
  onUncheck: (county: string) => void;
  checked: boolean;
  county: string;
}

export default class CountyCheckbox extends React.Component<ICountyCheckboxProps, {}> {
  public constructor(props: ICountyCheckboxProps) {
      super(props);
      this.onChange = this.onChange.bind(this);
  }

    public render() {
    return (
         <Checkbox
            checked={this.props.checked}
            onChange={this.onChange}
         >
            {this.props.county}
         </Checkbox>
    );
  }

  public onChange(e: any) {
    if (e.target.checked) {
        this.props.onCheck(this.props.county);
    } else {
        this.props.onUncheck(this.props.county);
    }
  }
}
