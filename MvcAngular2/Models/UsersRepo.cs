using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NHibernate;
using MvcAngular2;
using NHibernate.Linq;

namespace MvcAngular2.Models
{
    public class UsersRepo : iRepo
    {
        public ICollection<Object> getData()
        {
            ICollection<Object> s1 = null;

            using (ISession session = nhibernatehelper.OpenSession())
            {
                using (ITransaction transaction = session.BeginTransaction())
                {
                    s1 = (from a in session.Query<_Domain.User>()
                            select a).ToList<_Domain.User>().ConvertAll(x=>(object)x);
                }
            }

                return s1;
        }
    }
}