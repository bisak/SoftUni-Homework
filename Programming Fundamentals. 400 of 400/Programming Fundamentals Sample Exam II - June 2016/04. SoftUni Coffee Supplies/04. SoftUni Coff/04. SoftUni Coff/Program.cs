using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.SoftUni_Coff
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] delimiters = Console.ReadLine().Split(' ').ToArray();
            string del1 = delimiters[0];
            string del2 = delimiters[1];
            Dictionary<string, string> personCoffee = new Dictionary<string, string>();
            Dictionary<string, int> coffeeQuantity = new Dictionary<string, int>();
            ReadInformation(del1, personCoffee, del2, coffeeQuantity);
            ReadSecondaryInformation(personCoffee, coffeeQuantity);

            Console.WriteLine("Coffee Left:");

            var filtered = coffeeQuantity.Where(coffee => coffee.Value > 0)
                .ToDictionary(coffee => coffee.Key, coffee => coffee.Value);

            foreach (var result in filtered.OrderByDescending(coffee => coffee.Value))
            {
                Console.WriteLine("{0} {1}", result.Key, result.Value);
            }

            Console.WriteLine("For:");

            var coffeeLeftForPeople =
                personCoffee.Where(person => filtered.ContainsKey(person.Value))
                    .OrderBy(person => person.Value)
                    .ThenBy(person => person.Key);

            foreach (var kvp in coffeeLeftForPeople)
            {
                Console.WriteLine("{0} {1}", kvp.Key, kvp.Value);
            }
        }

        public static void ReadSecondaryInformation(Dictionary<string, string> personCoffee,
            Dictionary<string, int> coffeeQuantity)
        {
            foreach (var coffeeType in coffeeQuantity)
            {
                if (coffeeType.Value <= 0)
                {
                    Console.WriteLine("Out of {0}", coffeeType.Key);
                }
            }

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "end of week") break;

                string[] keyVal = input.Split();
                string personName = keyVal[0];
                int quantity = int.Parse(keyVal[1]);

                string coffeeType = personCoffee[personName];

                coffeeQuantity[coffeeType] = coffeeQuantity[coffeeType] - quantity;

                if (coffeeQuantity[coffeeType] <= 0)
                {
                    Console.WriteLine("Out of {0}", coffeeType);
                }
            }
        }

        public static void ReadInformation(string del1, Dictionary<string, string> personCoffee, string del2,
            Dictionary<string, int> coffeeQuantity)
        {
            while (true)
            {
                string input = Console.ReadLine();
                if (input == "end of info") break;
                if (input.Contains(del1))
                {
                    string[] keyVal = input.Split(new string[] {del1}, StringSplitOptions.None);
                    string personName = keyVal[0];
                    string coffeeType = keyVal[1];
                    if (personCoffee.ContainsKey(personName))
                    {
                        personCoffee[personName] = coffeeType;
                    }
                    else
                    {
                        personCoffee.Add(personName, coffeeType);
                    }
                    if (!coffeeQuantity.ContainsKey(coffeeType))
                    {
                        coffeeQuantity.Add(coffeeType, 0);
                    }
                }
                if (input.Contains(del2))
                {
                    string[] keyVal = input.Split(new string[] {del2}, StringSplitOptions.None);
                    string coffeeName = keyVal[0];
                    int quantity = int.Parse(keyVal[1]);
                    if (coffeeQuantity.ContainsKey(coffeeName))
                    {
                        coffeeQuantity[coffeeName] = coffeeQuantity[coffeeName] + quantity;
                    }
                    else
                    {
                        coffeeQuantity.Add(coffeeName, quantity);
                    }
                }
            }
        }
    }
}
//NOT FINISHED!!!!