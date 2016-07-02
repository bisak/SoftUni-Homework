using System;
using System.Linq;

public class SequenceOfCommands_broken
{
    const char ArgumentsDelimiter = ' ';

    public static void Main()
    {
        int sizeOfArray = int.Parse(Console.ReadLine());

        long[] array = Console.ReadLine()
            .Split(ArgumentsDelimiter)
            .Select(long.Parse)
            .ToArray();


        while (true)
        {
            string[] line = Console.ReadLine().Split(ArgumentsDelimiter);
            string command = line[0];
            if (command == "stop") break;

            long[] args = new long[2];

            if (command.Equals("add") ||
                command.Equals("subtract") ||
                command.Equals("multiply"))
            {
                args[0] = int.Parse(line[1]);
                args[1] = int.Parse(line[2]);

                PerformAction(array, command, args);
            }
            if(command.Equals("rshift"))
            {
                ArrayShiftRight(array);
            }
            if (command.Equals("lshift"))
            {
                ArrayShiftLeft(array);
            }
            PrintArray(array);
            Console.WriteLine();
        }

        
    }

    static void PerformAction(long[] array, string action, long[] args)
        {
            long pos = args[0] - 1;
            long value = args[1];

            switch (action)
            {
                case "multiply":
                    array[pos] *= value;
                    break;
                case "add":
                    array[pos] += value;
                    break;
                case "subtract":
                    array[pos] -= value;
                    break;
                
            }
        }

    private static void ArrayShiftRight(long[] array)
    {
        long lastElement = array[array.Length - 1];
        for (int i = array.Length - 1; i >= 1; i--)
        {
            array[i] = array[i - 1];
        }

        array[0] = lastElement;


    }


    private static void ArrayShiftLeft(long[] array)
    {
        long firstElement = array[0];
        for (int i = 0; i < array.Length - 1; i++)
        {
            array[i] = array[i + 1];
        }
        array[array.Length - 1] = firstElement;
    }


    private static void PrintArray(long[] array)
    {
        for (int i = 0; i < array.Length; i++)
        {
            Console.Write(array[i] + " ");
        }
    }
}
