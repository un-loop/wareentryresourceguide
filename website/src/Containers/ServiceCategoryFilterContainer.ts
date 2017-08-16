import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SetServiceCategories } from "../Actions";
import { ServiceCategoryFilter, IServiceCategoryFilterDispatchProps, IServiceCategoryFilterStateProps } from "../Presenters/ServiceCategoryFilter";
import { SiteState } from "../State/SiteState";

function mapStateToProps(state: SiteState): IServiceCategoryFilterStateProps
{
  return {
      serviceCategories: state.availableServiceCategories,
      selectedServiceCategories: state.serviceCategoryFilter,
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
