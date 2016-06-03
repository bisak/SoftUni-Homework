using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Forbidden_Substrings
{
    class Program
    {
        static void Main(string[] args)
        {
            string text = Console.ReadLine();
            string[] words = Console.ReadLine().Split(' ');
            foreach (string word in words)
                text = text.Replace(word, new string('*', word.Length));
            Console.WriteLine(text);
        }
    }
}
