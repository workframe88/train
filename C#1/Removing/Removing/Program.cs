namespace Removing
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            var numbers = new List<int> { 1, 2};
            var smallests = GetSmallests(numbers, 3);

            foreach (var number in smallests)
            {
                Console.WriteLine(number);
            }

        }

        public static List<int> GetSmallests(List<int> list, int count)
        {
            var smallests = new List<int>();

            while (smallests.Count < count)
            {
                var min = GetSmallests(list);
                smallests.Add(min);
                list.Remove(min);
            }

            return smallests;
        }

        public static int GetSmallests(List<int> list)
        {
            var min = list[0];
            for (var i = 1; i < list.Count; i++)
            {
                if (list[i] < min) // Change the condition to check for smaller number
                {
                    min = list[i];
                }
            }
            return min;
        }

    }
}