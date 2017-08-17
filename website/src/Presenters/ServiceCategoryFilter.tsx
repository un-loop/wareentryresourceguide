import { Set } from "immutable";
import * as React from "react";
import * as Select from "react-select";
import "react-select/dist/react-select.css";
import { ServiceCategory } from "../State/ServiceCategory";

export interface IServiceCategoryFilterStateProps {
  serviceCategories: Set<ServiceCategory>;
  selectedServiceCategories: Set<ServiceCategory>;
}

export interface IServiceCategoryFilterDispatchProps {
  setServiceCategories: (serviceCategories: Set<ServiceCategory>) => void;
}

export type ServiceCategoryFilterProps = IServiceCategoryFilterStateProps & IServiceCategoryFilterDispatchProps;

export class ServiceCategoryFilter extends React.Component<ServiceCategoryFilterProps, {}>
{
  public constructor(props: ServiceCategoryFilterProps)
  {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  public render()
  {
    const selectedOptions = this.props.selectedServiceCategories.map(
        (serviceCategory) => (
          {
            label: ServiceCategory[serviceCategory as ServiceCategory],
            value: serviceCategory as ServiceCategory,
          }
        ),
      ).toArray();

    const options = this.props.serviceCategories.map(
      (serviceCategory) => (
        {value: serviceCategory as ServiceCategory, label: ServiceCategory[serviceCategory as ServiceCategory]}
      )).toArray();

    return (
         <div>
            <h4>That provide these services:</h4>
            <Select
              placeholder="All service categories"
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
    const serviceCategories = Set<ServiceCategory>(options.map((option: any) => option.value as ServiceCategory));

    this.props.setServiceCategories(serviceCategories);
  }
}
