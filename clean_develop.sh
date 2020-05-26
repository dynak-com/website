#!/bin/bash

container_id=$(docker ps | grep develop | cut -d' ' -f1) || true
test -z "$container_id" || ( docker rm -f $container_id )
