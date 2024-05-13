using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Planet;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class PlanetRepository: IPlanetRepository
    {
        private readonly ApplicationDBContext _context;
        public PlanetRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Planet> CreateAsync(Planet planetModel)
        {
            await _context.Planet.AddAsync(planetModel);
            await _context.SaveChangesAsync();
            return planetModel;
        }

        public async Task<List<Planet>> GetAllAsync()
        {
            return await _context.Planet.ToListAsync();
        }

        public async Task<Planet?> GetByIdAsync(int id)
        {
            return  await _context.Planet.FindAsync(id);
        }

        public async Task<Planet?> UpdateAsync(int id, UpdatePlanetRequestDto planetDto)
        {
            var existingPlanet = await _context.Planet.FirstOrDefaultAsync(x => x.Id == id);

            if(existingPlanet ==  null)
            {
                return null;
            }
            existingPlanet.Color= planetDto.Color;
            existingPlanet.Name = planetDto.Name;

            await  _context.SaveChangesAsync();

            return existingPlanet;
        }
    }
}