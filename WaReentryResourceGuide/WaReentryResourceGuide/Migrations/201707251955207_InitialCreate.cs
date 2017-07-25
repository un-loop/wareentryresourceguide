namespace WaReentryResourceGuide.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AdminNote",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Notes = c.String(),
                        IsInLibraryWiki = c.Boolean(nullable: false),
                        Source = c.String(),
                        ServiceProvider_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.ServiceProvider", t => t.ServiceProvider_ID)
                .Index(t => t.ServiceProvider_ID);
            
            CreateTable(
                "dbo.ContactInfo",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        PostalAddress = c.String(),
                        WebAddress = c.String(),
                        EmailAddress = c.String(),
                        PhoneNumber = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.County",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        MajorCity = c.String(),
                        Supported = c.Boolean(nullable: false),
                        ServiceProvider_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.ServiceProvider", t => t.ServiceProvider_ID)
                .Index(t => t.ServiceProvider_ID);
            
            CreateTable(
                "dbo.EligibilityAttribute",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Attribute = c.Int(nullable: false),
                        Description = c.String(),
                        ServiceProvider_ID = c.Int(),
                        ServiceProvider_ID1 = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.ServiceProvider", t => t.ServiceProvider_ID)
                .ForeignKey("dbo.ServiceProvider", t => t.ServiceProvider_ID1)
                .Index(t => t.ServiceProvider_ID)
                .Index(t => t.ServiceProvider_ID1);
            
            CreateTable(
                "dbo.Person",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        ContactInfoID = c.Int(nullable: false),
                        email = c.String(),
                        ServiceProvider_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.ServiceProvider", t => t.ServiceProvider_ID)
                .Index(t => t.ServiceProvider_ID);
            
            CreateTable(
                "dbo.QualityFlag",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        DateFlagged = c.DateTimeOffset(nullable: false, precision: 7),
                        Notes = c.String(),
                        PersonID = c.Int(),
                        ServiceProvider_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.ServiceProvider", t => t.ServiceProvider_ID)
                .Index(t => t.ServiceProvider_ID);
            
            CreateTable(
                "dbo.ServiceProvider",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        ContactInfoID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Service",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        ResourceCategory = c.Int(nullable: false),
                        Description = c.String(),
                        ServiceProvider_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.ServiceProvider", t => t.ServiceProvider_ID)
                .Index(t => t.ServiceProvider_ID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.EligibilityAttribute", "ServiceProvider_ID1", "dbo.ServiceProvider");
            DropForeignKey("dbo.Service", "ServiceProvider_ID", "dbo.ServiceProvider");
            DropForeignKey("dbo.QualityFlag", "ServiceProvider_ID", "dbo.ServiceProvider");
            DropForeignKey("dbo.Person", "ServiceProvider_ID", "dbo.ServiceProvider");
            DropForeignKey("dbo.EligibilityAttribute", "ServiceProvider_ID", "dbo.ServiceProvider");
            DropForeignKey("dbo.County", "ServiceProvider_ID", "dbo.ServiceProvider");
            DropForeignKey("dbo.AdminNote", "ServiceProvider_ID", "dbo.ServiceProvider");
            DropIndex("dbo.Service", new[] { "ServiceProvider_ID" });
            DropIndex("dbo.QualityFlag", new[] { "ServiceProvider_ID" });
            DropIndex("dbo.Person", new[] { "ServiceProvider_ID" });
            DropIndex("dbo.EligibilityAttribute", new[] { "ServiceProvider_ID1" });
            DropIndex("dbo.EligibilityAttribute", new[] { "ServiceProvider_ID" });
            DropIndex("dbo.County", new[] { "ServiceProvider_ID" });
            DropIndex("dbo.AdminNote", new[] { "ServiceProvider_ID" });
            DropTable("dbo.Service");
            DropTable("dbo.ServiceProvider");
            DropTable("dbo.QualityFlag");
            DropTable("dbo.Person");
            DropTable("dbo.EligibilityAttribute");
            DropTable("dbo.County");
            DropTable("dbo.ContactInfo");
            DropTable("dbo.AdminNote");
        }
    }
}
