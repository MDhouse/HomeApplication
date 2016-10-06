using System.Collections.Generic;
using System.Web.Http;

namespace HomeApplication.Controllers
{
    public class TestController : ApiController
    {
        public IEnumerable<string> Get()
        {
            return new[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }
    }
}