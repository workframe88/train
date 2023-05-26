using System;

namespace Arrays
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var numbers = new[] { 3, 7, 9, 2, 14, 6 };

            Console.WriteLine("Length: " + numbers.Length);
            
            var index = Array.IndexOf(numbers, 9);
            Console.WriteLine("Index of 9:" + index);

            Array.Clear(numbers, 0, 2);

            Console.WriteLine("Effect of Clear()");
            foreach (var n in numbers)
            {
                Console.WriteLine(n);
            }

            int[] another = new int[3];
            Array.Copy(numbers, another, 3);

            Console.WriteLine("Effect of Copy()");
            foreach(var n in another)
            {
                Console.WriteLine(n);
            }

            Array.Sort(numbers);

            Console.WriteLine("Effect of Sort()");
            foreach (var n in numbers)
            {
                Console.WriteLine(n);
            }

            Array.Reverse(numbers);
            Console.WriteLine("Effect of Reverse()");
            foreach (var n in numbers)
            {
                Console.WriteLine(n);
            }
        }
    }
}