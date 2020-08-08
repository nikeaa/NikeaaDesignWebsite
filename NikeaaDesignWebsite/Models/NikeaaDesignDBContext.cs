using Microsoft.EntityFrameworkCore;

namespace NikeaaDesignWebsite.Models
{
	public class NikeaaDesignDBContext : DbContext
	{
		public virtual DbSet<AdminTemplate> AdminTemplate { get; set; }
		public virtual DbSet<HomePageSection> HomePageSection { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer(@"Server=(localdb)\ProjectsV13; Database=NikeaaDesignDatabase; Integrated Security=true;");
			//optionsBuilder.UseSqlServer(@"Data Source=SQL5047.site4now.net; Initial Catalog=DB_A5DB8E_NikeaaDesign; User Id=DB_A5DB8E_NikeaaDesign_admin; Password=Winter64!;");
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<AdminTemplate>(entity =>
			{
				entity.Property(e => e.Id);
				entity.Property(e => e.Title);
				entity.Property(e => e.IsActive);
			});
			modelBuilder.Entity<AdminTemplate>().HasKey(o => o.Id);

			modelBuilder.Entity<HomePageSection>(entity =>
			{
				entity.Property(e => e.Id);
				entity.Property(e => e.Title);
				entity.Property(e => e.Description);
				entity.Property(e => e.Image);
				entity.Property(e => e.LinkUrl);
				entity.Property(e => e.IsActive);
				entity.Property(e => e.SortOrder);
				entity.Property(e => e.TextAlign);
			});
			modelBuilder.Entity<HomePageSection>().HasKey(o => o.Id);

		}
	}
}
