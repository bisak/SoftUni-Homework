using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _12.Phonebook
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(' ');
            SortedDictionary<string, string> phonebook = new SortedDictionary<string, string>();
            while (input[0] != "END")
            {
                if (input[0] == "A")
                {
                    phonebook[input[1]] = input[2];
                }
                if (input[0] == "S")
                {
                    if (phonebook.ContainsKey(input[1]))
                    {
                        Console.WriteLine("{0} -> {1}", input[1], phonebook[input[1]]);
                    }
                    else
                    {
                        Console.WriteLine("Contact {0} does not exist.", input[1]);
                    }
                }
                if(input[0] == "ListAll")
                {
                    foreach (var pair in phonebook)
                    {
                        Console.WriteLine("{0} -> {1}", pair.Key, pair.Value);
                    }
                }
                input = Console.ReadLine().Split(' ');
            }
        }
    }
}

