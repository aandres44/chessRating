import psycopg

from config import DB_CONFIG

conn = psycopg.connect(**DB_CONFIG) # type: ignore

class Database:

    def __init__(self, connection_string):
        self.conn = psycopg.connect(connection_string)

    def commit(self):
        self.conn.commit()

    def rollback(self):
        self.conn.rollback()

    def close(self):
        self.conn.close()
    
    def upsert_player(self):
        ...

    def upsert_rating(self):
        ...

    def insert_snapshot(self):
        ...