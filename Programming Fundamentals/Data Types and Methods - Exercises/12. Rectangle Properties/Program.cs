using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2
{
    class Program
    {
        static void Main(string[] args)
        {
            double w = double.Parse(Console.ReadLine());
            double h = double.Parse(Console.ReadLine());
            double perimeter = w * 2 + h * 2;
            double area = w * h;
            double diag = Math.Sqrt(h * h + w * w);
            Console.WriteLine(perimeter);
            Console.WriteLine(area);
            Console.WriteLine(diag);
        }
    }
}
