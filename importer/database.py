from datetime import date

import psycopg

from config import DB_CONFIG
from importer.models import PlayerImport

from queries import UPSERT_PLAYER

class Database:

    def __init__(self):
        self.conn = psycopg.connect(**DB_CONFIG) # type: ignore

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        if exc_type is None:
            self.commit()
        else:
            self.rollback()

        self.close()

    def commit(self):
        self.conn.commit()

    def rollback(self):
        self.conn.rollback()

    def close(self):
        self.conn.close()
    
    def upsert_player(self, player: PlayerImport) -> int:
        """
        Inserts or updates a player and returns the player's id.
        """
        with self.conn.cursor() as cur:
            cur.execute(
                UPSERT_PLAYER,
                (
                    player.name,
                    player.birthday,
                    player.sex,
                    player.title,
                    player.federation,
                ),
            )

            row: tuple[int] | None = cur.fetchone()

            if row is None:
                raise RuntimeError("UPSERT_PLAYER did not return an id.")

            return row[0]
        

    def upsert_rating(self, player_id: int, player: PlayerImport):
        ...

    def insert_snapshot(self, player_id: int, player: PlayerImport, snapshot_date: date):
        ...