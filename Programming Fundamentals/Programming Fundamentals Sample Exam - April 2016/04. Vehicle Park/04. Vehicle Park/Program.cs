using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Vehicle_Park
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] cars = Console.ReadLine().Split(' ');
            string[] input = Console.ReadLine().Split(' ');
            string[] output = null;
            bool unsold = true;
            int count = 0;
            while (input[0] != "End")
            {
                string search = input[0][0] + input[2];
                search = search.ToLower();
                for (int i = 0; i < cars.Length; i++)
                {
                    if (cars[i] == search)
                    {
                        Console.WriteLine("Yes, sold for {0}$", search[0] * int.Parse(input[2]));
                        cars[i] = "";
                        unsold = false;
                        count++;
                        break;
                    }
                }
                if (unsold)
                {
                    Console.WriteLine("No");
                }
                unsold = true; 
                input = Console.ReadLine().Split(' ');
            }
            output = cars.Where(x => !string.IsNullOrEmpty(x)).ToArray();
            Console.WriteLine("Vehicles left: " + string.Join(", ", output));
            Console.WriteLine("Vehicles sold: " + count);
        }
    }
}


