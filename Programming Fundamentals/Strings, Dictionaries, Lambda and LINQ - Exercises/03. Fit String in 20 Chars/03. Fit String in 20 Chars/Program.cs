using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Fit_String_in_20_Chars
{
    class Program
    {
        static void Main(string[] args)
        {
            string str = Console.ReadLine();
            string result="";
            if (str.Length < 20) result = str.PadRight(20, '*');
            if (str.Length > 20) result = str.Substring(0, 20);
            Console.WriteLine(result);

        }
    }
}
