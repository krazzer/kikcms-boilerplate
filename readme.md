# Setup dev env

For Windows users, most commands won't work using cmd, so use WSL and/or Git Bash.

## General setup

Skip these steps if you have set up a dev environment before.

1. Clone repo: `git clone git@github.com:krazzer/[REPONAME].git`
2. Create kikdev dirs: `mkdir ~/.docker-kikdev && mkdir ~/.docker-kikdev/mysql && mkdir ~/.docker-kikdev/logs`
3. Install Docker: https://www.docker.com/get-started
4. Create docker network: `docker network create kikdev`
5. Create MySQL and Mailhog containers, replace `<password>` with your desired password (run from the project root): `PASS=<password> docker compose -f vendor/kiksaus/kikcms/docker/docker-compose-services.yml up -d`
6. Use your favorite GUI like (SequalPro, Navicat, Workbench, PHPMyAdmin, etc.) and connect to the MySQL container with these settings, where `<password>` is the same as you used to set up the MySQL container:
    ```
    Host: localhost  
    Port: 3306
    User: root
    Pass: <password>
    ```
7. Download https://github.com/phalcon/ide-stubs and put the code somewhere you can identify.
   
## Project setup

1. Clone repo (if you haven't already): `git clone git@github.com:krazzer/[REPONAME].git`
2. From the project root, run `composer install`
3. Create symlink for assets: `ln -s ../vendor/kiksaus/kikcms/resources public_html/cmsassets`
4. Add folders: `mkdir cache && mkdir public_html/media && mkdir public_html/media/files && mkdir public_html/media/thumbs && mkdir storage`
5. Create app container, replacing `<password>` with desired password again, and `<port>` with the desired port (e.g., 9001), and `<name>` with the name of your project (run from project root again): `SITE_PORT=<port> docker compose -f vendor/kiksaus/kikcms/docker/docker-compose-site.yml -p <name> up -d`
6. Create a database
7. Now run the SQL from the SQL file you got from the dev.
8. Place the media files you got from the dev in `storage/media`
9. Now create `env/config.ini` file and replace `PASS` and `DBNAME`
   ```ini
   [application]
   env = dev
    
   [database]
   username = root
   password = PASS
   dbname = DBNAME
   host = mysql
   
   [mailer]
   host = mail
   port = 1025
   ```
10. Add any additional config variables provided by the dev
11. In PHPStorm > settings > PHP, add the Phalcon source to your include path (from https://github.com/phalcon/ide-stubs)
12. Now you're good to go! Test if the app is working in the browser: https://localhost:9001 (or another port if you chose to)

## Setup local asset update
This is required to update js/css when you change js or scss source files.

1. `npm install`
2. `cd vendor/kiksaus/kikcms/assets && bower install`
3. Add to your `env/config.ini`, where the id is the number your port ends with (e.g., 1 if 9001):

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

# Share the development environment

Use these steps to share the development environment with another developer:

1. Make sure the readme is up to date (copy from boilerplate repo)
2. Give the developer access to the repo on GitHub
3. Give access to additional required private repositories
4. Share the development DB (<2MB for PHPMyAdmin), media folder, and additional env config

# Troubleshooting

In case of any issues, contact the developer. He will help you if he is in a good mood