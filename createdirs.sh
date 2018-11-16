#!/usr/bin/env bash

mkdir -p app/Controllers
mkdir -p app/DataTables
mkdir -p app/Forms
mkdir -p app/Models
mkdir -p app/ObjectList
mkdir -p app/Objects
mkdir -p app/Services
mkdir -p cache
mkdir -p cache/cache
mkdir -p cache/metadata
mkdir -p cache/twig
mkdir -p storage
mkdir -p storage/keyvalue
mkdir -p storage/media
mkdir -p storage/media/default
mkdir -p env

if [ -f env/config.ini ]; then
    exit
fi

echo "[application]
env = dev
sendmailCommand = /usr/local/bin/mhsendmail -t --smtp-addr mail:1025

[database]
username = root
password = [DB-PASS]
dbname = [DB-NAAM]
host = mysql" >> env/config.ini