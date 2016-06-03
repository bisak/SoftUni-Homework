using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Odd_Occurrences
{
    class Program
    {
        static void Main(string[] args)
        {
            var words = Console.ReadLine().Trim().ToLower().Split(' ').ToArray();
            var counts = new Dictionary<string, int>();
            foreach (var w in words)
                if (counts.ContainsKey(w))
                    counts[w]++;
                else counts[w] = 1;
            var results = new List<string>();
            foreach (var pair in counts)
                if (pair.Value % 2 == 1)
                    results.Add(pair.Key);
                Console.WriteLine(string.Join(", ", results));

        }
    }
}
