import { County } from "./State/County";
import { GenderOption } from "./State/GenderOption";
import { ServiceCategory } from "./State/ServiceCategory";

export enum TypeKeys {
    ADD_COUNTY = "ADD_COUNTY",
    REMOVE_COUNTY = "REMOVE_COUNTY",
    ADD_SERVICE_CATEGORY = "ADD_SERVICE_CATEGORY",
    REMOVE_SERVICE_CATEGORY = "REMOVE_SERVICE_CATEGORY",
    SET_GENDER = "SET_GENDER",
    OTHER_ACTION = "__any_other_action_type__",
}

export interface IAddCountyAction
{
    type: TypeKeys.ADD_COUNTY;
    county: County;
}

export function AddCounty(county: County): IAddCountyAction
{
    return {
        county,
        type: TypeKeys.ADD_COUNTY,
    };
}

export interface IRemoveCountyAction
{
    type: TypeKeys.REMOVE_COUNTY;
    county: County;
}

export function RemoveCounty(county: County): IRemoveCountyAction
{
    return {
        county,
        type: TypeKeys.REMOVE_COUNTY,
    };
}

export interface IAddServiceCategoryAction
{
    type: TypeKeys.ADD_SERVICE_CATEGORY;
    serviceCategory: ServiceCategory;
}

export function AddServiceCategory(serviceCategory: ServiceCategory): IAddServiceCategoryAction
{
    return {
        serviceCategory,
        type: TypeKeys.ADD_SERVICE_CATEGORY,
    };
}

export interface IRemoveServiceCategoryAction
{
    type: TypeKeys.REMOVE_SERVICE_CATEGORY;
    serviceCategory: ServiceCategory;
}

export function RemoveServiceCategory(serviceCategory: ServiceCategory): IRemoveServiceCategoryAction
{
    return {
        serviceCategory,
        type: TypeKeys.REMOVE_SERVICE_CATEGORY,
    };
}

export interface ISetGenderAction
{
    type: TypeKeys.SET_GENDER;
    gender: GenderOption;
}

export function SetGender(gender: GenderOption): ISetGenderAction
{
    return {
        gender,
        type: TypeKeys.SET_GENDER,
    };
}

export type ActionType =
    | IAddCountyAction
    | IRemoveCountyAction
    | IAddServiceCategoryAction
    | IRemoveServiceCategoryAction
    | ISetGenderAction;
