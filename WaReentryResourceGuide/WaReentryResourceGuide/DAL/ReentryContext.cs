using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;
using WaReentryResourceGuide.Models;

namespace WaReentryResourceGuide.DAL
{
    public class ReentryContext : DbContext
    {
        public ReentryContext() : base("ReentryContext")
        {
        }

        public DbSet<ServiceProvider> ServiceProviders { get; set; }
        public DbSet<Person> Persons { get; set; }
        public DbSet<ContactInfo> ContactInfos { get; set; }
        public DbSet<QualityFlag> QualityFlags { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<EligibilityAttribute> EligibilityAttributes { get; set; }
        public DbSet<AdminNote> AdminNotes { get; set; }
        public DbSet<County> Counties { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}