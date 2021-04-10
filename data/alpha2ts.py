import json
import sys
import pandas as pd
from alpha_vantage.timeseries import TimeSeries 
from alpha_vantage.fundamentaldata import FundamentalData

# API key - JM
my_api_key = 'VRUL91KKCG09FLXV'

# price action
ts = TimeSeries(my_api_key, output_format="json")
parsePdata = ts.get_daily(sys.argv[1])

# financials 
fd = FundamentalData(my_api_key, output_format="json")
parseFdata = fd.get_company_overview(sys.argv[1])

# writing to the json file
with open('financial-reports.json', 'w') as outfile:
    json.dump(parseFdata, outfile)

with open('price-action.json', 'w') as outfile2:
    json.dump(parsePdata, outfile2)