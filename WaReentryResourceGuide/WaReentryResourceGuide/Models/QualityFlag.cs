using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WaReentryResourceGuide.Models
{
    public class QualityFlag
    {
        public int ID { get; set; }
        public DateTimeOffset DateFlagged { get; set; }
        public string Notes { get; set; }
        public int? PersonID { get; set; }
    }
}