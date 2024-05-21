using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Helpers;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class TribuneRepository : ITribuneRepository
    {
        private readonly ApplicationDBContext _context;
        public TribuneRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<TribuneArticle> CreateAsync(TribuneArticle tribuneArticleModel)
        {
            await _context.TribuneArticle.AddAsync(tribuneArticleModel);
            await _context.SaveChangesAsync();
            return tribuneArticleModel;
        }

        public async Task<List<TribuneArticle>> GetAllAsync(QueryObject query)
        {
            var tribunes =  _context.TribuneArticle.AsQueryable();

            if(!string.IsNullOrWhiteSpace(query.Title)){
                tribunes = tribunes.Where(s=> s.Title.Contains(query.Title));
            }
            return await tribunes.ToListAsync();
        }

        public async Task<TribuneArticle?> GetByIdAsync(int id)
        {
             return  await _context.TribuneArticle.FindAsync(id);
        }
    }
}