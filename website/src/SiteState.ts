import Organization from "./Organization";
import OrganizationFilter from "./OrganizationFilter";

export class SiteState
{
    public constructor(
        public readonly organizations: Organization[],
        public readonly organizationFilters: OrganizationFilter[],
    )
    {}
}
