using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections;

namespace MvcAngular2.Models
{

    public class School
    {
        private ICollection<Student> _listofStudents;
        public ICollection<Student> listofStudents
        { get
            {
                return _listofStudents;
            }
        }

        private iRepo theRepository;


        public String mvcData = "Data from MVC";

        public School(iRepo repo)
        {
            this.theRepository = repo;
        }

        public void getListofStudents()
        {
            _listofStudents = theRepository.getData().ToList().ConvertAll( z =>(Student) z).OrderBy(a => a.Level).ToList<Student>();
        }

        public void getListoflevel4Students()
        {
            _listofStudents = theRepository.getData().ToList().ConvertAll(z => (Student)z).Where(a => a.Level==4).ToList<Student>();
        }
    }

}