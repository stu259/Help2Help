using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.OData;
using Microsoft.Azure.Mobile.Server;
using Help2HelpWebService.DataObjects;
using Help2HelpWebService.Models;

namespace Help2HelpWebService.Controllers
{
    public class AdvertisementController : TableController<Advertisement>
    {
        protected override void Initialize(HttpControllerContext controllerContext)
        {
            base.Initialize(controllerContext);
            MobileServiceContext context = new MobileServiceContext();
            DomainManager = new EntityDomainManager<Advertisement>(context, Request);
        }

        // GET tables/Advertisement
        public IQueryable<Advertisement> GetAllAdvertisement()
        {
            return Query(); 
        }

        // GET tables/Advertisement/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public SingleResult<Advertisement> GetAdvertisement(string id)
        {
            return Lookup(id);
        }

        // PATCH tables/Advertisement/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public Task<Advertisement> PatchAdvertisement(string id, Delta<Advertisement> patch)
        {
             return UpdateAsync(id, patch);
        }

        // POST tables/Advertisement
        public async Task<IHttpActionResult> PostAdvertisement(Advertisement item)
        {
            Advertisement current = await InsertAsync(item);
            return CreatedAtRoute("Tables", new { id = current.Id }, current);
        }

        // DELETE tables/Advertisement/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public Task DeleteAdvertisement(string id)
        {
             return DeleteAsync(id);
        }
    }
}
