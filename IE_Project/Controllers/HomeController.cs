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

        public ActionResult Testing()
        {
            ViewBag.Message = "Your testing page.";

            return View();
        }

        public ActionResult Wetland()
        {
            ViewBag.Message = "Your Wetland page.";

            return View();
        }

        public ActionResult HeavierSoilsPlains()
        {
            ViewBag.Message = "Your Heavier-soils Plains page.";

            return View();
        }

        public ActionResult ViewGame()
        {
            ViewBag.Message = "Your Puzzle Game page.";

            return View();
        }

        public ActionResult DragDrop()
        {
            ViewBag.Message = "Your Drag&Drop Game page.";

            return View();
        }

    }
}