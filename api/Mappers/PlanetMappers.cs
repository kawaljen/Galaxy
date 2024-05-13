using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos;
using api.Dtos.Planet;
using api.Models;

namespace api.Mappers
{
    public static class PlanetMappers
    {
        public static PlanetDto ToPlanetDto(this Planet planetModel)
        {
            return new PlanetDto
            {
                Id = planetModel.Id,
                Symbol = planetModel.Symbol,
                Name = planetModel.Name,
                Color = planetModel.Color,
                Size = planetModel.Size,
                Speed = planetModel.Speed,
            };
        }
    

        public static Planet ToPlanetFromCreateDto(this CreatePlanetRequestDto planetDto)
        {
            return new Planet
            {
                Symbol = planetDto.Symbol,
                Name = planetDto.Name,
                Color = planetDto.Color,
                Size = planetDto.Size,
                Speed = planetDto.Speed,
            };
        }
    }
}