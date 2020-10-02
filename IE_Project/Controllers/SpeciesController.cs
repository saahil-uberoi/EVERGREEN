using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Web.UI;
using IE_Project.Models;

namespace IE_Project.Controllers
{
    public class SpeciesController : Controller
    {
        private SpeciesDbModel db = new SpeciesDbModel();

        // GET: Species
        public ActionResult Index()
        {
            var species = db.Species.Include(s => s.Category1);
            return View(species.ToList());
        }

        public ActionResult Index2()
        {
            var species = db.Species.Include(s => s.Category1);
            return View(species.ToList());
        }

        public ActionResult Index1()
        {
            var species = db.Species.Include(s => s.Category1);
            return View(species.ToList());
        }

        // GET: Species/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Species species = db.Species.Find(id);
            if (species == null)
            {
                return HttpNotFound();
            }
            return View(species);
        }

        // GET: Species/Create
        public ActionResult Create()
        {
            ViewBag.categoryID = new SelectList(db.Categories, "categoryID", "category1");
            return View();
        }

        // POST: Species/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "speciesId,name,type,category,habitant,status,description,categoryID")] Species species)
        {
            if (ModelState.IsValid)
            {
                db.Species.Add(species);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.categoryID = new SelectList(db.Categories, "categoryID", "category1", species.categoryID);
            return View(species);
        }

        // GET: Species/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Species species = db.Species.Find(id);
            if (species == null)
            {
                return HttpNotFound();
            }
            ViewBag.categoryID = new SelectList(db.Categories, "categoryID", "category1", species.categoryID);
            return View(species);
        }

        // POST: Species/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "speciesId,name,type,category,habitant,status,description,categoryID")] Species species)
        {
            if (ModelState.IsValid)
            {
                db.Entry(species).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.categoryID = new SelectList(db.Categories, "categoryID", "category1", species.categoryID);
            return View(species);
        }

        // GET: Species/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Species species = db.Species.Find(id);
            if (species == null)
            {
                return HttpNotFound();
            }
            return View(species);
        }

        // POST: Species/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Species species = db.Species.Find(id);
            db.Species.Remove(species);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpPost]
        public ActionResult Index(string searchTxt)
        {
            var species = db.Species.ToList();
            if (searchTxt != null)
            {
                species = db.Species.Where(x => x.name.Contains(searchTxt)).ToList();
            }
            return View(species);
        }

        [HttpPost]
        public ActionResult Index1(string searchTxt)
        {
            var species = db.Species.ToList();
            if (searchTxt != null)
            {
                species = db.Species.Where(x => x.name.Contains(searchTxt)).ToList();
            }
            return View(species);
        }

        [HttpPost]
        public ActionResult Index2(string searchTxt)
        {
            var species = db.Species.ToList();
            if (searchTxt != null)
            {
                species = db.Species.Where(x => x.name.Contains(searchTxt)).ToList();
            }
            return View(species);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
