using System.Web;
using System.Web.Optimization;

namespace MvcAngular2
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.min.css",
                      "~/Content/site.css"));

                      bundles.Add(new StyleBundle("~/bundles/script").Include(
                "~/Scripts/modernizr-2.6.2.js",
                "~/node_modules/core-js/client/shim.min.js",
                "~/node_modules/zone.js/dist/zone.js",
                "~/node_modules/reflect-metadata/Reflect.js",
                "~/node_modules/systemjs/dist/system.src.js",
                "~/systemjs.config.js"
                ));

        }
    }
}