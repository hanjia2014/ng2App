using System.Collections.Generic;

namespace ng2App.Models
{
    public class HearingOfEvidence : BaseModel
    {
        public List<OrganisationIndividual> Organisations { get; set; }
    }
}
