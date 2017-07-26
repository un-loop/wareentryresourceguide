namespace WaReentryResourceGuide.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FlattenContactInfo : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.ServiceProvider", "ContactInfoID", "dbo.ContactInfo");
            DropIndex("dbo.ServiceProvider", new[] { "ContactInfoID" });
            AddColumn("dbo.ServiceProvider", "PhoneNumber", c => c.String());
            AddColumn("dbo.ServiceProvider", "Address", c => c.String());
            AddColumn("dbo.ServiceProvider", "Email", c => c.String());
            AddColumn("dbo.ServiceProvider", "Website", c => c.String());
            DropColumn("dbo.ServiceProvider", "ContactInfoID");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ServiceProvider", "ContactInfoID", c => c.Int(nullable: false));
            DropColumn("dbo.ServiceProvider", "Website");
            DropColumn("dbo.ServiceProvider", "Email");
            DropColumn("dbo.ServiceProvider", "Address");
            DropColumn("dbo.ServiceProvider", "PhoneNumber");
            CreateIndex("dbo.ServiceProvider", "ContactInfoID");
            AddForeignKey("dbo.ServiceProvider", "ContactInfoID", "dbo.ContactInfo", "ID", cascadeDelete: true);
        }
    }
}
