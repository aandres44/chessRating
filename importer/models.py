from dataclasses import dataclass
from datetime import date
from enum import Enum


class TimeControl(Enum):
    CLASSICAL = "CLASSICAL"
    RAPID = "RAPID"
    BLITZ = "BLITZ"


@dataclass
class PlayerImport:
    name: str
    birthday: date | None
    federation: str | None
    sex: str | None
    title: str | None
    rating: int
    k: int
    time_control: TimeControl