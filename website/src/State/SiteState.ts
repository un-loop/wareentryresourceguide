import { Set } from "immutable";
import { County } from "./County";
import { GenderOption } from "./GenderOption";
import { Organization } from "./Organization";
import { ServiceCategory } from "./ServiceCategory";

export class SiteState
{
    public constructor(
        public readonly organizations: Set<Organization>,
        public readonly genderOptionFilter: GenderOption,
        public readonly serviceCategoryFilter: Set<ServiceCategory>,
        public readonly familyFriendlyFilter: boolean,
        public readonly countyFilter: Set<County>,
    )
    {}
}
