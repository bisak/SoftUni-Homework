using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Reverse_Words_in_Sente
{
    class Program
    {
        static void Main(string[] args)
        {
            char[] separators = { '.', ',', ':', ';', '=', '(', ')', '&', '[', ']', '"', '\'', '\\', '/', '!', '?', ' ' };
            string input = Console.ReadLine();
            string[] words = input.Split(separators, StringSplitOptions.RemoveEmptyEntries);
            string[] seps = input.Split(words, StringSplitOptions.RemoveEmptyEntries);
            Array.Reverse(words);
            for (int i = 0; i < Math.Max(words.Length, seps.Length); i++)
            {
                try
                {
                    Console.Write(words[i] + seps[i]);
                }
                catch (Exception)
                {
                }
            }
        }
    }
}
