using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Planet
{
    public class UpdatePlanetRequestDto
    {
        public string Name { get; set; }= string.Empty;

        public string Color { get; set; } = string.Empty;

    }
}