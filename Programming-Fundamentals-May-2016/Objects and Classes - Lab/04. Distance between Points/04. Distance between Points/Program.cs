using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Distance_between_Points
{
    class Point
    {
        public double X { get; set; }
        public double Y { get; set; }

        public static Point ReadPoint()
        {
            double[] coords = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();
            Point point = new Point();
            point.X = coords[0];
            point.Y = coords[1];
            return point;
        }

        public static double CalcDistance(Point p1, Point p2)
        {
            double deltaX = p2.X - p1.X;
            double deltaY = p2.Y - p1.Y;
            return Math.Sqrt(deltaX * deltaX + deltaY * deltaY);
        }
    }


    class Program
    {
        static void Main()
        {
            Point p1 = Point.ReadPoint();
            Point p2 = Point.ReadPoint();
            double dist = Point.CalcDistance(p1, p2);
            Console.WriteLine("{0:f3}", dist);
        }

    }
}
