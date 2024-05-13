using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controller
{
    [ApiController]
    [Route("api/planet")]
    public class PlanetController : ControllerBase
    {
        private readonly IPlanetRepository _planetRepo;
        public PlanetController(IPlanetRepository planetRepo)
        {
            _planetRepo = planetRepo;
        }
        
        [HttpGet]
        public async Task<IActionResult> Getall(){
            var planets  = await _planetRepo.GetAllAsync();

            var planetDto = planets.Select(s=>s.ToPlanetDto());

            return planetDto== null ? NotFound() : Ok(planetDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute]int id){
            var planet  = await _planetRepo.GetByIdAsync(id);


             return planet== null ? NotFound() : Ok(planet.ToPlanetDto());

        }
        [HttpPost]
        public async Task<IActionResult> Create ([FromBody] CreatePlanetRequestDto planetDto)
        {
            var planetModel =   planetDto.ToPlanetFromCreateDto();
            await _planetRepo.CreateAsync(planetModel);

            return CreatedAtAction(nameof(GetById), new {id = planetModel.Id}, planetModel.ToPlanetDto());
        }
    }
}