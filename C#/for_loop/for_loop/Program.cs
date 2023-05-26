namespace for_loop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /*
            for (var i = 1; i <= 10; i++)
            {
                Console.WriteLine(i);
            }

            for (var i = 10; i >= 1; i--)
            {
                if(i%2 == 0)
                {
                    Console.WriteLine(i);
                }
               
            }*/

            var name = "Kowit Thanapruettiwong";

            /*for(var i = 0; i < name.Length; i++)
            {
                Console.WriteLine(name[i]);
            }*/

            /*foreach(var charactor in name)
            {
                Console.WriteLine(charactor);
            }*/

            var numbers = new int[] { 1, 2, 3, 4 };

            foreach (var number in numbers)
            {
                Console.WriteLine(number);
            }
        }
    }
}