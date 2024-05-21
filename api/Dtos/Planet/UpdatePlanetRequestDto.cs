using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Planet
{
    public class UpdatePlanetRequestDto
    {
        [Required]
        [MinLength(5, ErrorMessage ="Must be min 5 chararcters")]
        [MaxLength(15, ErrorMessage ="Must be max 15 chararcters")]
        public string Name { get; set; }= string.Empty;

        [Required]
        [MinLength(5, ErrorMessage ="Must be min 5 chararcters")]
        [MaxLength(6, ErrorMessage ="Must be max 6 chararcters")]
        public string Color { get; set; } = string.Empty;

    }
}