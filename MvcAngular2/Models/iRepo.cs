using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MvcAngular2.Models
{
    public interface iRepo
    {
         ICollection<Object> getData(); 
    }
}
