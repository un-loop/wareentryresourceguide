import { assign } from "lodash";
import { AnyAction, Reducer } from "redux";
import { AddCountyFilterAction } from "../Actions/AddCountyFilterAction";
import { AddServiceCategoryFilterAction } from "../Actions/AddServiceCategoryFilterAction";
import { RemoveCountyFilterAction } from "../Actions/RemoveCountyFilterAction";
import { RemoveServiceCategoryFilterAction } from "../Actions/RemoveServiceCategoryFilterAction";
import { SetGenderOptionAction } from "../Actions/SetGenderFilterAction";
import { SiteState } from "../State/SiteState";

export const RootReducer: Reducer<SiteState> = (state: SiteState, action: AnyAction): SiteState =>
{
    if (action instanceof AddCountyFilterAction)
    {
        return assign({}, state, {countyFilter: state.countyFilter.add(action.county)});
    }
    if (action instanceof AddServiceCategoryFilterAction)
    {
        return assign({}, state, {serviceCategoryFilter: state.serviceCategoryFilter.add(action.serviceCategory)});
    }
    if (action instanceof RemoveCountyFilterAction)
    {
        return assign({}, state, {countyFilter: state.countyFilter.filter((county) => county !== action.county)});
    }
    if (action instanceof RemoveServiceCategoryFilterAction)
    {
        return assign(
            {},
            state,
            {
                serviceCategoryFilter:
                state.serviceCategoryFilter.filter((serviceCategory) => serviceCategory === action.serviceCategory),
            },
        );
    }
    if (action instanceof SetGenderOptionAction)
    {
        return assign({}, state, {genderOptionFilter: action.gender});
    }

    return state;
};
