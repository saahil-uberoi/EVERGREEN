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
    public class InsertDataController : Controller
    {
        // GET: InsertData
        public ActionResult InsertData()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(HttpPostedFileBase file)
        {
            string filename = Guid.NewGuid() + Path.GetExtension(file.FileName);
            string filepath = "/excelfolder/" + filename;
            file.SaveAs(Path.Combine(Server.MapPath("/excelfolder"), filename));
            InsertExceldata(filepath, filename);

            return View();
        }

        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ConnectionString);

        OleDbConnection Econ;

        private void ExcelConn(string filepath)

        {
            string constr = string.Format(@"Server=tcp:fit5120-ie-dbdbserver.database.windows.net,1433;Initial Catalog=FIT5120_IE_DB;Persist Security Info=False;User ID=quinbyyan;Password=duderlypa$$word1;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;", filepath);
            Econ = new OleDbConnection(constr);
        }

        private void InsertExceldata(string fileepath, string filename)
        {
            string fullpath = Server.MapPath("/excelfolder/") + filename;
            ExcelConn(fullpath);
            string query = string.Format("Select * from [{0}]", "Sheet1$");
            OleDbCommand Ecom = new OleDbCommand(query, Econ);
            Econ.Open();
            DataSet ds = new DataSet();
            OleDbDataAdapter oda = new OleDbDataAdapter(query, Econ);
            Econ.Close();
            oda.Fill(ds);
            DataTable dt = ds.Tables[0];
            SqlBulkCopy objbulk = new SqlBulkCopy(con);

            objbulk.DestinationTableName = "Fauna_vvp";

            objbulk.ColumnMappings.Add("ID", "ID");

            objbulk.ColumnMappings.Add("COMMON_NAME", "COMMON_NAME");

            objbulk.ColumnMappings.Add("IMG_URL", "IMG_URL");

            con.Open();
            objbulk.WriteToServer(dt);
            con.Close();

        }



    }
}