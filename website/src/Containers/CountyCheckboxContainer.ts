import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AddCountyFilterAction } from "../Actions/AddCountyFilterAction";
import { RemoveCountyFilterAction } from "../Actions/RemoveCountyFilterAction";
import { CountyCheckbox, ICountyCheckboxDispatchProps, ICountyCheckboxStateProps } from "../Presenters/CountyCheckbox";
import { County } from "../State/County";
import { SiteState } from "../State/SiteState";

export interface ICountyCheckboxContainerProps
{
  county: County;
}

function mapStateToProps(state: SiteState, ownProps: ICountyCheckboxContainerProps): ICountyCheckboxStateProps
{
  return {
      checked: state.countyFilter.some((selectedCounty: County) => selectedCounty === ownProps.county),
      county: ownProps.county,
    };
}

function mapDispatchToProps(dispatch: Dispatch<SiteState>, ownProps: ICountyCheckboxContainerProps):
ICountyCheckboxDispatchProps
{
  return {
      onDeselect: () => dispatch(new RemoveCountyFilterAction(ownProps.county)),
      onSelect: () => dispatch(new AddCountyFilterAction(ownProps.county)),
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountyCheckbox);
