#!bin/sh
ssh ubuntu@15.236.91.165 <<EOF
cd ~/rgpd_front
sudo -s
git pull origin master
 npm install --save --unsafe-perm

npm audit fix --force
ng build
rm -rf ../BackRgpd/dist/*
mv  build/* ../BackRgpd/dist/
exit
EOF
