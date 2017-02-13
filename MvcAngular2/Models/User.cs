using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NHibernate;
using NHibernate.Linq;
using MvcAngular2._Domain;

namespace MvcAngular2.Models
{
    public class User
    {
        private ICollection<_Domain.User> _listofUsers;
        public ICollection<_Domain.User> listofUsers { get { return _listofUsers; } }

        private iRepo theRepo;

        public User(iRepo repo)
        {
            theRepo = repo;
        }

        public void getUsers()
        {
            _listofUsers = theRepo.getData().ToList().ConvertAll(x => (_Domain.User)x);
        }
    }
}