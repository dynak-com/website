#!/bin/bash

# crontab entry
# 0 * * * * bash /home/website/dynak.com/processMessage.sh

MESSAGE_DIR="/var/messages/"
PROCESSED_MESSAGES_DIR="$MESSAGE_DIR/processed_messages"
TOKEN="rL2iXzVHrurjQxcmndnm"
PROJECT_ID="11847608" # websites/dynak.com
GITLAB_API_URL="https://gitlab.com/api/v4/projects/$PROJECT_ID/issues"
MATTERMOST_HOOK_URL="https://mattermost.dynak.com/hooks/nxh6ioxh9iyj7bwxj5s7sk8rta"

cd $MESSAGE_DIR || exit
mkdir -p $PROCESSED_MESSAGES_DIR;

for i in *.json; do
	[ -f "$i" ] || break
	SUB="$( (jq '.subject' | sed 's/\"//g') < "$i")";
	MSG="$( (jq '.message' | sed 's/\"//g') < "$i")";
	EMAIL="$( (jq '.email' | sed 's/\"//g') < "$i")";
	CONTACT="$(jq '.isContactAgreed' < "$i")";
	PRIVACY="$(jq '.isPrivacyPolicyAgreed' < "$i")";

	MSG="$(echo "$MSG" | sed 's/\\n/ /g' | sed 's/\"//g')"
	MSG+="
	$EMAIL
	Contact: $CONTACT
	Privacy: $PRIVACY"

	response=$(curl -G --request POST --header "PRIVATE-TOKEN: $TOKEN" \
	--header "Content-Type: application/json" \
	--data-urlencode "title=$SUB" \
	--data-urlencode "labels=message" \
	--data-urlencode "description=$MSG" \
	$GITLAB_API_URL | jq '.web_url' \
	| sed 's/\"//g')


	curl -i -X POST \
	--data-urlencode "payload={\"text\": \"New message:\n""$response""\"}" \
	$MATTERMOST_HOOK_URL >> $PROCESSED_MESSAGES_DIR/processMessage.log 2>&1

	mv "$i" ./processed_messages/.
done
