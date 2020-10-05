using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IE_Project.Controllers
{
    public class Iteration2Controller : Controller
    {
        // GET: Iteration2
        public ActionResult Index()
        {
            return View("Index","_IterationTwo");
        }

        public ActionResult GrassyWoodland()
        {
            ViewBag.Message = "Your Grassy Woodland page.";

            return View("GrassyWoodland", "_IterationTwo");
        }

        public ActionResult Wetland()
        {
            ViewBag.Message = "Your Wetland page.";

            return View("Wetland", "_IterationTwo");
        }
        public ActionResult Select()
        {
            ViewBag.Message = "Your Drag and Drop Select Page.";

            return View("Select", "_IterationTwo");
        }

        public ActionResult HeavierSoilsPlains()
        {
            ViewBag.Message = "Your Heavier-soils Plains page.";

            return View("HeavierSoilsPlains", "_IterationTwo");
        }
        public ActionResult RockyGrassland()
        {
            ViewBag.Message = "Your Rocky Grassland page.";

            return View("RockyGrassland", "_IterationTwo");
        }
        public ActionResult DragDropWetland()
        {
            ViewBag.Message = "Your Drag&Drop Game page.";

            return View("DragDropWetland", "_IterationTwo");
        }
        public ActionResult DragDropRocky()
        {
            ViewBag.Message = "Your Drag&Drop Game page.";

            return View("DragDropRocky", "_IterationTwo");
        }
        public ActionResult DragDropGrassland()
        {
            ViewBag.Message = "Your Drag&Drop Game page.";

            return View("DragDropGrassland", "_IterationTwo");
        }
        public ActionResult DragDropWoodland()
        {
            ViewBag.Message = "Your Drag&Drop Game page.";

            return View("DragDropGrassland", "_IterationTwo");
        }
    }
}