#!/bin/bash
scp -r build/ ashwin@128.199.203.199:/opt/apps/personal-website-2.0
ssh -i /temp/id_rsa ashwin@128.199.203.199 'cd /opt/apps/personal-website-2.0; git pull; yarn; pm2 restart server';
