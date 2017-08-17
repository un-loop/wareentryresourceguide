import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SetGenders } from "../Actions";
import { GenderFilter } from "../Presenters/GenderFilter";
import { IGenderFilterDispatchProps, IGenderFilterStateProps } from "../Presenters/GenderFilter";
import { SiteState } from "../State/SiteState";

function mapStateToProps(state: SiteState): IGenderFilterStateProps
{
  return {
    genderFilter: state.genderFilter,
    genders: state.availableGenders,
  };
}

function mapDispatchToProps(dispatch: Dispatch<SiteState>):
IGenderFilterDispatchProps
{
  return {
    setGenders: (counties) => dispatch(SetGenders(counties)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenderFilter);
