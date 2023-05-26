
using System;

namespace Strings
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var fullName = "Kowit Thanapruettiwong";
            Console.WriteLine("Trim: '{0}'", fullName.Trim());
            Console.WriteLine("ToUpper: '{0}'", fullName.Trim().ToUpper());

            var index = fullName.IndexOf(' ');
            var firstName = fullName.Substring(0, index);
            var lastname = fullName.Substring(index + 1);
            Console.WriteLine("FirstName: " + firstName);
            Console.WriteLine("LastName: " + lastname);

            var names = fullName.Split(' ');
            Console.WriteLine("FirstName: " + names[0]);
            Console.WriteLine("LastName: " + names[1]);

            Console.WriteLine(fullName.Replace("Kowit", "Frame"));

            if (String.IsNullOrEmpty(" "))
            {
                Console.WriteLine("Invalid");
            }

            var str = "25";
            var age = Convert.ToByte(str);
            Console.WriteLine(age);

            float price = 29.95f;
            Console.WriteLine(price.ToString("C"));
            Console.WriteLine(price.ToString("C0"));
        }
    }
}