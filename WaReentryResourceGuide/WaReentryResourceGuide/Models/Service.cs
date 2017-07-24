using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WaReentryResourceGuide.Models
{
    public enum ResourceCategory
    {
        Housing,
        Employment,
        Legal,
        Education,
        Health,
        Other,
    }

    public class Service
    {
        public int ID { get; set; }

        public ResourceCategory ResourceCategory { get; set; }
        public string Description { get; set; }
    }
}