using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FluentNHibernate.Mapping;
using MvcAngular2._Domain;

namespace MvcAngular2._Mapping
{
    public class UsersMap : ClassMap<User>
    {
        public UsersMap()
        {
            Id(c => c.uID);
            Map(c => c.uName);
            Map(c => c.uAge);
            Map(c => c.uGroup);
        }
    }
}