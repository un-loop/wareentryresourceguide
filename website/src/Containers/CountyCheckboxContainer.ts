import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AddCounty, RemoveCounty } from "../Actions";
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
      onDeselect: () => dispatch(RemoveCounty(ownProps.county)),
      onSelect: () => dispatch(AddCounty(ownProps.county)),
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountyCheckbox);
