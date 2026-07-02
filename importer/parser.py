import pandas as pd
from datetime import datetime

from models import PlayerImport, TimeControl

COLUMNS = {
    "name": "Name",
    "birthday": "Birthday",
    "federation": "Fed",
    "sex": "Sex",
    "title": "Title",
    "rating": "Rtg_Int",
    "k": "K",
}

def normalize_name(name: str):
    return " ".join(name.strip().split())

def normalize_sex(sex: str):
    if pd.isna(sex):
        return "M"

    return str(sex).strip().upper()

def normalize_title(title: str):
    if pd.isna(title):
        return None

    return str(title).strip()

def normalize_birthday(birthday: str):
    if pd.isna(birthday):
        return None
    # 1. Parse the string into a datetime object
    # %d = day (2 digits), %m = month (2 digits), %Y = year (4 digits)
    # 2. Extract just the date component
    return datetime.strptime(birthday, "%d.%m.%Y").date()

def normalize_federation(federation):
    return str(federation).strip().upper()

def normalize_rating(rating):
    return int(rating)


def normalize_k(k):
    return int(k)


def parse_excel(path: str, time_control: TimeControl) -> list[PlayerImport]:

    # Read the worksheet named "Nat"
    df = pd.read_excel(
        path,
        sheet_name="Nat",
        engine="xlrd"
    )

    players: list[PlayerImport] = []

    for _, row in df.iterrows():

        player = PlayerImport(
            name=row[COLUMNS["name"]].strip(),
            birthday=normalize_birthday(row[COLUMNS["birthday"]]),
            federation=normalize_federation(row[COLUMNS["federation"]]),
            sex=normalize_sex(row[COLUMNS["sex"]]),
            title=normalize_title(row[COLUMNS["title"]]),
            rating=normalize_rating(row[COLUMNS["rating"]]),
            k=normalize_k(row[COLUMNS["k"]]),
            time_control=time_control,
        )

        players.append(player)

    return players