using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.Palindromes
{
    class Program
    {
        static void Main(string[] args)
        {
            char[] separators = new char[] { ' ', ',', '.', '?', '!' };
            string[] words = Console.ReadLine().Split(separators, StringSplitOptions.RemoveEmptyEntries);
            List<string> result = new List<string>();
            foreach (string word in words)
            {
                if (IsPalindrome(word)) result.Add(word);
            }
            result.Sort();
            result = result.Distinct().ToList() ;
            Console.WriteLine(string.Join(", ", result));
        }
        public static bool IsPalindrome(string value)
        {
            int min = 0;
            int max = value.Length - 1;
            while (true)
            {
                if (min > max)
                {
                    return true;
                }
                char a = value[min];
                char b = value[max];
                if (a != b)
                {
                    return false;
                }
                min++;
                max--;
            }
        }
    }
}
