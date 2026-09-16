def football_stats():
    print("⚽ Football Player Stats Analyzer")
    print("-" * 35)

    player = input("Enter player name: ")
    matches = int(input("Enter matches played: "))
    goals = int(input("Enter goals scored: "))
    assists = int(input("Enter assists: "))

    goal_contributions = goals + assists
    goals_per_match = goals / matches
    assists_per_match = assists / matches

    print("\n📊 Player Statistics")
    print("-" * 35)
    print("Player:", player)
    print("Matches:", matches)
    print("Goals:", goals)
    print("Assists:", assists)
    print("Goal Contributions:", goal_contributions)
    print(f"Goals per Match: {goals_per_match:.2f}")
    print(f"Assists per Match: {assists_per_match:.2f}")


football_stats()