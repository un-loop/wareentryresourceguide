import { Set } from "immutable";
import { County, ALL_COUNTIES } from "./State/County";
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

export function SetOrganizationsFromSheet(sheet: any): ISetOrganizationsAction {
    let organizations = Set<Organization>(sheet.data.map((row: any) => {
        let countiesServed = Set();
        if (row.county == "All") {
            countiesServed = ALL_COUNTIES;
        } else if (row.county) {
            countiesServed = Set.of(County[row.county as keyof typeof County]);
        }
        let serviceCategories = Set<ServiceCategory>()
        if (row.education == "Y") {
            serviceCategories = serviceCategories.add(ServiceCategory.Education);
        }
        if (row.employment == "Y") {
            serviceCategories = serviceCategories.add(ServiceCategory.Employment);
        }
        if (row.health == "Y") {
            serviceCategories = serviceCategories.add(ServiceCategory.Health);
        }
        if (row.housing == "Y") {
            serviceCategories = serviceCategories.add(ServiceCategory.Housing);
        }
        if (row.legal == "Y") {
            serviceCategories = serviceCategories.add(ServiceCategory.Legal);
        }
        if (row.other == "Y") {
            serviceCategories = serviceCategories.add(ServiceCategory.Other);
        }
        return new Organization(row.orgname, row.address, row.phone, row.web, row.email, row.description, countiesServed, serviceCategories, Set(), false);
    }));
    return {
        type: TypeKeys.SET_ORGANIZATIONS,
        organizations: organizations,
    };
}
