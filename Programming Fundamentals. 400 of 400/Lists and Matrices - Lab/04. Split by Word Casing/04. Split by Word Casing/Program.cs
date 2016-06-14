using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Split_by_Word_Casing
{
    class Program
    {
        static void Main(string[] args)
        {
            char[] separators = new char[] { ',', ';', ':', '.', '!', '(', ')', '"', '\\', '/', '\'', '[', ']', ' ' };
            List<string> words = Console.ReadLine().Split(separators, StringSplitOptions.RemoveEmptyEntries).ToList();
            List<string> lowerCaseWords = new List<string>();
            List<string> mixedCaseWords = new List<string>();
            List<string> upperCaseWords = new List<string>();
            foreach (string word in words)
            {
                var type = GetWordType(word);
                if (type == "upper") upperCaseWords.Add(word);
                else if (type == "lower") lowerCaseWords.Add(word);
                else mixedCaseWords.Add(word);
            }
            Console.WriteLine("Lower-case: {0}", string.Join(",", lowerCaseWords));
            Console.WriteLine("Mixed-case: {0}", string.Join(",", mixedCaseWords));
            Console.WriteLine("Upper-case: {0}", string.Join(",", upperCaseWords));
        }

        static string GetWordType(string word)
        {
            int lowerLetters = 0;
            int upperLetters = 0;
            foreach (char letter in word)
            {
                if (char.IsUpper(letter)) upperLetters++;
                else if (char.IsLower(letter)) lowerLetters++;
            }
            if (upperLetters == word.Length)
                return "upper";
            if (lowerLetters == word.Length)
                return "lower";
            return "mixed";
        }
    }
}
