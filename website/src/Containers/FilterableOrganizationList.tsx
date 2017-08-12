import { Set} from "immutable";
import { connect, MapStateToProps } from "react-redux";
import { OrganizationList } from "../Presenters/OrganizationList";
import { OrganizationListProps } from "../Presenters/OrganizationListProps";
import { County } from "../State/County";
import { GenderOption } from "../State/GenderOption";
import { Organization } from "../State/Organization";
import { SiteState } from "../State/SiteState";

const mapStateToProps: MapStateToProps<OrganizationListProps, {}> = (state: SiteState): OrganizationListProps =>
(
  {organizations: getFilteredOrganizations(state)}
);

const getFilteredOrganizations = (state: SiteState): Set<Organization> =>
{
  return state.organizations
  .filter((organization) =>
    filterOnGender(state.genderOptionFilter, organization as Organization) &&
    filterOnCounty(state.countyFilter, organization as Organization) &&
    filterOnChildrenAllowed(state.childrenAllowedOnly, organization as Organization),
)
  .toSet();
};

const filterOnGender = (genderOption: GenderOption, organization: Organization): boolean =>
{
  switch (genderOption)
  {
    case GenderOption.PreferNotToSay:
      return true;
    case GenderOption.Male:
      return organization.servesMale;
    case GenderOption.Female:
      return organization.servesFemale;
  }
};

const filterOnCounty = (countyFilter: Set<County>, organization: Organization): boolean =>
{
  return organization.countiesServed.some((county) => countyFilter.some((selectedCounty) =>
  selectedCounty === county));
};

const filterOnChildrenAllowed = (childrenAllowedOnly: boolean, organization: Organization): boolean =>
{
  return childrenAllowedOnly ? organization.childrenAllowed : true;
};

export default connect(
  mapStateToProps,
)(OrganizationList);
