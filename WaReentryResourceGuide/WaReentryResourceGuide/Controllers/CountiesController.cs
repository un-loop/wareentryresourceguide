using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WaReentryResourceGuide.DAL;
using WaReentryResourceGuide.Models;

namespace WaReentryResourceGuide.Controllers
{
    public class CountiesController : ApiController
    {
        private ReentryContext db = new ReentryContext();

        // GET: api/Counties
        public IQueryable<string> GetCounties()
        {
            var counties = db.ServiceProviders.Select(t => t.County);
            HashSet<string> countiesToReturn = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var county in counties)
            {
                countiesToReturn.Add(county);
            }

            return countiesToReturn.AsQueryable();
        }

        //// GET: api/Counties/5
        //[ResponseType(typeof(string))]
        //public IHttpActionResult GetCounty(int id)
        //{
        //    County county = db.Counties.Find(id);
        //    if (county == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(county);
        //}

        //// PUT: api/Counties/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutCounty(int id, County county)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != county.ID)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(county).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!CountyExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        //// POST: api/Counties
        //[ResponseType(typeof(County))]
        //public IHttpActionResult PostCounty(County county)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.Counties.Add(county);
        //    db.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = county.ID }, county);
        //}

        //// DELETE: api/Counties/5
        //[ResponseType(typeof(County))]
        //public IHttpActionResult DeleteCounty(int id)
        //{
        //    County county = db.Counties.Find(id);
        //    if (county == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Counties.Remove(county);
        //    db.SaveChanges();

        //    return Ok(county);
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        //private bool CountyExists(int id)
        //{
        //    return db.Counties.Count(e => e.ID == id) > 0;
        //}
    }
}