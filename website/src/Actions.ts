import { Set } from "immutable";
import { County } from "./State/County";
import { GenderOption } from "./State/GenderOption";
import { ServiceCategory } from "./State/ServiceCategory";

export enum TypeKeys {
    SET_COUNTIES = "SET_COUNTIES",
    SET_SERVICE_CATEGORIES = "SET_SERVICE_CATEGORIES",
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
    | ISetServiceCategoriesAction
    | ISetGenderAction;
