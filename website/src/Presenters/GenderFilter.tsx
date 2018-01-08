import {Set} from "immutable";
import * as React from "react";
import Select from "react-select";
import { Gender } from "../State/Gender";

export interface IGenderFilterDispatchProps
{
  setGenders: (gender: Set<Gender>) => void;
}

export interface IGenderFilterStateProps
{
  genders: Set<Gender>;
  genderFilter: Set<Gender>;
}

export type GenderFilterProps = IGenderFilterDispatchProps & IGenderFilterStateProps;

export class GenderFilter extends React.Component<GenderFilterProps, {}>
{
  public constructor(props: GenderFilterProps)
  {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  public render()
  {
    const options = this.props.genders.map(
      (county) => ({value: county as Gender, label: Gender[county as Gender]})).toArray();

    const selectedOptions = this.props.genderFilter.map(
      (county) => ({value: county as Gender, label: Gender[county as Gender]})).toArray();

    return (
         <div>
            <h4>That serve these genders:</h4>
            <Select
              placeholder="All genders"
              multi={true}
              onChange={this.onChange}
              options={options}
              value={selectedOptions}
            />
        </div>
    );
  }

  private onChange(options: any)
  {
    const serviceCategories = Set<Gender>(options.map((option: any) => option.value as Gender));

    this.props.setGenders(serviceCategories);
  }
}
