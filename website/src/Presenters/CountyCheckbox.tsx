import * as React from "react";
import { Checkbox } from "react-bootstrap";
import {County} from "../State/County";

export interface ICountyCheckboxStateProps {
      county: County;
      checked: boolean;
}

export interface ICountyCheckboxDispatchProps {
    onDeselect(): void;
    onSelect(): void;
}

export type CountyCheckboxProps = ICountyCheckboxStateProps & ICountyCheckboxDispatchProps;

export class CountyCheckbox extends React.Component<CountyCheckboxProps, {}>
{
  public constructor(props: CountyCheckboxProps)
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
    if ((event.currentTarget as any).checked)
    {
      this.props.onSelect();
    }
    else
    {
      this.props.onDeselect();
    }
  }
}
