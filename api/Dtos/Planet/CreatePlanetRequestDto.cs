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

        //public int XRadius { get; set; }
        //public int ZRadius { get; set; }
        public int Size { get; set; }

        public int Speed { get; set; }
       // public int Offset { get; set; }
       // public int RotationSpeed { get; set; }

 
    }
}