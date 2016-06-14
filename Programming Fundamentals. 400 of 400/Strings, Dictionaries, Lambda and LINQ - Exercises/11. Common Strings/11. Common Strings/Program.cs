using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Common_Strings
{
    class Program
    {
        static void Main(string[] args)
        {
            string one = Console.ReadLine();
            string two = Console.ReadLine();
            bool yn = false;
            for (int i = 0; i < Math.Min(one.Length,two.Length); i++)
            {
                for (int j = 0; j < Math.Max(one.Length, two.Length); j++)
                {
                    try
                    {
                        if (one[i] == two[j]) yn = true;
                    }
                    catch (Exception)
                    {
                        if (two[i] == one[j]) yn = true;
                    }
                }
            }
            if (yn) Console.WriteLine("yes");
            else Console.WriteLine("no");
        }
    }
}
//ASK!!!