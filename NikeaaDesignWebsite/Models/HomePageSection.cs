
using Microsoft.AspNetCore.Mvc;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Permissions;

namespace NikeaaDesignWebsite.Models
{
	public class HomePageSection
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public string Description { get; set; }
		public string TextAlign { get; set; }
		public string Image { get; set; }
		public Int16 SortOrder { get; set; }
		public bool IsActive { get; set; }
		public string LinkUrl { get; set; }
		[NotMapped]
		public string ImageBase64 { get; set; }
	}
}
