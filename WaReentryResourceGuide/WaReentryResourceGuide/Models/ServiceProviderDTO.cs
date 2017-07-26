using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WaReentryResourceGuide.Models
{
    public class GenderApplicability
    {
        public bool Male { get; set; }
        public bool Female { get; set; }
    }

    public class ServiceProviderDTO
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }
        public GenderApplicability GenderApplicability { get; set; }
        public string County { get; set; }

        public string[] ServiceTags { get; set; }
        public int ID { get; set; }
    }
}