using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcAngular2.Models
{
    public class StudentsRepo : iRepo
    {
        public ICollection<Object> getData()
        {
            ICollection<Object> s1 = new List<Object>();
            s1.Add(new Student() { Name="desmond1",Age=22,Level=4 });
            s1.Add(new Student() { Name = "desmond2", Age = 23, Level = 4 });
            s1.Add(new Student() { Name = "desmond3", Age = 24, Level = 1 });
            s1.Add(new Student() { Name = "desmond4", Age = 25, Level = 1 });
            s1.Add(new Student() { Name = "desmond5", Age = 26, Level = 2 });
            s1.Add(new Student() { Name = "desmond6", Age = 27, Level = 2 });
            s1.Add(new Student() { Name = "desmond7", Age = 28, Level = 3 });
            return s1;
        }
    }
}