import { Set } from "immutable";
import { connect} from "react-redux";
import { OrganizationList } from "../Presenters/OrganizationList";
import {IOrganizationListProps} from "../Presenters/OrganizationList";
import { County } from "../State/County";
// import { Gender } from "../State/Gender";
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
    // filterOnGender(state.genderFilter, organization as Organization) &&
    filterOnCounty(state.countyFilter, organization as Organization) &&
    filterOnChildrenAllowed(state.childrenAllowedOnly, organization as Organization),
  ).toSet();
}

// function filterOnGender(genderOption: Gender, organization: Organization): boolean
// {
//   switch (genderOption)
//   {
//     case Gender.PreferNotToSay:
//       return true;
//     case Gender.Male:
//       return organization.servesMale;
//     case Gender.Female:
//       return organization.servesFemale;
//   }
// }

function filterOnCounty(countyFilter: Set<County>, organization: Organization): boolean
{
  return !organization.countiesServed.intersect(countyFilter).isEmpty();
}

function filterOnChildrenAllowed(childrenAllowedOnly: boolean, organization: Organization): boolean
{
  return childrenAllowedOnly ? organization.childrenAllowed : true;
}

export default connect(
  mapStateToProps,
)(OrganizationList);
