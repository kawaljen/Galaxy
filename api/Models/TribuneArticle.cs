using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class TribuneArticle
    {
        public int Id { get; set; }
        public int? PlanetId { get; set; }

        public Planet? Planet { get; set; }
        public string Title{ get; set; } = string.Empty;
        public string Content{ get; set; } = string.Empty;
        public DateTime CreateOn { get; set; }= DateTime.Now;
    }
}