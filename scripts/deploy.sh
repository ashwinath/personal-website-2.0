#!/bin/bash
rsync -avh ssh build/ ashwin@128.199.203.199:/opt/apps/personal-website-2.0/build;
ssh ashwin@128.199.203.199 'cd /opt/apps/personal-website-2.0; git pull; yarn; pm2 restart server';
