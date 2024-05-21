using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Tribune
{
    public class TribuneArticleDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        [MinLength(5, ErrorMessage ="Must be min 5 chararcters")]
        [MaxLength(15, ErrorMessage ="Must be max 15 chararcters")]
        public string Title{ get; set; } = string.Empty;

        [Required]
        [MinLength(5, ErrorMessage ="Must be min 5 chararcters")]
        [MaxLength(15, ErrorMessage ="Must be max 150 chararcters")]
        public string Content{ get; set; } = string.Empty;
        
        [Required]
        public DateTime CreateOn { get; set; }= DateTime.Now;
    }
}