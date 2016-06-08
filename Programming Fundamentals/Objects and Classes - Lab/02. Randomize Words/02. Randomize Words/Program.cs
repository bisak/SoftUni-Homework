using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Randomize_Words
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] words = Console.ReadLine().Split(' ').ToArray();
            Random rnd = new Random();
            int place = 0;
            for (int i = 0; i < words.Length; i++)
            {
                place = rnd.Next(words.Length);
                string temp = words[place];
                words[place] = words[i];
                words[i] = temp;
            }
            Console.Write(string.Join("\r\n",words));
        }
    }
}
