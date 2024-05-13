using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Tribune;
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
        public async Task<IActionResult> GettAll()
        {
            var tribunes = await _tribuneRepo.GetAllAsync();
            var tribunesDto = tribunes.Select(s=>s.ToString());

            return tribunesDto== null ? NotFound() : Ok(tribunesDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute]int id){
            var tribune  = await _tribuneRepo.GetByIdAsync(id);


             return tribune== null ? NotFound() : Ok(tribune.ToTribuneArticleDto()); 
        }
        [HttpPost]
        public async Task<IActionResult> Create ([FromBody] CreateTribuneArticleDto tribuneArticleDto)
        {
            var tribuneArticleModel =   tribuneArticleDto.ToTribuneArticleFromCreateDto();
            await _tribuneRepo.CreateAsync(tribuneArticleModel);

            return CreatedAtAction(nameof(GetById), new {id = tribuneArticleModel.Id}, tribuneArticleModel.ToTribuneArticleDto());
        }
    }
}