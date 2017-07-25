using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WaReentryResourceGuide.Models;

namespace WaReentryResourceGuide.DAL
{
    public class ReentryInitializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<ReentryContext>
    {
        protected override void Seed(ReentryContext context)
        {
            PopulateCounties(context);
            PopulateEligibilityAttributes(context);
            PopulateServices(context);
            PopulateContactInfos(context);

            var serviceProviders = new List<ServiceProvider>
            {
                new ServiceProvider { ContactInfoID = 1, Name = "Some organization" },
                new ServiceProvider { ContactInfoID = 2, Name = "Some other organization" },
            };

            serviceProviders.ForEach(t => context.ServiceProviders.Add(t));
            context.SaveChanges();
        }

        private static void PopulateContactInfos(ReentryContext context)
        {
            var contactInfos = new List<ContactInfo>
            {
                new ContactInfo { ID = 1, EmailAddress = "person@contoso.com", PhoneNumber = "206-555-1212", PostalAddress = "123 Address St.", WebAddress = "http://blah.contoso.com"},
                new ContactInfo { ID = 2, EmailAddress = "somebody@contoso.com", PhoneNumber = "206-555-1212", PostalAddress = "1234567 Address St.", WebAddress = "http://blah.contoso.com"},
            };

            contactInfos.ForEach(t => context.ContactInfos.Add(t));
        }

        private static void PopulateServices(ReentryContext context)
        {
            var resources = new List<Service>
            {
                new Service { ResourceCategory = ResourceCategory.Housing },
                new Service { ResourceCategory = ResourceCategory.Employment, },
            };

            resources.ForEach(t => context.Services.Add(t));
        }

        private static void PopulateEligibilityAttributes(ReentryContext context)
        {
            var eligibilityAttributes = new List<EligibilityAttribute>
            {
                new EligibilityAttribute { Attribute = EligibilityCategory.Male },
                new EligibilityAttribute { Attribute = EligibilityCategory.Female, },
                new EligibilityAttribute { Attribute = EligibilityCategory.Children, },
            };

            eligibilityAttributes.ForEach(t => context.EligibilityAttributes.Add(t));
        }

        private static void PopulateCounties(ReentryContext context)
        {
            var counties = new List<County>
            {
                new County { Name = "King", MajorCity = "Seattle", Supported = true },
                new County { Name = "Snohomish", MajorCity = "Everett", Supported = true },
            };

            counties.ForEach(t => context.Counties.Add(t));
        }
    }
}