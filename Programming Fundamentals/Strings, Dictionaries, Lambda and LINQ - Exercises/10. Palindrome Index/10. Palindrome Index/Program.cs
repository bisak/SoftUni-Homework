using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Palindrome_Index
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            int length = input.Length;
            if (input.Length <= 1) Console.WriteLine(0);
            else if (input == ReverseString(input)) Console.WriteLine(-1);
            else
            {
                for (int i = 0; i < input.Length; i++)
                {
                    if (input.Remove(i, 1) == ReverseString(input.Remove(i, 1))) Console.WriteLine(i);
                }
            } 
        }
        public static string ReverseString(string s)
        {
            char[] arr = s.ToCharArray();
            Array.Reverse(arr);
            return new string(arr);
        }
    }
}
