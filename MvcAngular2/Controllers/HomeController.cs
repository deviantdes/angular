using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcAngular2.Models;

namespace MvcAngular2.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            School s1 = new School(new StudentsRepo());
            s1.getListofStudents();
            return View(s1);
        }
    }
}