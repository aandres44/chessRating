from parser import parse_excel
from models import TimeControl

players = parse_excel(
    "../ratings/incoming/Rapid.xls",
    TimeControl.RAPID
)

print(f"Loaded {len(players)} players")

print(players[0])
print(players[138])