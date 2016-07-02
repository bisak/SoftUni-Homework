using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.Index_of_Letters
{
    class Program
    {
        static void Main(string[] args)
        {
            string str = Console.ReadLine();
            char[] first = str.ToCharArray();
            int[] firstNumer = new int[first.Length];
            for (int i = 0; i < first.Length; i++)
            {
                firstNumer[i] = Convert.ToInt32(first[i]) - 97;
                Console.WriteLine("{0} -> {1}", first[i], firstNumer[i]);
            }
            
        }
    }
}
