using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WaReentryResourceGuide.Models
{
    public class ContactInfo
    {
        public int ID { get; set; }
        public string PostalAddress { get; set; }
        public string WebAddress { get; set; }
        public string EmailAddress { get; set; }
        public string PhoneNumber { get; set; }
    }
}