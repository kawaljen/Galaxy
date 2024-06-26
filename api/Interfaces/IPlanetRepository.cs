using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Planet;
using api.Models;

namespace api.Interfaces
{
    public interface IPlanetRepository
    {
        Task<List<Planet>> GetAllAsync();

        Task<Planet?> GetByIdAsync(int id);

        Task<Planet> CreateAsync(Planet planetModel);

        Task<Planet?> UpdateAsync(int id, UpdatePlanetRequestDto updateDto);
    
        Task<Planet?> DeleteAsync(int id);
    }
}