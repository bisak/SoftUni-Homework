using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Reverse_Array_of_Strings
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] stringArr = Console.ReadLine().Split(' ').ToArray();
            /*[] stringArr2 = new string[stringArr.Length];
            for (int i = 0, j = stringArr.Length-1; i < stringArr.Length; i++,  j--)
            {
                stringArr2[j] = stringArr[i];
            }
            *///another way ot mnanually doing it.
            Console.WriteLine(string.Join(" ", stringArr.Reverse()));
        }
    }
}
