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
    public class AdvertisementsController : TableController<Advertising>
    {
        protected override void Initialize(HttpControllerContext controllerContext)
        {
            base.Initialize(controllerContext);
            MobileServiceContext context = new MobileServiceContext();
            DomainManager = new EntityDomainManager<Advertising>(context, Request);
        }

        // GET tables/Advertisements
        public IQueryable<Advertising> GetAllAdvertising()
        {
            return Query(); 
        }

        // GET tables/Advertisements/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public SingleResult<Advertising> GetAdvertising(string id)
        {
            return Lookup(id);
        }

        // PATCH tables/Advertisements/48D68C86-6EA6-4C25-AA33-223FC9A27959
        [HttpPatch]
        public Task<Advertising> UpdateAdvertising(string id, Delta<Advertising> patch)
        {
             return UpdateAsync(id, patch);
        }

        // POST tables/Advertisements
        [HttpPost]
        public async Task<IHttpActionResult> InsertAdvertising(Advertising item)
        {
            Advertising current = await InsertAsync(item);
            return CreatedAtRoute("Tables", new { id = current.Id }, current);
        }

        // DELETE tables/Advertisements/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public Task DeleteAdvertising(string id)
        {
             return DeleteAsync(id);
        }
    }
}
