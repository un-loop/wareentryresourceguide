import { Set } from "immutable";
import * as React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import { County } from "../State/County";

export interface ICountyFilterStateProps {
  counties: Set<County>;
  selectedCounties: Set<County>;
}

export interface ICountyFilterDispatchProps {
  setCounties: (counties: Set<County>) => void;
}

export type CountyFilterProps = ICountyFilterStateProps & ICountyFilterDispatchProps;

export class CountyFilter extends React.Component<CountyFilterProps, {}>
{
  public constructor(props: CountyFilterProps)
  {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  public render()
  {
    const selectedOptions = this.props.selectedCounties.map(
        (county) => (
          {
            label: County[county],
            value: county,
          }
        ),
      ).toArray();

    const options = this.props.counties.map(
      (county) => ({value: county, label: County[county]})).toArray();

    return (
         <div>
            <h4>In these counties:</h4>
            <Select
              placeholder="All counties"
              multi={true}
              options={options}
              onChange={this.onChange}
              value={selectedOptions}
            />
        </div>
    );
  }

  private onChange(options: any)
  {
    const counties = Set<County>(options.map((option: any) => option.value as County));

    this.props.setCounties(counties);
  }
}
