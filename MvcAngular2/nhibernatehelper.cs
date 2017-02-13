using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NHibernate;
using NHibernate.Cfg;
using FluentNHibernate;
using FluentNHibernate.Cfg;
using NHibernate.Tool;

namespace MvcAngular2
{
    public class nhibernatehelper
    {
        private static ISessionFactory _sessionFactory;
        private static ISessionFactory sessionFactory { get { return _sessionFactory; } }

        private nhibernatehelper() { }

        public static ISession OpenSession()
        {
            if (_sessionFactory == null)
            {
                var config = new Configuration();
                config.Configure();
                _sessionFactory = FluentNHibernate.Cfg.Fluently.Configure(config)
                    .Mappings(m => m.FluentMappings.AddFromAssemblyOf<MvcApplication>())
                    .ExposeConfiguration(cfg => new NHibernate.Tool.hbm2ddl.SchemaExport(cfg)).BuildSessionFactory();
            }

            return _sessionFactory.OpenSession();
        }
    }
}