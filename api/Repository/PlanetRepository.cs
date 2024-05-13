using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Models;
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
    }
}