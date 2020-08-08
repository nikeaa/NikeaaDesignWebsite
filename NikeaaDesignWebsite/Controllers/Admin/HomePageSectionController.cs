using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NikeaaDesignWebsite.Models;

namespace NikeaaDesignWebsite.Api.Admin
{
	[Route("api/admin/home-page-section")]
	[ApiController]
	public class HomePageSectionController : ControllerBase
	{
		private readonly NikeaaDesignDBContext _context;

		public HomePageSectionController(NikeaaDesignDBContext context)
		{
			_context = context;
		}

		// GET: api/admin/home-page-section
		[HttpGet]
		public async Task<ActionResult<IEnumerable<HomePageSection>>> GetAdminHomePageSection(int? page, int? size)
		{
			IQueryable<HomePageSection> data = _context.HomePageSection;

			if (page != null && size != null)
			{
				data = data.Skip(((int)page - 1) * (int)size).Take((int)size);
			}

			return await data.ToListAsync();
		}

		// GET: api/admin/home-page-section/5
		[HttpGet("{id}")]
		public async Task<ActionResult<HomePageSection>> GetAdminHomePageSection(int id)
		{
			var AdminHomePageSection = await _context.HomePageSection.FindAsync(id);

			if (AdminHomePageSection == null)
			{
				return NotFound();
			}

			return AdminHomePageSection;
		}

		// PUT: api/admin/home-page-section/5
		// To protect from overposting attacks, enable the specific properties you want to bind to, for
		// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
		[HttpPut("{id}")]
		public async Task<IActionResult> PutAdminHomePageSection(int id, HomePageSection AdminHomePageSection)
		{
			if (id != AdminHomePageSection.Id)
			{
				return BadRequest();
			}

			_context.Entry(AdminHomePageSection).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!AdminHomePageSectionExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return NoContent();
		}

		// POST: api/admin/home-page-section
		// To protect from overposting attacks, enable the specific properties you want to bind to, for
		// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
		[HttpPost]
		public async Task<ActionResult<HomePageSection>> PostAdminHomePageSection(HomePageSection HomePageSection)
		{
			_context.HomePageSection.Add(HomePageSection);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetHomePageSection", new { id = HomePageSection.Id }, HomePageSection);
		}

		// DELETE: api/admin/home-page-section/5
		[HttpDelete("{id}")]
		public async Task<ActionResult<HomePageSection>> DeleteAdminHomePageSection(int id)
		{
			var AdminHomePageSection = await _context.HomePageSection.FindAsync(id);
			if (AdminHomePageSection == null)
			{
				return NotFound();
			}

			_context.HomePageSection.Remove(AdminHomePageSection);
			await _context.SaveChangesAsync();

			return AdminHomePageSection;
		}

		private bool AdminHomePageSectionExists(int id)
		{
			return _context.HomePageSection.Any(e => e.Id == id);
		}
	}
}
