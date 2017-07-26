namespace WaReentryResourceGuide.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FlattenServices : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Service", "ServiceProvider_ID", "dbo.ServiceProvider");
            DropIndex("dbo.Service", new[] { "ServiceProvider_ID" });
            AddColumn("dbo.ServiceProvider", "ServicesProvided", c => c.String());
            DropColumn("dbo.Service", "ServiceProvider_ID");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Service", "ServiceProvider_ID", c => c.Int());
            DropColumn("dbo.ServiceProvider", "ServicesProvided");
            CreateIndex("dbo.Service", "ServiceProvider_ID");
            AddForeignKey("dbo.Service", "ServiceProvider_ID", "dbo.ServiceProvider", "ID");
        }
    }
}
