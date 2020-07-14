#!bin/sh
ssh ubuntu@15.236.91.165  -o StrictHostKeyChecking=no<<EOF
cd ~/rgpd_front
sudo -s
git pull origin master

npm install -g @angular/cli
npm install --save --unsafe-perm
npm audit fix --force
ng build --prod
rm -rf ../BackRgpd/dist/*
mv dist/rgpd-front/* ../BackRgpd/dist/
exit
EOF
