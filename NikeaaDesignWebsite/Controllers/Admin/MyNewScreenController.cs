﻿﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NikeaaDesignWebsite.Models;

namespace NikeaaDesignWebsite.Api.Admin
{
	[Route("api/admin/my-new-screen")]
	[ApiController]
	public class MyNewScreenController : ControllerBase
	{
		private readonly NikeaaDesignDBContext _context;

		public MyNewScreenController(NikeaaDesignDBContext context)
		{
			_context = context;
		}

		// GET: api/admin/my-new-screen
		[HttpGet]
		public async Task<ActionResult<IEnumerable<MyNewScreen>>> GetMyNewScreen(int? page, int? size)
		{
			IQueryable<MyNewScreen> data = _context.MyNewScreen;

			if (page != null && size != null)
			{
				data = data.Skip(((int)page - 1) * (int)size).Take((int)size);
			}

			return await data.ToListAsync();
		}

		// GET: api/admin/my-new-screen/5
		[HttpGet("{id}")]
		public async Task<ActionResult<MyNewScreen>> GetMyNewScreen(int id)
		{
			var MyNewScreen = await _context.MyNewScreen.FindAsync(id);

			if (MyNewScreen == null)
			{
				return NotFound();
			}

			return MyNewScreen;
		}

		// PUT: api/admin/my-new-screen/5
		// To protect from overposting attacks, enable the specific properties you want to bind to, for
		// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
		[HttpPut("{id}")]
		public async Task<IActionResult> PutMyNewScreen(int id, MyNewScreen myNewScreen)
		{
			if (id != myNewScreen.Id)
			{
				return BadRequest();
			}

			_context.Entry(MyNewScreen).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!MyNewScreenExists(id))
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

		// POST: api/admin/my-new-screen
		// To protect from overposting attacks, enable the specific properties you want to bind to, for
		// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
		[HttpPost]
		public async Task<ActionResult<MyNewScreen>> PostMyNewScreen(MyNewScreen myNewScreen)
		{
			_context.MyNewScreen.Add(myNewScreen);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetMyNewScreen", new { id = myNewScreen.Id }, MyNewScreen);
		}

		// DELETE: api/admin/my-new-screen/5
		[HttpDelete("{id}")]
		public async Task<ActionResult<MyNewScreen>> DeleteMyNewScreen(int id)
		{
			MyNewScreen myNewScreen = await _context.MyNewScreen.FindAsync(id);
			if (myNewScreen == null)
			{
				return NotFound();
			}

			_context.MyNewScreen.Remove(myNewScreen);
			await _context.SaveChangesAsync();

			return myNewScreen;
		}

		private bool MyNewScreenExists(int id)
		{
			return _context.MyNewScreen.Any(e => e.Id == id);
		}
	}
}
