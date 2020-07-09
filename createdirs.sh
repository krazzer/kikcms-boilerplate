#!/usr/bin/env bash

if [ -f env/config.ini ]; then
    exit
fi

echo "[application]
env = dev

[database]
username = root
password = [DB-PASS]
dbname = [DB-NAME]
host = mysql

[mailer]
host = mail
port = 1025" >> env/config.ini

rm createdirs.sh