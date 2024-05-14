using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos
{
    public class CreatePlanetRequestDto
    {
        public string Symbol { get; set; }= string.Empty;
        public string Name { get; set; }= string.Empty;

        public string Color { get; set; } = string.Empty;

        //public decimal XRadius { get; set; }
        //public decimal ZRadius { get; set; }
        public decimal Size { get; set; }

        public decimal Speed { get; set; }
       // public decimal Offset { get; set; }
       // public decimal RotationSpeed { get; set; }

 
    }
}