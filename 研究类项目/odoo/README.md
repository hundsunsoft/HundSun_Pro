# git
git clone https://github.com/odoo/odoo.git

# install aria2
sudo apt-get install aria2

# sudo
https://nightly.odoo.com/12.0/nightly/

aria2c -c -x16 -s20 -j20 https://nightly.odoo.com/12.0/nightly/exe/odoo_12.0.latest.exe
aria2c -c -x16 -s20 -j20 https://nightly.odoo.com/12.0/nightly/rpm/odoo_12.0.latest.noarch.rpm
aria2c -c -x16 -s20 -j20 https://nightly.odoo.com/12.0/nightly/src/odoo_12.0.latest.tar.gz
aria2c -c -x16 -s20 -j20 https://nightly.odoo.com/12.0/nightly/deb/odoo_12.0.latest.tar.xz
aria2c -c -x16 -s20 -j20 https://nightly.odoo.com/12.0/nightly/deb/odoo_12.0.latest_all.deb

wget https://www.apachefriends.org/xampp-files/7.3.5/xampp-windows-x64-7.3.5-1-VC15-installer.exe