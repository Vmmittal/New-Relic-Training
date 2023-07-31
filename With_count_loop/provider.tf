terraform {
  required_providers {
    newrelic = {
      source  = "newrelic/newrelic"
    }
  }
}


provider "newrelic" {
  account_id = 4042730
  api_key = "NRAK-UGSYYG7RQCT8BK1OCDCN17FX1ZU" 
  region = "US"                    
}