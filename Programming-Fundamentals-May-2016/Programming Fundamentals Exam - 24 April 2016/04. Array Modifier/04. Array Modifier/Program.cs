using System;
using System.Linq;

namespace _04.Array_Modifier
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal[] array = Console.ReadLine().Trim().Split(' ').Select(decimal.Parse).ToArray();
            string[] commands = Console.ReadLine().Trim().Split(' ');
            while (commands[0] != "end")
            {
                if (commands[0] == "swap")
                {
                    int first = int.Parse(commands[1]);
                    int second = int.Parse(commands[2]);
                    decimal temp = 0;
                    temp = array[first];
                    array[first] = array[second];
                    array[second] = temp;
                }
                if (commands[0] == "multiply")
                {
                    int first = int.Parse(commands[1]);
                    int second = int.Parse(commands[2]);
                    array[first] = array[first] * array[second];
                }
                if (commands[0] == "decrease")
                {
                    for (int i = 0; i < array.Length; i++)
                    {
                        array[i] = array[i] - 1;
                    }
                }
                commands = Console.ReadLine().Trim().Split(' ');
            }
            Console.WriteLine(string.Join(", ", array));
        }
    }
}
