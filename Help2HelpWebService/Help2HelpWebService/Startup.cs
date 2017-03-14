using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Help2HelpWebService.Startup))]

namespace Help2HelpWebService
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureMobileApp(app);
        }
    }
}