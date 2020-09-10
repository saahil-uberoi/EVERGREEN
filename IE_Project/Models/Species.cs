namespace IE_Project.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Species
    {
        public int speciesId { get; set; }

        [StringLength(100)]
        public string name { get; set; }

        [StringLength(50)]
        public string type { get; set; }

        [StringLength(50)]
        public string category { get; set; }

        [StringLength(50)]
        public string habitant { get; set; }

        [StringLength(50)]
        public string status { get; set; }

        public string description { get; set; }

        public int? categoryID { get; set; }

        public virtual Category Category1 { get; set; }
    }
}
