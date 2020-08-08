using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NikeaaDesignWebsite.Models;

namespace NikeaaDesignWebsite.Api.Admin
{
	[Route("api/admin/template")]
	[ApiController]
	public class TemplateController : ControllerBase
	{
		private readonly NikeaaDesignDBContext _context;

		public TemplateController(NikeaaDesignDBContext context)
		{
			_context = context;
		}

		// GET: api/admin/template
		[HttpGet]
		public async Task<ActionResult<IEnumerable<AdminTemplate>>> GetAdminTemplate(int? page, int? size)
		{
			IQueryable<AdminTemplate> data = _context.AdminTemplate;

			if (page != null && size != null)
			{
				data = data.Skip(((int)page - 1) * (int)size).Take((int)size);
			}

			return await data.ToListAsync();
		}

		// GET: api/admin/template/5
		[HttpGet("{id}")]
		public async Task<ActionResult<AdminTemplate>> GetAdminTemplate(int id)
		{
			var AdminTemplate = await _context.AdminTemplate.FindAsync(id);

			if (AdminTemplate == null)
			{
				return NotFound();
			}

			return AdminTemplate;
		}

		// PUT: api/admin/template/5
		// To protect from overposting attacks, enable the specific properties you want to bind to, for
		// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
		[HttpPut("{id}")]
		public async Task<IActionResult> PutAdminTemplate(int id, AdminTemplate AdminTemplate)
		{
			if (id != AdminTemplate.Id)
			{
				return BadRequest();
			}

			_context.Entry(AdminTemplate).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!AdminTemplateExists(id))
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

		// POST: api/admin/template
		// To protect from overposting attacks, enable the specific properties you want to bind to, for
		// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
		[HttpPost]
		public async Task<ActionResult<AdminTemplate>> PostAdminTemplate(AdminTemplate AdminTemplate)
		{
			_context.AdminTemplate.Add(AdminTemplate);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetAdminTemplate", new { id = AdminTemplate.Id }, AdminTemplate);
		}

		// DELETE: api/admin/template/5
		[HttpDelete("{id}")]
		public async Task<ActionResult<AdminTemplate>> DeleteAdminTemplate(int id)
		{
			var AdminTemplate = await _context.AdminTemplate.FindAsync(id);
			if (AdminTemplate == null)
			{
				return NotFound();
			}

			_context.AdminTemplate.Remove(AdminTemplate);
			await _context.SaveChangesAsync();

			return AdminTemplate;
		}

		private bool AdminTemplateExists(int id)
		{
			return _context.AdminTemplate.Any(e => e.Id == id);
		}
	}
}
