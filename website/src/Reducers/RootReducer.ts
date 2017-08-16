import { assign } from "lodash";
import { Reducer } from "redux";
import { ActionType, TypeKeys } from "../Actions";
import { SiteState } from "../State/SiteState";

export const RootReducer: Reducer<SiteState> = (state: SiteState, action: ActionType): SiteState =>
{
    switch (action.type)
    {
        case TypeKeys.SET_COUNTIES:
            return assign({}, state, {countyFilter: action.counties});
        case TypeKeys.ADD_SERVICE_CATEGORY:
            return assign({}, state, {serviceCategoryFilter: state.serviceCategoryFilter.add(action.serviceCategory)});
        case TypeKeys.REMOVE_SERVICE_CATEGORY:
            return assign(
                {},
                state,
                {
                    serviceCategoryFilter:
                    state.serviceCategoryFilter.filter((serviceCategory) => serviceCategory === action.serviceCategory),
                },
            );
        case TypeKeys.SET_GENDER:
            return assign({}, state, {genderOptionFilter: action.gender});
        default:
            return state;
    }
};
