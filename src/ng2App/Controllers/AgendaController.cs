using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ng2App.Models;
using System.Threading.Tasks;
using System.Net;
using Newtonsoft.Json;
// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ng2App.Controllers
{
    [Route("api/[controller]")]
    public class AgendaController : Controller
    {
        // GET: api/values
        [HttpGet]
        public string Get()
        {
            var agendaList = new List<AgendaSummary>();
            agendaList.Add(new AgendaSummary { Id = 1, Name = "The First Agenda" });
            agendaList.Add(new AgendaSummary { Id = 2, Name = "The Second Agenda" });
            return JsonConvert.SerializeObject(agendaList);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Agenda), 200)]
        public string Get(int id)
        {
            var witness = new Witness { Name = "John Doe", Position = "Staff" };
            var organisation = new OrganisationIndividual { Name = "Org One", Witnesses = new List<Witness> { witness } };
            var hearing = new HearingOfEvidence { Name = "Hearing One", Organisations = new List<OrganisationIndividual> { organisation } };
            var itemofbusiness = new ItemOfBusiness { Name = "Business Item One", HearingOfEvidences = new List<HearingOfEvidence> { hearing } };


            var witness2 = new Witness { Name = "Jia Han", Position = "Staff" };
            var organisation2 = new OrganisationIndividual { Name = "Org Two", Witnesses = new List<Witness> { witness2 } };
            var hearing2 = new HearingOfEvidence { Name = "Hearing Two", Organisations = new List<OrganisationIndividual> { organisation2 } };
            var itemofbusiness2 = new ItemOfBusiness { Name = "Business Item Two", HearingOfEvidences = new List<HearingOfEvidence> { hearing2 } };


            var witness3 = new Witness { Name = "John Doe", Position = "Staff" };
            var organisation3 = new OrganisationIndividual { Name = "Org One", Witnesses = new List<Witness> { witness3 } };
            var hearing3 = new HearingOfEvidence { Name = "Hearing One", Organisations = new List<OrganisationIndividual> { organisation3 } };
            var itemofbusiness3 = new ItemOfBusiness { Name = "Business Item One", HearingOfEvidences = new List<HearingOfEvidence> { hearing3 } };


            var witness4 = new Witness { Name = "Jia Han", Position = "Staff" };
            var organisation4 = new OrganisationIndividual { Name = "Org Two", Witnesses = new List<Witness> { witness4 } };
            var hearing4 = new HearingOfEvidence { Name = "Hearing Two", Organisations = new List<OrganisationIndividual> { organisation4 } };
            var itemofbusiness4 = new ItemOfBusiness { Name = "Business Item Two", HearingOfEvidences = new List<HearingOfEvidence> { hearing4 } };


            var agenda = new Agenda() { Name = id==1? "Agenda One": "Agenda Two", ItemOfBusinesses = new List<ItemOfBusiness> { itemofbusiness, itemofbusiness2, itemofbusiness3, itemofbusiness4 } };
            return JsonConvert.SerializeObject(agenda);
        }

        // POST api/values
        [HttpPost]
        public bool Post([FromBody]Agenda value)
        {
            var agendaJson = JsonConvert.SerializeObject(value);
            var doc = JsonConvert.DeserializeXNode(agendaJson, "Agenda");
            return value != null;
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
