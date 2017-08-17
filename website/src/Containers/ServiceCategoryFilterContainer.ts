import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SetServiceCategories } from "../Actions";
import {
  IServiceCategoryFilterDispatchProps,
  IServiceCategoryFilterStateProps,
  ServiceCategoryFilter } from "../Presenters/ServiceCategoryFilter";
import { SiteState } from "../State/SiteState";

function mapStateToProps(state: SiteState): IServiceCategoryFilterStateProps
{
  return {
    selectedServiceCategories: state.serviceCategoryFilter,
    serviceCategories: state.availableServiceCategories,
  };
}

function mapDispatchToProps(dispatch: Dispatch<SiteState>):
IServiceCategoryFilterDispatchProps
{
  return {
    setServiceCategories: (serviceCategories) => dispatch(SetServiceCategories(serviceCategories)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceCategoryFilter);
