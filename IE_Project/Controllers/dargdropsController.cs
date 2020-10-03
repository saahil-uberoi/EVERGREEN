using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using IE_Project.Models;

namespace IE_Project.Controllers
{
    public class dargdropsController : Controller
    {
        private Dgame db = new Dgame();

        // GET: dargdrops
        public ActionResult Index()
        {
            return View(db.dargdrops.ToList());
        }

        // GET: dargdrops/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            dargdrop dargdrop = db.dargdrops.Find(id);
            if (dargdrop == null)
            {
                return HttpNotFound();
            }
            return View(dargdrop);
        }

        // GET: dargdrops/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: dargdrops/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,name,score")] dargdrop dargdrop)
        {
            if (ModelState.IsValid)
            {
                db.dargdrops.Add(dargdrop);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(dargdrop);
        }

        // GET: dargdrops/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            dargdrop dargdrop = db.dargdrops.Find(id);
            if (dargdrop == null)
            {
                return HttpNotFound();
            }
            return View(dargdrop);
        }

        // POST: dargdrops/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,name,score")] dargdrop dargdrop)
        {
            if (ModelState.IsValid)
            {
                db.Entry(dargdrop).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(dargdrop);
        }

        // GET: dargdrops/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            dargdrop dargdrop = db.dargdrops.Find(id);
            if (dargdrop == null)
            {
                return HttpNotFound();
            }
            return View(dargdrop);
        }

        // POST: dargdrops/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            dargdrop dargdrop = db.dargdrops.Find(id);
            db.dargdrops.Remove(dargdrop);
            db.SaveChanges();
            return RedirectToAction("Index");
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
