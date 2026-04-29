#!/bin/bash
ssh -L 54321:joshua-database-1.clcwisa6c2pq.us-west-2.rds.amazonaws.com:5432 -i ~/.ssh/JoshuaAPIEC2.pem ec2-user@ec2-54-68-50-151.us-west-2.compute.amazonaws.com

