#!/bin/bash

container_id=$(docker ps | grep production | cut -d' ' -f1) || true
test -z "$container_id" || ( docker rm -f $container_id )
