using System.Collections.Generic;

namespace ng2App.Models
{
    public class Agenda
    {
        public string Name { set; get; }
        public List<ItemOfBusiness> ItemOfBusinesses { get; set; }
    }
}
