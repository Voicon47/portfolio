#!/bin/bash
aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin 324037310518.dkr.ecr.ap-southeast-1.amazonaws.com
docker image prune -f
docker pull 324037310518.dkr.ecr.ap-southeast-1.amazonaws.com/portfolio:latest
docker stop portfolio-container || true
docker rm portfolio-container || true
docker run -d --name portfolio-container -p 3001:3001 324037310518.dkr.ecr.ap-southeast-1.amazonaws.com/portfolio:latest