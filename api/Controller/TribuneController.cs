using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Tribune;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controller
{
    [ApiController]
    [Route("api/tribune")]
    public class TribuneController : ControllerBase
    {
        private readonly ITribuneRepository _tribuneRepo;

        public TribuneController(ITribuneRepository tribuneRepo)
        {
            _tribuneRepo = tribuneRepo;
        }
        [HttpGet]
        public async Task<IActionResult> GettAll([FromQuery] QueryObject query)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var tribunes = await _tribuneRepo.GetAllAsync(query);
            var tribunesDto = tribunes.Select(s=>s.ToTribuneArticleDto());

            return tribunesDto== null ? NotFound() : Ok(tribunesDto);
        }
    

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute]int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            var tribune  = await _tribuneRepo.GetByIdAsync(id);
             return tribune== null ? NotFound() : Ok(tribune.ToTribuneArticleDto()); 
        }

        [HttpPost]
        public async Task<IActionResult> Create ([FromBody] CreateTribuneArticleDto tribuneArticleDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            var tribuneArticleModel =   tribuneArticleDto.ToTribuneArticleFromCreateDto();
            await _tribuneRepo.CreateAsync(tribuneArticleModel);

            return CreatedAtAction(nameof(GetById), new {id = tribuneArticleModel.Id}, tribuneArticleModel.ToTribuneArticleDto());
        }
    }
}