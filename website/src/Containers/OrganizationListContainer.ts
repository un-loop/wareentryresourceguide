import { Set } from "immutable";
import { connect} from "react-redux";
import { OrganizationList } from "../Presenters/OrganizationList";
import { IOrganizationListProps } from "../Presenters/OrganizationList";
import { County } from "../State/County";
import { Gender } from "../State/Gender";
import { Organization } from "../State/Organization";
import { ServiceCategory } from "../State/ServiceCategory";
import { SiteState } from "../State/SiteState";

function mapStateToProps(state: SiteState): IOrganizationListProps
{
  return  {organizations: getFilteredOrganizations(state)};
}

function getFilteredOrganizations(state: SiteState): Set<Organization>
{
  return state.organizations
  .filter((organization) =>
    filterOnGender(state.genderFilter, organization as Organization) &&
    filterOnCounty(state.countyFilter, organization as Organization) &&
    filterOnServiceCategory(state.serviceCategoryFilter, organization as Organization),
  ).toSet();
}

function filterOnGender(genderFilter: Set<Gender>, organization: Organization): boolean
{
  return genderFilter.isEmpty() || !organization.gendersServed.intersect(genderFilter).isEmpty();
}

function filterOnCounty(countyFilter: Set<County>, organization: Organization): boolean
{
  return countyFilter.isEmpty() || !organization.countiesServed.intersect(countyFilter).isEmpty();
}

function filterOnServiceCategory(serviceCategoryFilter: Set<ServiceCategory>, organization: Organization): boolean
{
  return serviceCategoryFilter.isEmpty() || !organization.servicesCategories.intersect(serviceCategoryFilter).isEmpty();
}

export default connect(
  mapStateToProps,
)(OrganizationList);
