# Setup dev env

Warning: You might blow a few things up. Don't worry, this is expected behaviour.

1. Clone repo: `git clone git@github.com:krazzer/[REPONAME].git`

Skip step 2, 3, 4, 8 & 10 if you set up the dev env before.

2. Create kikdev dirs: `mkdir ~/.docker-kikdev && mkdir ~/.docker-kikdev/mysql && mkdir ~/.docker-kikdev/logs`
3. Install Docker: https://www.docker.com/get-started
4. Create docker network: `docker network create kikdev`
5. From the project root, run `composer install`
6. Create symlink for assets: `ln -s ../vendor/kiksaus/kikcms/resources public_html/cmsassets`
7. Add folders: `mkdir cache && mkdir public_html/media && mkdir public_html/media/files && mkdir public_html/media/thumbs`
8. Create MySQL and Mailhog containers, replace <password> with your desired password (run from the project root): `PASS=<password> docker-compose -f vendor/kiksaus/kikcms/docker/docker-compose-services.yml up -d`
9. Create app container, replacing <password> with desired password again, and <port> with the desired port (e.g. 9001), and <name> with the name of your project (run from project root again): `SITE_PORT=<port> docker-compose -f vendor/kiksaus/kikcms/docker/docker-compose-site.yml -p <name> up -d`
10. Use your favorite GUI like (SequalPro, Navicat, Workbench, PHPMyAdmin etc) and connect to the MySQL container with these settings, where <password> is the same a you used to setup the MySQL container:
```
Host: localhost  
Port: 3306
User: root
Pass: <password>
```
11. Create a database
12. Now run the sql from the sql file you got from the dev.
13. Add the media files in `storage/media`
14. Now create `env/config.ini` file and replace `PASS` and `DBNAME`
```
[application]
env = dev

[database]
username = root
password = PASS
dbname = DBNAME
host = mysql
```
15. Now you're good to go! Test if the app is working in the browser: https://localhost:9001 (or another port if you chose to)

## Setup local asset update
This is required to update js/css when you change js or scss source files.

1. npm install
2. cd vendor/kiksaus/kikcms/assets && bower install
3. Add to your env/config.ini, where the id is the number your port ends with (e.g. 1 if 9001):

```ini
[docker]
id = 1
```

4. Run `webpack --watch` from `package.json`

# Sync

Media:
```
rsync -a --delete [USERNAME]@s173.webhostingserver.nl:domains/[DOMAIN]/storage/ storage
rsync -a --delete [USERNAME]@s173.webhostingserver.nl:domains/[DOMAIN]/public_html/media/ public_html/media
```

DB:
```
ssh [USERNAME]@s173.webhostingserver.nl "mysqldump -u[DB_USER] -p[DB_PASS] [DB_NAME]" > data.sql
```
Replace `REMOTE_DB_PASS` with the remote DB password.

With this you retrieve the remote DB in a local file data.sql. You can update your local DB with this file.

# Deploy

```
ssh [USERNAME]@s173.webhostingserver.nl "cd domains/[DOMAIN] && git reset --hard && git pull --no-rebase && rm -rf cache/twig/* && rm -rf cache/metadata/* && /usr/bin/php kikcms cache clear --url https://[DOMAIN]/"
```

# Troubleshooting

In case of any issues, contact the developer. He will help you if he is in a good mood