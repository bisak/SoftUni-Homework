using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication5
{
    class Program
    {
        static void Main(string[] args)
        {
            string H = Console.ReadLine();
            int a = Convert.ToInt32(H, 16);
            Console.WriteLine(a);
        }
    }
}