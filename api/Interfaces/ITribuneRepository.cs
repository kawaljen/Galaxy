using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Helpers;
using api.Models;

namespace api.Interfaces
{
    public interface ITribuneRepository
    {
        Task<List<TribuneArticle>> GetAllAsync(QueryObject query);

        Task<TribuneArticle> CreateAsync(TribuneArticle tribuneArticleModel);

        Task<TribuneArticle?> GetByIdAsync(int id);

    }
}