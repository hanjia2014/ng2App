using System;

namespace ng2App.Models
{
    public abstract class BaseModel
    {
        public string Name { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }

        public BaseModel()
        {
            From = DateTime.Now;
            To = DateTime.Now;
        }
    }
}
