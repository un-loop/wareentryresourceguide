namespace WaReentryResourceGuide.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SingleCounty : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.County", "ServiceProvider_ID", "dbo.ServiceProvider");
            DropIndex("dbo.County", new[] { "ServiceProvider_ID" });
            AddColumn("dbo.ServiceProvider", "County", c => c.String());
            DropColumn("dbo.County", "ServiceProvider_ID");
        }
        
        public override void Down()
        {
            AddColumn("dbo.County", "ServiceProvider_ID", c => c.Int());
            DropColumn("dbo.ServiceProvider", "County");
            CreateIndex("dbo.County", "ServiceProvider_ID");
            AddForeignKey("dbo.County", "ServiceProvider_ID", "dbo.ServiceProvider", "ID");
        }
    }
}
