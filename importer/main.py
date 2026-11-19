from parser import parse_excel
from models import TimeControl
from database import Database

players = parse_excel(
    "../ratings/incoming/Rapid.xls",
    TimeControl.RAPID
)

print(f"Loaded {len(players)} players")

# print(players[0])
# print(players[138])

db = Database()

for player in players:
    player_id = db.upsert_player(player)
    db.upsert_rating(player_id, player)
    db.insert_snapshot(player_id, player, date)

db.commit()