using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WaReentryResourceGuide.Models
{
    public enum EligibilityCategory
    {
        Male,
        Female,
        Children,
        SexOffender,
        InRecovery,
        CleanAndSober,
    }

    public class EligibilityAttribute
    {
        public int ID { get; set; }
        public EligibilityCategory Attribute { get; set; }
        public string Description { get; set; }
    }
}