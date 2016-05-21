using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10
{
    class Program
    {
        static void Main(string[] args)
        {
            long number = long.Parse(Console.ReadLine());
            bool bo = true;
            if (number == 1) bo = false;
            if (number % 2 == 0) bo = false;
            if (number == 2) bo = true;
            for (long i = 3; i < Math.Sqrt(number) + 1; i = i + 2)
            {
                if (number % i == 0) bo = false;
            }
            Console.WriteLine(bo);
        }
    }
}
