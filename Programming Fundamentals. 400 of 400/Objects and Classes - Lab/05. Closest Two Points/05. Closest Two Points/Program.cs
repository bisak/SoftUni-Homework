using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Closest_Two_Points
{
    class Point
    {
        public double axisX { get; set; }
        public double axisY { get; set; }

        public static Point ReadPoint()
        {
            double[] coords = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();
            Point point = new Point();
            point.axisX = coords[0];
            point.axisY = coords[1];
            return point;
        }

        public static Point[] ReadArrayOfPoints()
        {
            var n = int.Parse(Console.ReadLine());
            var points = new Point[n];
            for (int i = 0; i < n; i++)
                points[i] = ReadPoint();
            return points;
        }

        public static double CalcDistance(Point p1, Point p2)
        {
            double deltaX = p2.axisX - p1.axisX;
            double deltaY = p2.axisY - p1.axisY;
            return Math.Sqrt(deltaX * deltaX + deltaY * deltaY);
        }

        public static void PrintPoint(Point point)
        {
            Console.WriteLine("({0}, {1})", point.axisX, point.axisY);
        }

        public static Point[] FindClosestTwoPoints(Point[] points)
        {
            double minDistance = double.MaxValue;
            Point[] closestTwoPoints = null;
            for (int p1 = 0; p1 < points.Length; p1++)
            {
                for (int p2 = p1 + 1; p2 < points.Length; p2++)
                {
                    double distance = CalcDistance(points[p1], points[p2]);
                    if (distance < minDistance)
                    {
                        closestTwoPoints = new Point[] { points[p1], points[p2] };
                        minDistance = distance;
                    }
                }
            }
            return closestTwoPoints;
        }
    }


    class Program
    {
        static void Main()
        {
            Point[] points = Point.ReadArrayOfPoints();
            Point[] closestPoints = Point.FindClosestTwoPoints(points);
            Console.WriteLine("{0:f3}", Point.CalcDistance(closestPoints[0], closestPoints[1]));
            Point.PrintPoint(closestPoints[0]);
            Point.PrintPoint(closestPoints[1]);
        }
    }
}
