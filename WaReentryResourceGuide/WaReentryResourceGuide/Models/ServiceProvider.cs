using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WaReentryResourceGuide.Models
{
    public class ServiceProvider
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int ContactInfoID { get; set; }
        
        public virtual ICollection<County> CountiesServed { get; set; }
        public virtual ICollection<QualityFlag> QualityFlags { get; set; }

       // public virtual ICollection<AdminNote> AdminNotes { get; set; }

        public virtual ICollection<Person> Owners { get; set; }

        public virtual ICollection<Service> ResourcesProvided { get; set; }

        public virtual ICollection<EligibilityAttribute> Supported { get; set; }

        public virtual ICollection<EligibilityAttribute> Excluded { get; set; }
    }
}