using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Description;
using WaReentryResourceGuide.DAL;
using WaReentryResourceGuide.Models;

namespace WaReentryResourceGuide.Controllers
{
    public class ServiceProvidersController : ApiController
    {
        private ReentryContext db = new ReentryContext();

        // GET: api/ServiceProviders
        public IQueryable<ServiceProviderDTO> GetServiceProviders()
        {
            var serviceProviders = db.ServiceProviders
                            .Include(t => t.Excluded)
                            .Include(t => t.Owners)
                            .Include(t => t.QualityFlags)
                            .Include(t => t.Supported);

            List<ServiceProviderDTO> dtos = new List<ServiceProviderDTO>();
            foreach (var serviceProvider in serviceProviders)
            {
                ServiceProviderDTO dto = CreateDTO(serviceProvider);
                dtos.Add(dto);
            }

            return dtos.AsQueryable<ServiceProviderDTO>();
        }

        // GET: api/ServiceProviders/5
        [ResponseType(typeof(ServiceProviderDTO))]
        public IHttpActionResult GetServiceProvider(int id)
        {
            ServiceProvider serviceProvider = db.ServiceProviders.Find(id);
            if (serviceProvider == null)
            {
                return NotFound();
            }

            return Ok(CreateDTO(serviceProvider));
        }

        // PUT: api/ServiceProviders/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutServiceProvider(int id, ServiceProviderDTO serviceProviderDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != serviceProviderDto.ID)
            {
                return BadRequest();
            }

            var serviceProvider = CreateServiceProvider(serviceProviderDto);

            db.Entry(serviceProvider).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceProviderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ServiceProviders
        [ResponseType(typeof(ServiceProviderDTO))]
        public IHttpActionResult PostServiceProvider(ServiceProviderDTO serviceProviderDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var serviceProvider = CreateServiceProvider(serviceProviderDto);

            db.ServiceProviders.Add(serviceProvider);
            db.SaveChanges();

            serviceProviderDto.ID = serviceProvider.ID;

            return CreatedAtRoute("DefaultApi", new { id = serviceProvider.ID }, serviceProviderDto);
        }

        // DELETE: api/ServiceProviders/5
        [ResponseType(typeof(ServiceProvider))]
        public IHttpActionResult DeleteServiceProvider(int id)
        {
            ServiceProvider serviceProvider = db.ServiceProviders.Find(id);
            if (serviceProvider == null)
            {
                return NotFound();
            }

            db.ServiceProviders.Remove(serviceProvider);
            db.SaveChanges();

            return Ok(serviceProvider);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private static ServiceProviderDTO CreateDTO(ServiceProvider serviceProvider)
        {
            return new ServiceProviderDTO()
            {
                ID = serviceProvider.ID,
                Name = serviceProvider.Name,
                Description = serviceProvider.Description,
                PhoneNumber = serviceProvider.PhoneNumber,
                Email = serviceProvider.Email,
                Website = serviceProvider.Website,
                Address = serviceProvider.Address,
                GenderApplicability = new GenderApplicability
                {
                    Male = serviceProvider.Supported?.Any(t => t.Attribute == EligibilityCategory.Male) ?? false,
                    Female = serviceProvider.Supported?.Any(t => t.Attribute == EligibilityCategory.Female) ?? false,
                },
                County = serviceProvider.County,
                ServiceTags = serviceProvider.ServicesProvided?.Split(new char[] { ',' }),
            };
        }

        private static ServiceProvider CreateServiceProvider(ServiceProviderDTO serviceProviderDto)
        {
            var sp = new ServiceProvider
            {
                ID = serviceProviderDto.ID,
                Name = serviceProviderDto.Name,
                Description = serviceProviderDto.Description,
                Email = serviceProviderDto.Email,
                PhoneNumber = serviceProviderDto.PhoneNumber,
                Address = serviceProviderDto.Address,
                Website = serviceProviderDto.Website,
                County = serviceProviderDto.County,
                Supported = new List<EligibilityAttribute>(),
            };

            if (serviceProviderDto.ServiceTags != null)
            {
                List<string> categories = new List<string>();
                foreach (var tag in serviceProviderDto.ServiceTags)
                {
                    var category = (ResourceCategory)Enum.Parse(typeof(ResourceCategory), tag);
                    categories.Add(category.ToString());
                }

                sp.ServicesProvided = string.Join(",", categories);
            }

            if (serviceProviderDto.GenderApplicability?.Male ?? false)
            {
                sp.Supported.Add(new EligibilityAttribute { Attribute = EligibilityCategory.Male });
            }

            if (serviceProviderDto.GenderApplicability?.Female ?? false)
            {
                sp.Supported.Add(new EligibilityAttribute { Attribute = EligibilityCategory.Female });
            }

            return sp;
        }

        private bool ServiceProviderExists(int id)
        {
            return db.ServiceProviders.Count(e => e.ID == id) > 0;
        }
    }
}