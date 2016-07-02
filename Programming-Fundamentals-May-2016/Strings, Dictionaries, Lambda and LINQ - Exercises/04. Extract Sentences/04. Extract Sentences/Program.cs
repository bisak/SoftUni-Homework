using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Extract_Sentences
{
    class Program
    {
        static void Main(string[] args)
        {
            string phrase = Console.ReadLine() + " "; // string phrase = " " + Console.ReadLine() + " "; НЕ РАБОТИ!!!!
            char[] separators = new char[] { '.', '?', '!' };
            string[] sentences = Console.ReadLine().Split(separators, StringSplitOptions.RemoveEmptyEntries);
            List<string> results = new List<string>();
            foreach (string sentence in sentences)
            {
                if (sentence.Contains(phrase))
                {
                    results.Add(sentence.Trim());
                }
            }

            Console.WriteLine(string.Join("\r\n", results));
        }
    }
}
