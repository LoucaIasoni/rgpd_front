#!bin/sh
ssh ubuntu@15.236.91.165 <<EOF
cd ~/rgpd_front
sudo -s
git pull origin master
nvm use 12.18.0
npm install -g @angular/cli
 npm install --save --unsafe-perm

npm audit fix --force
ng build --prod
rm -rf ../BackRgpd/dist/*
mv  build/* ../BackRgpd/dist/
exit
EOF
