import { connect } from "react-redux";
import { CountyFilter, ICountyFilterProps } from "../Presenters/CountyFilter";
import { SiteState } from "../State/SiteState";

function mapStateToProps(state: SiteState): ICountyFilterProps
{
  return {
      counties: state.availableCounties,
    };
}

export default connect(
  mapStateToProps,
)(CountyFilter);
