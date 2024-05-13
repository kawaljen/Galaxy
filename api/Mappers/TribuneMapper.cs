using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Tribune;
using api.Models;

namespace api.Mappers
{
    public static class TribuneMapper
    {
        public static TribuneArticleDto ToTribuneArticleDto(this TribuneArticle tribuneModel){
            return new TribuneArticleDto
            {
                Id=  tribuneModel.Id,
                PlanetId =  tribuneModel.PlanetId,
                Title =  tribuneModel.Title,
                Content =  tribuneModel.Content,
                CreateOn =  tribuneModel.CreateOn
            };
        }

    
        public static TribuneArticle ToTribuneArticleFromCreateDto(this CreateTribuneArticleDto TribuneDto)
        {
            return new TribuneArticle
            {
                PlanetId =  TribuneDto.PlanetId,
                Title =  TribuneDto.Title,
                Content =  TribuneDto.Content,
                CreateOn =  TribuneDto.CreateOn
            };
        }
    }
}