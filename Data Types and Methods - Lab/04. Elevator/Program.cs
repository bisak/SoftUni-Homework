using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication11
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int p = int.Parse(Console.ReadLine());
            int count = 0;
            for (int i = n; n > 0; i--)
            {
                n = n - p;
                count++;
            }
            Console.WriteLine(count);
        }
    }
}
