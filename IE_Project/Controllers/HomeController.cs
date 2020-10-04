using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.OleDb;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IE_Project.Controllers
{
    
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Grasslands()
        {
            ViewBag.Message = "Your information page.";

            return View();
        }

        public ActionResult GrassyWoodland()
        {
            ViewBag.Message = "Your grassy woodland page.";

            return View();
        }

        public ActionResult Wetland()
        {
            ViewBag.Message = "Your wetland page.";

            return View();
        }

        public ActionResult HeavierSoilsPlains()
        {
            ViewBag.Message = "Your heavier-soils plains page.";

            return View();
        }

        public ActionResult SeeMore1()
        {
            ViewBag.Message = "Your SeeMore1 page.";

            return View();
        }
        public ActionResult SeeMore2()
        {
            ViewBag.Message = "Your SeeMore2 page.";

            return View();
        }

        public ActionResult SeeMore3()
        {
            ViewBag.Message = "Your SeeMore3 page.";

            return View();
        }

        public ActionResult MemoryCard()
        {
            ViewBag.Message = "Your Memory Card Game page.";

            return View();
        }

        public ActionResult Select()
        {
            ViewBag.Message = "Your Game Selection page.";

            return View();
        }

        public ActionResult DragDropWetland()
        {
            ViewBag.Message = "Your Drag&Drop Game page.";

            return View();
        }
        public ActionResult DragDropRocky()
        {
            ViewBag.Message = "Your Drag&Drop Game page.";

            return View();
        }
        public ActionResult DragDropGrassland()
        {
            ViewBag.Message = "Your Drag&Drop Game page.";

            return View();
        }
        public ActionResult DragDropWoodland()
        {
            ViewBag.Message = "Your Drag&Drop Game page.";

            return View();
        }

    }
}