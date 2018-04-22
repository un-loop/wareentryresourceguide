import { Set } from "immutable";
import { County } from "./State/County";
import { Gender } from "./State/Gender";
import { ServiceCategory } from "./State/ServiceCategory";
import { Organization } from "./State/Organization";

export enum TypeKeys {
    SET_COUNTIES = "SET_COUNTIES",
    SET_SERVICE_CATEGORIES = "SET_SERVICE_CATEGORIES",
    SET_GENDERS = "SET_GENDERS",
    SET_ORGANIZATIONS = "SET_ORGANIZATIONS",
    OTHER_ACTION = "__any_other_action_type__",
}

export interface ISetCountiesAction
{
    type: TypeKeys.SET_COUNTIES;
    counties: Set<County>;
}

export function SetCounties(counties: Set<County>): ISetCountiesAction
{
    return {
        counties,
        type: TypeKeys.SET_COUNTIES,
    };
}

export interface ISetServiceCategoriesAction
{
    type: TypeKeys.SET_SERVICE_CATEGORIES;
    serviceCategories: Set<ServiceCategory>;
}

export function SetServiceCategories(serviceCategories: Set<ServiceCategory>): ISetServiceCategoriesAction
{
    return {
        serviceCategories,
        type: TypeKeys.SET_SERVICE_CATEGORIES,
    };
}

export interface ISetGenderAction
{
    type: TypeKeys.SET_GENDERS;
    genders: Set<Gender>;
}

export function SetGenders(genders: Set<Gender>): ISetGenderAction
{
    return {
        genders,
        type: TypeKeys.SET_GENDERS,
    };
}

export interface ISetOrganizationsAction {
    type: TypeKeys.SET_ORGANIZATIONS;
    organizations: Set<Organization>;
}

export function SetOrganizations(organizations: Set<Organization>): ISetOrganizationsAction {
    return {
        type: TypeKeys.SET_ORGANIZATIONS,
        organizations: organizations,
    };
}
