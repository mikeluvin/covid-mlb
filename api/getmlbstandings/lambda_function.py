import statsapi
from datetime import date
import json
from json import JSONEncoder

def get_MLB_standings():
    today = date.today()
    d_m_y = str(today.month) + "/" + str(today.day) + "/" + str(today.year)
    standings = statsapi.standings_data(date=d_m_y)
    return standings

def parse_MLB_standings(standings):
    standings_list = []
    for i in [200, 201, 202, 203, 204, 205]:
        standings_list.append(standings[i])
    return standings_list

def lambda_handler(event, context):
    curr_stand = get_MLB_standings()
    stand_list = parse_MLB_standings(curr_stand)

    return {
        'statusCode': 200,
        'body': json.dumps(stand_list),
        'headers': {
            'Access-Control-Allow-Origin': '*'
        }
    }