using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Rectangle_Position
{

    class Program
    {
        static void Main(string[] args)
        {
            var r1 = Rectangle.ReadRectangle();
            var r2 = Rectangle.ReadRectangle();
            Console.WriteLine(Rectangle.IsFirstRectInsideSecondRect(r1, r2) ? "Inside" : "Not Inside");
        }
    }

    class Rectangle
    {
        public double Top { get; set; }
        public double Left { get; set; }
        public double Width { get; set; }
        public double Height { get; set; }

        public double Bottom
        {
            get
            {
                return Top + Height;
            }
        }
        public double Right
        {
            get
            {
                return Left + Width;
            }
        }

        public static Rectangle ReadRectangle()
        {
            var tokens = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();
            var rect = new Rectangle()
            {
                Left = tokens[0],
                Top = tokens[1],
                Width = tokens[2],
                Height = tokens[3]
            };
            return rect;
        }
        public static bool IsFirstRectInsideSecondRect(Rectangle r1, Rectangle r2)
        {
            var inside =
                r1.Left >= r2.Left &&
                r1.Right <= r2.Right &&
                r1.Top >= r2.Top &&
                r1.Bottom <= r2.Bottom;
            return inside;
        }

    }
}
