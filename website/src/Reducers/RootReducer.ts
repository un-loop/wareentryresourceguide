import { assign } from "lodash";
import { AnyAction, Reducer } from "redux";
import { TypeKeys } from "../Actions";
import { SiteState } from "../State/SiteState";
import { Organization } from "../State/Organization";
import { Set } from "immutable";

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
        case TypeKeys.SET_ORGANIZATIONS:
            let orgs: Set<Organization> = action.organizations;
            console.log(orgs); // tslint:disable-line
            return assign({}, state, {
                availableCounties: orgs.flatMap(o => o.countiesServed),
                availableServiceCategories: orgs.flatMap(o => o.servicesCategories),
                availableGenders: orgs.flatMap(o => o.gendersServed),
                organizations: orgs,
            });
        default:
            return state;
    }
};
