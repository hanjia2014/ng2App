using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ng2App.Controllers
{
    [Route("api/test/[controller]")]
    public class AgendaTestController : Controller
    {
        public const string FullAgendaString = "this is the test";
        // GET: api/values
        [HttpGet]
        public string Get()
        {
            return FullAgendaString;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return FullAgendaString;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
