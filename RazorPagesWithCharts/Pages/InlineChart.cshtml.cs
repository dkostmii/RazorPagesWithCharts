using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RazorPagesWithCharts.Pages
{
    public class InlineChartModel : PageModel
    {
        [BindProperty]
        public ChartData ChartData => new(
            new[] { "Hello", "comma", "SPACE", "World!" }, new[] { 3, 12, -8, 4 });

        public void OnGet()
        {
        }

        public IActionResult OnGetChartData()
        {
            return new JsonResult(ChartData);
        }
    }
}
