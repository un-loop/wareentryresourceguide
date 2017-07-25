namespace WaReentryResourceGuide.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddDesc : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.AdminNote", "ServiceProvider_ID", "dbo.ServiceProvider");
            DropIndex("dbo.AdminNote", new[] { "ServiceProvider_ID" });
            AddColumn("dbo.ServiceProvider", "Description", c => c.String());
            CreateIndex("dbo.ServiceProvider", "ContactInfoID");
            AddForeignKey("dbo.ServiceProvider", "ContactInfoID", "dbo.ContactInfo", "ID", cascadeDelete: true);
            DropColumn("dbo.AdminNote", "ServiceProvider_ID");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AdminNote", "ServiceProvider_ID", c => c.Int());
            DropForeignKey("dbo.ServiceProvider", "ContactInfoID", "dbo.ContactInfo");
            DropIndex("dbo.ServiceProvider", new[] { "ContactInfoID" });
            DropColumn("dbo.ServiceProvider", "Description");
            CreateIndex("dbo.AdminNote", "ServiceProvider_ID");
            AddForeignKey("dbo.AdminNote", "ServiceProvider_ID", "dbo.ServiceProvider", "ID");
        }
    }
}
