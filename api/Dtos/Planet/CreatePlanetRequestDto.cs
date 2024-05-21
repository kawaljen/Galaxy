using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos
{
    public class CreatePlanetRequestDto
    {

        [Required]
        [MinLength(5, ErrorMessage ="Must be min 5 chararcters")]
        [MaxLength(15, ErrorMessage ="Must be max 15 chararcters")]
        public string Symbol { get; set; }= string.Empty;
        
        [Required]
        [MinLength(5, ErrorMessage ="Must be min 5 chararcters")]
        [MaxLength(15, ErrorMessage ="Must be max 15 chararcters")]
        public string Name { get; set; }= string.Empty;

        [Required]
        [MinLength(5, ErrorMessage ="Must be min 5 chararcters")]
        [MaxLength(6, ErrorMessage ="Must be max 6 chararcters")]
        public string Color { get; set; } = string.Empty;

        [Required]
        [Range (0,4)]
        public decimal XRadius { get; set; }

        [Required]
        [Range (0,4, ErrorMessage ="Must be max 4")]
        public decimal ZRadius { get; set; }
        
        [Required]
        [Range (0,4, ErrorMessage ="Must be max 4")]
        public decimal Size { get; set; }

        [Required]
        [Range (0,4, ErrorMessage ="Must be max 4")]
        public decimal Speed { get; set; }

        [Required]
        [Range (0,4, ErrorMessage ="Must be max 4")]
       public decimal Offset { get; set; }

        [Required]
        [Range (0,4, ErrorMessage ="Must be max 4")]
       public decimal RotationSpeed { get; set; }

 
    }
}