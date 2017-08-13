import { Set } from "immutable";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AddCountyFilterAction } from "../Actions/AddCountyFilterAction";
import { RemoveCountyFilterAction } from "../Actions/RemoveCountyFilterAction";
import { CountyFilter } from "../Presenters/CountyFilter";
import { County } from "../State/County";
import { SiteState } from "../State/SiteState";

interface ICountyFilterStateProps {
      counties: Set<County>;
      selectedCounties: Set<County>;
}

interface ICountyFilterDispatchProps {
    deselectCounty(county: County): void;
    selectCounty(county: County): void;
}

export type CountyFilterProps = ICountyFilterStateProps & ICountyFilterDispatchProps;

function mapStateToProps(state: SiteState): ICountyFilterStateProps
{
  return {
      counties: state.availableCounties,
      selectedCounties: state.countyFilter,
    };
}

function mapDispatchToProps(dispatch: Dispatch<SiteState>): ICountyFilterDispatchProps
{
  return {
      deselectCounty: (county: County) => dispatch(new RemoveCountyFilterAction(county)),
      selectCounty: (county: County) => dispatch(new AddCountyFilterAction(county)),
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountyFilter);
