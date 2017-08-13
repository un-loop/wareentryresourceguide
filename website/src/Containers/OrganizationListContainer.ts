import { Set } from "immutable";
import { connect} from "react-redux";
import { OrganizationList } from "../Presenters/OrganizationList";
import {IOrganizationListProps} from "../Presenters/OrganizationList";
import { County } from "../State/County";
import { GenderOption } from "../State/GenderOption";
import { Organization } from "../State/Organization";
import { SiteState } from "../State/SiteState";

function mapStateToProps(state: SiteState): IOrganizationListProps
{
  return  {organizations: getFilteredOrganizations(state)};
}

function getFilteredOrganizations(state: SiteState): Set<Organization>
{
  return state.organizations
  .filter((organization) =>
    filterOnGender(state.genderOptionFilter, organization as Organization) &&
    filterOnCounty(state.countyFilter, organization as Organization) &&
    filterOnChildrenAllowed(state.childrenAllowedOnly, organization as Organization),
  ).toSet();
}

function filterOnGender(genderOption: GenderOption, organization: Organization): boolean
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
}

function filterOnCounty(countyFilter: Set<County>, organization: Organization): boolean
{
  return organization.countiesServed.some((county) => countyFilter.some((selectedCounty) =>
  selectedCounty === county));
}

function filterOnChildrenAllowed(childrenAllowedOnly: boolean, organization: Organization): boolean
{
  return childrenAllowedOnly ? organization.childrenAllowed : true;
}

export default connect(
  mapStateToProps,
)(OrganizationList);
