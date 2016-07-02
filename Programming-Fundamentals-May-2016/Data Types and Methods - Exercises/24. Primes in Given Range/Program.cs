using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int m = int.Parse(Console.ReadLine());
            FindPrimesInRange(n, m);
        }
        static void FindPrimesInRange(int n, int m)
        {
            List<int> numbers = new List<int>();
            for (int number = n; number <= m; number++)
            {
                bool bo = true;
                if (number == 1) bo = false;
                if (number % 2 == 0) bo = false;
                if (number == 2) bo = true;
                for (int i = 3; i < number; i++)
                {
                    if (number % i == 0) bo = false;
                }
                if (bo == true)
                {
                    numbers.Add(number);
                }
            }
            int cnt = 0;
            foreach (var item in numbers)
            {
                Console.Write(item);
                cnt++;
                if (cnt <= numbers.Count - 1)
                    Console.Write(", ");
            }
            if (numbers.Count == 0)
            {
                Console.WriteLine("(empty list)");
            }
            Console.WriteLine();
        }
    }

}
