using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ng2App.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ng2App.Controllers
{
    [Route("api/[controller]")]
    public class AgendaController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Agenda Get(int id)
        {
            var witness = new Witness { Name = "John Doe", Position = "Staff" };
            var organisation = new OrganisationIndividual { Name = "Org One", Witnesses = new List<Witness> { witness } };
            var hearing = new HearingOfEvidence { Name = "Hearing One", Organisations = new List<OrganisationIndividual> { organisation } };
            var itemofbusiness = new ItemOfBusiness { Name = "Business Item One", HearingOfEvidences = new List<HearingOfEvidence> { hearing } };
            var agenda = new Agenda() { Name = "New Agenda", ItemOfBusinesses = new List<ItemOfBusiness> { itemofbusiness } };
            return agenda;
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
