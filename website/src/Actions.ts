import { Set } from "immutable";
import { County } from "./State/County";
import { GenderOption } from "./State/GenderOption";
import { ServiceCategory } from "./State/ServiceCategory";

export enum TypeKeys {
    SET_COUNTIES = "SET_COUNTIES",
    ADD_SERVICE_CATEGORY = "ADD_SERVICE_CATEGORY",
    REMOVE_SERVICE_CATEGORY = "REMOVE_SERVICE_CATEGORY",
    SET_GENDER = "SET_GENDER",
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
    | ISetCountiesAction
    | IAddServiceCategoryAction
    | IRemoveServiceCategoryAction
    | ISetGenderAction;
