//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IE_Project.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Species
    {
        public int speciesId { get; set; }
        public string name { get; set; }
        public string type { get; set; }
        public string category { get; set; }
        public string habitant { get; set; }
        public string status { get; set; }
        public string description { get; set; }
        public Nullable<int> categoryID { get; set; }
    
        public virtual Category Category1 { get; set; }
    }
}