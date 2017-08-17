import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SetCounties } from "../Actions";
import { CountyFilter, ICountyFilterDispatchProps, ICountyFilterStateProps } from "../Presenters/CountyFilter";
import { SiteState } from "../State/SiteState";

function mapStateToProps(state: SiteState): ICountyFilterStateProps
{
  return {
      counties: state.availableCounties,
      selectedCounties: state.countyFilter,
    };
}

function mapDispatchToProps(dispatch: Dispatch<SiteState>):
ICountyFilterDispatchProps
{
  return {
    setCounties: (counties) => dispatch(SetCounties(counties)),
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountyFilter);
