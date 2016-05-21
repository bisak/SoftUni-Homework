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
            string str = Console.ReadLine();
            bool check = Convert.ToBoolean(str);
            if (check) Console.WriteLine("Yes");
            else Console.WriteLine("No");

        }
    }
}
