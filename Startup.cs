using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(IE_Project.Startup))]
namespace IE_Project
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
