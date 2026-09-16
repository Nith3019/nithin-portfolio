export default async function handler(req, res) {
    const { name } = req.query;

    if (!name) {
        return res.status(400).json({ error: "Player name is required" });
    }

    try {
        const response = await fetch(
            `https://v3.football.api-sports.io/players?search=${encodeURIComponent(name)}&season=2025`,
            {
                headers: {
                    "x-apisports-key": process.env.API_FOOTBALL_KEY
                }
            }
        );

        const data = await response.json();

        if (!data.response || data.response.length === 0) {
            return res.status(404).json({ error: "Player not found" });
        }

        const player = data.response[0];

        const goals = player.statistics?.[0]?.goals?.total ?? 0;
        const assists = player.statistics?.[0]?.goals?.assists ?? 0;

        return res.status(200).json({
            player: player.player.name,
            goals: goals,
            assists: assists,
            gaRatio: `${goals + assists}`
        });

    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch player data" });
    }
}