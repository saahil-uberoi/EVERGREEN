namespace IE_Project.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class SpeciesDbModel : DbContext
    {
        public SpeciesDbModel()
            : base("name=SpeciesViewModel")
        {
        }

        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Species> Species { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>()
                .Property(e => e.category1)
                .IsUnicode(false);

            modelBuilder.Entity<Category>()
                .HasMany(e => e.Species)
                .WithOptional(e => e.Category1)
                .WillCascadeOnDelete();

            modelBuilder.Entity<Species>()
                .Property(e => e.name)
                .IsUnicode(false);

            modelBuilder.Entity<Species>()
                .Property(e => e.type)
                .IsUnicode(false);

            modelBuilder.Entity<Species>()
                .Property(e => e.category)
                .IsUnicode(false);

            modelBuilder.Entity<Species>()
                .Property(e => e.habitant)
                .IsUnicode(false);

            modelBuilder.Entity<Species>()
                .Property(e => e.status)
                .IsUnicode(false);

            modelBuilder.Entity<Species>()
                .Property(e => e.description)
                .IsUnicode(false);
        }
    }
}
