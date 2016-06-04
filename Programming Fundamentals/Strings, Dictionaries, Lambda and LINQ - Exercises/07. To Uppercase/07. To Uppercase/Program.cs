using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.To_Uppercase
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string result = "";
            char[] arr = input.ToCharArray();
            int first;
            int last;
            while (input.IndexOf("<upcase>") != -1)
            {
                first = input.IndexOf("<upcase>");
                last = input.IndexOf("</upcase>");

                result = input.Substring(first + 8, last - first - 8);
                input = input.Remove(first, 8);
                input = input.Remove(last - 8, 9);
                input = input.Replace(result, result.ToUpper());
            }

            Console.WriteLine(input);

        }
    }
}
