using System.Web.Optimization;

namespace HomeApplication
{
    /// <summary>
    /// The bundle config.
    /// </summary>
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862

        /// <summary>
        /// The register bundles.
        /// </summary>
        /// <param name="bundles">
        /// The bundles.
        /// </param>
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernize to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/materialize").Include(
                      "~/Scripts/materialize/materialize.min.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/scripts").Include(
                "~/Scripts/script.js",
                "~/Scripts/input.mask.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/materialize/css/materialize.min.css",
                      "~/Content/materialize/css/materialization.min.css",
                      "~/Content/site.css"));
        }
    }
}
