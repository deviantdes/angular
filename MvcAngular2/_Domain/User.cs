using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcAngular2._Domain
{
    public class User
    {
        public virtual int uID { get; set; }
        public virtual String uName { get; set; }
        public virtual String uAge { get; set; }
        public virtual String uGroup { get; set; }
    }
}