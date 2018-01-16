import { assign } from "lodash";
import { AnyAction, Reducer } from "redux";
import { TypeKeys } from "../Actions";
import { SiteState } from "../State/SiteState";
import { Organization } from "../State/Organization";
import { County } from "../State/County";
import { Gender } from "../State/Gender";
import { ServiceCategory } from "../State/ServiceCategory";
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
            let organizations: Set<Organization> = action.organizations;
            let availableCounties: Set<County> = organizations.flatMap(o => o.countiesServed.toJS());
            let availableServiceCategories: Set<ServiceCategory> = organizations.flatMap(o => o.servicesCategories);
            let availableGenders: Set<Gender> = organizations.flatMap(o => o.gendersServed);
            return new SiteState(
                availableCounties,
                availableServiceCategories,
                availableGenders, 
                Set.of<County>(),
                Set.of<ServiceCategory>(),
                Set.of<Gender>(),
                false,
                organizations);
        default:
            return state;
    }
};
