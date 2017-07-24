using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WaReentryResourceGuide.Models
{
    public class County
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string MajorCity { get; set; }

        public bool Supported { get; set; }
    }
}