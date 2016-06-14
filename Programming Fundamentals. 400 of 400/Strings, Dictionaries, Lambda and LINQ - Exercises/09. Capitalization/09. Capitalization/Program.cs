using System;
using System.Collections.Generic;
using System.Linq;

namespace _09.Capitalization
{
    class Program
    {
        static void Main(string[] args)
        {
            char[] separators = {' ','.', ',', '?', '!', ';' };
            string[] input = Console.ReadLine().Split(separators);
            string output;
            char[] arr;
            foreach(string word in input)
            {
                arr = word.ToCharArray();
                arr[0] = char.ToUpper(arr[0]);
                output = word.Substring(1);
                output = arr[0] + output + " ";
                Console.Write(output);
            }
            
        }
    }
}
