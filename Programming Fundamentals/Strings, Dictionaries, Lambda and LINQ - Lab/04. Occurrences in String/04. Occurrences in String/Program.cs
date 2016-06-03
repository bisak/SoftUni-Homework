using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Occurrences_in_String
{
    class Program
    {
        static void Main(string[] args)
        {
            string main = Console.ReadLine().ToLower();
            string sub = Console.ReadLine().ToLower();
            int count=0;
            int offset = -1;
            while (true)
            { 
                
               offset = main.IndexOf(sub, offset+1);
                if (offset == -1) break;
                count++;
            }

            Console.WriteLine(count);
        }
    }
}
