using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Average_Grades
{
    class Program
    {
        static void Main(string[] args)
        {
            Student stud = new Student();
            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                string[] entry = Console.ReadLine().Split().ToArray();
                List<double> input = new List<double>();
                for (int j = 1; j < input.Count; j++)
                {
                    input.Add(double.Parse(entry[j]));
                }
                stud.Name = entry[0];
                stud.Grades = input;
                Console.Write(stud.Name + "->");
                Console.WriteLine(stud.AverageGrade);
            }

            
            
        }
    }
    class Student
    {
        public string Name { get; set; }
        public List<double> Grades { get; set; }
        public double AverageGrade
        {
            get
            {
                return Grades.Average(x => x);
            }
        }
    }
}