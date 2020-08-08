using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NikeaaDesignWebsite.Models;

namespace NikeaaDesignWebsite.Api.Admin
{
	[Route("api/home")]
	[ApiController]
	public class HomeController : ControllerBase
	{
		private readonly NikeaaDesignDBContext _context;

		public HomeController(NikeaaDesignDBContext context)
		{
			_context = context;
		}

		// GET: api/home
		[HttpGet]
		public async Task<ActionResult<IEnumerable<HomePageSection>>> GetActiveSections()
		{
			return await _context.HomePageSection.Where(hps => hps.IsActive).OrderBy(hps => hps.SortOrder).ToListAsync();
		}
	}
}
