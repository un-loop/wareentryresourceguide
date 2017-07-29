import Organization from "./Organization";

export default interface IOrganizationFilter
{
    filter: (organization: Organization) => boolean;
}
