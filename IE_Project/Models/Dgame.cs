namespace IE_Project.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Dgame : DbContext
    {
        public Dgame()
            : base("name=Dgame")
        {
        }

        public virtual DbSet<dargdrop> dargdrops { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<dargdrop>()
                .Property(e => e.name)
                .IsUnicode(false);

            modelBuilder.Entity<dargdrop>()
                .Property(e => e.score)
                .IsUnicode(false);
        }
    }
}
