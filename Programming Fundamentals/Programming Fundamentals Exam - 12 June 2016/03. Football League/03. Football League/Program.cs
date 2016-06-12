using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Football_League
{
    class Program
    {
        static void Main(string[] args)
        {
            checked
            {
                string key = Console.ReadLine();
                Dictionary<string, decimal> goalsPerTeam = new Dictionary<string, decimal>();
                Dictionary<string, decimal> scorePerTeam = new Dictionary<string, decimal>();

                while (true)
                {
                    string input = Console.ReadLine();
                    if (input == "final") break;


                    int firstKeyIndex = input.IndexOf(key);
                    int secondKeyIndex = input.IndexOf(key, firstKeyIndex + key.Length);
                    string teamOneName =
                        input.Substring(firstKeyIndex + key.Length, secondKeyIndex - firstKeyIndex - key.Length)
                            .ToUpper();
                    teamOneName = ReverseString(teamOneName);
                    string teamTwoName = input.Remove(0, secondKeyIndex + key.Length);
                    input = teamTwoName;
                    firstKeyIndex = teamTwoName.IndexOf(key);
                    secondKeyIndex = teamTwoName.IndexOf(key, firstKeyIndex + key.Length);
                    teamTwoName =
                        teamTwoName.Substring(firstKeyIndex + key.Length, secondKeyIndex - firstKeyIndex - key.Length)
                            .ToUpper();
                    teamTwoName = ReverseString(teamTwoName);

                    string scores = input.Remove(0, secondKeyIndex + key.Length);
                    scores = scores.Remove(0, scores.IndexOf(":") - 2);

                    int tempindex = scores.IndexOf(' ');
                    int tempindex2 = scores.IndexOf(':');
                    decimal teamOneScore = decimal.Parse(scores.Substring(0, tempindex2));
                    decimal teamTwoScore = decimal.Parse(scores.Split(':')[1]);

                    if (!goalsPerTeam.ContainsKey(teamOneName))
                    {
                        goalsPerTeam.Add(teamOneName, teamOneScore);
                    }
                    else
                    {
                        goalsPerTeam[teamOneName] += teamOneScore;
                    }
                    if (!goalsPerTeam.ContainsKey(teamTwoName))
                    {
                        goalsPerTeam.Add(teamTwoName, teamTwoScore);
                    }
                    else
                    {
                        goalsPerTeam[teamTwoName] += teamTwoScore;
                    }

                    if (!scorePerTeam.ContainsKey(teamOneName))
                    {
                        scorePerTeam.Add(teamOneName, 0);
                    }

                    if (!scorePerTeam.ContainsKey(teamTwoName))
                    {
                        scorePerTeam.Add(teamTwoName, 0);
                    }


                    if (teamOneScore > teamTwoScore)
                    {
                        scorePerTeam[teamOneName] += 3;
                    }
                    if (teamTwoScore > teamOneScore)
                    {
                        scorePerTeam[teamTwoName] += 3;
                    }
                    if (teamOneScore == teamTwoScore)
                    {
                        scorePerTeam[teamOneName] += 1;
                        scorePerTeam[teamTwoName] += 1;
                    }
                }


                var pointsPerTeamSorted = scorePerTeam.OrderByDescending(x => x.Value)
                    .ThenBy(x => x.Key);


                Console.WriteLine("League standings:");
                int counterOne = 0;
                foreach (var pair in pointsPerTeamSorted)
                {
                    counterOne++;
                    Console.WriteLine("{2}. {0} {1}", pair.Key, (int) pair.Value, counterOne);
                }

                var goalsPerTeamSorted = goalsPerTeam.OrderByDescending(x => x.Value)
                    .ThenBy(x => x.Key);


                int counterTwo = 0;
                Console.WriteLine("Top 3 scored goals:");
                foreach (var pair in goalsPerTeamSorted)
                {
                    counterTwo++;
                    if (counterTwo > 3) break;

                    Console.WriteLine("- {0} -> {1}", pair.Key, pair.Value);
                }
            }
        }

        public static string ReverseString(string s)
        {
            char[] arr = s.ToCharArray();
            Array.Reverse(arr);
            return new string(arr);
        }
    }
}