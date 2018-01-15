import { assign } from "lodash";
import { AnyAction, Reducer } from "redux";
import { TypeKeys } from "../Actions";
import { SiteState } from "../State/SiteState";

export const RootReducer: Reducer<SiteState> = (state: SiteState, action: AnyAction): SiteState =>
{
    switch (action.type)
    {
        case TypeKeys.SET_COUNTIES:
            return assign({}, state, {countyFilter: action.counties});
        case TypeKeys.SET_SERVICE_CATEGORIES:
            return assign({}, state, {serviceCategoryFilter: action.serviceCategories});
        case TypeKeys.SET_GENDERS:
            return assign({}, state, {genderFilter: action.genders});
        default:
            return state;
    }
};
