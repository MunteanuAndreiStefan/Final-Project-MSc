import sys
import logging
import psycopg2
import json
import os

# rds settings
rds_host  = os.environ.get('DB_HOST')
rds_username = os.environ.get('DB_USER')
rds_user_pwd = os.environ.get('DB_PASS')
rds_db_name = os.environ.get('DB_NAME')

logger = logging.getLogger()
logger.setLevel(logging.INFO)

try:
    conn_string = "host=%s user=%s password=%s dbname=%s" % \
                    (rds_host, rds_username, rds_user_pwd, rds_db_name)
    conn = psycopg2.connect(conn_string)
except:
    logger.error("ERROR: Could not connect to Postgres instance.")
    sys.exit()

logger.info("SUCCESS: Connection to RDS Postgres instance succeeded")

def handler(event, context):

    query = """SELECT * FROM social_media_db.questionnaire WHERE id = 1"""

    with conn.cursor() as cur:
        rows = []
        cur.execute(query)
        for row in cur:
            rows.append(row)

    return { 'statusCode': 200, 'body': rows }