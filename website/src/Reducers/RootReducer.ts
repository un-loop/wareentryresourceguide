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
        case TypeKeys.SET_SERVICE_CATEGORIES:
            return assign({}, state, {serviceCategoryFilter: action.serviceCategories});
        case TypeKeys.SET_GENDER:
            return assign({}, state, {genderOptionFilter: action.gender});
        default:
            return state;
    }
};
