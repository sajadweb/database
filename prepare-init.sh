#!/bin/bash
export $(grep -v '^#' docker.env | xargs)
envsubst < ./init/mongo-init.js.template > ./init/mongo-init.js
