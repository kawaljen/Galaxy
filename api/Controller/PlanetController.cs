using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos;
using api.Dtos.Planet;
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
        public async Task<IActionResult> Getall()
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var planets  = await _planetRepo.GetAllAsync();
            var planetDto = planets.Select(s=>s.ToPlanetDto());

            return planetDto== null ? NotFound() : Ok(planetDto);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute]int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var planet  = await _planetRepo.GetByIdAsync(id);
            return planet== null ? NotFound() : Ok(planet.ToPlanetDto());

        }
        [HttpPost]
        public async Task<IActionResult> Create ([FromBody] CreatePlanetRequestDto planetDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var planetModel =   planetDto.ToPlanetFromCreateDto();
            await _planetRepo.CreateAsync(planetModel);

            return CreatedAtAction(nameof(GetById), new {id = planetModel.Id}, planetModel.ToPlanetDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdatePlanetRequestDto updateDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var planet = await _planetRepo.UpdateAsync(id, updateDto);
            return planet== null ? NotFound() : Ok(planet);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var planetModel = await _planetRepo.DeleteAsync(id);
            return planetModel== null ? NotFound() : Ok(planetModel.ToPlanetDto());
        }
    }
}