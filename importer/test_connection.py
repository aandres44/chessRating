import psycopg

from config import DB_CONFIG

try:
    with psycopg.connect(**DB_CONFIG) as conn: # type: ignore
        with conn.cursor() as cur:

            cur.execute("SELECT version();")

            print(cur.fetchone())

            print("Connected!")

except Exception as e:
    print(e)