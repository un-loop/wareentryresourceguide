using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WaReentryResourceGuide.Models
{
    public class AdminNote
    {
        public int ID { get; set; }
        public string Notes { get; set; }
        public bool IsInLibraryWiki { get; set; }
        public string Source { get; set; }
    }
}