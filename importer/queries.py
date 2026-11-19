UPSERT_PLAYER = """
INSERT INTO players (
    name,
    birthday,
    sex,
    title,
    federation
)
VALUES (%s, %s, %s, %s, %s)

ON CONFLICT (name, birthday)
DO UPDATE
SET
    sex = COALESCE(EXCLUDED.sex, players.sex),
    title = COALESCE(EXCLUDED.title, players.title),
    federation = COALESCE(EXCLUDED.federation, players.federation)

RETURNING id;
"""


UPSERT_RATING = """
INSERT INTO player_ratings (
    player_id,
    time_control,
    rating,
    k
)
VALUES (%s, %s, %s, %s)

ON CONFLICT (player_id, time_control)
DO UPDATE
SET
    rating = EXCLUDED.rating,
    k = EXCLUDED.k,
    updated_at = NOW();
"""


INSERT_SNAPSHOT = """
INSERT INTO player_rating_snapshots (
    player_id,
    time_control,
    rating,
    k,
    snapshot_date
)
VALUES (%s, %s, %s, %s, %s)

ON CONFLICT DO NOTHING;
"""