import * as React from "react";
import { Checkbox } from "react-bootstrap";
import {County} from "../State/County";
import { ICountyCheckboxProps } from "./ICountyCheckboxProps";

export class CountyCheckbox extends React.Component<ICountyCheckboxProps, {}>
{
  public constructor(props: ICountyCheckboxProps)
  {
      super(props);
      this.onChange = this.onChange.bind(this);
  }

  public render()
  {
    return (
         <Checkbox
          checked={this.props.checked}
          onChange={this.onChange}
         >
            {County[this.props.county]}
         </Checkbox>
    );
  }

  public onChange(event: React.FormEvent<Checkbox>)
  {
    if (event.currentTarget.props.checked)
    {
      this.props.onCheck(this.props.county);
    }
    else
    {
      this.props.onUncheck(this.props.county);
    }
  }
}
