#!/bin/bash

#get 
curl localhost:3000

#post
curl -X POST --data "{\"name\": \"Felipe Santos\"}" localhost:3000

#delete
curl -X DELETE localhost:3000