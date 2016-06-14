using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Circles_Intersection
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] inputA = Console.ReadLine().Split().Select(double.Parse).ToArray();
            double[] inputB = Console.ReadLine().Split().Select(double.Parse).ToArray();
            Circle circleA = new Circle();
            Circle circleB = new Circle();
            circleA.X = inputA[0];
            circleA.Y = inputA[1];
            circleB.X = inputB[0];
            circleB.Y = inputB[1];
            circleA.Radius = inputA[2];
            circleB.Radius = inputB[2];
            double radusesSum = Circle.SumOfRadiuses(circleA.Radius, circleB.Radius);
            double distance = Circle.CalcDistance(circleA, circleB);
            Circle.Print(distance, radusesSum);
        }


    }
    class Circle
    {
        public double Radius { get; set; }
        public double X { get; set; }
        public double Y { get; set; }
        public static double SumOfRadiuses(double a, double b)
        {
            return a + b;
        }
        public static double CalcDistance(Circle p1, Circle p2)
        {
            double deltaX = p2.X - p1.X;
            double deltaY = p2.Y - p1.Y;
            return Math.Sqrt(deltaX * deltaX + deltaY * deltaY);
        }
        public static void Print(double distance, double radusesSum)
        {
            if (distance > radusesSum)
            {
                Console.WriteLine("No");
            }
            else
            {
                Console.WriteLine("Yes");
            }
        }
    }

}
