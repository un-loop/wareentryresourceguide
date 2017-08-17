import { Set } from "immutable";
import { County } from "./County";
import { Gender } from "./Gender";
import { Organization } from "./Organization";
import { ServiceCategory } from "./ServiceCategory";

export class SiteState
{
    public constructor(
        public readonly availableCounties: Set<County>,
        public readonly availableServiceCategories: Set<ServiceCategory>,
        public readonly availableGenders: Set<Gender>,
        public readonly countyFilter: Set<County>,
        public readonly serviceCategoryFilter: Set<ServiceCategory>,
        public readonly genderFilter: Set<Gender>,
        public readonly childrenAllowedOnly: boolean,
        public readonly organizations: Set<Organization>,
    )
    {}
}
