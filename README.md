  @Column({nullable: true})
  packageDetailInfo: string;
  @Column({nullable: true})
  packagePickupInfo: string;
  @Column({nullable: true})
  packageDeliveryInfo: string;
  @Column({nullable: true})
// @Column({nullable: true})
// packageTypeInfo: string;
// @Column({nullable: true})
// packageDetailInfo: string;
// @Column({nullable: true})
// packagePickupInfo: string;
// @Column({nullable: true})
// packageDeliveryInfo: string;
// packageDetailInfo: packageDetailInfo,
// packagePickupInfo: packagePickupInfo,
// packageDeliveryInfo: packageDeliveryInfo,
// packageTypeInfo:  packageTypeInfo ?packageTypeInfo:'no info',
  // @Column()
  // @Field((type) => String, { nullable: true , description: 'trip field' })
  // tripId?: string;

  // @OneToOne(() => Trip, (trip) => trip.ride_request)
  // @Field((type) => Trip, { nullable: true })
  // trip?: Trip;



[WARN] Query DELETE FROM mysql.user WHERE User=''; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1'); failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query DROP DATABASE IF EXISTS test; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query DELETE FROM mysql.db WHERE Db='test' OR Db='test\_%'; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query UPDATE mysql.user SET Password=PASSWORD('1WwtaDdXkJtnAmHp4Tqj') WHERE User='root'; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query UPDATE mysql.user SET plugin = 'mysql_native_password' WHERE User='root'; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query FLUSH PRIVILEGES; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)




Last login: Thu Jan 26 01:00:24 on ttys003
mac@macs-MacBook-Air ~ % ssh root@149.102.142.116                  
Welcome to Ubuntu 20.04.5 LTS (GNU/Linux 5.4.0-137-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

 * Introducing Expanded Security Maintenance for Applications.
   Receive updates to over 25,000 software packages with your
   Ubuntu Pro subscription. Free for personal use.

     https://ubuntu.com/pro
  _____
 / ___/___  _  _ _____ _   ___  ___
| |   / _ \| \| |_   _/ \ | _ )/ _ \
| |__| (_) | .` | | |/ _ \| _ \ (_) |
 \____\___/|_|\_| |_/_/ \_|___/\___/

Welcome!

This server is hosted by Contabo. If you have any questions or need help,
please don't hesitate to contact us at support@contabo.com.

You have new mail.
Last login: Thu Jan 26 11:04:58 2023 from 41.174.124.30
root@panel:~# sudo systemctl set-environment MYSQLD_OPTS="--skip-networking --skip-grant-tables"
root@panel:~# 
root@panel:~#  sudo systemctl start mysql.service
Job for mariadb.service failed because the control process exited with error code.
See "systemctl status mariadb.service" and "journalctl -xe" for details.
root@panel:~# sudo apt-get remove --purge mysql*
Reading package lists... Done
Building dependency tree... 50%
Building dependency tree       
Reading state information... Done
E: Unable to locate package mysql-init
root@panel:~# 
root@panel:~# sudo apt-get remove --purge mysql*
Reading package lists... Done
Building dependency tree       
Reading state information... Done
E: Unable to locate package mysql-init
root@panel:~# sudo apt-get purge mysql*
Reading package lists... Done
Building dependency tree       
Reading state information... Done
E: Unable to locate package mysql-init
root@panel:~# sudo apt-get update && sudo apt-get dist-upgrade

Get:2 http://security.ubuntu.com/ubuntu focal-security InRelease [114 kB]      
Hit:3 http://ppa.launchpad.net/ondrej/php/ubuntu focal InRelease               
Hit:1 https://rspamd.com/apt-stable focal InRelease                            
Hit:4 http://de.archive.ubuntu.com/ubuntu focal InRelease                      
Hit:5 http://de.archive.ubuntu.com/ubuntu focal-updates InRelease              
Hit:6 http://de.archive.ubuntu.com/ubuntu focal-backports InRelease   
Hit:7 https://baltocdn.com/helm/stable/debian all InRelease           
Hit:8 https://deb.goaccess.io focal InRelease     
Fetched 114 kB in 3s (37.7 kB/s)
Reading package lists... Done
N: Skipping acquire of configured file 'main/binary-i386/Packages' as repository 'https://deb.goaccess.io focal InRelease' doesn't support architecture 'i386'
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Calculating upgrade... Done
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
root@panel:~# 
root@panel:~# sudo apt-get remove --purge mysql-server 
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Package 'mysql-server' is not installed, so not removed

0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
root@panel:~# 
root@panel:~# sudo apt-get purge mysql*
Reading package lists... Done
Building dependency tree       
Reading state information... Done
E: Unable to locate package mysql-init
root@panel:~# sudo apt-get purge mysql
Reading package lists... Done
Building dependency tree       
Reading state information... Done
E: Unable to locate package mysql
root@panel:~# sudo apt-get purge mysql*
Reading package lists... Done
Building dependency tree       
Reading state information... Done
E: Unable to locate package mysql-init
root@panel:~# sudo apt-get remove --purge mysql-server 
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Package 'mysql-server' is not installed, so not removed
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
root@panel:~# sudo dpkg-query -l | less | grep mysql
ii  dovecot-mysql                         1:2.3.7.2-1ubuntu3.6                                                 amd64        secure POP3/IMAP server - MySQL support
ii  libclass-dbi-mysql-perl               1.00-4                                                               all          extensions to Class::DBI for MySQL
ii  libdbd-mysql-perl:amd64               4.050-3                                                              amd64        Perl5 database interface to the MariaDB/MySQL database
ii  libmysqlclient21:amd64                8.0.32-0buntu0.20.04.1                                               amd64        MySQL database client library
ii  libtime-piece-mysql-perl              0.06-2                                                               all          module adding MySQL-specific methods to Time::Piece
ii  mysql-common                          5.8+1.0.5ubuntu2                                                     all          MySQL database common files, e.g. /etc/mysql/my.cnf
ii  php5.6-mysql                          5.6.40-64+ubuntu20.04.1+deb.sury.org+1                               amd64        MySQL module for PHP
ii  php7.0-mysql                          7.0.33-64+ubuntu20.04.1+deb.sury.org+1                               amd64        MySQL module for PHP
ii  php7.1-mysql                          7.1.33-51+ubuntu20.04.1+deb.sury.org+1                               amd64        MySQL module for PHP
ii  php7.2-mysql                          7.2.34-37+ubuntu20.04.1+deb.sury.org+1                               amd64        MySQL module for PHP
ii  php7.3-mysql                          7.3.33-9+ubuntu20.04.1+deb.sury.org+1                                amd64        MySQL module for PHP
ii  php7.4-mysql                          1:7.4.33-3+ubuntu20.04.1+deb.sury.org+1                              amd64        MySQL module for PHP
ii  php8.0-mysql                          1:8.0.27-2+ubuntu20.04.1+deb.sury.org+1                              amd64        MySQL module for PHP
ii  php8.1-mysql                          8.1.14-2+ubuntu20.04.1+deb.sury.org+1                                amd64        MySQL module for PHP
ii  postfix-mysql                         3.4.13-0ubuntu1.2                                                    amd64        MySQL map support for Postfix
ii  pure-ftpd-mysql                       1.0.49-4                                                             amd64        Secure and efficient FTP server with MySQL user authentication
ii  roundcube-mysql                       1.4.3+dfsg.1-1                                                       all          metapackage providing MySQL dependencies for RoundCube
root@panel:~# sudo apt-get autoremove
Reading package lists... Done
Building dependency tree... 50%
Building dependency tree       
Reading state information... Done
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
root@panel:~# 
root@panel:~#  sudo systemctl start mysql.service

Job for mariadb.service failed because the control process exited with error code.
See "systemctl status mariadb.service" and "journalctl -xe" for details.
root@panel:~# 
root@panel:~# sudo systemctl status mariadb.service
● mariadb.service - MariaDB 10.3.37 database server
     Loaded: loaded (/lib/systemd/system/mariadb.service; enabled; vendor preset: enabled)
    Drop-In: /etc/systemd/system/mysql.service.d
             └─limits.conf
     Active: failed (Result: exit-code) since Sun 2023-01-29 14:40:16 CET; 20s ago
       Docs: man:mysqld(8)
             https://mariadb.com/kb/en/library/systemd/
    Process: 3232959 ExecStartPre=/usr/bin/install -m 755 -o mysql -g root -d /var/run/mysqld (code=exi>
    Process: 3232971 ExecStartPre=/bin/sh -c systemctl unset-environment _WSREP_START_POSITION (code=ex>
    Process: 3232972 ExecStartPre=/bin/sh -c [ ! -e /usr/bin/galera_recovery ] && VAR= ||   VAR=`cd /us>
    Process: 3233020 ExecStart=/usr/sbin/mysqld $MYSQLD_OPTS $_WSREP_NEW_CLUSTER $_WSREP_START_POSITION>
   Main PID: 3233020 (code=exited, status=1/FAILURE)
     Status: "MariaDB server is down"

Jan 29 14:39:43 panel systemd[1]: Starting MariaDB 10.3.37 database server...
Jan 29 14:39:44 panel mysqld[3233020]: 2023-01-29 14:39:44 0 [Note] /usr/sbin/mysqld (mysqld 10.3.37-Ma>
Jan 29 14:40:16 panel systemd[1]: mariadb.service: Main process exited, code=exited, status=1/FAILURE
Jan 29 14:40:16 panel systemd[1]: mariadb.service: Failed with result 'exit-code'.
Jan 29 14:40:16 panel systemd[1]: Failed to start MariaDB 10.3.37 database server.

root@panel:~# mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
Installing MariaDB/MySQL system tables in '/var/lib/mysql' ...

Installation of system tables failed!  Examine the logs in
/var/lib/mysql for more information.

The problem could be conflicting information in an external
my.cnf files. You can ignore these by doing:

    shell> /usr/bin/mysql_install_db --defaults-file=~/.my.cnf

You can also try to start the mysqld daemon with:

    shell> /usr/sbin/mysqld --skip-grant-tables --general-log &

and use the command line tool /usr/bin/mysql
to connect to the mysql database and look at the grant tables:

    shell> /usr/bin/mysql -u root mysql
    mysql> show tables;

Try 'mysqld --help' if you have problems with paths.  Using
--general-log gives you a log in /var/lib/mysql that may be helpful.

The latest information about mysql_install_db is available at
https://mariadb.com/kb/en/installing-system-tables-mysql_install_db
You can find the latest source at https://downloads.mariadb.org and
the maria-discuss email list at https://launchpad.net/~maria-discuss

Please check all of the above before submitting a bug report
at http://mariadb.org/jira

root@panel:~# cd /var/lib/mysql
root@panel:/var/lib/mysql# ls
aria_log.00000001  debian-10.3.flag  ib_logfile1  multi-master.info   performance_schema  tc.log
aria_log_control   ib_buffer_pool    ibdata1	  mysql		      phpmyadmin
dbispconfig	   ib_logfile0	     ibtmp1	  mysql_upgrade_info  roundcube
root@panel:/var/lib/mysql# rm -r *
root@panel:/var/lib/mysql# mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
Installing MariaDB/MySQL system tables in '/var/lib/mysql' ...
OK

To start mysqld at boot time you have to copy
support-files/mysql.server to the right place for your system


PLEASE REMEMBER TO SET A PASSWORD FOR THE MariaDB root USER !
To do so, start the server, then issue the following command:

'/usr/bin/mysql_secure_installation'

which will also give you the option of removing the test
databases and anonymous user created by default.  This is
strongly recommended for production servers.

See the MariaDB Knowledgebase at http://mariadb.com/kb

You can start the MariaDB daemon with:
cd '/usr' ; /usr/bin/mysqld_safe --datadir='/var/lib/mysql'

You can test the MariaDB daemon with mysql-test-run.pl
cd '/usr/mysql-test' ; perl mysql-test-run.pl

Please report any problems at http://mariadb.org/jira

The latest information about MariaDB is available at http://mariadb.org/.

Consider joining MariaDB's strong and vibrant community:
https://mariadb.org/get-involved/

root@panel:/var/lib/mysql# systemctl start mysqld
root@panel:/var/lib/mysql# /usr/bin/mysql_secure_installation'
> ^C
root@panel:/var/lib/mysql# /usr/bin/mysql_secure_installation

NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

In order to log into MariaDB to secure it, we'll need the current
password for the root user.  If you've just installed MariaDB, and
you haven't set the root password yet, the password will be blank,
so you should just press enter here.

Enter current password for root (enter for none): 
OK, successfully used password, moving on...

Setting the root password ensures that nobody can log into the MariaDB
root user without the proper authorisation.

Set root password? [Y/n] Y
New password: 
Re-enter new password: 
Password updated successfully!
Reloading privilege tables..
 ... Success!


By default, a MariaDB installation has an anonymous user, allowing anyone
to log into MariaDB without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n] Y
 ... Success!

Normally, root should only be allowed to connect from 'localhost'.  This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] Y
 ... Success!

By default, MariaDB comes with a database named 'test' that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n] Y
 - Dropping test database...
 ... Success!
 - Removing privileges on test database...
 ... Success!

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] Y
 ... Success!

Cleaning up...

All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
root@panel:/var/lib/mysql# systemctl start mysql.service
root@panel:/var/lib/mysql# systemctl start mariadb
root@panel:/var/lib/mysql# mysql
ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: NO)
root@panel:/var/lib/mysql# 
root@panel:/var/lib/mysql# systemctl start mysql.service
root@panel:/var/lib/mysql# systemctl start mariadb
root@panel:/var/lib/mysql# 
root@panel:/var/lib/mysql# mysql
ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: NO)
root@panel:/var/lib/mysql# 
root@panel:/var/lib/mysql# mysql -u root
ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: NO)
root@panel:/var/lib/mysql# mysql -u root "
> ^C
root@panel:/var/lib/mysql# mysql -u root ""
ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: NO)
root@panel:/var/lib/mysql# mysqladmin -u root password Seth.Greats@1#
mysqladmin: connect to server at 'localhost' failed
error: 'Access denied for user 'root'@'localhost' (using password: NO)'
root@panel:/var/lib/mysql# sudo dpkg-reconfigure mysql-server-5.5
dpkg-query: package 'mysql-server-5.5' is not installed and no information is available
Use dpkg --info (= dpkg-deb --info) to examine archive files.
/usr/sbin/dpkg-reconfigure: mysql-server-5.5 is not installed
root@panel:/var/lib/mysql# mysql-server --version
mysql-server: command not found
root@panel:/var/lib/mysql# dpkg --get-selections | grep sql
dovecot-mysql					install
libclass-dbi-mysql-perl				install
libdbd-mysql-perl:amd64				install
libmysqlclient21:amd64				install
libsql-abstract-limit-perl			install
libsql-abstract-perl				install
libsqlite3-0:amd64				install
libtime-piece-mysql-perl			install
mysql-common					install
php5.6-mysql					install
php5.6-sqlite3					install
php7.0-mysql					install
php7.0-sqlite3					install
php7.1-mysql					install
php7.1-sqlite3					install
php7.2-mysql					install
php7.2-sqlite3					install
php7.3-mysql					install
php7.3-sqlite3					install
php7.4-mysql					install
php7.4-sqlite3					install
php8.0-mysql					install
php8.0-sqlite3					install
php8.1-mysql					install
php8.1-sqlite3					install
postfix-mysql					install
pure-ftpd-mysql					install
roundcube-mysql					install
root@panel:/var/lib/mysql# mysql -u root -p
Enter password: 
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 124
Server version: 10.3.37-MariaDB-0ubuntu0.20.04.1 Ubuntu 20.04

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> use dbispconfig;
ERROR 1049 (42000): Unknown database 'dbispconfig'
MariaDB [(none)]> exit
Bye
root@panel:/var/lib/mysql# cd
root@panel:~# ls
go  mysql-init	update.txt
root@panel:~# ls -a
.	  .bash_history  .cache   .go	 .local		 .nvm	   .ssh		   go
..	  .bash_profile  .config  .krew  .mysql_history  .pm2	   .vscode-server  mysql-init
.acme.sh  .bashrc	 .docker  .kube  .npm		 .profile  .wget-hsts	   update.txt
root@panel:~# cd .config
root@panel:~/.config# ls
configstore  helm
root@panel:~/.config# cd 
root@panel:~# nano /etc/hosts
root@panel:~# systemctl reboot
root@panel:~# Connection to 149.102.142.116 closed by remote host.
Connection to 149.102.142.116 closed.
mac@macs-MacBook-Air ~ % ssh root@149.102.142.116
ssh: connect to host 149.102.142.116 port 22: Connection refused
mac@macs-MacBook-Air ~ % ssh root@149.102.142.116
Welcome to Ubuntu 20.04.5 LTS (GNU/Linux 5.4.0-137-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

 * Introducing Expanded Security Maintenance for Applications.
   Receive updates to over 25,000 software packages with your
   Ubuntu Pro subscription. Free for personal use.

     https://ubuntu.com/pro
New release '22.04.1 LTS' available.
Run 'do-release-upgrade' to upgrade to it.

  _____
 / ___/___  _  _ _____ _   ___  ___
| |   / _ \| \| |_   _/ \ | _ )/ _ \
| |__| (_) | .` | | |/ _ \| _ \ (_) |
 \____\___/|_|\_| |_/_/ \_|___/\___/

Welcome!

This server is hosted by Contabo. If you have any questions or need help,
please don't hesitate to contact us at support@contabo.com.

You have new mail.
Last login: Sun Jan 29 14:29:08 2023 from 41.174.95.134
root@panel:~# hostname
panel
root@panel:~# hostname -f
hostname: Name or service not known
root@panel:~# nano /etc/hosts
root@panel:~# nano /etc/hosts
root@panel:~# nano /etc/hostname
root@panel:~# systemctl reboot
root@panel:~# Connection to 149.102.142.116 closed by remote host.
Connection to 149.102.142.116 closed.
mac@macs-MacBook-Air ~ % ssh root@149.102.142.116
ssh: connect to host 149.102.142.116 port 22: Connection refused
mac@macs-MacBook-Air ~ % ssh root@149.102.142.116
ssh: connect to host 149.102.142.116 port 22: Connection refused
mac@macs-MacBook-Air ~ % ssh root@149.102.142.116
ssh: connect to host 149.102.142.116 port 22: Connection refused
mac@macs-MacBook-Air ~ % ssh root@149.102.142.116
ssh: connect to host 149.102.142.116 port 22: Connection refused
mac@macs-MacBook-Air ~ % ssh root@149.102.142.116
ssh: connect to host 149.102.142.116 port 22: Connection refused
mac@macs-MacBook-Air ~ % ssh root@149.102.142.116
Welcome to Ubuntu 20.04.5 LTS (GNU/Linux 5.4.0-137-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

 * Introducing Expanded Security Maintenance for Applications.
   Receive updates to over 25,000 software packages with your
   Ubuntu Pro subscription. Free for personal use.

     https://ubuntu.com/pro
New release '22.04.1 LTS' available.
Run 'do-release-upgrade' to upgrade to it.

  _____
 / ___/___  _  _ _____ _   ___  ___
| |   / _ \| \| |_   _/ \ | _ )/ _ \
| |__| (_) | .` | | |/ _ \| _ \ (_) |
 \____\___/|_|\_| |_/_/ \_|___/\___/

Welcome!

This server is hosted by Contabo. If you have any questions or need help,
please don't hesitate to contact us at support@contabo.com.

You have new mail.
Last login: Mon Jan 30 07:12:48 2023 from 41.174.161.250
root@admin:~# hostname -f
admin.greats.systems
root@admin:~# sudo apt update && apt upgrade
Get:1 http://security.ubuntu.com/ubuntu focal-security InRelease [114 kB]
Hit:3 https://baltocdn.com/helm/stable/debian all InRelease                                            
Hit:4 http://ppa.launchpad.net/ondrej/php/ubuntu focal InRelease                           
Hit:2 https://rspamd.com/apt-stable focal InRelease                                        
Hit:5 http://de.archive.ubuntu.com/ubuntu focal InRelease          
Get:6 http://de.archive.ubuntu.com/ubuntu focal-updates InRelease [114 kB]
Get:7 http://de.archive.ubuntu.com/ubuntu focal-backports InRelease [108 kB]
Hit:8 https://deb.goaccess.io focal InRelease     
Get:9 http://de.archive.ubuntu.com/ubuntu focal-updates/main amd64 Packages [2344 kB]
Get:10 http://de.archive.ubuntu.com/ubuntu focal-updates/universe amd64 Packages [1021 kB]
Fetched 3701 kB in 5s (711 kB/s)                          
Reading package lists... Done
Building dependency tree       
Reading state information... Done
All packages are up to date.
N: Skipping acquire of configured file 'main/binary-i386/Packages' as repository 'https://deb.goaccess.io focal InRelease' doesn't support architecture 'i386'
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Calculating upgrade... Done
The following security updates require Ubuntu Pro with 'esm-apps' enabled:
  libmagickcore-6.q16-6-extra sntp node-hosted-git-info imagemagick
  python2.7-minimal libmagickwand-6.q16-6 roundcube-plugins python2.7 fail2ban
  roundcube-core mailman ntp node-tar imagemagick-6.q16 redis-tools
  libjs-jquery-ui roundcube-mysql roundcube libopenexr24 libmagickcore-6.q16-6
  libpython2.7-minimal libpython2.7-stdlib redis-server imagemagick-6-common
Learn more about Ubuntu Pro at https://ubuntu.com/pro
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
root@admin:~# wget -O - https://get.ispconfig.org | sh -s -- --use-ftp-ports=40110-40210 --unattended-upgrades
--2023-01-30 07:19:53--  https://get.ispconfig.org/
Resolving get.ispconfig.org (get.ispconfig.org)... 172.67.75.112, 104.26.11.246, 104.26.10.246, ...
Connecting to get.ispconfig.org (get.ispconfig.org)|172.67.75.112|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 2003 (2.0K) [application/octet-stream]
Saving to: ‘STDOUT’

-                         100%[=====================================>]   1.96K  --.-KB/s    in 0s      

2023-01-30 07:19:54 (40.3 MB/s) - written to stdout [2003/2003]

WARNING! This script will reconfigure your complete server!
It should be run on a freshly installed server and all current configuration that you have done will most likely be lost!
Type 'yes' if you really want to continue: yes
[INFO] Starting perfect server setup for Ubuntu 20.04.5 LTS
[ERROR] The server already has ISPConfig installed. Aborting. (/lib/os/class.ISPConfigDebianOS.inc.php:1242)
[INFO] Warning: Please delete the log files in /tmp/ispconfig-ai/var/log/setup-* once you don't need them anymore because they contain your passwords!
root@admin:~# nano /tmp/ispconfig-ai/var/log/setup-*
root@admin:~# cd /tmp/ispconfig-ai/var/log/
root@admin:/tmp/ispconfig-ai/var/log# ls
ispconfig.log  setup-20230130072010.log
root@admin:/tmp/ispconfig-ai/var/log# ispconfig.log
ispconfig.log: command not found
root@admin:/tmp/ispconfig-ai/var/log# nano ispconfig.log
root@admin:/tmp/ispconfig-ai/var/log# setup-20230130072010.log
setup-20230130072010.log: command not found
root@admin:/tmp/ispconfig-ai/var/log# nano setup-20230130072010.log
root@admin:/tmp/ispconfig-ai/var/log# cd /usr/local/
root@admin:/usr/local# ls
bin  etc  games  include  ispconfig  lib  man  sbin  share  src
root@admin:/usr/local# sudo rm -r ispconfig 
root@admin:/usr/local# ls
bin  etc  games  include  lib  man  sbin  share  src
root@admin:/usr/local# cd bin
root@admin:/usr/local/bin# ls
ispconfig_patch		      just  kubectl		      letsencrypt_renew_hook.sh  pm2-docker
ispconfig_update.sh	      k9s   letsencrypt_post_hook.sh  pm2			 pm2-runtime
ispconfig_update_from_dev.sh  kind  letsencrypt_pre_hook.sh   pm2-dev			 run-getmail.sh
root@admin:/usr/local/bin# sudo rm -f ispconfig_patch ispconfig_update.sh ispconfig_update_from_dev.sh
root@admin:/usr/local/bin# ls
just  kind     letsencrypt_post_hook.sh  letsencrypt_renew_hook.sh  pm2-dev	pm2-runtime
k9s   kubectl  letsencrypt_pre_hook.sh	 pm2			    pm2-docker	run-getmail.sh
root@admin:/usr/local/bin# cd 
root@admin:~# wget -O - https://get.ispconfig.org | sh -s -- --use-ftp-ports=40110-40210 --unattended-upgrades
--2023-01-30 07:25:17--  https://get.ispconfig.org/
Resolving get.ispconfig.org (get.ispconfig.org)... 172.67.75.112, 104.26.11.246, 104.26.10.246, ...
Connecting to get.ispconfig.org (get.ispconfig.org)|172.67.75.112|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 2003 (2.0K) [application/octet-stream]
Saving to: ‘STDOUT’

-                         100%[=====================================>]   1.96K  --.-KB/s    in 0s      

2023-01-30 07:25:17 (18.0 MB/s) - written to stdout [2003/2003]

WARNING! This script will reconfigure your complete server!
It should be run on a freshly installed server and all current configuration that you have done will most likely be lost!
Type 'yes' if you really want to continue: yes
[INFO] Starting perfect server setup for Ubuntu 20.04.5 LTS
[INFO] Checking hostname.
[INFO] Configuring apt repositories.
[INFO] Updating packages
[INFO] Updated packages
[INFO] Installing packages ssh, openssh-server, nano, vim-nox, lsb-release, apt-transport-https, ca-certificates, wget, git, gnupg, software-properties-common, curl, cron, ntp
[INFO] Installed packages ssh, openssh-server, nano, vim-nox, lsb-release, apt-transport-https, ca-certificates, wget, git, gnupg, software-properties-common, curl, cron, ntp
[INFO] Activating rspamd repository.
[INFO] Activating sury php repository.
[INFO] Activating GoAccess repository.
[INFO] Updating packages (after enabling 3rd party repos).
[INFO] Updated packages
[INFO] Installing packages dbconfig-common, postfix, postfix-mysql, postfix-doc, mariadb-client, mariadb-server, openssl, getmail4, rkhunter, binutils, sudo
[INFO] Installed packages dbconfig-common, postfix, postfix-mysql, postfix-doc, mariadb-client, mariadb-server, openssl, getmail4, rkhunter, binutils, sudo
[INFO] Installing packages dovecot-imapd, dovecot-pop3d, dovecot-mysql, dovecot-sieve, dovecot-managesieved, dovecot-lmtpd
[INFO] Installed packages dovecot-imapd, dovecot-pop3d, dovecot-mysql, dovecot-sieve, dovecot-managesieved, dovecot-lmtpd
[INFO] Generating MySQL password.
[WARN] Query DELETE FROM mysql.user WHERE User=''; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1'); failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query DROP DATABASE IF EXISTS test; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query DELETE FROM mysql.db WHERE Db='test' OR Db='test\_%'; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query UPDATE mysql.user SET Password=PASSWORD('1WwtaDdXkJtnAmHp4Tqj') WHERE User='root'; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query UPDATE mysql.user SET plugin = 'mysql_native_password' WHERE User='root'; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query FLUSH PRIVILEGES; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[INFO] Writing MySQL config files.
[INFO] Configuring postfix.
[INFO] Restarting postfix
[INFO] Installing packages software-properties-common, update-inetd, dnsutils, resolvconf, clamav, clamav-daemon, clamav-docs, zip, unzip, bzip2, xz-utils, lzip, rar, borgbackup, arj, nomarch, lzop, cabextract, apt-listchanges, libnet-ldap-perl, libauthen-sasl-perl, daemon, libio-string-perl, libio-socket-ssl-perl, libnet-ident-perl, libnet-dns-perl, libdbd-mysql-perl, bind9, rspamd, redis-server, postgrey, p7zip, p7zip-full, unrar-free, lrzip
[INFO] Installed packages software-properties-common, update-inetd, dnsutils, resolvconf, clamav, clamav-daemon, clamav-docs, zip, unzip, bzip2, xz-utils, lzip, rar, borgbackup, arj, nomarch, lzop, cabextract, apt-listchanges, libnet-ldap-perl, libauthen-sasl-perl, daemon, libio-string-perl, libio-socket-ssl-perl, libnet-ident-perl, libnet-dns-perl, libdbd-mysql-perl, bind9, rspamd, redis-server, postgrey, p7zip, p7zip-full, unrar-free, lrzip
[INFO] Stopping Rspamd.
[INFO] (Re)starting Bind.
[INFO] Disabling spamassassin daemon.
[INFO] Checking local dns resolver.
[INFO] Installing packages apache2, apache2-doc, apache2-utils, libapache2-mod-fcgid, apache2-suexec-pristine, libapache2-mod-python, libapache2-mod-passenger
[INFO] Installed packages apache2, apache2-doc, apache2-utils, libapache2-mod-fcgid, apache2-suexec-pristine, libapache2-mod-python, libapache2-mod-passenger
[INFO] Installing packages php-pear, php-memcache, php-imagick, mcrypt, imagemagick, libruby, memcached, php-apcu, jailkit, php5.6, php5.6-common, php5.6-gd, php5.6-mysql, php5.6-imap, php5.6-cli, php5.6-mcrypt, php5.6-curl, php5.6-intl, php5.6-pspell, php5.6-recode, php5.6-sqlite3, php5.6-tidy, php5.6-xmlrpc, php5.6-xsl, php5.6-zip, php5.6-mbstring, php5.6-soap, php5.6-opcache, php5.6-cgi, php5.6-fpm, php7.0, php7.0-common, php7.0-gd, php7.0-mysql, php7.0-imap, php7.0-cli, php7.0-mcrypt, php7.0-curl, php7.0-intl, php7.0-pspell, php7.0-recode, php7.0-sqlite3, php7.0-tidy, php7.0-xmlrpc, php7.0-xsl, php7.0-zip, php7.0-mbstring, php7.0-soap, php7.0-opcache, php7.0-cgi, php7.0-fpm, php7.1, php7.1-common, php7.1-gd, php7.1-mysql, php7.1-imap, php7.1-cli, php7.1-mcrypt, php7.1-curl, php7.1-intl, php7.1-pspell, php7.1-recode, php7.1-sqlite3, php7.1-tidy, php7.1-xmlrpc, php7.1-xsl, php7.1-zip, php7.1-mbstring, php7.1-soap, php7.1-opcache, php7.1-cgi, php7.1-fpm, php7.2, php7.2-common, php7.2-gd, php7.2-mysql, php7.2-imap, php7.2-cli, php7.2-curl, php7.2-intl, php7.2-pspell, php7.2-recode, php7.2-sqlite3, php7.2-tidy, php7.2-xmlrpc, php7.2-xsl, php7.2-zip, php7.2-mbstring, php7.2-soap, php7.2-opcache, php7.2-cgi, php7.2-fpm, php7.3, php7.3-common, php7.3-gd, php7.3-mysql, php7.3-imap, php7.3-cli, php7.3-curl, php7.3-intl, php7.3-pspell, php7.3-recode, php7.3-sqlite3, php7.3-tidy, php7.3-xmlrpc, php7.3-xsl, php7.3-zip, php7.3-mbstring, php7.3-soap, php7.3-opcache, php7.3-cgi, php7.3-fpm, php7.4, php7.4-common, php7.4-gd, php7.4-mysql, php7.4-imap, php7.4-cli, php7.4-curl, php7.4-intl, php7.4-pspell, php7.4-sqlite3, php7.4-tidy, php7.4-xmlrpc, php7.4-xsl, php7.4-zip, php7.4-mbstring, php7.4-soap, php7.4-opcache, php7.4-cgi, php7.4-fpm, php8.0, php8.0-common, php8.0-gd, php8.0-mysql, php8.0-imap, php8.0-cli, php8.0-curl, php8.0-intl, php8.0-pspell, php8.0-sqlite3, php8.0-tidy, php8.0-xsl, php8.0-zip, php8.0-mbstring, php8.0-soap, php8.0-opcache, php8.0-cgi, php8.0-fpm, php8.1, php8.1-common, php8.1-gd, php8.1-mysql, php8.1-imap, php8.1-cli, php8.1-curl, php8.1-intl, php8.1-pspell, php8.1-sqlite3, php8.1-tidy, php8.1-xsl, php8.1-zip, php8.1-mbstring, php8.1-soap, php8.1-opcache, php8.1-cgi, php8.1-fpm
[INFO] Installed packages php-pear, php-memcache, php-imagick, mcrypt, imagemagick, libruby, memcached, php-apcu, jailkit, php5.6, php5.6-common, php5.6-gd, php5.6-mysql, php5.6-imap, php5.6-cli, php5.6-mcrypt, php5.6-curl, php5.6-intl, php5.6-pspell, php5.6-recode, php5.6-sqlite3, php5.6-tidy, php5.6-xmlrpc, php5.6-xsl, php5.6-zip, php5.6-mbstring, php5.6-soap, php5.6-opcache, php5.6-cgi, php5.6-fpm, php7.0, php7.0-common, php7.0-gd, php7.0-mysql, php7.0-imap, php7.0-cli, php7.0-mcrypt, php7.0-curl, php7.0-intl, php7.0-pspell, php7.0-recode, php7.0-sqlite3, php7.0-tidy, php7.0-xmlrpc, php7.0-xsl, php7.0-zip, php7.0-mbstring, php7.0-soap, php7.0-opcache, php7.0-cgi, php7.0-fpm, php7.1, php7.1-common, php7.1-gd, php7.1-mysql, php7.1-imap, php7.1-cli, php7.1-mcrypt, php7.1-curl, php7.1-intl, php7.1-pspell, php7.1-recode, php7.1-sqlite3, php7.1-tidy, php7.1-xmlrpc, php7.1-xsl, php7.1-zip, php7.1-mbstring, php7.1-soap, php7.1-opcache, php7.1-cgi, php7.1-fpm, php7.2, php7.2-common, php7.2-gd, php7.2-mysql, php7.2-imap, php7.2-cli, php7.2-curl, php7.2-intl, php7.2-pspell, php7.2-recode, php7.2-sqlite3, php7.2-tidy, php7.2-xmlrpc, php7.2-xsl, php7.2-zip, php7.2-mbstring, php7.2-soap, php7.2-opcache, php7.2-cgi, php7.2-fpm, php7.3, php7.3-common, php7.3-gd, php7.3-mysql, php7.3-imap, php7.3-cli, php7.3-curl, php7.3-intl, php7.3-pspell, php7.3-recode, php7.3-sqlite3, php7.3-tidy, php7.3-xmlrpc, php7.3-xsl, php7.3-zip, php7.3-mbstring, php7.3-soap, php7.3-opcache, php7.3-cgi, php7.3-fpm, php7.4, php7.4-common, php7.4-gd, php7.4-mysql, php7.4-imap, php7.4-cli, php7.4-curl, php7.4-intl, php7.4-pspell, php7.4-sqlite3, php7.4-tidy, php7.4-xmlrpc, php7.4-xsl, php7.4-zip, php7.4-mbstring, php7.4-soap, php7.4-opcache, php7.4-cgi, php7.4-fpm, php8.0, php8.0-common, php8.0-gd, php8.0-mysql, php8.0-imap, php8.0-cli, php8.0-curl, php8.0-intl, php8.0-pspell, php8.0-sqlite3, php8.0-tidy, php8.0-xsl, php8.0-zip, php8.0-mbstring, php8.0-soap, php8.0-opcache, php8.0-cgi, php8.0-fpm, php8.1, php8.1-common, php8.1-gd, php8.1-mysql, php8.1-imap, php8.1-cli, php8.1-curl, php8.1-intl, php8.1-pspell, php8.1-sqlite3, php8.1-tidy, php8.1-xsl, php8.1-zip, php8.1-mbstring, php8.1-soap, php8.1-opcache, php8.1-cgi, php8.1-fpm
[INFO] Disabling conflicting apache modules.
[INFO] Enabling apache modules.
[INFO] Enabling default PHP-FPM config.
[INFO] Setting default system PHP version.
[INFO] Installing phpMyAdmin
[WARN] Query CREATE DATABASE phpmyadmin; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:344)
[WARN] Query CREATE USER 'pma'@'localhost' IDENTIFIED BY 'VmYQfV7TpoDsbw6'; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:344)
[WARN] Query GRANT ALL PRIVILEGES ON phpmyadmin.* TO 'pma'@'localhost' IDENTIFIED BY 'VmYQfV7TpoDsbw6' WITH GRANT OPTION; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:344)
[WARN] Query FLUSH PRIVILEGES; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:344)
ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)
[WARN] Command mysql --defaults-file=/etc/mysql/debian.cnf -D phpmyadmin < /usr/share/phpmyadmin/sql/create_tables.sql failed. (/lib/os/class.ISPConfigDebianOS.inc.php:351)
[INFO] HTTPoxy config.
[INFO] Installing acme.sh (Let's Encrypt).
[INFO] acme.sh (Let's Encrypt) installed.
[INFO] Installing Mailman
[INFO] Installing packages mailman
[INFO] Installed packages mailman
[INFO] Installing packages quota, quotatool, haveged, geoip-database, libclass-dbi-mysql-perl, libtimedate-perl, build-essential, autoconf, automake, libtool, flex, bison, debhelper, binutils
[INFO] Installed packages quota, quotatool, haveged, geoip-database, libclass-dbi-mysql-perl, libtimedate-perl, build-essential, autoconf, automake, libtool, flex, bison, debhelper, binutils
[INFO] Adding quota to fstab.
[INFO] Installing packages pure-ftpd-common, pure-ftpd-mysql, webalizer, awstats, goaccess
[INFO] Installed packages pure-ftpd-common, pure-ftpd-mysql, webalizer, awstats, goaccess
[INFO] Enabling TLS for pureftpd
[ERROR] Exception occured: ISPConfigOSException -> Command openssl req -x509 -nodes -days 7300 -newkey rsa:2048 -subj '/C=DE/ST=None/L=None/O=IT/CN=admin.greats.systems' -keyout /etc/ssl/private/pure-ftpd.pem -out /etc/ssl/private/pure-ftpd.pem > /dev/null 2>&1 failed. (/ispconfig.ai.php:15)
root@admin:~# sudo apt-get remove --purge mysql*
Reading package lists... Done
Building dependency tree       
Reading state information... Done
E: Unable to locate package mysql-init
root@admin:~# ls
go  mysql-init	update.txt
root@admin:~# sudo rm -f mysql-init 
root@admin:~# sudo apt-get remove --purge mysql*
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Note, selecting 'mysql-source-8.0' for glob 'mysql*'
Note, selecting 'mysqltcl' for glob 'mysql*'
Note, selecting 'mysql-client-5.5' for glob 'mysql*'
Note, selecting 'mysql-client-5.6' for glob 'mysql*'
Note, selecting 'mysql-client-5.7' for glob 'mysql*'
Note, selecting 'mysql-common-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-5.5' for glob 'mysql*'
Note, selecting 'mysql-server-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-5.7' for glob 'mysql*'
Note, selecting 'mysql-client-8.0' for glob 'mysql*'
Note, selecting 'mysql-testsuite' for glob 'mysql*'
Note, selecting 'mysql-server' for glob 'mysql*'
Note, selecting 'mysql-router' for glob 'mysql*'
Note, selecting 'mysql-server-8.0' for glob 'mysql*'
Note, selecting 'mysql-client' for glob 'mysql*'
Note, selecting 'mysql-sandbox' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.5' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.6' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.7' for glob 'mysql*'
Note, selecting 'mysql-client-core-8.0' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.5' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.6' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.7' for glob 'mysql*'
Note, selecting 'mysql-common' for glob 'mysql*'
Note, selecting 'mysql-testsuite-8.0' for glob 'mysql*'
Note, selecting 'mysqltuner' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.5' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.7' for glob 'mysql*'
Note, selecting 'mysql-server-core-8.0' for glob 'mysql*'
Package 'mysql-client-5.7' is not installed, so not removed
Package 'mysql-client-core-5.7' is not installed, so not removed
Note, selecting 'mysql-common' instead of 'mysql-common-5.6'
Package 'mysql-server-5.5' is not installed, so not removed
Package 'mysql-server-5.7' is not installed, so not removed
Package 'mysql-server-core-5.7' is not installed, so not removed
Package 'mysql-client-core-5.5' is not installed, so not removed
Package 'mysql-client-core-5.6' is not installed, so not removed
Package 'mysql-client-5.5' is not installed, so not removed
Package 'mysql-client-5.6' is not installed, so not removed
Package 'mysql-server-core-5.5' is not installed, so not removed
Package 'mysql-server-core-5.6' is not installed, so not removed
Package 'mysql-server-5.6' is not installed, so not removed
Package 'mysql-testsuite-5.5' is not installed, so not removed
Package 'mysql-testsuite-5.6' is not installed, so not removed
Package 'mysql-testsuite-5.7' is not installed, so not removed
Package 'mysql-sandbox' is not installed, so not removed
Package 'mysqltcl' is not installed, so not removed
Package 'mysqltuner' is not installed, so not removed
Package 'mysql-client' is not installed, so not removed
Package 'mysql-client-8.0' is not installed, so not removed
Package 'mysql-client-core-8.0' is not installed, so not removed
Package 'mysql-server' is not installed, so not removed
Package 'mysql-server-8.0' is not installed, so not removed
Package 'mysql-server-core-8.0' is not installed, so not removed
Package 'mysql-router' is not installed, so not removed
Package 'mysql-source-8.0' is not installed, so not removed
Package 'mysql-testsuite' is not installed, so not removed
Package 'mysql-testsuite-8.0' is not installed, so not removed
The following packages were automatically installed and are no longer required:
  galera-3 libaio1 libb-hooks-op-check-perl libclass-accessor-perl libclass-data-inheritable-perl
  libclass-dbi-abstractsearch-perl libclass-dbi-perl libclass-method-modifiers-perl
  libclass-trigger-perl libclass-xsaccessor-perl libclone-choose-perl libclone-perl
  libconfig-inifiles-perl libdbi-perl libdbix-contextualfetch-perl libdevel-callchecker-perl
  libdynaloader-functions-perl libhash-merge-perl libhtml-template-perl libima-dbi-perl
  libimport-into-perl liblingua-en-inflect-perl libmodule-runtime-perl libmoo-perl
  libparams-classify-perl libreadline5 librole-tiny-perl libsnappy1v5 libsql-abstract-limit-perl
  libsql-abstract-perl libstrictures-perl libsub-quote-perl libtime-piece-mysql-perl
  libuniversal-moniker-perl openbsd-inetd socat tcpd
Use 'sudo apt autoremove' to remove them.
The following additional packages will be installed:
  roundcube-sqlite3 sqlite3
Suggested packages:
  sqlite3-doc
The following packages will be REMOVED:
  dovecot-mysql* libclass-dbi-mysql-perl* libdbd-mysql-perl* libmysqlclient21* mariadb-client*
  mariadb-client-10.3* mariadb-client-core-10.3* mariadb-common* mariadb-server* mariadb-server-10.3*
  mariadb-server-core-10.3* mysql-common* postfix-mysql* pure-ftpd-mysql* roundcube-mysql*
The following NEW packages will be installed:
  roundcube-sqlite3 sqlite3
0 upgraded, 2 newly installed, 15 to remove and 0 not upgraded.
Need to get 873 kB of archives.
After this operation, 165 MB disk space will be freed.
Do you want to continue? [Y/n] Y
Get:1 http://de.archive.ubuntu.com/ubuntu focal-updates/main amd64 sqlite3 amd64 3.31.1-4ubuntu0.5 [860 kB]
Get:2 http://de.archive.ubuntu.com/ubuntu focal/universe amd64 roundcube-sqlite3 all 1.4.3+dfsg.1-1 [12.7 kB]
Fetched 873 kB in 0s (4326 kB/s)        
(Reading database ... 150407 files and directories currently installed.)
Removing dovecot-mysql (1:2.3.7.2-1ubuntu3.6) ...
Removing libclass-dbi-mysql-perl (1.00-4) ...
Removing libdbd-mysql-perl:amd64 (4.050-3) ...
Removing postfix-mysql (3.4.13-0ubuntu1.2) ...
Removing mysql map entry from /etc/postfix/dynamicmaps.cf
Removing pure-ftpd-mysql (1.0.49-4) ...
Removing libmysqlclient21:amd64 (8.0.32-0ubuntu0.20.04.2) ...
Selecting previously unselected package sqlite3.
(Reading database ... 150359 files and directories currently installed.)
Preparing to unpack .../sqlite3_3.31.1-4ubuntu0.5_amd64.deb ...
Unpacking sqlite3 (3.31.1-4ubuntu0.5) ...
Selecting previously unselected package roundcube-sqlite3.
Preparing to unpack .../roundcube-sqlite3_1.4.3+dfsg.1-1_all.deb ...
Unpacking roundcube-sqlite3 (1.4.3+dfsg.1-1) ...
(Reading database ... 150370 files and directories currently installed.)
Removing mariadb-client (1:10.3.37-0ubuntu0.20.04.1) ...
Removing mariadb-server (1:10.3.37-0ubuntu0.20.04.1) ...
Removing mariadb-server-10.3 (1:10.3.37-0ubuntu0.20.04.1) ...
Removing mariadb-server-core-10.3 (1:10.3.37-0ubuntu0.20.04.1) ...
dpkg: roundcube-mysql: dependency problems, but removing anyway as you requested:
 roundcube-core depends on roundcube-mysql (= 1.4.3+dfsg.1-1) | roundcube-sqlite3 (= 1.4.3+dfsg.1-1) | roundcube-pgsql (= 1.4.3+dfsg.1-1); however:
  Package roundcube-mysql is to be removed.
  Package roundcube-sqlite3 is not configured yet.
  Package roundcube-pgsql is not installed.

Removing roundcube-mysql (1.4.3+dfsg.1-1) ...
Removing mariadb-client-10.3 (1:10.3.37-0ubuntu0.20.04.1) ...
Removing mariadb-client-core-10.3 (1:10.3.37-0ubuntu0.20.04.1) ...
Removing mariadb-common (1:10.3.37-0ubuntu0.20.04.1) ...
update-alternatives: using /etc/mysql/my.cnf.fallback to provide /etc/mysql/my.cnf (my.cnf) in auto mode
Removing mysql-common (5.8+1.0.5ubuntu2) ...
Setting up sqlite3 (3.31.1-4ubuntu0.5) ...
Setting up roundcube-sqlite3 (1.4.3+dfsg.1-1) ...
Processing triggers for dovecot-core (1:2.3.7.2-1ubuntu3.6) ...
Processing triggers for libc-bin (2.31-0ubuntu9.9) ...
Processing triggers for man-db (2.9.1-1) ...
(Reading database ... 150081 files and directories currently installed.)
Purging configuration files for mysql-common (5.8+1.0.5ubuntu2) ...
Purging configuration files for postfix-mysql (3.4.13-0ubuntu1.2) ...
Purging configuration files for mariadb-common (1:10.3.37-0ubuntu0.20.04.1) ...
Purging configuration files for mariadb-client-10.3 (1:10.3.37-0ubuntu0.20.04.1) ...
Purging configuration files for mariadb-server-10.3 (1:10.3.37-0ubuntu0.20.04.1) ...
dpkg: warning: while removing mariadb-server-10.3, directory '/etc/mysql/mariadb.conf.d' not empty so not removed
Purging configuration files for pure-ftpd-mysql (1.0.49-4) ...
Processing triggers for systemd (245.4-4ubuntu3.19) ...
root@admin:~# sudo apt-get purge mysql*
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Note, selecting 'mysql-source-8.0' for glob 'mysql*'
Note, selecting 'mysqltcl' for glob 'mysql*'
Note, selecting 'mysql-client-5.5' for glob 'mysql*'
Note, selecting 'mysql-client-5.6' for glob 'mysql*'
Note, selecting 'mysql-client-5.7' for glob 'mysql*'
Note, selecting 'mysql-common-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-5.5' for glob 'mysql*'
Note, selecting 'mysql-server-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-5.7' for glob 'mysql*'
Note, selecting 'mysql-client-8.0' for glob 'mysql*'
Note, selecting 'mysql-testsuite' for glob 'mysql*'
Note, selecting 'mysql-server' for glob 'mysql*'
Note, selecting 'mysql-router' for glob 'mysql*'
Note, selecting 'mysql-server-8.0' for glob 'mysql*'
Note, selecting 'mysql-client' for glob 'mysql*'
Note, selecting 'mysql-sandbox' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.5' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.6' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.7' for glob 'mysql*'
Note, selecting 'mysql-client-core-8.0' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.5' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.6' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.7' for glob 'mysql*'
Note, selecting 'mysql-common' for glob 'mysql*'
Note, selecting 'mysql-testsuite-8.0' for glob 'mysql*'
Note, selecting 'mysqltuner' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.5' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.7' for glob 'mysql*'
Note, selecting 'mysql-server-core-8.0' for glob 'mysql*'
Package 'mysql-client-5.7' is not installed, so not removed
Package 'mysql-client-core-5.7' is not installed, so not removed
Note, selecting 'mysql-common' instead of 'mysql-common-5.6'
Package 'mysql-server-5.5' is not installed, so not removed
Package 'mysql-server-5.7' is not installed, so not removed
Package 'mysql-server-core-5.7' is not installed, so not removed
Package 'mysql-client-core-5.5' is not installed, so not removed
Package 'mysql-client-core-5.6' is not installed, so not removed
Package 'mysql-client-5.5' is not installed, so not removed
Package 'mysql-client-5.6' is not installed, so not removed
Package 'mysql-server-core-5.5' is not installed, so not removed
Package 'mysql-server-core-5.6' is not installed, so not removed
Package 'mysql-server-5.6' is not installed, so not removed
Package 'mysql-testsuite-5.5' is not installed, so not removed
Package 'mysql-testsuite-5.6' is not installed, so not removed
Package 'mysql-testsuite-5.7' is not installed, so not removed
Package 'mysql-common' is not installed, so not removed
Package 'mysql-sandbox' is not installed, so not removed
Package 'mysqltcl' is not installed, so not removed
Package 'mysqltuner' is not installed, so not removed
Package 'mysql-client' is not installed, so not removed
Package 'mysql-client-8.0' is not installed, so not removed
Package 'mysql-client-core-8.0' is not installed, so not removed
Package 'mysql-server' is not installed, so not removed
Package 'mysql-server-8.0' is not installed, so not removed
Package 'mysql-server-core-8.0' is not installed, so not removed
Package 'mysql-router' is not installed, so not removed
Package 'mysql-source-8.0' is not installed, so not removed
Package 'mysql-testsuite' is not installed, so not removed
Package 'mysql-testsuite-8.0' is not installed, so not removed
The following packages were automatically installed and are no longer required:
  galera-3 libaio1 libb-hooks-op-check-perl libclass-accessor-perl libclass-data-inheritable-perl
  libclass-dbi-abstractsearch-perl libclass-dbi-perl libclass-method-modifiers-perl
  libclass-trigger-perl libclass-xsaccessor-perl libclone-choose-perl libclone-perl
  libconfig-inifiles-perl libdbi-perl libdbix-contextualfetch-perl libdevel-callchecker-perl
  libdynaloader-functions-perl libhash-merge-perl libhtml-template-perl libima-dbi-perl
  libimport-into-perl liblingua-en-inflect-perl libmodule-runtime-perl libmoo-perl
  libparams-classify-perl libreadline5 librole-tiny-perl libsnappy1v5 libsql-abstract-limit-perl
  libsql-abstract-perl libstrictures-perl libsub-quote-perl libtime-piece-mysql-perl
  libuniversal-moniker-perl openbsd-inetd socat tcpd
Use 'sudo apt autoremove' to remove them.
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
root@admin:~# sudo apt-get autoremove
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following packages will be REMOVED:
  galera-3 libaio1 libb-hooks-op-check-perl libclass-accessor-perl libclass-data-inheritable-perl
  libclass-dbi-abstractsearch-perl libclass-dbi-perl libclass-method-modifiers-perl
  libclass-trigger-perl libclass-xsaccessor-perl libclone-choose-perl libclone-perl
  libconfig-inifiles-perl libdbi-perl libdbix-contextualfetch-perl libdevel-callchecker-perl
  libdynaloader-functions-perl libhash-merge-perl libhtml-template-perl libima-dbi-perl
  libimport-into-perl liblingua-en-inflect-perl libmodule-runtime-perl libmoo-perl
  libparams-classify-perl libreadline5 librole-tiny-perl libsnappy1v5 libsql-abstract-limit-perl
  libsql-abstract-perl libstrictures-perl libsub-quote-perl libtime-piece-mysql-perl
  libuniversal-moniker-perl openbsd-inetd socat tcpd
0 upgraded, 0 newly installed, 37 to remove and 0 not upgraded.
After this operation, 9013 kB disk space will be freed.
Do you want to continue? [Y/n] Y
Abort.
root@admin:~# sudo apt-get purge mysql*
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Note, selecting 'mysql-source-8.0' for glob 'mysql*'
Note, selecting 'mysqltcl' for glob 'mysql*'
Note, selecting 'mysql-client-5.5' for glob 'mysql*'
Note, selecting 'mysql-client-5.6' for glob 'mysql*'
Note, selecting 'mysql-client-5.7' for glob 'mysql*'
Note, selecting 'mysql-common-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-5.5' for glob 'mysql*'
Note, selecting 'mysql-server-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-5.7' for glob 'mysql*'
Note, selecting 'mysql-client-8.0' for glob 'mysql*'
Note, selecting 'mysql-testsuite' for glob 'mysql*'
Note, selecting 'mysql-server' for glob 'mysql*'
Note, selecting 'mysql-router' for glob 'mysql*'
Note, selecting 'mysql-server-8.0' for glob 'mysql*'
Note, selecting 'mysql-client' for glob 'mysql*'
Note, selecting 'mysql-sandbox' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.5' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.6' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.7' for glob 'mysql*'
Note, selecting 'mysql-client-core-8.0' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.5' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.6' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.7' for glob 'mysql*'
Note, selecting 'mysql-common' for glob 'mysql*'
Note, selecting 'mysql-testsuite-8.0' for glob 'mysql*'
Note, selecting 'mysqltuner' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.5' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.7' for glob 'mysql*'
Note, selecting 'mysql-server-core-8.0' for glob 'mysql*'
Package 'mysql-client-5.7' is not installed, so not removed
Package 'mysql-client-core-5.7' is not installed, so not removed
Note, selecting 'mysql-common' instead of 'mysql-common-5.6'
Package 'mysql-server-5.5' is not installed, so not removed
Package 'mysql-server-5.7' is not installed, so not removed
Package 'mysql-server-core-5.7' is not installed, so not removed
Package 'mysql-client-core-5.5' is not installed, so not removed
Package 'mysql-client-core-5.6' is not installed, so not removed
Package 'mysql-client-5.5' is not installed, so not removed
Package 'mysql-client-5.6' is not installed, so not removed
Package 'mysql-server-core-5.5' is not installed, so not removed
Package 'mysql-server-core-5.6' is not installed, so not removed
Package 'mysql-server-5.6' is not installed, so not removed
Package 'mysql-testsuite-5.5' is not installed, so not removed
Package 'mysql-testsuite-5.6' is not installed, so not removed
Package 'mysql-testsuite-5.7' is not installed, so not removed
Package 'mysql-common' is not installed, so not removed
Package 'mysql-sandbox' is not installed, so not removed
Package 'mysqltcl' is not installed, so not removed
Package 'mysqltuner' is not installed, so not removed
Package 'mysql-client' is not installed, so not removed
Package 'mysql-client-8.0' is not installed, so not removed
Package 'mysql-client-core-8.0' is not installed, so not removed
Package 'mysql-server' is not installed, so not removed
Package 'mysql-server-8.0' is not installed, so not removed
Package 'mysql-server-core-8.0' is not installed, so not removed
Package 'mysql-router' is not installed, so not removed
Package 'mysql-source-8.0' is not installed, so not removed
Package 'mysql-testsuite' is not installed, so not removed
Package 'mysql-testsuite-8.0' is not installed, so not removed
The following packages were automatically installed and are no longer required:
  galera-3 libaio1 libb-hooks-op-check-perl libclass-accessor-perl libclass-data-inheritable-perl
  libclass-dbi-abstractsearch-perl libclass-dbi-perl libclass-method-modifiers-perl
  libclass-trigger-perl libclass-xsaccessor-perl libclone-choose-perl libclone-perl
  libconfig-inifiles-perl libdbi-perl libdbix-contextualfetch-perl libdevel-callchecker-perl
  libdynaloader-functions-perl libhash-merge-perl libhtml-template-perl libima-dbi-perl
  libimport-into-perl liblingua-en-inflect-perl libmodule-runtime-perl libmoo-perl
  libparams-classify-perl libreadline5 librole-tiny-perl libsnappy1v5 libsql-abstract-limit-perl
  libsql-abstract-perl libstrictures-perl libsub-quote-perl libtime-piece-mysql-perl
  libuniversal-moniker-perl openbsd-inetd socat tcpd
Use 'sudo apt autoremove' to remove them.
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
root@admin:~# sudo apt-get autoremove
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following packages will be REMOVED:
  galera-3 libaio1 libb-hooks-op-check-perl libclass-accessor-perl libclass-data-inheritable-perl
  libclass-dbi-abstractsearch-perl libclass-dbi-perl libclass-method-modifiers-perl
  libclass-trigger-perl libclass-xsaccessor-perl libclone-choose-perl libclone-perl
  libconfig-inifiles-perl libdbi-perl libdbix-contextualfetch-perl libdevel-callchecker-perl
  libdynaloader-functions-perl libhash-merge-perl libhtml-template-perl libima-dbi-perl
  libimport-into-perl liblingua-en-inflect-perl libmodule-runtime-perl libmoo-perl
  libparams-classify-perl libreadline5 librole-tiny-perl libsnappy1v5 libsql-abstract-limit-perl
  libsql-abstract-perl libstrictures-perl libsub-quote-perl libtime-piece-mysql-perl
  libuniversal-moniker-perl openbsd-inetd socat tcpd
0 upgraded, 0 newly installed, 37 to remove and 0 not upgraded.
After this operation, 9013 kB disk space will be freed.
Do you want to continue? [Y/n] Y
(Reading database ... 150055 files and directories currently installed.)
Removing galera-3 (25.3.29-1) ...
Removing libaio1:amd64 (0.3.112-5) ...
Removing libclass-dbi-abstractsearch-perl (0.07-4) ...
Removing libsql-abstract-limit-perl (2:0.14.1-5) ...
Removing libsql-abstract-perl (1.86-1) ...
Removing libmoo-perl (2.003006-1) ...
Removing libimport-into-perl (1.002005-1) ...
Removing libmodule-runtime-perl (0.016-1) ...
Removing libparams-classify-perl (0.015-1build2) ...
Removing libdevel-callchecker-perl (0.008-1ubuntu1) ...
Removing libb-hooks-op-check-perl (0.22-1build2) ...
Removing libclass-dbi-perl (3.0.17-4) ...
Removing libclass-accessor-perl (0.51-1) ...
Removing libima-dbi-perl (0.35-2) ...
Removing libclass-trigger-perl (0.14-2) ...
Removing libclass-data-inheritable-perl (0.08-3) ...
Removing librole-tiny-perl (2.001004-1) ...
Removing libclass-method-modifiers-perl (2.13-1) ...
Removing libclass-xsaccessor-perl (1.19-3build3) ...
Removing libhash-merge-perl (0.300-1) ...
Removing libclone-choose-perl (0.010-1) ...
Removing libclone-perl (0.43-2) ...
Removing libconfig-inifiles-perl (3.000002-1) ...
Removing libdbix-contextualfetch-perl (1.03-4) ...
Removing libdbi-perl:amd64 (1.643-1ubuntu0.1) ...
Removing libdynaloader-functions-perl (0.003-1) ...
Removing libhtml-template-perl (2.97-1) ...
Removing liblingua-en-inflect-perl (1.904-1) ...
Removing libreadline5:amd64 (5.2+dfsg-3build3) ...
Removing libsnappy1v5:amd64 (1.1.8-1build1) ...
Removing libstrictures-perl (2.000006-1) ...
Removing libsub-quote-perl (2.006006-1) ...
Removing libtime-piece-mysql-perl (0.06-2) ...
Removing libuniversal-moniker-perl (0.08-8) ...
Removing openbsd-inetd (0.20160825-4build1) ...
Removing socat (1.7.3.3-2) ...
Removing tcpd (7.6.q-30) ...
Processing triggers for man-db (2.9.1-1) ...
Processing triggers for libc-bin (2.31-0ubuntu9.9) ...
root@admin:~# sudo apt-get autoclean
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Del libmysqlclient21 8.0.31-0ubuntu0.20.04.2 [1327 kB]
Del bind9-dnsutils 1:9.16.1-0ubuntu2.10 [134 kB]
Del libpam0g 1.3.1-5ubuntu4.3 [55.4 kB]
Del apt 2.0.6 [1296 kB]
Del language-pack-en 1:20.04+20220211 [1896 B]
Del python3.8 3.8.10-0ubuntu1~20.04.4 [387 kB]
Del distro-info-data 0.43ubuntu1.9 [4744 B]
Del libpam-runtime 1.3.1-5ubuntu4.3 [37.3 kB]
Del libpython3.8-minimal 3.8.10-0ubuntu1~20.04.4 [717 kB]
Del dnsutils 1:9.16.1-0ubuntu2.11 [2756 B]
Del libldap-2.4-2 2.4.49+dfsg-2ubuntu1.8 [155 kB]
Del libcurl4 7.68.0-1ubuntu2.7 [234 kB]
Del python-apt-common 2.0.0ubuntu0.20.04.8 [17.1 kB]
Del libpam-modules 1.3.1-5ubuntu4.3 [260 kB]
Del php7.4-mbstring 7.4.3-4ubuntu2.15 [392 kB]
Del gpg 2.2.19-3ubuntu2.1 [483 kB]
Del bind9-libs 1:9.16.1-0ubuntu2.10 [1108 kB]
Del python3-apt 2.0.0ubuntu0.20.04.7 [154 kB]
Del gpg-agent 2.2.19-3ubuntu2.1 [232 kB]
Del gpgsm 2.2.19-3ubuntu2.1 [217 kB]
Del software-properties-common 0.99.9.8 [10.6 kB]
Del curl 7.68.0-1ubuntu2.7 [161 kB]
Del openssh-server 1:8.2p1-4ubuntu0.4 [377 kB]
Del linux-generic 5.4.0.105.109 [1904 B]
Del gpg-wks-client 2.2.19-3ubuntu2.1 [97.6 kB]
Del xxd 2:8.1.2269-1ubuntu5.7 [50.0 kB]
Del language-pack-gnome-en 1:20.04+20220211 [1928 B]
Del base-files 11ubuntu5.5 [60.5 kB]
Del openssh-client 1:8.2p1-4ubuntu0.4 [671 kB]
Del gnupg 2.2.19-3ubuntu2.1 [259 kB]
Del bind9 1:9.16.1-0ubuntu2.11 [233 kB]
Del bind9-dnsutils 1:9.16.1-0ubuntu2.11 [134 kB]
Del ca-certificates 20210119~20.04.2 [145 kB]
Del update-manager-core 1:20.04.10.10 [11.6 kB]
Del python3-software-properties 0.99.9.8 [24.9 kB]
Del libldap-common 2.4.49+dfsg-2ubuntu1.8 [16.6 kB]
Del gpgv 2.2.19-3ubuntu2.1 [199 kB]
Del php7.4-common 7.4.3-4ubuntu2.15 [983 kB]
Del gpgconf 2.2.19-3ubuntu2.1 [124 kB]
Del python3-update-manager 1:20.04.10.10 [38.1 kB]
Del python-apt-common 2.0.0ubuntu0.20.04.7 [17.1 kB]
Del libapt-pkg6.0 2.0.6 [835 kB]
Del libnetplan0 0.103-0ubuntu5~20.04.6 [53.4 kB]
Del libexpat1 2.2.9-1ubuntu0.4 [74.4 kB]
Del rsync 3.1.3-8ubuntu0.2 [318 kB]
Del libntfs-3g883 1:2017.3.23AR.3-3ubuntu1.1 [149 kB]
Del vim 2:8.1.2269-1ubuntu5.7 [1238 kB]
Del php7.4-cli 7.4.3-4ubuntu2.15 [1425 kB]
Del sudo 1.8.31-1ubuntu1.2 [514 kB]
Del language-pack-en-base 1:20.04+20220211 [442 kB]
Del bind9-host 1:9.16.1-0ubuntu2.11 [43.0 kB]
Del ubuntu-advantage-tools 27.6~20.04.1 [862 kB]
Del grub-pc-bin 2.04-1ubuntu26.13 [971 kB]
Del libxml2 2.9.10+dfsg-5ubuntu0.20.04.2 [640 kB]
Del php7.4-readline 7.4.3-4ubuntu2.15 [12.6 kB]
Del vim-runtime 2:8.1.2269-1ubuntu5.7 [5872 kB]
Del linux-image-generic 5.4.0.105.109 [2468 B]
Del ubuntu-advantage-tools 27.12~20.04.1 [167 kB]
Del isc-dhcp-common 4.4.1-2.1ubuntu5.20.04.2 [44.9 kB]
Del openssh-sftp-server 1:8.2p1-4ubuntu0.4 [51.5 kB]
Del intel-microcode 3.20210608.0ubuntu0.20.04.1 [3809 kB]
Del libpam-modules-bin 1.3.1-5ubuntu4.3 [41.2 kB]
Del ntfs-3g 1:2017.3.23AR.3-3ubuntu1.1 [388 kB]
Del libssl1.1 1.1.1f-1ubuntu2.12 [1322 kB]
Del python3-apt 2.0.0ubuntu0.20.04.8 [154 kB]
Del php7.4-opcache 7.4.3-4ubuntu2.15 [198 kB]
Del linux-headers-generic 5.4.0.105.109 [2344 B]
Del bind9-host 1:9.16.1-0ubuntu2.10 [42.9 kB]
Del gpg-wks-server 2.2.19-3ubuntu2.1 [90.3 kB]
Del grub2-common 2.04-1ubuntu26.13 [590 kB]
Del bind9-libs 1:9.16.1-0ubuntu2.11 [1108 kB]
Del isc-dhcp-client 4.4.1-2.1ubuntu5.20.04.2 [246 kB]
Del python3.8-minimal 3.8.10-0ubuntu1~20.04.4 [1899 kB]
Del openssl 1.1.1f-1ubuntu2.12 [620 kB]
Del networkd-dispatcher 2.1-2~ubuntu20.04.1 [14.6 kB]
Del login 1:4.8.1-1ubuntu5.20.04.1 [220 kB]
Del language-pack-gnome-en-base 1:20.04+20220211 [533 kB]
Del vim-tiny 2:8.1.2269-1ubuntu5.7 [578 kB]
Del linux-firmware 1.187.29 [125 MB]
Del php7.4-json 7.4.3-4ubuntu2.15 [19.2 kB]
Del alsa-ucm-conf 1.2.2-1ubuntu0.12 [27.1 kB]
Del grub-common 2.04-1ubuntu26.13 [1875 kB]
Del passwd 1:4.8.1-1ubuntu5.20.04.1 [799 kB]
Del gnupg-utils 2.2.19-3ubuntu2.1 [480 kB]
Del libpython3.8-stdlib 3.8.10-0ubuntu1~20.04.4 [1675 kB]
Del gnupg-l10n 2.2.19-3ubuntu2.1 [51.7 kB]
Del dirmngr 2.2.19-3ubuntu2.1 [329 kB]
Del bind9-utils 1:9.16.1-0ubuntu2.11 [172 kB]
Del apt-utils 2.0.6 [216 kB]
Del vim-common 2:8.1.2269-1ubuntu5.7 [85.0 kB]
Del python3-distupgrade 1:20.04.37 [104 kB]
Del wireless-regdb 2021.08.28-0ubuntu1~20.04.1 [10.0 kB]
Del netplan.io 0.103-0ubuntu5~20.04.6 [125 kB]
Del grub-pc 2.04-1ubuntu26.13 [125 kB]
Del tzdata 2022a-0ubuntu0.20.04 [294 kB]
Del ubuntu-release-upgrader-core 1:20.04.37 [24.0 kB]
Del libgnutls30 3.6.13-2ubuntu1.6 [828 kB]
Del libpython3.8 3.8.10-0ubuntu1~20.04.4 [1625 kB]
root@admin:~# sudo apt-get remove dbconfig-mysql
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Package 'dbconfig-mysql' is not installed, so not removed
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
root@admin:~# sudo apt-get dist-upgrade
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Calculating upgrade... Done
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
root@admin:~# sudo apt-get install mysql-server
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following additional packages will be installed:
  libaio1 libhtml-template-perl libmecab2 mecab-ipadic mecab-ipadic-utf8 mecab-utils mysql-client-8.0
  mysql-client-core-8.0 mysql-common mysql-server-8.0 mysql-server-core-8.0
Suggested packages:
  libipc-sharedcache-perl tinyca
The following NEW packages will be installed:
  libaio1 libhtml-template-perl libmecab2 mecab-ipadic mecab-ipadic-utf8 mecab-utils mysql-client-8.0
  mysql-client-core-8.0 mysql-common mysql-server mysql-server-8.0 mysql-server-core-8.0
0 upgraded, 12 newly installed, 0 to remove and 0 not upgraded.
Need to get 36.0 MB/36.1 MB of archives.
After this operation, 317 MB of additional disk space will be used.
Do you want to continue? [Y/n] Y
Get:1 http://de.archive.ubuntu.com/ubuntu focal-updates/main amd64 mysql-client-core-8.0 amd64 8.0.32-0ubuntu0.20.04.2 [5157 kB]
Get:2 http://de.archive.ubuntu.com/ubuntu focal-updates/main amd64 mysql-client-8.0 amd64 8.0.32-0ubuntu0.20.04.2 [22.0 kB]
Get:3 http://de.archive.ubuntu.com/ubuntu focal/main amd64 libmecab2 amd64 0.996-10build1 [233 kB]
Get:4 http://de.archive.ubuntu.com/ubuntu focal-updates/main amd64 mysql-server-core-8.0 amd64 8.0.32-0ubuntu0.20.04.2 [22.5 MB]
Get:5 http://de.archive.ubuntu.com/ubuntu focal-updates/main amd64 mysql-server-8.0 amd64 8.0.32-0ubuntu0.20.04.2 [1317 kB]
Get:6 http://de.archive.ubuntu.com/ubuntu focal/main amd64 mecab-utils amd64 0.996-10build1 [4912 B]
Get:7 http://de.archive.ubuntu.com/ubuntu focal/main amd64 mecab-ipadic all 2.7.0-20070801+main-2.1 [6714 kB]
Get:8 http://de.archive.ubuntu.com/ubuntu focal/main amd64 mecab-ipadic-utf8 all 2.7.0-20070801+main-2.1 [4380 B]
Get:9 http://de.archive.ubuntu.com/ubuntu focal-updates/main amd64 mysql-server all 8.0.32-0ubuntu0.20.04.2 [9472 B]
Fetched 36.0 MB in 2s (21.4 MB/s) 
Preconfiguring packages ...
Selecting previously unselected package mysql-common.
(Reading database ... 149519 files and directories currently installed.)
Preparing to unpack .../0-mysql-common_5.8+1.0.5ubuntu2_all.deb ...
Unpacking mysql-common (5.8+1.0.5ubuntu2) ...
Selecting previously unselected package mysql-client-core-8.0.
Preparing to unpack .../1-mysql-client-core-8.0_8.0.32-0ubuntu0.20.04.2_amd64.deb ...
Unpacking mysql-client-core-8.0 (8.0.32-0ubuntu0.20.04.2) ...
Selecting previously unselected package mysql-client-8.0.
Preparing to unpack .../2-mysql-client-8.0_8.0.32-0ubuntu0.20.04.2_amd64.deb ...
Unpacking mysql-client-8.0 (8.0.32-0ubuntu0.20.04.2) ...
Selecting previously unselected package libaio1:amd64.
Preparing to unpack .../3-libaio1_0.3.112-5_amd64.deb ...
Unpacking libaio1:amd64 (0.3.112-5) ...
Selecting previously unselected package libmecab2:amd64.
Preparing to unpack .../4-libmecab2_0.996-10build1_amd64.deb ...
Unpacking libmecab2:amd64 (0.996-10build1) ...
Selecting previously unselected package mysql-server-core-8.0.
Preparing to unpack .../5-mysql-server-core-8.0_8.0.32-0ubuntu0.20.04.2_amd64.deb ...
Unpacking mysql-server-core-8.0 (8.0.32-0ubuntu0.20.04.2) ...
Setting up mysql-common (5.8+1.0.5ubuntu2) ...
update-alternatives: using /etc/mysql/my.cnf.fallback to provide /etc/mysql/my.cnf (my.cnf) in auto mode
Selecting previously unselected package mysql-server-8.0.
(Reading database ... 149730 files and directories currently installed.)
Preparing to unpack .../0-mysql-server-8.0_8.0.32-0ubuntu0.20.04.2_amd64.deb ...
Unpacking mysql-server-8.0 (8.0.32-0ubuntu0.20.04.2) ...
Selecting previously unselected package libhtml-template-perl.
Preparing to unpack .../1-libhtml-template-perl_2.97-1_all.deb ...
Unpacking libhtml-template-perl (2.97-1) ...
Selecting previously unselected package mecab-utils.
Preparing to unpack .../2-mecab-utils_0.996-10build1_amd64.deb ...
Unpacking mecab-utils (0.996-10build1) ...
Selecting previously unselected package mecab-ipadic.
Preparing to unpack .../3-mecab-ipadic_2.7.0-20070801+main-2.1_all.deb ...
Unpacking mecab-ipadic (2.7.0-20070801+main-2.1) ...
Selecting previously unselected package mecab-ipadic-utf8.
Preparing to unpack .../4-mecab-ipadic-utf8_2.7.0-20070801+main-2.1_all.deb ...
Unpacking mecab-ipadic-utf8 (2.7.0-20070801+main-2.1) ...
Selecting previously unselected package mysql-server.
Preparing to unpack .../5-mysql-server_8.0.32-0ubuntu0.20.04.2_all.deb ...
Unpacking mysql-server (8.0.32-0ubuntu0.20.04.2) ...
Setting up libmecab2:amd64 (0.996-10build1) ...
Setting up mysql-client-core-8.0 (8.0.32-0ubuntu0.20.04.2) ...
Setting up libhtml-template-perl (2.97-1) ...
Setting up mecab-utils (0.996-10build1) ...
Setting up mysql-client-8.0 (8.0.32-0ubuntu0.20.04.2) ...
Setting up libaio1:amd64 (0.3.112-5) ...
Setting up mecab-ipadic (2.7.0-20070801+main-2.1) ...
Compiling IPA dictionary for Mecab.  This takes long time...
reading /usr/share/mecab/dic/ipadic/unk.def ... 40
emitting double-array: 100% |###########################################| 
/usr/share/mecab/dic/ipadic/model.def is not found. skipped.
reading /usr/share/mecab/dic/ipadic/Suffix.csv ... 1393
reading /usr/share/mecab/dic/ipadic/Verb.csv ... 130750
reading /usr/share/mecab/dic/ipadic/Symbol.csv ... 208
reading /usr/share/mecab/dic/ipadic/Adnominal.csv ... 135
reading /usr/share/mecab/dic/ipadic/Adj.csv ... 27210
reading /usr/share/mecab/dic/ipadic/Adverb.csv ... 3032
reading /usr/share/mecab/dic/ipadic/Conjunction.csv ... 171
reading /usr/share/mecab/dic/ipadic/Postp-col.csv ... 91
reading /usr/share/mecab/dic/ipadic/Noun.csv ... 60477
reading /usr/share/mecab/dic/ipadic/Auxil.csv ... 199
reading /usr/share/mecab/dic/ipadic/Noun.number.csv ... 42
reading /usr/share/mecab/dic/ipadic/Interjection.csv ... 252
reading /usr/share/mecab/dic/ipadic/Noun.demonst.csv ... 120
reading /usr/share/mecab/dic/ipadic/Noun.others.csv ... 151
reading /usr/share/mecab/dic/ipadic/Noun.nai.csv ... 42
reading /usr/share/mecab/dic/ipadic/Noun.name.csv ... 34202
reading /usr/share/mecab/dic/ipadic/Noun.place.csv ... 72999
reading /usr/share/mecab/dic/ipadic/Postp.csv ... 146
reading /usr/share/mecab/dic/ipadic/Noun.proper.csv ... 27328
reading /usr/share/mecab/dic/ipadic/Noun.adverbal.csv ... 795
reading /usr/share/mecab/dic/ipadic/Noun.verbal.csv ... 12146
reading /usr/share/mecab/dic/ipadic/Prefix.csv ... 221
reading /usr/share/mecab/dic/ipadic/Others.csv ... 2
reading /usr/share/mecab/dic/ipadic/Noun.adjv.csv ... 3328
reading /usr/share/mecab/dic/ipadic/Filler.csv ... 19
reading /usr/share/mecab/dic/ipadic/Noun.org.csv ... 16668
emitting double-array: 100% |###########################################| 
reading /usr/share/mecab/dic/ipadic/matrix.def ... 1316x1316
emitting matrix      : 100% |###########################################| 

done!
update-alternatives: using /var/lib/mecab/dic/ipadic to provide /var/lib/mecab/dic/debian (mecab-dictionary) in auto mode
Setting up mysql-server-core-8.0 (8.0.32-0ubuntu0.20.04.2) ...
Setting up mecab-ipadic-utf8 (2.7.0-20070801+main-2.1) ...
Compiling IPA dictionary for Mecab.  This takes long time...
reading /usr/share/mecab/dic/ipadic/unk.def ... 40
emitting double-array: 100% |###########################################| 
/usr/share/mecab/dic/ipadic/model.def is not found. skipped.
reading /usr/share/mecab/dic/ipadic/Suffix.csv ... 1393
reading /usr/share/mecab/dic/ipadic/Verb.csv ... 130750
reading /usr/share/mecab/dic/ipadic/Symbol.csv ... 208
reading /usr/share/mecab/dic/ipadic/Adnominal.csv ... 135
reading /usr/share/mecab/dic/ipadic/Adj.csv ... 27210
reading /usr/share/mecab/dic/ipadic/Adverb.csv ... 3032
reading /usr/share/mecab/dic/ipadic/Conjunction.csv ... 171
reading /usr/share/mecab/dic/ipadic/Postp-col.csv ... 91
reading /usr/share/mecab/dic/ipadic/Noun.csv ... 60477
reading /usr/share/mecab/dic/ipadic/Auxil.csv ... 199
reading /usr/share/mecab/dic/ipadic/Noun.number.csv ... 42
reading /usr/share/mecab/dic/ipadic/Interjection.csv ... 252
reading /usr/share/mecab/dic/ipadic/Noun.demonst.csv ... 120
reading /usr/share/mecab/dic/ipadic/Noun.others.csv ... 151
reading /usr/share/mecab/dic/ipadic/Noun.nai.csv ... 42
reading /usr/share/mecab/dic/ipadic/Noun.name.csv ... 34202
reading /usr/share/mecab/dic/ipadic/Noun.place.csv ... 72999
reading /usr/share/mecab/dic/ipadic/Postp.csv ... 146
reading /usr/share/mecab/dic/ipadic/Noun.proper.csv ... 27328
reading /usr/share/mecab/dic/ipadic/Noun.adverbal.csv ... 795
reading /usr/share/mecab/dic/ipadic/Noun.verbal.csv ... 12146
reading /usr/share/mecab/dic/ipadic/Prefix.csv ... 221
reading /usr/share/mecab/dic/ipadic/Others.csv ... 2
reading /usr/share/mecab/dic/ipadic/Noun.adjv.csv ... 3328
reading /usr/share/mecab/dic/ipadic/Filler.csv ... 19
reading /usr/share/mecab/dic/ipadic/Noun.org.csv ... 16668
emitting double-array: 100% |###########################################| 
reading /usr/share/mecab/dic/ipadic/matrix.def ... 1316x1316
emitting matrix      : 100% |###########################################| 

done!
update-alternatives: using /var/lib/mecab/dic/ipadic-utf8 to provide /var/lib/mecab/dic/debian (mecab-dictionary) in auto mode
Setting up mysql-server-8.0 (8.0.32-0ubuntu0.20.04.2) ...
Failed to stop mysql.service: Unit mysql.service not loaded.
invoke-rc.d: initscript mysql, action "stop" failed.
update-alternatives: using /etc/mysql/mysql.cnf to provide /etc/mysql/my.cnf (my.cnf) in auto mode
Renaming removed key_buffer and myisam-recover options (if present)
mysqld will log errors to /var/log/mysql/error.log
2023-01-30T06:31:42.163747Z 0 [ERROR] [MY-010946] [Server] Failed to start mysqld daemon. Check mysqld error log.
Warning: Unable to start the server.
Failed to preset unit: File mysql.service: Link has been severed
/usr/bin/deb-systemd-helper: error: systemctl preset failed on mysql.service: No such file or directory
Failed to start mysql.service: Unit mysql.service not found.
invoke-rc.d: initscript mysql, action "start" failed.
Unit mysql.service could not be found.
dpkg: error processing package mysql-server-8.0 (--configure):
 installed mysql-server-8.0 package post-installation script subprocess returned error exit status 1
dpkg: dependency problems prevent configuration of mysql-server:
 mysql-server depends on mysql-server-8.0; however:
  Package mysql-server-8.0 is not configured yet.

dpkg: error processing package mysql-server (--configure):
 dependency problems - leaving unconfigured
Processing triggers for systemd (245.4-4ubuntu3.19) ...
Processing triggers for man-db (2.9.1-1) ...
Processing triggers for libc-bin (2.31-0ubuntu9.9) ...
Errors were encountered while processing:
 mysql-server-8.0
 mysql-server
E: Sub-process /usr/bin/dpkg returned an error code (1)
root@admin:~# sudo apt-get purge  mysql-server
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following packages were automatically installed and are no longer required:
  libaio1 libhtml-template-perl libmecab2 mecab-ipadic mecab-ipadic-utf8 mecab-utils mysql-client-8.0
  mysql-client-core-8.0 mysql-common mysql-server-8.0 mysql-server-core-8.0
Use 'sudo apt autoremove' to remove them.
The following packages will be REMOVED:
  mysql-server*
0 upgraded, 0 newly installed, 1 to remove and 0 not upgraded.
2 not fully installed or removed.
After this operation, 35.8 kB disk space will be freed.
Do you want to continue? [Y/n] Y
(Reading database ... 149833 files and directories currently installed.)
Removing mysql-server (8.0.32-0ubuntu0.20.04.2) ...
Setting up mysql-server-8.0 (8.0.32-0ubuntu0.20.04.2) ...
Failed to stop mysql.service: Unit mysql.service not loaded.
invoke-rc.d: initscript mysql, action "stop" failed.
Renaming removed key_buffer and myisam-recover options (if present)
mysqld will log errors to /var/log/mysql/error.log
2023-01-30T06:32:14.193536Z 0 [ERROR] [MY-010946] [Server] Failed to start mysqld daemon. Check mysqld error log.
Warning: Unable to start the server.
Failed to preset unit: File mysql.service: Link has been severed
/usr/bin/deb-systemd-helper: error: systemctl preset failed on mysql.service: No such file or directory
Failed to start mysql.service: Unit mysql.service not found.
invoke-rc.d: initscript mysql, action "start" failed.
Unit mysql.service could not be found.
dpkg: error processing package mysql-server-8.0 (--configure):
 installed mysql-server-8.0 package post-installation script subprocess returned error exit status 1
Errors were encountered while processing:
 mysql-server-8.0
E: Sub-process /usr/bin/dpkg returned an error code (1)
root@admin:~# sudo service mysql status
Unit mysql.service could not be found.
root@admin:~# sudo apt-get remove --purge mysql*
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Note, selecting 'mysql-source-8.0' for glob 'mysql*'
Note, selecting 'mysqltcl' for glob 'mysql*'
Note, selecting 'mysql-client-5.5' for glob 'mysql*'
Note, selecting 'mysql-client-5.6' for glob 'mysql*'
Note, selecting 'mysql-client-5.7' for glob 'mysql*'
Note, selecting 'mysql-common-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-5.5' for glob 'mysql*'
Note, selecting 'mysql-server-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-5.7' for glob 'mysql*'
Note, selecting 'mysql-client-8.0' for glob 'mysql*'
Note, selecting 'mysql-testsuite' for glob 'mysql*'
Note, selecting 'mysql-server' for glob 'mysql*'
Note, selecting 'mysql-router' for glob 'mysql*'
Note, selecting 'mysql-server-8.0' for glob 'mysql*'
Note, selecting 'mysql-client' for glob 'mysql*'
Note, selecting 'mysql-sandbox' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.5' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.6' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.7' for glob 'mysql*'
Note, selecting 'mysql-client-core-8.0' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.5' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.6' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.7' for glob 'mysql*'
Note, selecting 'mysql-common' for glob 'mysql*'
Note, selecting 'mysql-testsuite-8.0' for glob 'mysql*'
Note, selecting 'mysqltuner' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.5' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.7' for glob 'mysql*'
Note, selecting 'mysql-server-core-8.0' for glob 'mysql*'
Package 'mysql-client-5.7' is not installed, so not removed
Package 'mysql-client-core-5.7' is not installed, so not removed
Note, selecting 'mysql-common' instead of 'mysql-common-5.6'
Package 'mysql-server-5.5' is not installed, so not removed
Package 'mysql-server-5.7' is not installed, so not removed
Package 'mysql-server-core-5.7' is not installed, so not removed
Package 'mysql-client-core-5.5' is not installed, so not removed
Package 'mysql-client-core-5.6' is not installed, so not removed
Package 'mysql-client-5.5' is not installed, so not removed
Package 'mysql-client-5.6' is not installed, so not removed
Package 'mysql-server-core-5.5' is not installed, so not removed
Package 'mysql-server-core-5.6' is not installed, so not removed
Package 'mysql-server-5.6' is not installed, so not removed
Package 'mysql-testsuite-5.5' is not installed, so not removed
Package 'mysql-testsuite-5.6' is not installed, so not removed
Package 'mysql-testsuite-5.7' is not installed, so not removed
Package 'mysql-sandbox' is not installed, so not removed
Package 'mysqltcl' is not installed, so not removed
Package 'mysqltuner' is not installed, so not removed
Package 'mysql-client' is not installed, so not removed
Package 'mysql-server' is not installed, so not removed
Package 'mysql-router' is not installed, so not removed
Package 'mysql-source-8.0' is not installed, so not removed
Package 'mysql-testsuite' is not installed, so not removed
Package 'mysql-testsuite-8.0' is not installed, so not removed
The following packages were automatically installed and are no longer required:
  libaio1 libhtml-template-perl libmecab2 mecab-ipadic mecab-ipadic-utf8 mecab-utils
Use 'sudo apt autoremove' to remove them.
The following packages will be REMOVED:
  mysql-client-8.0* mysql-client-core-8.0* mysql-common* mysql-server-8.0* mysql-server-core-8.0*
0 upgraded, 0 newly installed, 5 to remove and 0 not upgraded.
1 not fully installed or removed.
After this operation, 260 MB disk space will be freed.
Do you want to continue? [Y/n] Y
(Reading database ... 149831 files and directories currently installed.)
Removing mysql-server-8.0 (8.0.32-0ubuntu0.20.04.2) ...
Failed to stop mysql.service: Unit mysql.service not loaded.
invoke-rc.d: initscript mysql, action "stop" failed.
dpkg: error processing package mysql-server-8.0 (--remove):
 installed mysql-server-8.0 package pre-removal script subprocess returned error exit status 1
dpkg: too many errors, stopping
Failed to stop mysql.service: Unit mysql.service not loaded.
invoke-rc.d: initscript mysql, action "stop" failed.
Failed to preset unit: File mysql.service: Link has been severed
/usr/bin/deb-systemd-helper: error: systemctl preset failed on mysql.service: No such file or directory
Failed to start mysql.service: Unit mysql.service not found.
invoke-rc.d: initscript mysql, action "start" failed.
Unit mysql.service could not be found.
dpkg: error while cleaning up:
 installed mysql-server-8.0 package post-installation script subprocess returned error exit status 1
Errors were encountered while processing:
 mysql-server-8.0
Processing was halted because there were too many errors.
E: Sub-process /usr/bin/dpkg returned an error code (1)
root@admin:~# sudo apt-get purge mysql*
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Note, selecting 'mysql-source-8.0' for glob 'mysql*'
Note, selecting 'mysqltcl' for glob 'mysql*'
Note, selecting 'mysql-client-5.5' for glob 'mysql*'
Note, selecting 'mysql-client-5.6' for glob 'mysql*'
Note, selecting 'mysql-client-5.7' for glob 'mysql*'
Note, selecting 'mysql-common-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-5.5' for glob 'mysql*'
Note, selecting 'mysql-server-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-5.7' for glob 'mysql*'
Note, selecting 'mysql-client-8.0' for glob 'mysql*'
Note, selecting 'mysql-testsuite' for glob 'mysql*'
Note, selecting 'mysql-server' for glob 'mysql*'
Note, selecting 'mysql-router' for glob 'mysql*'
Note, selecting 'mysql-server-8.0' for glob 'mysql*'
Note, selecting 'mysql-client' for glob 'mysql*'
Note, selecting 'mysql-sandbox' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.5' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.6' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.7' for glob 'mysql*'
Note, selecting 'mysql-client-core-8.0' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.5' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.6' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.7' for glob 'mysql*'
Note, selecting 'mysql-common' for glob 'mysql*'
Note, selecting 'mysql-testsuite-8.0' for glob 'mysql*'
Note, selecting 'mysqltuner' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.5' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.7' for glob 'mysql*'
Note, selecting 'mysql-server-core-8.0' for glob 'mysql*'
Package 'mysql-client-5.7' is not installed, so not removed
Package 'mysql-client-core-5.7' is not installed, so not removed
Note, selecting 'mysql-common' instead of 'mysql-common-5.6'
Package 'mysql-server-5.5' is not installed, so not removed
Package 'mysql-server-5.7' is not installed, so not removed
Package 'mysql-server-core-5.7' is not installed, so not removed
Package 'mysql-client-core-5.5' is not installed, so not removed
Package 'mysql-client-core-5.6' is not installed, so not removed
Package 'mysql-client-5.5' is not installed, so not removed
Package 'mysql-client-5.6' is not installed, so not removed
Package 'mysql-server-core-5.5' is not installed, so not removed
Package 'mysql-server-core-5.6' is not installed, so not removed
Package 'mysql-server-5.6' is not installed, so not removed
Package 'mysql-testsuite-5.5' is not installed, so not removed
Package 'mysql-testsuite-5.6' is not installed, so not removed
Package 'mysql-testsuite-5.7' is not installed, so not removed
Package 'mysql-sandbox' is not installed, so not removed
Package 'mysqltcl' is not installed, so not removed
Package 'mysqltuner' is not installed, so not removed
Package 'mysql-client' is not installed, so not removed
Package 'mysql-server' is not installed, so not removed
Package 'mysql-router' is not installed, so not removed
Package 'mysql-source-8.0' is not installed, so not removed
Package 'mysql-testsuite' is not installed, so not removed
Package 'mysql-testsuite-8.0' is not installed, so not removed
The following packages were automatically installed and are no longer required:
  libaio1 libhtml-template-perl libmecab2 mecab-ipadic mecab-ipadic-utf8 mecab-utils
Use 'sudo apt autoremove' to remove them.
The following packages will be REMOVED:
  mysql-client-8.0* mysql-client-core-8.0* mysql-common* mysql-server-8.0* mysql-server-core-8.0*
0 upgraded, 0 newly installed, 5 to remove and 0 not upgraded.
1 not fully installed or removed.
After this operation, 260 MB disk space will be freed.
Do you want to continue? [Y/n] Y
(Reading database ... 149831 files and directories currently installed.)
Removing mysql-server-8.0 (8.0.32-0ubuntu0.20.04.2) ...
Failed to stop mysql.service: Unit mysql.service not loaded.
invoke-rc.d: initscript mysql, action "stop" failed.
dpkg: error processing package mysql-server-8.0 (--remove):
 installed mysql-server-8.0 package pre-removal script subprocess returned error exit status 1
dpkg: too many errors, stopping
Failed to stop mysql.service: Unit mysql.service not loaded.
invoke-rc.d: initscript mysql, action "stop" failed.
Failed to preset unit: File mysql.service: Link has been severed
/usr/bin/deb-systemd-helper: error: systemctl preset failed on mysql.service: No such file or directory
Failed to start mysql.service: Unit mysql.service not found.
invoke-rc.d: initscript mysql, action "start" failed.
Unit mysql.service could not be found.
dpkg: error while cleaning up:
 installed mysql-server-8.0 package post-installation script subprocess returned error exit status 1
Errors were encountered while processing:
 mysql-server-8.0
Processing was halted because there were too many errors.
E: Sub-process /usr/bin/dpkg returned an error code (1)
root@admin:~# mysql
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2)
root@admin:~# mysql --version
mysql  Ver 8.0.32-0ubuntu0.20.04.2 for Linux on x86_64 ((Ubuntu))
root@admin:~# sudo service mysql status
Unit mysql.service could not be found.
root@admin:~# sudo service mysql status
Unit mysql.service could not be found.
root@admin:~# sudo service mysql start
Failed to start mysql.service: Unit mysql.service not found.
root@admin:~# sudo apt autoremove
Reading package lists... Done
Building dependency tree       
Reading state information... Done
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
1 not fully installed or removed.
After this operation, 0 B of additional disk space will be used.
Setting up mysql-server-8.0 (8.0.32-0ubuntu0.20.04.2) ...
Failed to stop mysql.service: Unit mysql.service not loaded.
invoke-rc.d: initscript mysql, action "stop" failed.
Renaming removed key_buffer and myisam-recover options (if present)
mysqld will log errors to /var/log/mysql/error.log
2023-01-30T06:35:26.183905Z 0 [ERROR] [MY-010946] [Server] Failed to start mysqld daemon. Check mysqld error log.
Warning: Unable to start the server.
Failed to preset unit: File mysql.service: Link has been severed
/usr/bin/deb-systemd-helper: error: systemctl preset failed on mysql.service: No such file or directory
Failed to start mysql.service: Unit mysql.service not found.
invoke-rc.d: initscript mysql, action "start" failed.
Unit mysql.service could not be found.
dpkg: error processing package mysql-server-8.0 (--configure):
 installed mysql-server-8.0 package post-installation script subprocess returned error exit status 1
Errors were encountered while processing:
 mysql-server-8.0
E: Sub-process /usr/bin/dpkg returned an error code (1)
root@admin:~# sudo apt-get purge mysql*
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Note, selecting 'mysql-source-8.0' for glob 'mysql*'
Note, selecting 'mysqltcl' for glob 'mysql*'
Note, selecting 'mysql-client-5.5' for glob 'mysql*'
Note, selecting 'mysql-client-5.6' for glob 'mysql*'
Note, selecting 'mysql-client-5.7' for glob 'mysql*'
Note, selecting 'mysql-common-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-5.5' for glob 'mysql*'
Note, selecting 'mysql-server-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-5.7' for glob 'mysql*'
Note, selecting 'mysql-client-8.0' for glob 'mysql*'
Note, selecting 'mysql-testsuite' for glob 'mysql*'
Note, selecting 'mysql-server' for glob 'mysql*'
Note, selecting 'mysql-router' for glob 'mysql*'
Note, selecting 'mysql-server-8.0' for glob 'mysql*'
Note, selecting 'mysql-client' for glob 'mysql*'
Note, selecting 'mysql-sandbox' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.5' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.6' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.7' for glob 'mysql*'
Note, selecting 'mysql-client-core-8.0' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.5' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.6' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.7' for glob 'mysql*'
Note, selecting 'mysql-common' for glob 'mysql*'
Note, selecting 'mysql-testsuite-8.0' for glob 'mysql*'
Note, selecting 'mysqltuner' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.5' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.7' for glob 'mysql*'
Note, selecting 'mysql-server-core-8.0' for glob 'mysql*'
Package 'mysql-client-5.7' is not installed, so not removed
Package 'mysql-client-core-5.7' is not installed, so not removed
Note, selecting 'mysql-common' instead of 'mysql-common-5.6'
Package 'mysql-server-5.5' is not installed, so not removed
Package 'mysql-server-5.7' is not installed, so not removed
Package 'mysql-server-core-5.7' is not installed, so not removed
Package 'mysql-client-core-5.5' is not installed, so not removed
Package 'mysql-client-core-5.6' is not installed, so not removed
Package 'mysql-client-5.5' is not installed, so not removed
Package 'mysql-client-5.6' is not installed, so not removed
Package 'mysql-server-core-5.5' is not installed, so not removed
Package 'mysql-server-core-5.6' is not installed, so not removed
Package 'mysql-server-5.6' is not installed, so not removed
Package 'mysql-testsuite-5.5' is not installed, so not removed
Package 'mysql-testsuite-5.6' is not installed, so not removed
Package 'mysql-testsuite-5.7' is not installed, so not removed
Package 'mysql-sandbox' is not installed, so not removed
Package 'mysqltcl' is not installed, so not removed
Package 'mysqltuner' is not installed, so not removed
Package 'mysql-client' is not installed, so not removed
Package 'mysql-server' is not installed, so not removed
Package 'mysql-router' is not installed, so not removed
Package 'mysql-source-8.0' is not installed, so not removed
Package 'mysql-testsuite' is not installed, so not removed
Package 'mysql-testsuite-8.0' is not installed, so not removed
The following packages were automatically installed and are no longer required:
  libaio1 libhtml-template-perl libmecab2 mecab-ipadic mecab-ipadic-utf8 mecab-utils
Use 'sudo apt autoremove' to remove them.
The following packages will be REMOVED:
  mysql-client-8.0* mysql-client-core-8.0* mysql-common* mysql-server-8.0* mysql-server-core-8.0*
0 upgraded, 0 newly installed, 5 to remove and 0 not upgraded.
1 not fully installed or removed.
After this operation, 260 MB disk space will be freed.
Do you want to continue? [Y/n] Y
(Reading database ... 149831 files and directories currently installed.)
Removing mysql-server-8.0 (8.0.32-0ubuntu0.20.04.2) ...
Failed to stop mysql.service: Unit mysql.service not loaded.
invoke-rc.d: initscript mysql, action "stop" failed.
dpkg: error processing package mysql-server-8.0 (--remove):
 installed mysql-server-8.0 package pre-removal script subprocess returned error exit status 1
dpkg: too many errors, stopping
Failed to stop mysql.service: Unit mysql.service not loaded.
invoke-rc.d: initscript mysql, action "stop" failed.
Failed to preset unit: File mysql.service: Link has been severed
/usr/bin/deb-systemd-helper: error: systemctl preset failed on mysql.service: No such file or directory
Failed to start mysql.service: Unit mysql.service not found.
invoke-rc.d: initscript mysql, action "start" failed.
Unit mysql.service could not be found.
dpkg: error while cleaning up:
 installed mysql-server-8.0 package post-installation script subprocess returned error exit status 1
Errors were encountered while processing:
 mysql-server-8.0
Processing was halted because there were too many errors.
E: Sub-process /usr/bin/dpkg returned an error code (1)
root@admin:~# cd /var/lib/dpkg/info
root@admin:/var/lib/dpkg/info# sudo rm -rf ./mysql-*
root@admin:/var/lib/dpkg/info# sudo dpkg --remove --force-remove-reinstreq mysql-server-8.0
dpkg: warning: files list file for package 'mysql-common' missing; assuming package has no files currently installed
dpkg: warning: files list file for package 'mysql-client-core-8.0' missing; assuming package has no files currently installed
dpkg: warning: files list file for package 'mysql-server-core-8.0' missing; assuming package has no files currently installed
dpkg: warning: files list file for package 'mysql-client-8.0' missing; assuming package has no files currently installed
(Reading database ... 149599 files and directories currently installed.)
Removing mysql-server-8.0 (8.0.32-0ubuntu0.20.04.2) ...
root@admin:/var/lib/dpkg/info# ls
accountsservice.conffiles			ltrace.md5sums
accountsservice.list				lua-bitop:amd64.list
accountsservice.md5sums				lua-bitop:amd64.md5sums
accountsservice.postinst			lua-bitop:amd64.shlibs
accountsservice.postrm				lua-bitop:amd64.triggers
accountsservice.prerm				lua-cjson:amd64.list
acpid.conffiles					lua-cjson:amd64.md5sums
acpid.list					lua-cjson:amd64.shlibs
acpid.md5sums					lua-cjson:amd64.triggers
acpid.postinst					lz4.list
acpid.postrm					lz4.md5sums
acpid.preinst					lzip.list
acpid.prerm					lzip.md5sums
adduser.conffiles				lzip.postinst
adduser.config					lzip.prerm
adduser.list					lzop.list
adduser.md5sums					lzop.md5sums
adduser.postinst				m4.list
adduser.postrm					m4.md5sums
adduser.templates				mailman.conffiles
alsa-topology-conf.list				mailman.config
alsa-topology-conf.md5sums			mailman.list
alsa-ucm-conf.list				mailman.md5sums
alsa-ucm-conf.md5sums				mailman.postinst
amd64-microcode.conffiles			mailman.postrm
amd64-microcode.list				mailman.preinst
amd64-microcode.md5sums				mailman.prerm
amd64-microcode.postinst			mailman.templates
amd64-microcode.postrm				make.list
apache2-bin.list				make.md5sums
apache2-bin.md5sums				man-db.conffiles
apache2-data.list				man-db.config
apache2-data.md5sums				man-db.list
apache2-doc.conffiles				man-db.md5sums
apache2-doc.list				man-db.postinst
apache2-doc.md5sums				man-db.postrm
apache2-doc.postinst				man-db.preinst
apache2-doc.postrm				man-db.prerm
apache2-suexec-pristine.list			man-db.templates
apache2-suexec-pristine.md5sums			man-db.triggers
apache2-suexec-pristine.postinst		manpages-dev.list
apache2-suexec-pristine.prerm			manpages-dev.md5sums
apache2-utils.list				manpages.list
apache2-utils.md5sums				manpages.md5sums
apache2.conffiles				mawk.list
apache2.list					mawk.md5sums
apache2.md5sums					mawk.postinst
apache2.postinst				mawk.prerm
apache2.postrm					mcrypt.list
apache2.preinst					mcrypt.md5sums
apache2.prerm					mecab-ipadic-utf8.list
apparmor.list					mecab-ipadic-utf8.md5sums
apparmor.postrm					mecab-ipadic-utf8.postinst
apt-listchanges.conffiles			mecab-ipadic-utf8.prerm
apt-listchanges.config				mecab-ipadic.list
apt-listchanges.list				mecab-ipadic.md5sums
apt-listchanges.md5sums				mecab-ipadic.postinst
apt-listchanges.postinst			mecab-ipadic.prerm
apt-listchanges.postrm				mecab-utils.list
apt-listchanges.preinst				mecab-utils.md5sums
apt-listchanges.prerm				memcached.conffiles
apt-listchanges.templates			memcached.list
apt-transport-https.list			memcached.md5sums
apt-transport-https.md5sums			memcached.postinst
apt-utils.list					memcached.postrm
apt-utils.md5sums				memcached.prerm
apt.conffiles					mesa-vulkan-drivers:amd64.list
apt.list					mesa-vulkan-drivers:amd64.md5sums
apt.md5sums					mesa-vulkan-drivers:amd64.triggers
apt.postinst					mime-support.conffiles
apt.postrm					mime-support.list
apt.preinst					mime-support.md5sums
apt.prerm					mime-support.postinst
apt.shlibs					mime-support.prerm
apt.triggers					mime-support.triggers
arj.conffiles					mlock.list
arj.list					mlock.md5sums
arj.md5sums					mount.list
aspell-en.list					mount.md5sums
aspell-en.md5sums				mtr-tiny.list
aspell-en.postinst				mtr-tiny.md5sums
aspell-en.postrm				mtr-tiny.postinst
aspell.list					mysql-server-8.0.list
aspell.md5sums					nano.conffiles
aspell.postinst					nano.list
autoconf.conffiles				nano.md5sums
autoconf.list					nano.postinst
autoconf.md5sums				nano.prerm
automake.list					ncurses-base.conffiles
automake.md5sums				ncurses-base.list
automake.postinst				ncurses-base.md5sums
automake.preinst				ncurses-bin.list
automake.prerm					ncurses-bin.md5sums
autopoint.list					ncurses-term.list
autopoint.md5sums				ncurses-term.md5sums
autotools-dev.list				net-tools.list
autotools-dev.md5sums				net-tools.md5sums
awstats.conffiles				netbase.conffiles
awstats.list					netbase.list
awstats.md5sums					netbase.md5sums
awstats.postinst				netbase.postinst
awstats.postrm					netbase.postrm
base-files.conffiles				netcat-openbsd.list
base-files.list					netcat-openbsd.md5sums
base-files.md5sums				netcat-openbsd.postinst
base-files.postinst				netcat-openbsd.prerm
base-files.postrm				netpbm.list
base-files.preinst				netpbm.md5sums
base-files.prerm				netplan.io.list
base-passwd.list				netplan.io.md5sums
base-passwd.md5sums				networkd-dispatcher.conffiles
base-passwd.postinst				networkd-dispatcher.list
base-passwd.postrm				networkd-dispatcher.md5sums
base-passwd.preinst				networkd-dispatcher.postinst
base-passwd.templates				networkd-dispatcher.postrm
bash-completion.conffiles			networkd-dispatcher.prerm
bash-completion.list				nginx-common.conffiles
bash-completion.md5sums				nginx-common.config
bash-completion.postinst			nginx-common.list
bash-completion.postrm				nginx-common.md5sums
bash-completion.preinst				nginx-common.postinst
bash-completion.prerm				nginx-common.postrm
bash.conffiles					nginx-common.preinst
bash.list					nginx-common.templates
bash.md5sums					nginx-full.list
bash.postinst					nginx-full.md5sums
bash.postrm					nginx-full.postinst
bash.preinst					nginx-full.prerm
bash.prerm					nginx-full.triggers
bind9-dnsutils.list				nginx.list
bind9-dnsutils.md5sums				nginx.md5sums
bind9-host.list					node-abbrev.list
bind9-host.md5sums				node-abbrev.md5sums
bind9-libs:amd64.list				node-ajv.list
bind9-libs:amd64.md5sums			node-ajv.md5sums
bind9-libs:amd64.shlibs				node-ansi-align.list
bind9-libs:amd64.triggers			node-ansi-align.md5sums
bind9-utils.list				node-ansi-regex.list
bind9-utils.md5sums				node-ansi-regex.md5sums
bind9-utils.postinst				node-ansi-styles.list
bind9-utils.prerm				node-ansi-styles.md5sums
bind9.conffiles					node-ansi.list
bind9.list					node-ansi.md5sums
bind9.md5sums					node-ansistyles.list
bind9.postinst					node-ansistyles.md5sums
bind9.postrm					node-aproba.list
bind9.preinst					node-aproba.md5sums
bind9.prerm					node-archy.list
binutils-common:amd64.list			node-archy.md5sums
binutils-common:amd64.md5sums			node-are-we-there-yet.list
binutils-x86-64-linux-gnu.list			node-are-we-there-yet.md5sums
binutils-x86-64-linux-gnu.md5sums		node-asap.list
binutils.list					node-asap.md5sums
binutils.md5sums				node-asn1.list
bison.list					node-asn1.md5sums
bison.md5sums					node-assert-plus.list
bison.postinst					node-assert-plus.md5sums
bison.preinst					node-asynckit.list
bison.prerm					node-asynckit.md5sums
borgbackup.list					node-aws-sign2.list
borgbackup.md5sums				node-aws-sign2.md5sums
borgbackup.postinst				node-aws4.list
borgbackup.prerm				node-aws4.md5sums
bridge-utils.conffiles				node-balanced-match.list
bridge-utils.list				node-balanced-match.md5sums
bridge-utils.md5sums				node-bcrypt-pbkdf.list
bridge-utils.postinst				node-bcrypt-pbkdf.md5sums
bsd-mailx.conffiles				node-bl.list
bsd-mailx.list					node-bl.md5sums
bsd-mailx.md5sums				node-bluebird.list
bsd-mailx.postinst				node-bluebird.md5sums
bsd-mailx.prerm					node-boxen.list
bsdmainutils.conffiles				node-boxen.md5sums
bsdmainutils.list				node-brace-expansion.list
bsdmainutils.md5sums				node-brace-expansion.md5sums
bsdmainutils.postinst				node-builtin-modules.list
bsdmainutils.prerm				node-builtin-modules.md5sums
bsdutils.list					node-builtins.list
bsdutils.md5sums				node-builtins.md5sums
build-essential.list				node-cacache.list
build-essential.md5sums				node-cacache.md5sums
busybox-initramfs.list				node-call-limit.list
busybox-initramfs.md5sums			node-call-limit.md5sums
busybox-static.list				node-camelcase.list
busybox-static.md5sums				node-camelcase.md5sums
busybox-static.triggers				node-caseless.list
bzip2.list					node-caseless.md5sums
bzip2.md5sums					node-chalk.list
ca-certificates.config				node-chalk.md5sums
ca-certificates.list				node-chownr.list
ca-certificates.md5sums				node-chownr.md5sums
ca-certificates.postinst			node-ci-info.list
ca-certificates.postrm				node-ci-info.md5sums
ca-certificates.templates			node-cli-boxes.list
ca-certificates.triggers			node-cli-boxes.md5sums
cabextract.list					node-cliui.list
cabextract.md5sums				node-cliui.md5sums
certbot.conffiles				node-clone.list
certbot.list					node-clone.md5sums
certbot.md5sums					node-co.list
certbot.postinst				node-co.md5sums
certbot.postrm					node-color-convert.list
certbot.prerm					node-color-convert.md5sums
clamav-base.list				node-color-name.list
clamav-base.md5sums				node-color-name.md5sums
clamav-base.postinst				node-colors.list
clamav-base.postrm				node-colors.md5sums
clamav-base.templates				node-columnify.list
clamav-daemon.conffiles				node-columnify.md5sums
clamav-daemon.config				node-combined-stream.list
clamav-daemon.list				node-combined-stream.md5sums
clamav-daemon.md5sums				node-concat-map.list
clamav-daemon.postinst				node-concat-map.md5sums
clamav-daemon.postrm				node-concat-stream.list
clamav-daemon.prerm				node-concat-stream.md5sums
clamav-daemon.templates				node-config-chain.list
clamav-docs.list				node-config-chain.md5sums
clamav-docs.md5sums				node-configstore.list
clamav-freshclam.conffiles			node-configstore.md5sums
clamav-freshclam.config				node-console-control-strings.list
clamav-freshclam.list				node-console-control-strings.md5sums
clamav-freshclam.md5sums			node-copy-concurrently.list
clamav-freshclam.postinst			node-copy-concurrently.md5sums
clamav-freshclam.postrm				node-core-util-is.list
clamav-freshclam.prerm				node-core-util-is.md5sums
clamav-freshclam.templates			node-cross-spawn.list
clamav.list					node-cross-spawn.md5sums
clamav.md5sums					node-crypto-random-string.list
clamdscan.list					node-crypto-random-string.md5sums
clamdscan.md5sums				node-cyclist.list
command-not-found.conffiles			node-cyclist.md5sums
command-not-found.list				node-dashdash.list
command-not-found.md5sums			node-dashdash.md5sums
command-not-found.postinst			node-debug.list
console-setup-linux.conffiles			node-debug.md5sums
console-setup-linux.list			node-decamelize.list
console-setup-linux.md5sums			node-decamelize.md5sums
console-setup-linux.postinst			node-decompress-response.list
console-setup-linux.postrm			node-decompress-response.md5sums
console-setup-linux.prerm			node-deep-extend.list
console-setup.config				node-deep-extend.md5sums
console-setup.list				node-defaults.list
console-setup.md5sums				node-defaults.md5sums
console-setup.postinst				node-define-properties.list
console-setup.postrm				node-define-properties.md5sums
console-setup.templates				node-delayed-stream.list
containerd.list					node-delayed-stream.md5sums
containerd.md5sums				node-delegates.list
containerd.postinst				node-delegates.md5sums
containerd.postrm				node-detect-indent.list
containerd.prerm				node-detect-indent.md5sums
coreutils.list					node-detect-newline.list
coreutils.md5sums				node-detect-newline.md5sums
coreutils.postinst				node-dot-prop.list
coreutils.postrm				node-dot-prop.md5sums
cpio.list					node-duplexer3.list
cpio.md5sums					node-duplexer3.md5sums
cpio.postinst					node-duplexer3.postinst
cpio.prerm					node-duplexer3.postrm
cpp-9.list					node-duplexer3.preinst
cpp-9.md5sums					node-duplexer3.prerm
cpp.list					node-duplexify.list
cpp.md5sums					node-duplexify.md5sums
cpp.postinst					node-ecc-jsbn.list
cpp.prerm					node-ecc-jsbn.md5sums
crda.conffiles					node-editor.list
crda.list					node-editor.md5sums
crda.md5sums					node-encoding.list
cron.conffiles					node-encoding.md5sums
cron.list					node-end-of-stream.list
cron.md5sums					node-end-of-stream.md5sums
cron.postinst					node-err-code.list
cron.postrm					node-err-code.md5sums
cron.prerm					node-errno.list
curl.list					node-errno.md5sums
curl.md5sums					node-es6-promise.list
daemon.conffiles				node-es6-promise.md5sums
daemon.list					node-escape-string-regexp.list
daemon.md5sums					node-escape-string-regexp.md5sums
dash.config					node-execa.list
dash.list					node-execa.md5sums
dash.md5sums					node-extend.list
dash.postinst					node-extend.md5sums
dash.postrm					node-extsprintf.list
dash.prerm					node-extsprintf.md5sums
dash.templates					node-fast-deep-equal.list
dbconfig-common.conffiles			node-fast-deep-equal.md5sums
dbconfig-common.config				node-find-up.list
dbconfig-common.list				node-find-up.md5sums
dbconfig-common.md5sums				node-flush-write-stream.list
dbconfig-common.postinst			node-flush-write-stream.md5sums
dbconfig-common.postrm				node-forever-agent.list
dbconfig-common.preinst				node-forever-agent.md5sums
dbconfig-common.templates			node-form-data.list
dbus-user-session.conffiles			node-form-data.md5sums
dbus-user-session.list				node-from2.list
dbus-user-session.md5sums			node-from2.md5sums
dbus.conffiles					node-fs-vacuum.list
dbus.list					node-fs-vacuum.md5sums
dbus.md5sums					node-fs-write-stream-atomic.list
dbus.postinst					node-fs-write-stream-atomic.md5sums
dbus.postrm					node-fs.realpath.list
dbus.preinst					node-fs.realpath.md5sums
dbus.prerm					node-function-bind.list
dbus.triggers					node-function-bind.md5sums
dconf-gsettings-backend:amd64.list		node-gauge.list
dconf-gsettings-backend:amd64.md5sums		node-gauge.md5sums
dconf-service.list				node-genfun.list
dconf-service.md5sums				node-genfun.md5sums
debconf-i18n.list				node-get-caller-file.list
debconf-i18n.md5sums				node-get-caller-file.md5sums
debconf.conffiles				node-get-stream.list
debconf.config					node-get-stream.md5sums
debconf.list					node-getpass.list
debconf.md5sums					node-getpass.md5sums
debconf.postinst				node-glob.list
debconf.postrm					node-glob.md5sums
debconf.preinst					node-got.list
debconf.prerm					node-got.md5sums
debconf.templates				node-graceful-fs.list
debhelper.list					node-graceful-fs.md5sums
debhelper.md5sums				node-gyp.list
debianutils.list				node-gyp.md5sums
debianutils.md5sums				node-har-schema.list
debianutils.postinst				node-har-schema.md5sums
debianutils.postrm				node-har-validator.list
dh-autoreconf.list				node-har-validator.md5sums
dh-autoreconf.md5sums				node-has-flag.list
dh-strip-nondeterminism.list			node-has-flag.md5sums
dh-strip-nondeterminism.md5sums			node-has-symbol-support-x.list
dictionaries-common.conffiles			node-has-symbol-support-x.md5sums
dictionaries-common.config			node-has-to-string-tag-x.list
dictionaries-common.list			node-has-to-string-tag-x.md5sums
dictionaries-common.md5sums			node-has-unicode.list
dictionaries-common.postinst			node-has-unicode.md5sums
dictionaries-common.postrm			node-hosted-git-info.list
dictionaries-common.preinst			node-hosted-git-info.md5sums
dictionaries-common.prerm			node-http-signature.list
dictionaries-common.templates			node-http-signature.md5sums
dictionaries-common.triggers			node-iconv-lite.list
diffutils.list					node-iconv-lite.md5sums
diffutils.md5sums				node-iferr.list
dirmngr.list					node-iferr.md5sums
dirmngr.md5sums					node-import-lazy.list
dirmngr.postinst				node-import-lazy.md5sums
dirmngr.postrm					node-imurmurhash.list
dirmngr.preinst					node-imurmurhash.md5sums
dirmngr.prerm					node-inflight.list
distro-info-data.list				node-inflight.md5sums
distro-info-data.md5sums			node-inherits.list
distro-info.list				node-inherits.md5sums
distro-info.md5sums				node-ini.list
dmidecode.list					node-ini.md5sums
dmidecode.md5sums				node-invert-kv.list
dmsetup.list					node-invert-kv.md5sums
dmsetup.md5sums					node-ip-regex.list
dmsetup.postinst				node-ip-regex.md5sums
dns-root-data.list				node-ip.list
dns-root-data.md5sums				node-ip.md5sums
dnsmasq-base.conffiles				node-is-npm.list
dnsmasq-base.list				node-is-npm.md5sums
dnsmasq-base.md5sums				node-is-obj.list
dnsmasq-base.postinst				node-is-obj.md5sums
dnsmasq-base.postrm				node-is-object.list
dnsutils.list					node-is-object.md5sums
dnsutils.md5sums				node-is-path-inside.list
docker-compose.list				node-is-path-inside.md5sums
docker-compose.md5sums				node-is-plain-obj.list
docker-compose.postinst				node-is-plain-obj.md5sums
docker-compose.prerm				node-is-retry-allowed.list
docker.io.list					node-is-retry-allowed.md5sums
docker.io.md5sums				node-is-stream.list
docker.io.postinst				node-is-stream.md5sums
docker.io.postrm				node-is-typedarray.list
docker.io.preinst				node-is-typedarray.md5sums
docker.io.prerm					node-isarray.list
docker.io.templates				node-isarray.md5sums
dosfstools.list					node-isexe.list
dosfstools.md5sums				node-isexe.md5sums
dovecot-core.conffiles				node-isstream.list
dovecot-core.list				node-isstream.md5sums
dovecot-core.md5sums				node-isurl.list
dovecot-core.postinst				node-isurl.md5sums
dovecot-core.postrm				node-jquery.list
dovecot-core.preinst				node-jquery.md5sums
dovecot-core.prerm				node-jsbn.list
dovecot-core.shlibs				node-jsbn.md5sums
dovecot-core.triggers				node-json-parse-better-errors.list
dovecot-imapd.conffiles				node-json-parse-better-errors.md5sums
dovecot-imapd.list				node-json-schema-traverse.list
dovecot-imapd.md5sums				node-json-schema-traverse.md5sums
dovecot-imapd.postinst				node-json-schema.list
dovecot-imapd.postrm				node-json-schema.md5sums
dovecot-imapd.prerm				node-json-stable-stringify.list
dovecot-imapd.triggers				node-json-stable-stringify.md5sums
dovecot-lmtpd.list				node-json-stringify-safe.list
dovecot-lmtpd.md5sums				node-json-stringify-safe.md5sums
dovecot-lmtpd.postinst				node-jsonify.list
dovecot-lmtpd.postrm				node-jsonify.md5sums
dovecot-lmtpd.prerm				node-jsonparse.list
dovecot-lmtpd.triggers				node-jsonparse.md5sums
dovecot-managesieved.list			node-jsonstream.list
dovecot-managesieved.md5sums			node-jsonstream.md5sums
dovecot-managesieved.postinst			node-jsprim.list
dovecot-managesieved.postrm			node-jsprim.md5sums
dovecot-managesieved.prerm			node-latest-version.list
dovecot-managesieved.triggers			node-latest-version.md5sums
dovecot-pop3d.conffiles				node-lazy-property.list
dovecot-pop3d.list				node-lazy-property.md5sums
dovecot-pop3d.md5sums				node-lcid.list
dovecot-pop3d.postinst				node-lcid.md5sums
dovecot-pop3d.postrm				node-libnpx.list
dovecot-pop3d.prerm				node-libnpx.md5sums
dovecot-pop3d.triggers				node-locate-path.list
dovecot-sieve.list				node-locate-path.md5sums
dovecot-sieve.md5sums				node-lockfile.list
dovecot-sieve.postinst				node-lockfile.md5sums
dovecot-sieve.postrm				node-lodash-packages.list
dovecot-sieve.shlibs				node-lodash-packages.md5sums
dovecot-sieve.triggers				node-lodash.list
dpkg-dev.conffiles				node-lodash.md5sums
dpkg-dev.list					node-lowercase-keys.list
dpkg-dev.md5sums				node-lowercase-keys.md5sums
dpkg.conffiles					node-lru-cache.list
dpkg.list					node-lru-cache.md5sums
dpkg.md5sums					node-make-dir.list
dpkg.postinst					node-make-dir.md5sums
dpkg.postrm					node-mem.list
dwz.list					node-mem.md5sums
dwz.md5sums					node-mime-types.list
e2fsprogs.conffiles				node-mime-types.md5sums
e2fsprogs.list					node-mime.list
e2fsprogs.md5sums				node-mime.md5sums
e2fsprogs.postinst				node-mimic-fn.list
e2fsprogs.postrm				node-mimic-fn.md5sums
e2fsprogs.preinst				node-mimic-response.list
e2fsprogs.prerm					node-mimic-response.md5sums
ed.list						node-minimatch.list
ed.md5sums					node-minimatch.md5sums
ed.postinst					node-minimist.list
ed.prerm					node-minimist.md5sums
eject.list					node-mississippi.list
eject.md5sums					node-mississippi.md5sums
emacsen-common.list				node-mkdirp.list
emacsen-common.md5sums				node-mkdirp.md5sums
emacsen-common.postinst				node-move-concurrently.list
emacsen-common.postrm				node-move-concurrently.md5sums
emacsen-common.preinst				node-ms.list
emacsen-common.prerm				node-ms.md5sums
fail2ban.conffiles				node-mute-stream.list
fail2ban.list					node-mute-stream.md5sums
fail2ban.md5sums				node-nopt.list
fail2ban.postinst				node-nopt.md5sums
fail2ban.postrm					node-normalize-package-data.list
fail2ban.preinst				node-normalize-package-data.md5sums
fail2ban.prerm					node-npm-bundled.list
fakeroot.list					node-npm-bundled.md5sums
fakeroot.md5sums				node-npm-package-arg.list
fakeroot.postinst				node-npm-package-arg.md5sums
fakeroot.prerm					node-npm-run-path.list
fcgiwrap.conffiles				node-npm-run-path.md5sums
fcgiwrap.list					node-npmlog.list
fcgiwrap.md5sums				node-npmlog.md5sums
fcgiwrap.postinst				node-number-is-nan.list
fcgiwrap.postrm					node-number-is-nan.md5sums
fcgiwrap.prerm					node-oauth-sign.list
fdisk.list					node-oauth-sign.md5sums
fdisk.md5sums					node-object-assign.list
file.list					node-object-assign.md5sums
file.md5sums					node-once.list
findutils.list					node-once.md5sums
findutils.md5sums				node-opener.list
flex.list					node-opener.md5sums
flex.md5sums					node-os-locale.list
flex.postinst					node-os-locale.md5sums
flex.prerm					node-os-tmpdir.list
fontconfig-config.conffiles			node-os-tmpdir.md5sums
fontconfig-config.list				node-osenv.list
fontconfig-config.md5sums			node-osenv.md5sums
fontconfig-config.postinst			node-p-cancelable.list
fontconfig-config.postrm			node-p-cancelable.md5sums
fontconfig.list					node-p-finally.list
fontconfig.md5sums				node-p-finally.md5sums
fontconfig.postinst				node-p-is-promise.list
fontconfig.postrm				node-p-is-promise.md5sums
fontconfig.triggers				node-p-limit.list
fonts-dejavu-core.conffiles			node-p-limit.md5sums
fonts-dejavu-core.list				node-p-locate.list
fonts-dejavu-core.md5sums			node-p-locate.md5sums
fonts-droid-fallback.conffiles			node-p-timeout.list
fonts-droid-fallback.list			node-p-timeout.md5sums
fonts-droid-fallback.md5sums			node-package-json.list
fonts-droid-fallback.postinst			node-package-json.md5sums
fonts-droid-fallback.postrm			node-parallel-transform.list
fonts-droid-fallback.preinst			node-parallel-transform.md5sums
fonts-droid-fallback.prerm			node-path-exists.list
fonts-glyphicons-halflings.list			node-path-exists.md5sums
fonts-glyphicons-halflings.md5sums		node-path-is-absolute.list
fonts-lato.list					node-path-is-absolute.md5sums
fonts-lato.md5sums				node-path-is-inside.list
fonts-noto-mono.conffiles			node-path-is-inside.md5sums
fonts-noto-mono.list				node-performance-now.list
fonts-noto-mono.md5sums				node-performance-now.md5sums
fonts-urw-base35.list				node-pify.list
fonts-urw-base35.md5sums			node-pify.md5sums
fonts-urw-base35.postinst			node-prepend-http.list
fonts-urw-base35.postrm				node-prepend-http.md5sums
fonts-urw-base35.preinst			node-process-nextick-args.list
fonts-urw-base35.prerm				node-process-nextick-args.md5sums
format						node-promise-inflight.list
friendly-recovery.list				node-promise-inflight.md5sums
friendly-recovery.md5sums			node-promise-retry.list
friendly-recovery.postinst			node-promise-retry.md5sums
friendly-recovery.postrm			node-promzard.list
friendly-recovery.preinst			node-promzard.md5sums
friendly-recovery.prerm				node-proto-list.list
ftp.list					node-proto-list.md5sums
ftp.md5sums					node-prr.list
ftp.postinst					node-prr.md5sums
ftp.prerm					node-pseudomap.list
fuse.conffiles					node-pseudomap.md5sums
fuse.list					node-psl.list
fuse.md5sums					node-psl.md5sums
fuse.postinst					node-pump.list
fuse.postrm					node-pump.md5sums
g++-9.list					node-pumpify.list
g++-9.md5sums					node-pumpify.md5sums
g++.list					node-punycode.list
g++.md5sums					node-punycode.md5sums
g++.postinst					node-qs.list
g++.prerm					node-qs.md5sums
gawk.conffiles					node-qw.list
gawk.list					node-qw.md5sums
gawk.md5sums					node-rc.list
gawk.postinst					node-rc.md5sums
gawk.prerm					node-read-package-json.list
gcc-10-base:amd64.list				node-read-package-json.md5sums
gcc-10-base:amd64.md5sums			node-read.list
gcc-9-base:amd64.list				node-read.md5sums
gcc-9-base:amd64.md5sums			node-readable-stream.list
gcc-9.list					node-readable-stream.md5sums
gcc-9.md5sums					node-registry-auth-token.list
gcc.list					node-registry-auth-token.md5sums
gcc.md5sums					node-registry-url.list
gcc.postinst					node-registry-url.md5sums
gcc.prerm					node-request.list
geoip-database.list				node-request.md5sums
geoip-database.md5sums				node-require-directory.list
getmail.list					node-require-directory.md5sums
getmail.md5sums					node-require-main-filename.list
getmail.postinst				node-require-main-filename.md5sums
getmail.prerm					node-resolve-from.list
getmail4.list					node-resolve-from.md5sums
getmail4.md5sums				node-resolve.list
gettext-base.list				node-resolve.md5sums
gettext-base.md5sums				node-retry.list
gettext-base.triggers				node-retry.md5sums
gettext.list					node-rimraf.list
gettext.md5sums					node-rimraf.md5sums
gettext.triggers				node-run-queue.list
ghostscript.list				node-run-queue.md5sums
ghostscript.md5sums				node-safe-buffer.list
ghostscript.postinst				node-safe-buffer.md5sums
ghostscript.prerm				node-semver-diff.list
gir1.2-glib-2.0:amd64.list			node-semver-diff.md5sums
gir1.2-glib-2.0:amd64.md5sums			node-semver.list
gir1.2-packagekitglib-1.0.list			node-semver.md5sums
gir1.2-packagekitglib-1.0.md5sums		node-set-blocking.list
git-man.list					node-set-blocking.md5sums
git-man.md5sums					node-sha.list
git.conffiles					node-sha.md5sums
git.list					node-shebang-command.list
git.md5sums					node-shebang-command.md5sums
git.postinst					node-shebang-regex.list
git.postrm					node-shebang-regex.md5sums
git.preinst					node-signal-exit.list
git.prerm					node-signal-exit.md5sums
glib-networking-common.list			node-slash.list
glib-networking-common.md5sums			node-slash.md5sums
glib-networking-services.list			node-slide.list
glib-networking-services.md5sums		node-slide.md5sums
glib-networking:amd64.list			node-sorted-object.list
glib-networking:amd64.md5sums			node-sorted-object.md5sums
gnupg-l10n.list					node-spdx-correct.list
gnupg-l10n.md5sums				node-spdx-correct.md5sums
gnupg-utils.list				node-spdx-exceptions.list
gnupg-utils.md5sums				node-spdx-exceptions.md5sums
gnupg.list					node-spdx-expression-parse.list
gnupg.md5sums					node-spdx-expression-parse.md5sums
gnustep-base-common.list			node-spdx-license-ids.list
gnustep-base-common.md5sums			node-spdx-license-ids.md5sums
gnustep-base-runtime.conffiles			node-sshpk.list
gnustep-base-runtime.list			node-sshpk.md5sums
gnustep-base-runtime.md5sums			node-ssri.list
gnustep-base-runtime.postinst			node-ssri.md5sums
gnustep-base-runtime.postrm			node-stream-each.list
gnustep-base-runtime.preinst			node-stream-each.md5sums
gnustep-common.conffiles			node-stream-iterate.list
gnustep-common.list				node-stream-iterate.md5sums
gnustep-common.md5sums				node-stream-shift.list
goaccess.conffiles				node-stream-shift.md5sums
goaccess.list					node-strict-uri-encode.list
goaccess.md5sums				node-strict-uri-encode.md5sums
gpg-agent.conffiles				node-string-decoder.list
gpg-agent.list					node-string-decoder.md5sums
gpg-agent.md5sums				node-string-width.list
gpg-agent.postinst				node-string-width.md5sums
gpg-agent.postrm				node-strip-ansi.list
gpg-wks-client.list				node-strip-ansi.md5sums
gpg-wks-client.md5sums				node-strip-eof.list
gpg-wks-server.list				node-strip-eof.md5sums
gpg-wks-server.md5sums				node-strip-json-comments.list
gpg.list					node-strip-json-comments.md5sums
gpg.md5sums					node-supports-color.list
gpgconf.list					node-supports-color.md5sums
gpgconf.md5sums					node-tar.list
gpgsm.list					node-tar.md5sums
gpgsm.md5sums					node-term-size.list
gpgv.list					node-term-size.md5sums
gpgv.md5sums					node-text-table.list
grep.list					node-text-table.md5sums
grep.md5sums					node-through.list
groff-base.conffiles				node-through.md5sums
groff-base.list					node-through2.list
groff-base.md5sums				node-through2.md5sums
grub-common.conffiles				node-timed-out.list
grub-common.list				node-timed-out.md5sums
grub-common.md5sums				node-tough-cookie.list
grub-common.postinst				node-tough-cookie.md5sums
grub-common.postrm				node-tunnel-agent.list
grub-common.preinst				node-tunnel-agent.md5sums
grub-common.prerm				node-tweetnacl.list
grub-common.templates				node-tweetnacl.md5sums
grub-gfxpayload-lists.list			node-typedarray-to-buffer.list
grub-gfxpayload-lists.md5sums			node-typedarray-to-buffer.md5sums
grub-gfxpayload-lists.postinst			node-typedarray.list
grub-gfxpayload-lists.prerm			node-typedarray.md5sums
grub-pc-bin.list				node-uid-number.list
grub-pc-bin.md5sums				node-uid-number.md5sums
grub-pc.config					node-unique-filename.list
grub-pc.list					node-unique-filename.md5sums
grub-pc.md5sums					node-unique-string.list
grub-pc.postinst				node-unique-string.md5sums
grub-pc.postrm					node-unpipe.list
grub-pc.preinst					node-unpipe.md5sums
grub-pc.prerm					node-uri-js.list
grub-pc.templates				node-uri-js.md5sums
grub2-common.conffiles				node-url-parse-lax.list
grub2-common.list				node-url-parse-lax.md5sums
grub2-common.md5sums				node-url-to-options.list
gsettings-desktop-schemas.list			node-url-to-options.md5sums
gsettings-desktop-schemas.md5sums		node-util-deprecate.list
gsfonts.conffiles				node-util-deprecate.md5sums
gsfonts.list					node-uuid.list
gsfonts.md5sums					node-uuid.md5sums
gsfonts.postinst				node-validate-npm-package-license.list
gsfonts.postrm					node-validate-npm-package-license.md5sums
gsfonts.prerm					node-validate-npm-package-name.list
gyp.list					node-validate-npm-package-name.md5sums
gyp.md5sums					node-verror.list
gyp.postinst					node-verror.md5sums
gyp.prerm					node-wcwidth.js.list
gzip.list					node-wcwidth.js.md5sums
gzip.md5sums					node-which-module.list
haveged.conffiles				node-which-module.md5sums
haveged.list					node-which.list
haveged.md5sums					node-which.md5sums
haveged.postinst				node-wide-align.list
haveged.postrm					node-wide-align.md5sums
haveged.prerm					node-widest-line.list
hdparm.conffiles				node-widest-line.md5sums
hdparm.list					node-wrap-ansi.list
hdparm.md5sums					node-wrap-ansi.md5sums
hdparm.postinst					node-wrappy.list
hdparm.postrm					node-wrappy.md5sums
hdparm.preinst					node-write-file-atomic.list
hdparm.prerm					node-write-file-atomic.md5sums
helm.list					node-xdg-basedir.list
helm.md5sums					node-xdg-basedir.md5sums
hicolor-icon-theme.list				node-xtend.list
hicolor-icon-theme.md5sums			node-xtend.md5sums
hicolor-icon-theme.postinst			node-y18n.list
hicolor-icon-theme.prerm			node-y18n.md5sums
hicolor-icon-theme.triggers			node-yallist.list
hostname.list					node-yallist.md5sums
hostname.md5sums				node-yargs-parser.list
imagemagick-6-common.conffiles			node-yargs-parser.md5sums
imagemagick-6-common.list			node-yargs.list
imagemagick-6-common.md5sums			node-yargs.md5sums
imagemagick-6.q16.list				nodejs-doc.list
imagemagick-6.q16.md5sums			nodejs-doc.md5sums
imagemagick-6.q16.postinst			nodejs.list
imagemagick-6.q16.prerm				nodejs.md5sums
imagemagick.list				nodejs.postinst
imagemagick.md5sums				nodejs.prerm
imagemagick.postinst				nomarch.list
imagemagick.postrm				nomarch.md5sums
imagemagick.preinst				npm.list
imagemagick.prerm				npm.md5sums
info.list					npm.postinst
info.md5sums					npm.postrm
info.postinst					npm.preinst
info.prerm					npm.prerm
init-system-helpers.list			ntfs-3g.list
init-system-helpers.md5sums			ntfs-3g.md5sums
init.list					ntfs-3g.postinst
init.md5sums					ntfs-3g.postrm
initramfs-tools-bin.list			ntfs-3g.triggers
initramfs-tools-bin.md5sums			ntp.conffiles
initramfs-tools-core.conffiles			ntp.list
initramfs-tools-core.list			ntp.md5sums
initramfs-tools-core.md5sums			ntp.postinst
initramfs-tools-core.postinst			ntp.postrm
initramfs-tools-core.postrm			ntp.prerm
initramfs-tools.conffiles			ntp.triggers
initramfs-tools.list				openbsd-inetd.list
initramfs-tools.md5sums				openbsd-inetd.postrm
initramfs-tools.postinst			openssh-client.conffiles
initramfs-tools.postrm				openssh-client.list
initramfs-tools.preinst				openssh-client.md5sums
initramfs-tools.prerm				openssh-client.postinst
initramfs-tools.triggers			openssh-client.postrm
install-info.list				openssh-client.preinst
install-info.md5sums				openssh-client.prerm
install-info.postinst				openssh-server.conffiles
install-info.triggers				openssh-server.config
installation-report.list			openssh-server.list
installation-report.md5sums			openssh-server.md5sums
installation-report.postinst			openssh-server.postinst
installation-report.postrm			openssh-server.postrm
installation-report.preinst			openssh-server.preinst
intel-microcode.conffiles			openssh-server.prerm
intel-microcode.list				openssh-server.templates
intel-microcode.md5sums				openssh-sftp-server.list
intel-microcode.postinst			openssh-sftp-server.md5sums
intel-microcode.postrm				openssl.conffiles
intltool-debian.list				openssl.list
intltool-debian.md5sums				openssl.md5sums
iproute2.conffiles				openssl.postinst
iproute2.config					os-prober.list
iproute2.list					os-prober.md5sums
iproute2.md5sums				p7zip-full.list
iproute2.postinst				p7zip-full.md5sums
iproute2.postrm					p7zip-full.postinst
iproute2.templates				p7zip-full.postrm
iptables.list					p7zip-full.preinst
iptables.md5sums				p7zip-full.prerm
iptables.postinst				p7zip.list
iptables.prerm					p7zip.md5sums
iputils-ping.list				packagekit-tools.list
iputils-ping.md5sums				packagekit-tools.md5sums
iputils-ping.postinst				packagekit.conffiles
iputils-tracepath.list				packagekit.list
iputils-tracepath.md5sums			packagekit.md5sums
iputils-tracepath.postinst			packagekit.postinst
iputils-tracepath.prerm				packagekit.postrm
irqbalance.conffiles				packagekit.preinst
irqbalance.list					packagekit.prerm
irqbalance.md5sums				parted.list
irqbalance.postinst				parted.md5sums
irqbalance.postrm				passenger.list
irqbalance.preinst				passenger.md5sums
irqbalance.prerm				passwd.conffiles
isc-dhcp-client.conffiles			passwd.list
isc-dhcp-client.list				passwd.md5sums
isc-dhcp-client.md5sums				passwd.postinst
isc-dhcp-client.postinst			passwd.postrm
isc-dhcp-client.postrm				passwd.preinst
isc-dhcp-common.list				passwd.prerm
isc-dhcp-common.md5sums				patch.list
iso-codes.list					patch.md5sums
iso-codes.md5sums				pci.ids.list
iucode-tool.list				pci.ids.md5sums
iucode-tool.md5sums				pciutils.list
iw.list						pciutils.md5sums
iw.md5sums					pciutils.postinst
jailkit.conffiles				pciutils.postrm
jailkit.list					pciutils.preinst
jailkit.md5sums					perl-base.list
jailkit.postinst				perl-base.md5sums
jailkit.prerm					perl-base.postinst
javascript-common.conffiles			perl-base.postrm
javascript-common.list				perl-base.preinst
javascript-common.md5sums			perl-base.prerm
javascript-common.postinst			perl-modules-5.30.list
javascript-common.postrm			perl-modules-5.30.md5sums
javascript-common.preinst			perl-openssl-defaults:amd64.list
javascript-common.prerm				perl-openssl-defaults:amd64.md5sums
jq.list						perl.conffiles
jq.md5sums					perl.list
kbd.list					perl.md5sums
kbd.md5sums					perl.postinst
kbd.postinst					perl.postrm
kbd.postrm					perl.preinst
kbd.preinst					perl.prerm
kbd.prerm					php-apcu.list
keyboard-configuration.config			php-apcu.md5sums
keyboard-configuration.list			php-auth-sasl.list
keyboard-configuration.md5sums			php-auth-sasl.md5sums
keyboard-configuration.postinst			php-cli.list
keyboard-configuration.postrm			php-cli.md5sums
keyboard-configuration.preinst			php-cli.postinst
keyboard-configuration.templates		php-cli.prerm
klibc-utils.list				php-common.conffiles
klibc-utils.md5sums				php-common.list
klibc-utils.postinst				php-common.md5sums
klibc-utils.triggers				php-common.postinst
kmod.conffiles					php-common.postrm
kmod.list					php-common.prerm
kmod.md5sums					php-imagick.list
kmod.postinst					php-imagick.md5sums
kmod.postrm					php-mail-mime.list
krb5-locales.list				php-mail-mime.md5sums
krb5-locales.md5sums				php-masterminds-html5.list
language-pack-en-base.list			php-masterminds-html5.md5sums
language-pack-en-base.md5sums			php-mbstring.list
language-pack-en-base.postinst			php-mbstring.md5sums
language-pack-en-base.postrm			php-memcache.list
language-pack-en.list				php-memcache.md5sums
language-pack-en.md5sums			php-net-sieve.list
language-pack-gnome-en-base.list		php-net-sieve.md5sums
language-pack-gnome-en-base.md5sums		php-net-smtp.list
language-pack-gnome-en-base.postinst		php-net-smtp.md5sums
language-pack-gnome-en-base.postrm		php-net-socket.list
language-pack-gnome-en.list			php-net-socket.md5sums
language-pack-gnome-en.md5sums			php-pear.list
language-selector-common.conffiles		php-pear.md5sums
language-selector-common.list			php-pear.postinst
language-selector-common.md5sums		php-pear.postrm
language-selector-common.postinst		php-pear.preinst
language-selector-common.postrm			php-pear.prerm
language-selector-common.preinst		php-xml.list
language-selector-common.prerm			php-xml.md5sums
laptop-detect.list				php5.6-cgi.conffiles
laptop-detect.md5sums				php5.6-cgi.list
less.list					php5.6-cgi.md5sums
less.md5sums					php5.6-cgi.postinst
less.postinst					php5.6-cgi.postrm
less.preinst					php5.6-cgi.prerm
less.prerm					php5.6-cgi.triggers
libaccountsservice0:amd64.list			php5.6-cli.list
libaccountsservice0:amd64.md5sums		php5.6-cli.md5sums
libaccountsservice0:amd64.shlibs		php5.6-cli.postinst
libaccountsservice0:amd64.symbols		php5.6-cli.postrm
libaccountsservice0:amd64.triggers		php5.6-cli.prerm
libacl1:amd64.list				php5.6-cli.triggers
libacl1:amd64.md5sums				php5.6-common.list
libacl1:amd64.shlibs				php5.6-common.md5sums
libacl1:amd64.symbols				php5.6-common.postinst
libacl1:amd64.triggers				php5.6-common.postrm
libaio1:amd64.list				php5.6-common.preinst
libaio1:amd64.md5sums				php5.6-common.prerm
libaio1:amd64.shlibs				php5.6-common.triggers
libaio1:amd64.symbols				php5.6-curl.list
libaio1:amd64.triggers				php5.6-curl.md5sums
libalgorithm-diff-perl.list			php5.6-curl.postinst
libalgorithm-diff-perl.md5sums			php5.6-curl.postrm
libalgorithm-diff-xs-perl.list			php5.6-curl.preinst
libalgorithm-diff-xs-perl.md5sums		php5.6-curl.prerm
libalgorithm-merge-perl.list			php5.6-curl.triggers
libalgorithm-merge-perl.md5sums			php5.6-fpm.conffiles
libapache2-mod-fcgid.conffiles			php5.6-fpm.list
libapache2-mod-fcgid.list			php5.6-fpm.md5sums
libapache2-mod-fcgid.md5sums			php5.6-fpm.postinst
libapache2-mod-fcgid.postinst			php5.6-fpm.postrm
libapache2-mod-fcgid.postrm			php5.6-fpm.preinst
libapache2-mod-fcgid.prerm			php5.6-fpm.prerm
libapache2-mod-passenger.conffiles		php5.6-fpm.triggers
libapache2-mod-passenger.list			php5.6-gd.list
libapache2-mod-passenger.md5sums		php5.6-gd.md5sums
libapache2-mod-passenger.postinst		php5.6-gd.postinst
libapache2-mod-passenger.postrm			php5.6-gd.postrm
libapache2-mod-passenger.prerm			php5.6-gd.preinst
libapache2-mod-python.conffiles			php5.6-gd.prerm
libapache2-mod-python.list			php5.6-gd.triggers
libapache2-mod-python.md5sums			php5.6-imap.list
libapache2-mod-python.postinst			php5.6-imap.md5sums
libapache2-mod-python.postrm			php5.6-imap.postinst
libapache2-mod-python.prerm			php5.6-imap.postrm
libapparmor1:amd64.list				php5.6-imap.preinst
libapparmor1:amd64.md5sums			php5.6-imap.prerm
libapparmor1:amd64.shlibs			php5.6-imap.triggers
libapparmor1:amd64.symbols			php5.6-intl.list
libapparmor1:amd64.triggers			php5.6-intl.md5sums
libappstream4:amd64.list			php5.6-intl.postinst
libappstream4:amd64.md5sums			php5.6-intl.postrm
libappstream4:amd64.shlibs			php5.6-intl.preinst
libappstream4:amd64.symbols			php5.6-intl.prerm
libappstream4:amd64.triggers			php5.6-intl.triggers
libapr1:amd64.list				php5.6-json.list
libapr1:amd64.md5sums				php5.6-json.md5sums
libapr1:amd64.shlibs				php5.6-json.postinst
libapr1:amd64.symbols				php5.6-json.postrm
libapr1:amd64.triggers				php5.6-json.preinst
libaprutil1-dbd-sqlite3:amd64.list		php5.6-json.prerm
libaprutil1-dbd-sqlite3:amd64.md5sums		php5.6-json.triggers
libaprutil1-ldap:amd64.list			php5.6-mbstring.list
libaprutil1-ldap:amd64.md5sums			php5.6-mbstring.md5sums
libaprutil1:amd64.list				php5.6-mbstring.postinst
libaprutil1:amd64.md5sums			php5.6-mbstring.postrm
libaprutil1:amd64.shlibs			php5.6-mbstring.preinst
libaprutil1:amd64.symbols			php5.6-mbstring.prerm
libaprutil1:amd64.triggers			php5.6-mbstring.triggers
libapt-pkg6.0:amd64.list			php5.6-mcrypt.list
libapt-pkg6.0:amd64.md5sums			php5.6-mcrypt.md5sums
libapt-pkg6.0:amd64.shlibs			php5.6-mcrypt.postinst
libapt-pkg6.0:amd64.symbols			php5.6-mcrypt.postrm
libapt-pkg6.0:amd64.triggers			php5.6-mcrypt.preinst
libarchive-cpio-perl.list			php5.6-mcrypt.prerm
libarchive-cpio-perl.md5sums			php5.6-mcrypt.triggers
libarchive-zip-perl.list			php5.6-mysql.list
libarchive-zip-perl.md5sums			php5.6-mysql.md5sums
libargon2-1:amd64.list				php5.6-mysql.postinst
libargon2-1:amd64.md5sums			php5.6-mysql.postrm
libargon2-1:amd64.shlibs			php5.6-mysql.preinst
libargon2-1:amd64.symbols			php5.6-mysql.prerm
libargon2-1:amd64.triggers			php5.6-mysql.triggers
libasan5:amd64.list				php5.6-opcache.list
libasan5:amd64.md5sums				php5.6-opcache.md5sums
libasan5:amd64.shlibs				php5.6-opcache.postinst
libasan5:amd64.symbols				php5.6-opcache.postrm
libasan5:amd64.triggers				php5.6-opcache.preinst
libasn1-8-heimdal:amd64.list			php5.6-opcache.prerm
libasn1-8-heimdal:amd64.md5sums			php5.6-opcache.triggers
libasn1-8-heimdal:amd64.shlibs			php5.6-pspell.list
libasn1-8-heimdal:amd64.symbols			php5.6-pspell.md5sums
libasn1-8-heimdal:amd64.triggers		php5.6-pspell.postinst
libasound2-data.list				php5.6-pspell.postrm
libasound2-data.md5sums				php5.6-pspell.preinst
libasound2:amd64.list				php5.6-pspell.prerm
libasound2:amd64.md5sums			php5.6-pspell.triggers
libasound2:amd64.shlibs				php5.6-readline.list
libasound2:amd64.symbols			php5.6-readline.md5sums
libasound2:amd64.triggers			php5.6-readline.postinst
libaspell15:amd64.list				php5.6-readline.postrm
libaspell15:amd64.md5sums			php5.6-readline.preinst
libaspell15:amd64.shlibs			php5.6-readline.prerm
libaspell15:amd64.triggers			php5.6-readline.triggers
libassuan0:amd64.list				php5.6-recode.list
libassuan0:amd64.md5sums			php5.6-recode.md5sums
libassuan0:amd64.shlibs				php5.6-recode.postinst
libassuan0:amd64.symbols			php5.6-recode.postrm
libassuan0:amd64.triggers			php5.6-recode.preinst
libatm1:amd64.list				php5.6-recode.prerm
libatm1:amd64.md5sums				php5.6-recode.triggers
libatm1:amd64.shlibs				php5.6-soap.list
libatm1:amd64.symbols				php5.6-soap.md5sums
libatm1:amd64.triggers				php5.6-soap.postinst
libatomic1:amd64.list				php5.6-soap.postrm
libatomic1:amd64.md5sums			php5.6-soap.preinst
libatomic1:amd64.shlibs				php5.6-soap.prerm
libatomic1:amd64.symbols			php5.6-soap.triggers
libatomic1:amd64.triggers			php5.6-sqlite3.list
libattr1:amd64.conffiles			php5.6-sqlite3.md5sums
libattr1:amd64.list				php5.6-sqlite3.postinst
libattr1:amd64.md5sums				php5.6-sqlite3.postrm
libattr1:amd64.shlibs				php5.6-sqlite3.preinst
libattr1:amd64.symbols				php5.6-sqlite3.prerm
libattr1:amd64.triggers				php5.6-sqlite3.triggers
libaudit-common.conffiles			php5.6-tidy.list
libaudit-common.list				php5.6-tidy.md5sums
libaudit-common.md5sums				php5.6-tidy.postinst
libaudit1:amd64.list				php5.6-tidy.postrm
libaudit1:amd64.md5sums				php5.6-tidy.preinst
libaudit1:amd64.shlibs				php5.6-tidy.prerm
libaudit1:amd64.symbols				php5.6-tidy.triggers
libaudit1:amd64.triggers			php5.6-xml.list
libauthen-sasl-perl.list			php5.6-xml.md5sums
libauthen-sasl-perl.md5sums			php5.6-xml.postinst
libavahi-client3:amd64.list			php5.6-xml.postrm
libavahi-client3:amd64.md5sums			php5.6-xml.preinst
libavahi-client3:amd64.shlibs			php5.6-xml.prerm
libavahi-client3:amd64.symbols			php5.6-xml.triggers
libavahi-client3:amd64.triggers			php5.6-xmlrpc.list
libavahi-common-data:amd64.list			php5.6-xmlrpc.md5sums
libavahi-common-data:amd64.md5sums		php5.6-xmlrpc.postinst
libavahi-common3:amd64.list			php5.6-xmlrpc.postrm
libavahi-common3:amd64.md5sums			php5.6-xmlrpc.preinst
libavahi-common3:amd64.shlibs			php5.6-xmlrpc.prerm
libavahi-common3:amd64.symbols			php5.6-xmlrpc.triggers
libavahi-common3:amd64.triggers			php5.6-xsl.list
libb2-1:amd64.list				php5.6-xsl.md5sums
libb2-1:amd64.md5sums				php5.6-zip.list
libb2-1:amd64.shlibs				php5.6-zip.md5sums
libb2-1:amd64.triggers				php5.6-zip.postinst
libberkeleydb-perl:amd64.list			php5.6-zip.postrm
libberkeleydb-perl:amd64.md5sums		php5.6-zip.preinst
libbinutils:amd64.list				php5.6-zip.prerm
libbinutils:amd64.md5sums			php5.6-zip.triggers
libbinutils:amd64.shlibs			php5.6.list
libbinutils:amd64.triggers			php5.6.md5sums
libblkid1:amd64.list				php7.0-cgi.conffiles
libblkid1:amd64.md5sums				php7.0-cgi.list
libblkid1:amd64.shlibs				php7.0-cgi.md5sums
libblkid1:amd64.symbols				php7.0-cgi.postinst
libblkid1:amd64.triggers			php7.0-cgi.postrm
libbrotli1:amd64.list				php7.0-cgi.prerm
libbrotli1:amd64.md5sums			php7.0-cgi.triggers
libbrotli1:amd64.shlibs				php7.0-cli.list
libbrotli1:amd64.symbols			php7.0-cli.md5sums
libbrotli1:amd64.triggers			php7.0-cli.postinst
libbsd0:amd64.list				php7.0-cli.postrm
libbsd0:amd64.md5sums				php7.0-cli.prerm
libbsd0:amd64.shlibs				php7.0-cli.triggers
libbsd0:amd64.symbols				php7.0-common.list
libbsd0:amd64.triggers				php7.0-common.md5sums
libbz2-1.0:amd64.list				php7.0-common.postinst
libbz2-1.0:amd64.md5sums			php7.0-common.postrm
libbz2-1.0:amd64.shlibs				php7.0-common.preinst
libbz2-1.0:amd64.triggers			php7.0-common.prerm
libc-ares2:amd64.list				php7.0-common.triggers
libc-ares2:amd64.md5sums			php7.0-curl.list
libc-ares2:amd64.shlibs				php7.0-curl.md5sums
libc-ares2:amd64.symbols			php7.0-curl.postinst
libc-ares2:amd64.triggers			php7.0-curl.postrm
libc-bin.conffiles				php7.0-curl.preinst
libc-bin.list					php7.0-curl.prerm
libc-bin.md5sums				php7.0-curl.triggers
libc-bin.postinst				php7.0-fpm.conffiles
libc-bin.triggers				php7.0-fpm.list
libc-client2007e.list				php7.0-fpm.md5sums
libc-client2007e.md5sums			php7.0-fpm.postinst
libc-client2007e.shlibs				php7.0-fpm.postrm
libc-client2007e.triggers			php7.0-fpm.preinst
libc-dev-bin.list				php7.0-fpm.prerm
libc-dev-bin.md5sums				php7.0-fpm.triggers
libc6-dev:amd64.list				php7.0-gd.list
libc6-dev:amd64.md5sums				php7.0-gd.md5sums
libc6:amd64.conffiles				php7.0-gd.postinst
libc6:amd64.list				php7.0-gd.postrm
libc6:amd64.md5sums				php7.0-gd.preinst
libc6:amd64.postinst				php7.0-gd.prerm
libc6:amd64.postrm				php7.0-gd.triggers
libc6:amd64.preinst				php7.0-imap.list
libc6:amd64.shlibs				php7.0-imap.md5sums
libc6:amd64.symbols				php7.0-imap.postinst
libc6:amd64.templates				php7.0-imap.postrm
libc6:amd64.triggers				php7.0-imap.preinst
libcairo2:amd64.list				php7.0-imap.prerm
libcairo2:amd64.md5sums				php7.0-imap.triggers
libcairo2:amd64.shlibs				php7.0-intl.list
libcairo2:amd64.symbols				php7.0-intl.md5sums
libcairo2:amd64.triggers			php7.0-intl.postinst
libcanberra0:amd64.list				php7.0-intl.postrm
libcanberra0:amd64.md5sums			php7.0-intl.preinst
libcanberra0:amd64.shlibs			php7.0-intl.prerm
libcanberra0:amd64.symbols			php7.0-intl.triggers
libcanberra0:amd64.triggers			php7.0-json.list
libcap-ng0:amd64.list				php7.0-json.md5sums
libcap-ng0:amd64.md5sums			php7.0-json.postinst
libcap-ng0:amd64.shlibs				php7.0-json.postrm
libcap-ng0:amd64.symbols			php7.0-json.preinst
libcap-ng0:amd64.triggers			php7.0-json.prerm
libcap2-bin.list				php7.0-json.triggers
libcap2-bin.md5sums				php7.0-mbstring.list
libcap2:amd64.list				php7.0-mbstring.md5sums
libcap2:amd64.md5sums				php7.0-mbstring.postinst
libcap2:amd64.shlibs				php7.0-mbstring.postrm
libcap2:amd64.symbols				php7.0-mbstring.preinst
libcap2:amd64.triggers				php7.0-mbstring.prerm
libcbor0.6:amd64.list				php7.0-mbstring.triggers
libcbor0.6:amd64.md5sums			php7.0-mcrypt.list
libcbor0.6:amd64.shlibs				php7.0-mcrypt.md5sums
libcbor0.6:amd64.symbols			php7.0-mcrypt.postinst
libcbor0.6:amd64.triggers			php7.0-mcrypt.postrm
libcc1-0:amd64.list				php7.0-mcrypt.preinst
libcc1-0:amd64.md5sums				php7.0-mcrypt.prerm
libcc1-0:amd64.shlibs				php7.0-mcrypt.triggers
libcc1-0:amd64.symbols				php7.0-mysql.list
libcc1-0:amd64.triggers				php7.0-mysql.md5sums
libcgi-fast-perl.list				php7.0-mysql.postinst
libcgi-fast-perl.md5sums			php7.0-mysql.postrm
libcgi-pm-perl.list				php7.0-mysql.preinst
libcgi-pm-perl.md5sums				php7.0-mysql.prerm
libclamav9:amd64.list				php7.0-mysql.triggers
libclamav9:amd64.md5sums			php7.0-opcache.list
libclamav9:amd64.shlibs				php7.0-opcache.md5sums
libclamav9:amd64.symbols			php7.0-opcache.postinst
libclamav9:amd64.triggers			php7.0-opcache.postrm
libcom-err2:amd64.list				php7.0-opcache.preinst
libcom-err2:amd64.md5sums			php7.0-opcache.prerm
libcom-err2:amd64.shlibs			php7.0-opcache.triggers
libcom-err2:amd64.symbols			php7.0-pspell.list
libcom-err2:amd64.triggers			php7.0-pspell.md5sums
libconvert-asn1-perl.list			php7.0-pspell.postinst
libconvert-asn1-perl.md5sums			php7.0-pspell.postrm
libcroco3:amd64.list				php7.0-pspell.preinst
libcroco3:amd64.md5sums				php7.0-pspell.prerm
libcroco3:amd64.shlibs				php7.0-pspell.triggers
libcroco3:amd64.symbols				php7.0-readline.list
libcroco3:amd64.triggers			php7.0-readline.md5sums
libcrypt-dev:amd64.list				php7.0-readline.postinst
libcrypt-dev:amd64.md5sums			php7.0-readline.postrm
libcrypt1:amd64.list				php7.0-readline.preinst
libcrypt1:amd64.md5sums				php7.0-readline.prerm
libcrypt1:amd64.shlibs				php7.0-readline.triggers
libcrypt1:amd64.symbols				php7.0-recode.list
libcrypt1:amd64.triggers			php7.0-recode.md5sums
libcryptsetup12:amd64.list			php7.0-recode.postinst
libcryptsetup12:amd64.md5sums			php7.0-recode.postrm
libcryptsetup12:amd64.shlibs			php7.0-recode.preinst
libcryptsetup12:amd64.symbols			php7.0-recode.prerm
libcryptsetup12:amd64.triggers			php7.0-recode.triggers
libctf-nobfd0:amd64.list			php7.0-soap.list
libctf-nobfd0:amd64.md5sums			php7.0-soap.md5sums
libctf-nobfd0:amd64.symbols			php7.0-soap.postinst
libctf-nobfd0:amd64.triggers			php7.0-soap.postrm
libctf0:amd64.list				php7.0-soap.preinst
libctf0:amd64.md5sums				php7.0-soap.prerm
libctf0:amd64.symbols				php7.0-soap.triggers
libctf0:amd64.triggers				php7.0-sqlite3.list
libcups2:amd64.list				php7.0-sqlite3.md5sums
libcups2:amd64.md5sums				php7.0-sqlite3.postinst
libcups2:amd64.shlibs				php7.0-sqlite3.postrm
libcups2:amd64.symbols				php7.0-sqlite3.preinst
libcups2:amd64.triggers				php7.0-sqlite3.prerm
libcurl3-gnutls:amd64.list			php7.0-sqlite3.triggers
libcurl3-gnutls:amd64.md5sums			php7.0-tidy.list
libcurl3-gnutls:amd64.shlibs			php7.0-tidy.md5sums
libcurl3-gnutls:amd64.symbols			php7.0-tidy.postinst
libcurl3-gnutls:amd64.triggers			php7.0-tidy.postrm
libcurl4:amd64.list				php7.0-tidy.preinst
libcurl4:amd64.md5sums				php7.0-tidy.prerm
libcurl4:amd64.shlibs				php7.0-tidy.triggers
libcurl4:amd64.symbols				php7.0-xml.list
libcurl4:amd64.triggers				php7.0-xml.md5sums
libdata-dump-perl.list				php7.0-xml.postinst
libdata-dump-perl.md5sums			php7.0-xml.postrm
libdatrie1:amd64.list				php7.0-xml.preinst
libdatrie1:amd64.md5sums			php7.0-xml.prerm
libdatrie1:amd64.shlibs				php7.0-xml.triggers
libdatrie1:amd64.symbols			php7.0-xmlrpc.list
libdatrie1:amd64.triggers			php7.0-xmlrpc.md5sums
libdb5.3:amd64.list				php7.0-xmlrpc.postinst
libdb5.3:amd64.md5sums				php7.0-xmlrpc.postrm
libdb5.3:amd64.shlibs				php7.0-xmlrpc.preinst
libdb5.3:amd64.triggers				php7.0-xmlrpc.prerm
libdbus-1-3:amd64.list				php7.0-xmlrpc.triggers
libdbus-1-3:amd64.md5sums			php7.0-xsl.list
libdbus-1-3:amd64.shlibs			php7.0-xsl.md5sums
libdbus-1-3:amd64.symbols			php7.0-zip.list
libdbus-1-3:amd64.triggers			php7.0-zip.md5sums
libdconf1:amd64.list				php7.0-zip.postinst
libdconf1:amd64.md5sums				php7.0-zip.postrm
libdconf1:amd64.shlibs				php7.0-zip.preinst
libdconf1:amd64.symbols				php7.0-zip.prerm
libdconf1:amd64.triggers			php7.0-zip.triggers
libdebconfclient0:amd64.list			php7.0.list
libdebconfclient0:amd64.md5sums			php7.0.md5sums
libdebconfclient0:amd64.shlibs			php7.1-cgi.conffiles
libdebconfclient0:amd64.symbols			php7.1-cgi.list
libdebconfclient0:amd64.triggers		php7.1-cgi.md5sums
libdebhelper-perl.list				php7.1-cgi.postinst
libdebhelper-perl.md5sums			php7.1-cgi.postrm
libdevmapper1.02.1:amd64.list			php7.1-cgi.prerm
libdevmapper1.02.1:amd64.md5sums		php7.1-cgi.triggers
libdevmapper1.02.1:amd64.shlibs			php7.1-cli.list
libdevmapper1.02.1:amd64.symbols		php7.1-cli.md5sums
libdevmapper1.02.1:amd64.triggers		php7.1-cli.postinst
libdigest-bubblebabble-perl.list		php7.1-cli.postrm
libdigest-bubblebabble-perl.md5sums		php7.1-cli.prerm
libdigest-hmac-perl.list			php7.1-cli.triggers
libdigest-hmac-perl.md5sums			php7.1-common.list
libdjvulibre-text.list				php7.1-common.md5sums
libdjvulibre-text.md5sums			php7.1-common.postinst
libdjvulibre21:amd64.list			php7.1-common.postrm
libdjvulibre21:amd64.md5sums			php7.1-common.preinst
libdjvulibre21:amd64.shlibs			php7.1-common.prerm
libdjvulibre21:amd64.triggers			php7.1-common.triggers
libdns-export1109.list				php7.1-curl.list
libdns-export1109.md5sums			php7.1-curl.md5sums
libdns-export1109.shlibs			php7.1-curl.postinst
libdns-export1109.triggers			php7.1-curl.postrm
libdpkg-perl.list				php7.1-curl.preinst
libdpkg-perl.md5sums				php7.1-curl.prerm
libdrm-amdgpu1:amd64.list			php7.1-curl.triggers
libdrm-amdgpu1:amd64.md5sums			php7.1-fpm.conffiles
libdrm-amdgpu1:amd64.shlibs			php7.1-fpm.list
libdrm-amdgpu1:amd64.symbols			php7.1-fpm.md5sums
libdrm-amdgpu1:amd64.triggers			php7.1-fpm.postinst
libdrm-common.list				php7.1-fpm.postrm
libdrm-common.md5sums				php7.1-fpm.preinst
libdrm-intel1:amd64.list			php7.1-fpm.prerm
libdrm-intel1:amd64.md5sums			php7.1-fpm.triggers
libdrm-intel1:amd64.shlibs			php7.1-gd.list
libdrm-intel1:amd64.symbols			php7.1-gd.md5sums
libdrm-intel1:amd64.triggers			php7.1-gd.postinst
libdrm-nouveau2:amd64.list			php7.1-gd.postrm
libdrm-nouveau2:amd64.md5sums			php7.1-gd.preinst
libdrm-nouveau2:amd64.shlibs			php7.1-gd.prerm
libdrm-nouveau2:amd64.symbols			php7.1-gd.triggers
libdrm-nouveau2:amd64.triggers			php7.1-imap.list
libdrm-radeon1:amd64.list			php7.1-imap.md5sums
libdrm-radeon1:amd64.md5sums			php7.1-imap.postinst
libdrm-radeon1:amd64.shlibs			php7.1-imap.postrm
libdrm-radeon1:amd64.symbols			php7.1-imap.preinst
libdrm-radeon1:amd64.triggers			php7.1-imap.prerm
libdrm2:amd64.list				php7.1-imap.triggers
libdrm2:amd64.md5sums				php7.1-intl.list
libdrm2:amd64.shlibs				php7.1-intl.md5sums
libdrm2:amd64.symbols				php7.1-intl.postinst
libdrm2:amd64.triggers				php7.1-intl.postrm
libedit2:amd64.list				php7.1-intl.preinst
libedit2:amd64.md5sums				php7.1-intl.prerm
libedit2:amd64.shlibs				php7.1-intl.triggers
libedit2:amd64.symbols				php7.1-json.list
libedit2:amd64.triggers				php7.1-json.md5sums
libefiboot1:amd64.list				php7.1-json.postinst
libefiboot1:amd64.md5sums			php7.1-json.postrm
libefiboot1:amd64.shlibs			php7.1-json.preinst
libefiboot1:amd64.triggers			php7.1-json.prerm
libefivar1:amd64.list				php7.1-json.triggers
libefivar1:amd64.md5sums			php7.1-mbstring.list
libefivar1:amd64.shlibs				php7.1-mbstring.md5sums
libefivar1:amd64.triggers			php7.1-mbstring.postinst
libelf1:amd64.list				php7.1-mbstring.postrm
libelf1:amd64.md5sums				php7.1-mbstring.preinst
libelf1:amd64.shlibs				php7.1-mbstring.prerm
libelf1:amd64.symbols				php7.1-mbstring.triggers
libelf1:amd64.triggers				php7.1-mcrypt.list
libencode-locale-perl.list			php7.1-mcrypt.md5sums
libencode-locale-perl.md5sums			php7.1-mcrypt.postinst
liberror-perl.list				php7.1-mcrypt.postrm
liberror-perl.md5sums				php7.1-mcrypt.preinst
libestr0:amd64.list				php7.1-mcrypt.prerm
libestr0:amd64.md5sums				php7.1-mcrypt.triggers
libestr0:amd64.shlibs				php7.1-mysql.list
libestr0:amd64.symbols				php7.1-mysql.md5sums
libestr0:amd64.triggers				php7.1-mysql.postinst
libevent-2.1-7:amd64.list			php7.1-mysql.postrm
libevent-2.1-7:amd64.md5sums			php7.1-mysql.preinst
libevent-2.1-7:amd64.shlibs			php7.1-mysql.prerm
libevent-2.1-7:amd64.symbols			php7.1-mysql.triggers
libevent-2.1-7:amd64.triggers			php7.1-opcache.list
libevent-core-2.1-7:amd64.list			php7.1-opcache.md5sums
libevent-core-2.1-7:amd64.md5sums		php7.1-opcache.postinst
libevent-core-2.1-7:amd64.shlibs		php7.1-opcache.postrm
libevent-core-2.1-7:amd64.symbols		php7.1-opcache.preinst
libevent-core-2.1-7:amd64.triggers		php7.1-opcache.prerm
libevent-pthreads-2.1-7:amd64.list		php7.1-opcache.triggers
libevent-pthreads-2.1-7:amd64.md5sums		php7.1-pspell.list
libevent-pthreads-2.1-7:amd64.shlibs		php7.1-pspell.md5sums
libevent-pthreads-2.1-7:amd64.symbols		php7.1-pspell.postinst
libevent-pthreads-2.1-7:amd64.triggers		php7.1-pspell.postrm
libexpat1-dev:amd64.list			php7.1-pspell.preinst
libexpat1-dev:amd64.md5sums			php7.1-pspell.prerm
libexpat1:amd64.list				php7.1-pspell.triggers
libexpat1:amd64.md5sums				php7.1-readline.list
libexpat1:amd64.shlibs				php7.1-readline.md5sums
libexpat1:amd64.symbols				php7.1-readline.postinst
libexpat1:amd64.triggers			php7.1-readline.postrm
libext2fs2:amd64.list				php7.1-readline.preinst
libext2fs2:amd64.md5sums			php7.1-readline.prerm
libext2fs2:amd64.shlibs				php7.1-readline.triggers
libext2fs2:amd64.symbols			php7.1-recode.list
libext2fs2:amd64.triggers			php7.1-recode.md5sums
libexttextcat-2.0-0:amd64.list			php7.1-recode.postinst
libexttextcat-2.0-0:amd64.md5sums		php7.1-recode.postrm
libexttextcat-2.0-0:amd64.shlibs		php7.1-recode.preinst
libexttextcat-2.0-0:amd64.symbols		php7.1-recode.prerm
libexttextcat-2.0-0:amd64.triggers		php7.1-recode.triggers
libexttextcat-data.list				php7.1-soap.list
libexttextcat-data.md5sums			php7.1-soap.md5sums
libfakeroot:amd64.conffiles			php7.1-soap.postinst
libfakeroot:amd64.list				php7.1-soap.postrm
libfakeroot:amd64.md5sums			php7.1-soap.preinst
libfakeroot:amd64.shlibs			php7.1-soap.prerm
libfakeroot:amd64.triggers			php7.1-soap.triggers
libfastjson4:amd64.list				php7.1-sqlite3.list
libfastjson4:amd64.md5sums			php7.1-sqlite3.md5sums
libfastjson4:amd64.shlibs			php7.1-sqlite3.postinst
libfastjson4:amd64.symbols			php7.1-sqlite3.postrm
libfastjson4:amd64.triggers			php7.1-sqlite3.preinst
libfcgi-bin.list				php7.1-sqlite3.prerm
libfcgi-bin.md5sums				php7.1-sqlite3.triggers
libfcgi-perl.list				php7.1-tidy.list
libfcgi-perl.md5sums				php7.1-tidy.md5sums
libfcgi0ldbl:amd64.list				php7.1-tidy.postinst
libfcgi0ldbl:amd64.md5sums			php7.1-tidy.postrm
libfcgi0ldbl:amd64.shlibs			php7.1-tidy.preinst
libfcgi0ldbl:amd64.triggers			php7.1-tidy.prerm
libfdisk1:amd64.list				php7.1-tidy.triggers
libfdisk1:amd64.md5sums				php7.1-xml.list
libfdisk1:amd64.shlibs				php7.1-xml.md5sums
libfdisk1:amd64.symbols				php7.1-xml.postinst
libfdisk1:amd64.triggers			php7.1-xml.postrm
libffi7:amd64.list				php7.1-xml.preinst
libffi7:amd64.md5sums				php7.1-xml.prerm
libffi7:amd64.shlibs				php7.1-xml.triggers
libffi7:amd64.symbols				php7.1-xmlrpc.list
libffi7:amd64.triggers				php7.1-xmlrpc.md5sums
libfftw3-double3:amd64.list			php7.1-xmlrpc.postinst
libfftw3-double3:amd64.md5sums			php7.1-xmlrpc.postrm
libfftw3-double3:amd64.shlibs			php7.1-xmlrpc.preinst
libfftw3-double3:amd64.triggers			php7.1-xmlrpc.prerm
libfido2-1:amd64.list				php7.1-xmlrpc.triggers
libfido2-1:amd64.md5sums			php7.1-xsl.list
libfido2-1:amd64.shlibs				php7.1-xsl.md5sums
libfido2-1:amd64.symbols			php7.1-zip.list
libfido2-1:amd64.triggers			php7.1-zip.md5sums
libfile-basedir-perl.list			php7.1-zip.postinst
libfile-basedir-perl.md5sums			php7.1-zip.postrm
libfile-desktopentry-perl.list			php7.1-zip.preinst
libfile-desktopentry-perl.md5sums		php7.1-zip.prerm
libfile-fcntllock-perl.list			php7.1-zip.triggers
libfile-fcntllock-perl.md5sums			php7.1.list
libfile-listing-perl.list			php7.1.md5sums
libfile-listing-perl.md5sums			php7.2-cgi.conffiles
libfile-mimeinfo-perl.list			php7.2-cgi.list
libfile-mimeinfo-perl.md5sums			php7.2-cgi.md5sums
libfile-stripnondeterminism-perl.list		php7.2-cgi.postinst
libfile-stripnondeterminism-perl.md5sums	php7.2-cgi.postrm
libfl-dev:amd64.list				php7.2-cgi.prerm
libfl-dev:amd64.md5sums				php7.2-cgi.triggers
libfl2:amd64.list				php7.2-cli.list
libfl2:amd64.md5sums				php7.2-cli.md5sums
libfl2:amd64.shlibs				php7.2-cli.postinst
libfl2:amd64.symbols				php7.2-cli.postrm
libfl2:amd64.triggers				php7.2-cli.prerm
libfont-afm-perl.list				php7.2-cli.triggers
libfont-afm-perl.md5sums			php7.2-common.list
libfontconfig1:amd64.list			php7.2-common.md5sums
libfontconfig1:amd64.md5sums			php7.2-common.postinst
libfontconfig1:amd64.shlibs			php7.2-common.postrm
libfontconfig1:amd64.symbols			php7.2-common.preinst
libfontconfig1:amd64.triggers			php7.2-common.prerm
libfontenc1:amd64.list				php7.2-common.triggers
libfontenc1:amd64.md5sums			php7.2-curl.list
libfontenc1:amd64.shlibs			php7.2-curl.md5sums
libfontenc1:amd64.triggers			php7.2-curl.postinst
libfreetype6:amd64.list				php7.2-curl.postrm
libfreetype6:amd64.md5sums			php7.2-curl.preinst
libfreetype6:amd64.shlibs			php7.2-curl.prerm
libfreetype6:amd64.symbols			php7.2-curl.triggers
libfreetype6:amd64.triggers			php7.2-fpm.conffiles
libfribidi0:amd64.list				php7.2-fpm.list
libfribidi0:amd64.md5sums			php7.2-fpm.md5sums
libfribidi0:amd64.shlibs			php7.2-fpm.postinst
libfribidi0:amd64.symbols			php7.2-fpm.postrm
libfribidi0:amd64.triggers			php7.2-fpm.preinst
libfuse2:amd64.list				php7.2-fpm.prerm
libfuse2:amd64.md5sums				php7.2-fpm.triggers
libfuse2:amd64.shlibs				php7.2-gd.list
libfuse2:amd64.symbols				php7.2-gd.md5sums
libfuse2:amd64.triggers				php7.2-gd.postinst
libgc1c2:amd64.list				php7.2-gd.postrm
libgc1c2:amd64.md5sums				php7.2-gd.preinst
libgc1c2:amd64.shlibs				php7.2-gd.prerm
libgc1c2:amd64.symbols				php7.2-gd.triggers
libgc1c2:amd64.triggers				php7.2-imap.list
libgcc-9-dev:amd64.list				php7.2-imap.md5sums
libgcc-9-dev:amd64.md5sums			php7.2-imap.postinst
libgcc-s1:amd64.list				php7.2-imap.postrm
libgcc-s1:amd64.md5sums				php7.2-imap.preinst
libgcc-s1:amd64.shlibs				php7.2-imap.prerm
libgcc-s1:amd64.symbols				php7.2-imap.triggers
libgcc-s1:amd64.triggers			php7.2-intl.list
libgcrypt20:amd64.list				php7.2-intl.md5sums
libgcrypt20:amd64.md5sums			php7.2-intl.postinst
libgcrypt20:amd64.shlibs			php7.2-intl.postrm
libgcrypt20:amd64.symbols			php7.2-intl.preinst
libgcrypt20:amd64.triggers			php7.2-intl.prerm
libgd3:amd64.list				php7.2-intl.triggers
libgd3:amd64.md5sums				php7.2-json.list
libgd3:amd64.shlibs				php7.2-json.md5sums
libgd3:amd64.symbols				php7.2-json.postinst
libgd3:amd64.triggers				php7.2-json.postrm
libgdbm-compat4:amd64.list			php7.2-json.preinst
libgdbm-compat4:amd64.md5sums			php7.2-json.prerm
libgdbm-compat4:amd64.shlibs			php7.2-json.triggers
libgdbm-compat4:amd64.symbols			php7.2-mbstring.list
libgdbm-compat4:amd64.triggers			php7.2-mbstring.md5sums
libgdbm6:amd64.list				php7.2-mbstring.postinst
libgdbm6:amd64.md5sums				php7.2-mbstring.postrm
libgdbm6:amd64.shlibs				php7.2-mbstring.preinst
libgdbm6:amd64.symbols				php7.2-mbstring.prerm
libgdbm6:amd64.triggers				php7.2-mbstring.triggers
libgeoip1:amd64.list				php7.2-mysql.list
libgeoip1:amd64.md5sums				php7.2-mysql.md5sums
libgeoip1:amd64.shlibs				php7.2-mysql.postinst
libgeoip1:amd64.triggers			php7.2-mysql.postrm
libgirepository-1.0-1:amd64.list		php7.2-mysql.preinst
libgirepository-1.0-1:amd64.md5sums		php7.2-mysql.prerm
libgirepository-1.0-1:amd64.shlibs		php7.2-mysql.triggers
libgirepository-1.0-1:amd64.symbols		php7.2-opcache.list
libgirepository-1.0-1:amd64.triggers		php7.2-opcache.md5sums
libgl1-mesa-dri:amd64.list			php7.2-opcache.postinst
libgl1-mesa-dri:amd64.md5sums			php7.2-opcache.postrm
libgl1-mesa-dri:amd64.postinst			php7.2-opcache.preinst
libgl1-mesa-dri:amd64.postrm			php7.2-opcache.prerm
libgl1-mesa-dri:amd64.preinst			php7.2-opcache.triggers
libgl1-mesa-dri:amd64.prerm			php7.2-pspell.list
libgl1:amd64.list				php7.2-pspell.md5sums
libgl1:amd64.md5sums				php7.2-pspell.postinst
libgl1:amd64.shlibs				php7.2-pspell.postrm
libgl1:amd64.symbols				php7.2-pspell.preinst
libgl1:amd64.triggers				php7.2-pspell.prerm
libglapi-mesa:amd64.list			php7.2-pspell.triggers
libglapi-mesa:amd64.md5sums			php7.2-readline.list
libglapi-mesa:amd64.shlibs			php7.2-readline.md5sums
libglapi-mesa:amd64.triggers			php7.2-readline.postinst
libglib2.0-0:amd64.list				php7.2-readline.postrm
libglib2.0-0:amd64.md5sums			php7.2-readline.preinst
libglib2.0-0:amd64.postinst			php7.2-readline.prerm
libglib2.0-0:amd64.postrm			php7.2-readline.triggers
libglib2.0-0:amd64.shlibs			php7.2-recode.list
libglib2.0-0:amd64.symbols			php7.2-recode.md5sums
libglib2.0-0:amd64.triggers			php7.2-recode.postinst
libglib2.0-bin.list				php7.2-recode.postrm
libglib2.0-bin.md5sums				php7.2-recode.preinst
libglib2.0-data.list				php7.2-recode.prerm
libglib2.0-data.md5sums				php7.2-recode.triggers
libglvnd0:amd64.list				php7.2-soap.list
libglvnd0:amd64.md5sums				php7.2-soap.md5sums
libglvnd0:amd64.shlibs				php7.2-soap.postinst
libglvnd0:amd64.symbols				php7.2-soap.postrm
libglvnd0:amd64.triggers			php7.2-soap.preinst
libglx-mesa0:amd64.list				php7.2-soap.prerm
libglx-mesa0:amd64.md5sums			php7.2-soap.triggers
libglx-mesa0:amd64.shlibs			php7.2-sqlite3.list
libglx-mesa0:amd64.symbols			php7.2-sqlite3.md5sums
libglx-mesa0:amd64.triggers			php7.2-sqlite3.postinst
libglx0:amd64.list				php7.2-sqlite3.postrm
libglx0:amd64.md5sums				php7.2-sqlite3.preinst
libglx0:amd64.shlibs				php7.2-sqlite3.prerm
libglx0:amd64.symbols				php7.2-sqlite3.triggers
libglx0:amd64.triggers				php7.2-tidy.list
libgmp10:amd64.list				php7.2-tidy.md5sums
libgmp10:amd64.md5sums				php7.2-tidy.postinst
libgmp10:amd64.shlibs				php7.2-tidy.postrm
libgmp10:amd64.symbols				php7.2-tidy.preinst
libgmp10:amd64.triggers				php7.2-tidy.prerm
libgnustep-base1.26.list			php7.2-tidy.triggers
libgnustep-base1.26.md5sums			php7.2-xml.list
libgnustep-base1.26.shlibs			php7.2-xml.md5sums
libgnustep-base1.26.triggers			php7.2-xml.postinst
libgnutls30:amd64.list				php7.2-xml.postrm
libgnutls30:amd64.md5sums			php7.2-xml.preinst
libgnutls30:amd64.shlibs			php7.2-xml.prerm
libgnutls30:amd64.symbols			php7.2-xml.triggers
libgnutls30:amd64.triggers			php7.2-xmlrpc.list
libgomp1:amd64.list				php7.2-xmlrpc.md5sums
libgomp1:amd64.md5sums				php7.2-xmlrpc.postinst
libgomp1:amd64.shlibs				php7.2-xmlrpc.postrm
libgomp1:amd64.symbols				php7.2-xmlrpc.preinst
libgomp1:amd64.triggers				php7.2-xmlrpc.prerm
libgpg-error0:amd64.list			php7.2-xmlrpc.triggers
libgpg-error0:amd64.md5sums			php7.2-xsl.list
libgpg-error0:amd64.shlibs			php7.2-xsl.md5sums
libgpg-error0:amd64.symbols			php7.2-zip.list
libgpg-error0:amd64.triggers			php7.2-zip.md5sums
libgpm2:amd64.list				php7.2-zip.postinst
libgpm2:amd64.md5sums				php7.2-zip.postrm
libgpm2:amd64.shlibs				php7.2-zip.preinst
libgpm2:amd64.symbols				php7.2-zip.prerm
libgpm2:amd64.triggers				php7.2-zip.triggers
libgraphite2-3:amd64.list			php7.2.list
libgraphite2-3:amd64.md5sums			php7.2.md5sums
libgraphite2-3:amd64.shlibs			php7.3-cgi.conffiles
libgraphite2-3:amd64.triggers			php7.3-cgi.list
libgs9-common.list				php7.3-cgi.md5sums
libgs9-common.md5sums				php7.3-cgi.postinst
libgs9:amd64.list				php7.3-cgi.postrm
libgs9:amd64.md5sums				php7.3-cgi.prerm
libgs9:amd64.shlibs				php7.3-cgi.triggers
libgs9:amd64.symbols				php7.3-cli.list
libgs9:amd64.triggers				php7.3-cli.md5sums
libgssapi-krb5-2:amd64.list			php7.3-cli.postinst
libgssapi-krb5-2:amd64.md5sums			php7.3-cli.postrm
libgssapi-krb5-2:amd64.postinst			php7.3-cli.prerm
libgssapi-krb5-2:amd64.postrm			php7.3-cli.triggers
libgssapi-krb5-2:amd64.shlibs			php7.3-common.list
libgssapi-krb5-2:amd64.symbols			php7.3-common.md5sums
libgssapi-krb5-2:amd64.triggers			php7.3-common.postinst
libgssapi-perl.list				php7.3-common.postrm
libgssapi-perl.md5sums				php7.3-common.preinst
libgssapi3-heimdal:amd64.list			php7.3-common.prerm
libgssapi3-heimdal:amd64.md5sums		php7.3-common.triggers
libgssapi3-heimdal:amd64.shlibs			php7.3-curl.list
libgssapi3-heimdal:amd64.symbols		php7.3-curl.md5sums
libgssapi3-heimdal:amd64.triggers		php7.3-curl.postinst
libgstreamer1.0-0:amd64.list			php7.3-curl.postrm
libgstreamer1.0-0:amd64.md5sums			php7.3-curl.preinst
libgstreamer1.0-0:amd64.postinst		php7.3-curl.prerm
libgstreamer1.0-0:amd64.shlibs			php7.3-curl.triggers
libgstreamer1.0-0:amd64.symbols			php7.3-fpm.conffiles
libgstreamer1.0-0:amd64.triggers		php7.3-fpm.list
libharfbuzz0b:amd64.list			php7.3-fpm.md5sums
libharfbuzz0b:amd64.md5sums			php7.3-fpm.postinst
libharfbuzz0b:amd64.shlibs			php7.3-fpm.postrm
libharfbuzz0b:amd64.symbols			php7.3-fpm.preinst
libharfbuzz0b:amd64.triggers			php7.3-fpm.prerm
libhavege1:amd64.list				php7.3-fpm.triggers
libhavege1:amd64.md5sums			php7.3-gd.list
libhavege1:amd64.shlibs				php7.3-gd.md5sums
libhavege1:amd64.symbols			php7.3-gd.postinst
libhavege1:amd64.triggers			php7.3-gd.postrm
libhcrypto4-heimdal:amd64.list			php7.3-gd.preinst
libhcrypto4-heimdal:amd64.md5sums		php7.3-gd.prerm
libhcrypto4-heimdal:amd64.shlibs		php7.3-gd.triggers
libhcrypto4-heimdal:amd64.symbols		php7.3-imap.list
libhcrypto4-heimdal:amd64.triggers		php7.3-imap.md5sums
libheimbase1-heimdal:amd64.list			php7.3-imap.postinst
libheimbase1-heimdal:amd64.md5sums		php7.3-imap.postrm
libheimbase1-heimdal:amd64.shlibs		php7.3-imap.preinst
libheimbase1-heimdal:amd64.symbols		php7.3-imap.prerm
libheimbase1-heimdal:amd64.triggers		php7.3-imap.triggers
libheimntlm0-heimdal:amd64.list			php7.3-intl.list
libheimntlm0-heimdal:amd64.md5sums		php7.3-intl.md5sums
libheimntlm0-heimdal:amd64.shlibs		php7.3-intl.postinst
libheimntlm0-heimdal:amd64.symbols		php7.3-intl.postrm
libheimntlm0-heimdal:amd64.triggers		php7.3-intl.preinst
libhiredis0.14:amd64.list			php7.3-intl.prerm
libhiredis0.14:amd64.md5sums			php7.3-intl.triggers
libhiredis0.14:amd64.shlibs			php7.3-json.list
libhiredis0.14:amd64.symbols			php7.3-json.md5sums
libhiredis0.14:amd64.triggers			php7.3-json.postinst
libhogweed5:amd64.list				php7.3-json.postrm
libhogweed5:amd64.md5sums			php7.3-json.preinst
libhogweed5:amd64.shlibs			php7.3-json.prerm
libhogweed5:amd64.symbols			php7.3-json.triggers
libhogweed5:amd64.triggers			php7.3-mbstring.list
libhtml-form-perl.list				php7.3-mbstring.md5sums
libhtml-form-perl.md5sums			php7.3-mbstring.postinst
libhtml-format-perl.list			php7.3-mbstring.postrm
libhtml-format-perl.md5sums			php7.3-mbstring.preinst
libhtml-parser-perl.list			php7.3-mbstring.prerm
libhtml-parser-perl.md5sums			php7.3-mbstring.triggers
libhtml-tagset-perl.list			php7.3-mysql.list
libhtml-tagset-perl.md5sums			php7.3-mysql.md5sums
libhtml-template-perl.list			php7.3-mysql.postinst
libhtml-template-perl.md5sums			php7.3-mysql.postrm
libhtml-tree-perl.list				php7.3-mysql.preinst
libhtml-tree-perl.md5sums			php7.3-mysql.prerm
libhttp-cookies-perl.list			php7.3-mysql.triggers
libhttp-cookies-perl.md5sums			php7.3-opcache.list
libhttp-daemon-perl.list			php7.3-opcache.md5sums
libhttp-daemon-perl.md5sums			php7.3-opcache.postinst
libhttp-date-perl.list				php7.3-opcache.postrm
libhttp-date-perl.md5sums			php7.3-opcache.preinst
libhttp-message-perl.list			php7.3-opcache.prerm
libhttp-message-perl.md5sums			php7.3-opcache.triggers
libhttp-negotiate-perl.list			php7.3-pspell.list
libhttp-negotiate-perl.md5sums			php7.3-pspell.md5sums
libhx509-5-heimdal:amd64.list			php7.3-pspell.postinst
libhx509-5-heimdal:amd64.md5sums		php7.3-pspell.postrm
libhx509-5-heimdal:amd64.shlibs			php7.3-pspell.preinst
libhx509-5-heimdal:amd64.symbols		php7.3-pspell.prerm
libhx509-5-heimdal:amd64.triggers		php7.3-pspell.triggers
libhyperscan5.list				php7.3-readline.list
libhyperscan5.md5sums				php7.3-readline.md5sums
libhyperscan5.postrm				php7.3-readline.postinst
libhyperscan5.preinst				php7.3-readline.postrm
libhyperscan5.shlibs				php7.3-readline.preinst
libhyperscan5.templates				php7.3-readline.prerm
libhyperscan5.triggers				php7.3-readline.triggers
libice6:amd64.list				php7.3-recode.list
libice6:amd64.md5sums				php7.3-recode.md5sums
libice6:amd64.shlibs				php7.3-recode.postinst
libice6:amd64.triggers				php7.3-recode.postrm
libicu66:amd64.list				php7.3-recode.preinst
libicu66:amd64.md5sums				php7.3-recode.prerm
libicu66:amd64.shlibs				php7.3-recode.triggers
libicu66:amd64.triggers				php7.3-soap.list
libidn11:amd64.list				php7.3-soap.md5sums
libidn11:amd64.md5sums				php7.3-soap.postinst
libidn11:amd64.shlibs				php7.3-soap.postrm
libidn11:amd64.symbols				php7.3-soap.preinst
libidn11:amd64.triggers				php7.3-soap.prerm
libidn2-0:amd64.list				php7.3-soap.triggers
libidn2-0:amd64.md5sums				php7.3-sqlite3.list
libidn2-0:amd64.shlibs				php7.3-sqlite3.md5sums
libidn2-0:amd64.symbols				php7.3-sqlite3.postinst
libidn2-0:amd64.triggers			php7.3-sqlite3.postrm
libijs-0.35:amd64.list				php7.3-sqlite3.preinst
libijs-0.35:amd64.md5sums			php7.3-sqlite3.prerm
libijs-0.35:amd64.shlibs			php7.3-sqlite3.triggers
libijs-0.35:amd64.triggers			php7.3-tidy.list
libilmbase24:amd64.list				php7.3-tidy.md5sums
libilmbase24:amd64.md5sums			php7.3-tidy.postinst
libilmbase24:amd64.shlibs			php7.3-tidy.postrm
libilmbase24:amd64.triggers			php7.3-tidy.preinst
libio-html-perl.list				php7.3-tidy.prerm
libio-html-perl.md5sums				php7.3-tidy.triggers
libio-multiplex-perl.list			php7.3-xml.list
libio-multiplex-perl.md5sums			php7.3-xml.md5sums
libio-socket-inet6-perl.list			php7.3-xml.postinst
libio-socket-inet6-perl.md5sums			php7.3-xml.postrm
libio-socket-ssl-perl.list			php7.3-xml.preinst
libio-socket-ssl-perl.md5sums			php7.3-xml.prerm
libio-string-perl.list				php7.3-xml.triggers
libio-string-perl.md5sums			php7.3-xmlrpc.list
libio-stringy-perl.list				php7.3-xmlrpc.md5sums
libio-stringy-perl.md5sums			php7.3-xmlrpc.postinst
libip4tc2:amd64.list				php7.3-xmlrpc.postrm
libip4tc2:amd64.md5sums				php7.3-xmlrpc.preinst
libip4tc2:amd64.shlibs				php7.3-xmlrpc.prerm
libip4tc2:amd64.symbols				php7.3-xmlrpc.triggers
libip4tc2:amd64.triggers			php7.3-xsl.list
libip6tc2:amd64.list				php7.3-xsl.md5sums
libip6tc2:amd64.md5sums				php7.3-zip.list
libip6tc2:amd64.shlibs				php7.3-zip.md5sums
libip6tc2:amd64.symbols				php7.3-zip.postinst
libip6tc2:amd64.triggers			php7.3-zip.postrm
libipc-system-simple-perl.list			php7.3-zip.preinst
libipc-system-simple-perl.md5sums		php7.3-zip.prerm
libisc-export1105:amd64.list			php7.3-zip.triggers
libisc-export1105:amd64.md5sums			php7.3.list
libisc-export1105:amd64.shlibs			php7.3.md5sums
libisc-export1105:amd64.triggers		php7.4-cgi.conffiles
libisl22:amd64.list				php7.4-cgi.list
libisl22:amd64.md5sums				php7.4-cgi.md5sums
libisl22:amd64.shlibs				php7.4-cgi.postinst
libisl22:amd64.symbols				php7.4-cgi.postrm
libisl22:amd64.triggers				php7.4-cgi.prerm
libitm1:amd64.list				php7.4-cgi.triggers
libitm1:amd64.md5sums				php7.4-cli.list
libitm1:amd64.shlibs				php7.4-cli.md5sums
libitm1:amd64.symbols				php7.4-cli.postinst
libitm1:amd64.triggers				php7.4-cli.postrm
libjansson4:amd64.list				php7.4-cli.prerm
libjansson4:amd64.md5sums			php7.4-cli.triggers
libjansson4:amd64.shlibs			php7.4-common.list
libjansson4:amd64.symbols			php7.4-common.md5sums
libjansson4:amd64.triggers			php7.4-common.postinst
libjbig0:amd64.list				php7.4-common.postrm
libjbig0:amd64.md5sums				php7.4-common.preinst
libjbig0:amd64.shlibs				php7.4-common.prerm
libjbig0:amd64.symbols				php7.4-common.triggers
libjbig0:amd64.triggers				php7.4-curl.list
libjbig2dec0:amd64.list				php7.4-curl.md5sums
libjbig2dec0:amd64.md5sums			php7.4-curl.postinst
libjbig2dec0:amd64.shlibs			php7.4-curl.postrm
libjbig2dec0:amd64.symbols			php7.4-curl.preinst
libjbig2dec0:amd64.triggers			php7.4-curl.prerm
libjemalloc2:amd64.list				php7.4-curl.triggers
libjemalloc2:amd64.md5sums			php7.4-fpm.conffiles
libjemalloc2:amd64.shlibs			php7.4-fpm.list
libjemalloc2:amd64.symbols			php7.4-fpm.md5sums
libjemalloc2:amd64.triggers			php7.4-fpm.postinst
libjpeg-turbo8:amd64.list			php7.4-fpm.postrm
libjpeg-turbo8:amd64.md5sums			php7.4-fpm.preinst
libjpeg-turbo8:amd64.shlibs			php7.4-fpm.prerm
libjpeg-turbo8:amd64.symbols			php7.4-fpm.triggers
libjpeg-turbo8:amd64.triggers			php7.4-gd.list
libjpeg8:amd64.list				php7.4-gd.md5sums
libjpeg8:amd64.md5sums				php7.4-gd.postinst
libjq1:amd64.list				php7.4-gd.postrm
libjq1:amd64.md5sums				php7.4-gd.preinst
libjq1:amd64.shlibs				php7.4-gd.prerm
libjq1:amd64.symbols				php7.4-gd.triggers
libjq1:amd64.triggers				php7.4-imap.list
libjs-bootstrap.list				php7.4-imap.md5sums
libjs-bootstrap.md5sums				php7.4-imap.postinst
libjs-bootstrap4.list				php7.4-imap.postrm
libjs-bootstrap4.md5sums			php7.4-imap.preinst
libjs-codemirror.list				php7.4-imap.prerm
libjs-codemirror.md5sums			php7.4-imap.triggers
libjs-inherits.list				php7.4-intl.list
libjs-inherits.md5sums				php7.4-intl.md5sums
libjs-is-typedarray.list			php7.4-intl.postinst
libjs-is-typedarray.md5sums			php7.4-intl.postrm
libjs-jquery-minicolors.list			php7.4-intl.preinst
libjs-jquery-minicolors.md5sums			php7.4-intl.prerm
libjs-jquery-ui.list				php7.4-intl.triggers
libjs-jquery-ui.md5sums				php7.4-json.list
libjs-jquery-ui.postinst			php7.4-json.md5sums
libjs-jquery-ui.postrm				php7.4-json.postinst
libjs-jquery-ui.preinst				php7.4-json.postrm
libjs-jquery-ui.prerm				php7.4-json.preinst
libjs-jquery.list				php7.4-json.prerm
libjs-jquery.md5sums				php7.4-json.triggers
libjs-jstimezonedetect.list			php7.4-mbstring.list
libjs-jstimezonedetect.md5sums			php7.4-mbstring.md5sums
libjs-popper.js.list				php7.4-mbstring.postinst
libjs-popper.js.md5sums				php7.4-mbstring.postrm
libjs-popper.js.postinst			php7.4-mbstring.preinst
libjs-popper.js.postrm				php7.4-mbstring.prerm
libjs-popper.js.preinst				php7.4-mbstring.triggers
libjs-popper.js.prerm				php7.4-mysql.list
libjs-psl.list					php7.4-mysql.md5sums
libjs-psl.md5sums				php7.4-mysql.postinst
libjs-typedarray-to-buffer.list			php7.4-mysql.postrm
libjs-typedarray-to-buffer.md5sums		php7.4-mysql.preinst
libjson-c4:amd64.list				php7.4-mysql.prerm
libjson-c4:amd64.md5sums			php7.4-mysql.triggers
libjson-c4:amd64.shlibs				php7.4-opcache.list
libjson-c4:amd64.symbols			php7.4-opcache.md5sums
libjson-c4:amd64.triggers			php7.4-opcache.postinst
libk5crypto3:amd64.list				php7.4-opcache.postrm
libk5crypto3:amd64.md5sums			php7.4-opcache.preinst
libk5crypto3:amd64.shlibs			php7.4-opcache.prerm
libk5crypto3:amd64.symbols			php7.4-opcache.triggers
libk5crypto3:amd64.triggers			php7.4-pspell.list
libkeyutils1:amd64.list				php7.4-pspell.md5sums
libkeyutils1:amd64.md5sums			php7.4-pspell.postinst
libkeyutils1:amd64.shlibs			php7.4-pspell.postrm
libkeyutils1:amd64.symbols			php7.4-pspell.preinst
libkeyutils1:amd64.triggers			php7.4-pspell.prerm
libklibc:amd64.list				php7.4-pspell.triggers
libklibc:amd64.md5sums				php7.4-readline.list
libkmod2:amd64.list				php7.4-readline.md5sums
libkmod2:amd64.md5sums				php7.4-readline.postinst
libkmod2:amd64.shlibs				php7.4-readline.postrm
libkmod2:amd64.symbols				php7.4-readline.preinst
libkmod2:amd64.triggers				php7.4-readline.prerm
libkrb5-26-heimdal:amd64.list			php7.4-readline.triggers
libkrb5-26-heimdal:amd64.md5sums		php7.4-soap.list
libkrb5-26-heimdal:amd64.shlibs			php7.4-soap.md5sums
libkrb5-26-heimdal:amd64.symbols		php7.4-soap.postinst
libkrb5-26-heimdal:amd64.triggers		php7.4-soap.postrm
libkrb5-3:amd64.list				php7.4-soap.preinst
libkrb5-3:amd64.md5sums				php7.4-soap.prerm
libkrb5-3:amd64.shlibs				php7.4-soap.triggers
libkrb5-3:amd64.symbols				php7.4-sqlite3.list
libkrb5-3:amd64.triggers			php7.4-sqlite3.md5sums
libkrb5support0:amd64.list			php7.4-sqlite3.postinst
libkrb5support0:amd64.md5sums			php7.4-sqlite3.postrm
libkrb5support0:amd64.shlibs			php7.4-sqlite3.preinst
libkrb5support0:amd64.symbols			php7.4-sqlite3.prerm
libkrb5support0:amd64.triggers			php7.4-sqlite3.triggers
libksba8:amd64.list				php7.4-tidy.list
libksba8:amd64.md5sums				php7.4-tidy.md5sums
libksba8:amd64.shlibs				php7.4-tidy.postinst
libksba8:amd64.symbols				php7.4-tidy.postrm
libksba8:amd64.triggers				php7.4-tidy.preinst
liblcms2-2:amd64.list				php7.4-tidy.prerm
liblcms2-2:amd64.md5sums			php7.4-tidy.triggers
liblcms2-2:amd64.shlibs				php7.4-xml.list
liblcms2-2:amd64.symbols			php7.4-xml.md5sums
liblcms2-2:amd64.triggers			php7.4-xml.postinst
libldap-2.4-2:amd64.list			php7.4-xml.postrm
libldap-2.4-2:amd64.md5sums			php7.4-xml.preinst
libldap-2.4-2:amd64.shlibs			php7.4-xml.prerm
libldap-2.4-2:amd64.symbols			php7.4-xml.triggers
libldap-2.4-2:amd64.triggers			php7.4-xmlrpc.list
libldap-common.conffiles			php7.4-xmlrpc.md5sums
libldap-common.list				php7.4-xmlrpc.postinst
libldap-common.md5sums				php7.4-xmlrpc.postrm
libllvm12:amd64.list				php7.4-xmlrpc.preinst
libllvm12:amd64.md5sums				php7.4-xmlrpc.prerm
libllvm12:amd64.shlibs				php7.4-xmlrpc.triggers
libllvm12:amd64.triggers			php7.4-xsl.list
liblmdb0:amd64.list				php7.4-xsl.md5sums
liblmdb0:amd64.md5sums				php7.4-zip.list
liblmdb0:amd64.shlibs				php7.4-zip.md5sums
liblmdb0:amd64.symbols				php7.4-zip.postinst
liblmdb0:amd64.triggers				php7.4-zip.postrm
liblocale-gettext-perl.list			php7.4-zip.preinst
liblocale-gettext-perl.md5sums			php7.4-zip.prerm
liblockfile-bin.list				php7.4-zip.triggers
liblockfile-bin.md5sums				php7.4.list
liblockfile1:amd64.list				php7.4.md5sums
liblockfile1:amd64.md5sums			php8.0-cgi.conffiles
liblockfile1:amd64.shlibs			php8.0-cgi.list
liblockfile1:amd64.triggers			php8.0-cgi.md5sums
liblqr-1-0:amd64.list				php8.0-cgi.postinst
liblqr-1-0:amd64.md5sums			php8.0-cgi.postrm
liblqr-1-0:amd64.shlibs				php8.0-cgi.prerm
liblqr-1-0:amd64.symbols			php8.0-cgi.triggers
liblqr-1-0:amd64.triggers			php8.0-cli.list
liblsan0:amd64.list				php8.0-cli.md5sums
liblsan0:amd64.md5sums				php8.0-cli.postinst
liblsan0:amd64.shlibs				php8.0-cli.postrm
liblsan0:amd64.symbols				php8.0-cli.prerm
liblsan0:amd64.triggers				php8.0-cli.triggers
libltdl-dev:amd64.list				php8.0-common.list
libltdl-dev:amd64.md5sums			php8.0-common.md5sums
libltdl7:amd64.list				php8.0-common.postinst
libltdl7:amd64.md5sums				php8.0-common.postrm
libltdl7:amd64.shlibs				php8.0-common.preinst
libltdl7:amd64.triggers				php8.0-common.prerm
liblua5.1-0:amd64.list				php8.0-common.triggers
liblua5.1-0:amd64.md5sums			php8.0-curl.list
liblua5.1-0:amd64.shlibs			php8.0-curl.md5sums
liblua5.1-0:amd64.triggers			php8.0-curl.postinst
liblua5.2-0:amd64.list				php8.0-curl.postrm
liblua5.2-0:amd64.md5sums			php8.0-curl.preinst
liblua5.2-0:amd64.shlibs			php8.0-curl.prerm
liblua5.2-0:amd64.triggers			php8.0-curl.triggers
liblua5.3-0:amd64.list				php8.0-fpm.conffiles
liblua5.3-0:amd64.md5sums			php8.0-fpm.list
liblua5.3-0:amd64.shlibs			php8.0-fpm.md5sums
liblua5.3-0:amd64.triggers			php8.0-fpm.postinst
liblwp-mediatypes-perl.list			php8.0-fpm.postrm
liblwp-mediatypes-perl.md5sums			php8.0-fpm.preinst
liblwp-protocol-https-perl.list			php8.0-fpm.prerm
liblwp-protocol-https-perl.md5sums		php8.0-fpm.triggers
liblz4-1:amd64.list				php8.0-gd.list
liblz4-1:amd64.md5sums				php8.0-gd.md5sums
liblz4-1:amd64.shlibs				php8.0-gd.postinst
liblz4-1:amd64.symbols				php8.0-gd.postrm
liblz4-1:amd64.triggers				php8.0-gd.preinst
liblzma5:amd64.list				php8.0-gd.prerm
liblzma5:amd64.md5sums				php8.0-gd.triggers
liblzma5:amd64.shlibs				php8.0-imap.list
liblzma5:amd64.symbols				php8.0-imap.md5sums
liblzma5:amd64.triggers				php8.0-imap.postinst
liblzo2-2:amd64.list				php8.0-imap.postrm
liblzo2-2:amd64.md5sums				php8.0-imap.preinst
liblzo2-2:amd64.shlibs				php8.0-imap.prerm
liblzo2-2:amd64.symbols				php8.0-imap.triggers
liblzo2-2:amd64.triggers			php8.0-intl.list
libmagic-mgc.list				php8.0-intl.md5sums
libmagic-mgc.md5sums				php8.0-intl.postinst
libmagic1:amd64.conffiles			php8.0-intl.postrm
libmagic1:amd64.list				php8.0-intl.preinst
libmagic1:amd64.md5sums				php8.0-intl.prerm
libmagic1:amd64.shlibs				php8.0-intl.triggers
libmagic1:amd64.symbols				php8.0-mbstring.list
libmagic1:amd64.triggers			php8.0-mbstring.md5sums
libmagickcore-6.q16-6-extra:amd64.list		php8.0-mbstring.postinst
libmagickcore-6.q16-6-extra:amd64.md5sums	php8.0-mbstring.postrm
libmagickcore-6.q16-6:amd64.list		php8.0-mbstring.preinst
libmagickcore-6.q16-6:amd64.md5sums		php8.0-mbstring.prerm
libmagickcore-6.q16-6:amd64.shlibs		php8.0-mbstring.triggers
libmagickcore-6.q16-6:amd64.symbols		php8.0-mysql.list
libmagickcore-6.q16-6:amd64.triggers		php8.0-mysql.md5sums
libmagickwand-6.q16-6:amd64.list		php8.0-mysql.postinst
libmagickwand-6.q16-6:amd64.md5sums		php8.0-mysql.postrm
libmagickwand-6.q16-6:amd64.shlibs		php8.0-mysql.preinst
libmagickwand-6.q16-6:amd64.symbols		php8.0-mysql.prerm
libmagickwand-6.q16-6:amd64.triggers		php8.0-mysql.triggers
libmail-sendmail-perl.list			php8.0-opcache.list
libmail-sendmail-perl.md5sums			php8.0-opcache.md5sums
libmailtools-perl.list				php8.0-opcache.postinst
libmailtools-perl.md5sums			php8.0-opcache.postrm
libmaxminddb0:amd64.list			php8.0-opcache.preinst
libmaxminddb0:amd64.md5sums			php8.0-opcache.prerm
libmaxminddb0:amd64.shlibs			php8.0-opcache.triggers
libmaxminddb0:amd64.symbols			php8.0-pspell.list
libmaxminddb0:amd64.triggers			php8.0-pspell.md5sums
libmcrypt4.list					php8.0-pspell.postinst
libmcrypt4.md5sums				php8.0-pspell.postrm
libmcrypt4.shlibs				php8.0-pspell.preinst
libmcrypt4.triggers				php8.0-pspell.prerm
libmecab2:amd64.conffiles			php8.0-pspell.triggers
libmecab2:amd64.list				php8.0-readline.list
libmecab2:amd64.md5sums				php8.0-readline.md5sums
libmecab2:amd64.shlibs				php8.0-readline.postinst
libmecab2:amd64.triggers			php8.0-readline.postrm
libmhash2:amd64.list				php8.0-readline.preinst
libmhash2:amd64.md5sums				php8.0-readline.prerm
libmhash2:amd64.shlibs				php8.0-readline.triggers
libmhash2:amd64.triggers			php8.0-soap.list
libmnl0:amd64.list				php8.0-soap.md5sums
libmnl0:amd64.md5sums				php8.0-soap.postinst
libmnl0:amd64.shlibs				php8.0-soap.postrm
libmnl0:amd64.symbols				php8.0-soap.preinst
libmnl0:amd64.triggers				php8.0-soap.prerm
libmount1:amd64.list				php8.0-soap.triggers
libmount1:amd64.md5sums				php8.0-sqlite3.list
libmount1:amd64.shlibs				php8.0-sqlite3.md5sums
libmount1:amd64.symbols				php8.0-sqlite3.postinst
libmount1:amd64.triggers			php8.0-sqlite3.postrm
libmpc3:amd64.list				php8.0-sqlite3.preinst
libmpc3:amd64.md5sums				php8.0-sqlite3.prerm
libmpc3:amd64.shlibs				php8.0-sqlite3.triggers
libmpc3:amd64.triggers				php8.0-tidy.list
libmpdec2:amd64.list				php8.0-tidy.md5sums
libmpdec2:amd64.md5sums				php8.0-tidy.postinst
libmpdec2:amd64.shlibs				php8.0-tidy.postrm
libmpdec2:amd64.symbols				php8.0-tidy.preinst
libmpdec2:amd64.triggers			php8.0-tidy.prerm
libmpfr6:amd64.list				php8.0-tidy.triggers
libmpfr6:amd64.md5sums				php8.0-xml.list
libmpfr6:amd64.shlibs				php8.0-xml.md5sums
libmpfr6:amd64.symbols				php8.0-xml.postinst
libmpfr6:amd64.triggers				php8.0-xml.postrm
libmspack0:amd64.list				php8.0-xml.preinst
libmspack0:amd64.md5sums			php8.0-xml.prerm
libmspack0:amd64.shlibs				php8.0-xml.triggers
libmspack0:amd64.symbols			php8.0-xsl.list
libmspack0:amd64.triggers			php8.0-xsl.md5sums
libncurses6:amd64.list				php8.0-zip.list
libncurses6:amd64.md5sums			php8.0-zip.md5sums
libncurses6:amd64.shlibs			php8.0-zip.postinst
libncurses6:amd64.symbols			php8.0-zip.postrm
libncurses6:amd64.triggers			php8.0-zip.preinst
libncursesw6:amd64.list				php8.0-zip.prerm
libncursesw6:amd64.md5sums			php8.0-zip.triggers
libncursesw6:amd64.shlibs			php8.0.list
libncursesw6:amd64.symbols			php8.0.md5sums
libncursesw6:amd64.triggers			php8.1-cgi.conffiles
libnet-cidr-perl.list				php8.1-cgi.list
libnet-cidr-perl.md5sums			php8.1-cgi.md5sums
libnet-dbus-perl.list				php8.1-cgi.postinst
libnet-dbus-perl.md5sums			php8.1-cgi.postrm
libnet-dns-perl.list				php8.1-cgi.prerm
libnet-dns-perl.md5sums				php8.1-cgi.triggers
libnet-dns-sec-perl.list			php8.1-cli.list
libnet-dns-sec-perl.md5sums			php8.1-cli.md5sums
libnet-http-perl.list				php8.1-cli.postinst
libnet-http-perl.md5sums			php8.1-cli.postrm
libnet-ident-perl.list				php8.1-cli.prerm
libnet-ident-perl.md5sums			php8.1-cli.triggers
libnet-ip-perl.list				php8.1-common.list
libnet-ip-perl.md5sums				php8.1-common.md5sums
libnet-ldap-perl.list				php8.1-common.postinst
libnet-ldap-perl.md5sums			php8.1-common.postrm
libnet-libidn-perl.list				php8.1-common.preinst
libnet-libidn-perl.md5sums			php8.1-common.prerm
libnet-rblclient-perl.list			php8.1-common.triggers
libnet-rblclient-perl.md5sums			php8.1-curl.list
libnet-server-perl.list				php8.1-curl.md5sums
libnet-server-perl.md5sums			php8.1-curl.postinst
libnet-smtp-ssl-perl.list			php8.1-curl.postrm
libnet-smtp-ssl-perl.md5sums			php8.1-curl.preinst
libnet-ssleay-perl.list				php8.1-curl.prerm
libnet-ssleay-perl.md5sums			php8.1-curl.triggers
libnet-xwhois-perl.list				php8.1-fpm.conffiles
libnet-xwhois-perl.md5sums			php8.1-fpm.list
libnetaddr-ip-perl.list				php8.1-fpm.md5sums
libnetaddr-ip-perl.md5sums			php8.1-fpm.postinst
libnetfilter-conntrack3:amd64.list		php8.1-fpm.postrm
libnetfilter-conntrack3:amd64.md5sums		php8.1-fpm.preinst
libnetfilter-conntrack3:amd64.shlibs		php8.1-fpm.prerm
libnetfilter-conntrack3:amd64.triggers		php8.1-fpm.triggers
libnetpbm10.list				php8.1-gd.list
libnetpbm10.md5sums				php8.1-gd.md5sums
libnetpbm10.shlibs				php8.1-gd.postinst
libnetpbm10.triggers				php8.1-gd.postrm
libnetplan0:amd64.list				php8.1-gd.preinst
libnetplan0:amd64.md5sums			php8.1-gd.prerm
libnetplan0:amd64.shlibs			php8.1-gd.triggers
libnetplan0:amd64.symbols			php8.1-imap.list
libnetplan0:amd64.triggers			php8.1-imap.md5sums
libnettle7:amd64.list				php8.1-imap.postinst
libnettle7:amd64.md5sums			php8.1-imap.postrm
libnettle7:amd64.shlibs				php8.1-imap.preinst
libnettle7:amd64.symbols			php8.1-imap.prerm
libnettle7:amd64.triggers			php8.1-imap.triggers
libnewt0.52:amd64.conffiles			php8.1-intl.list
libnewt0.52:amd64.list				php8.1-intl.md5sums
libnewt0.52:amd64.md5sums			php8.1-intl.postinst
libnewt0.52:amd64.postinst			php8.1-intl.postrm
libnewt0.52:amd64.prerm				php8.1-intl.preinst
libnewt0.52:amd64.shlibs			php8.1-intl.prerm
libnewt0.52:amd64.triggers			php8.1-intl.triggers
libnfnetlink0:amd64.list			php8.1-mbstring.list
libnfnetlink0:amd64.md5sums			php8.1-mbstring.md5sums
libnfnetlink0:amd64.shlibs			php8.1-mbstring.postinst
libnfnetlink0:amd64.triggers			php8.1-mbstring.postrm
libnftnl11:amd64.list				php8.1-mbstring.preinst
libnftnl11:amd64.md5sums			php8.1-mbstring.prerm
libnftnl11:amd64.shlibs				php8.1-mbstring.triggers
libnftnl11:amd64.symbols			php8.1-mysql.list
libnftnl11:amd64.triggers			php8.1-mysql.md5sums
libnghttp2-14:amd64.list			php8.1-mysql.postinst
libnghttp2-14:amd64.md5sums			php8.1-mysql.postrm
libnghttp2-14:amd64.shlibs			php8.1-mysql.preinst
libnghttp2-14:amd64.symbols			php8.1-mysql.prerm
libnghttp2-14:amd64.triggers			php8.1-mysql.triggers
libnginx-mod-http-auth-pam.list			php8.1-opcache.list
libnginx-mod-http-auth-pam.md5sums		php8.1-opcache.md5sums
libnginx-mod-http-auth-pam.postinst		php8.1-opcache.postinst
libnginx-mod-http-auth-pam.postrm		php8.1-opcache.postrm
libnginx-mod-http-auth-pam.prerm		php8.1-opcache.preinst
libnginx-mod-http-dav-ext.list			php8.1-opcache.prerm
libnginx-mod-http-dav-ext.md5sums		php8.1-opcache.triggers
libnginx-mod-http-dav-ext.postinst		php8.1-pspell.list
libnginx-mod-http-dav-ext.postrm		php8.1-pspell.md5sums
libnginx-mod-http-dav-ext.prerm			php8.1-pspell.postinst
libnginx-mod-http-echo.list			php8.1-pspell.postrm
libnginx-mod-http-echo.md5sums			php8.1-pspell.preinst
libnginx-mod-http-echo.postinst			php8.1-pspell.prerm
libnginx-mod-http-echo.postrm			php8.1-pspell.triggers
libnginx-mod-http-echo.prerm			php8.1-readline.list
libnginx-mod-http-geoip.list			php8.1-readline.md5sums
libnginx-mod-http-geoip.md5sums			php8.1-readline.postinst
libnginx-mod-http-geoip.postinst		php8.1-readline.postrm
libnginx-mod-http-geoip.postrm			php8.1-readline.preinst
libnginx-mod-http-geoip.prerm			php8.1-readline.prerm
libnginx-mod-http-geoip2.list			php8.1-readline.triggers
libnginx-mod-http-geoip2.md5sums		php8.1-soap.list
libnginx-mod-http-geoip2.postinst		php8.1-soap.md5sums
libnginx-mod-http-geoip2.postrm			php8.1-soap.postinst
libnginx-mod-http-geoip2.prerm			php8.1-soap.postrm
libnginx-mod-http-image-filter.list		php8.1-soap.preinst
libnginx-mod-http-image-filter.md5sums		php8.1-soap.prerm
libnginx-mod-http-image-filter.postinst		php8.1-soap.triggers
libnginx-mod-http-image-filter.postrm		php8.1-sqlite3.list
libnginx-mod-http-image-filter.prerm		php8.1-sqlite3.md5sums
libnginx-mod-http-subs-filter.list		php8.1-sqlite3.postinst
libnginx-mod-http-subs-filter.md5sums		php8.1-sqlite3.postrm
libnginx-mod-http-subs-filter.postinst		php8.1-sqlite3.preinst
libnginx-mod-http-subs-filter.postrm		php8.1-sqlite3.prerm
libnginx-mod-http-subs-filter.prerm		php8.1-sqlite3.triggers
libnginx-mod-http-upstream-fair.list		php8.1-tidy.list
libnginx-mod-http-upstream-fair.md5sums		php8.1-tidy.md5sums
libnginx-mod-http-upstream-fair.postinst	php8.1-tidy.postinst
libnginx-mod-http-upstream-fair.postrm		php8.1-tidy.postrm
libnginx-mod-http-upstream-fair.prerm		php8.1-tidy.preinst
libnginx-mod-http-xslt-filter.list		php8.1-tidy.prerm
libnginx-mod-http-xslt-filter.md5sums		php8.1-tidy.triggers
libnginx-mod-http-xslt-filter.postinst		php8.1-xml.list
libnginx-mod-http-xslt-filter.postrm		php8.1-xml.md5sums
libnginx-mod-http-xslt-filter.prerm		php8.1-xml.postinst
libnginx-mod-mail.list				php8.1-xml.postrm
libnginx-mod-mail.md5sums			php8.1-xml.preinst
libnginx-mod-mail.postinst			php8.1-xml.prerm
libnginx-mod-mail.postrm			php8.1-xml.triggers
libnginx-mod-mail.prerm				php8.1-xsl.list
libnginx-mod-stream.list			php8.1-xsl.md5sums
libnginx-mod-stream.md5sums			php8.1-zip.list
libnginx-mod-stream.postinst			php8.1-zip.md5sums
libnginx-mod-stream.postrm			php8.1-zip.postinst
libnginx-mod-stream.prerm			php8.1-zip.postrm
libnl-3-200:amd64.conffiles			php8.1-zip.preinst
libnl-3-200:amd64.list				php8.1-zip.prerm
libnl-3-200:amd64.md5sums			php8.1-zip.triggers
libnl-3-200:amd64.shlibs			php8.1.list
libnl-3-200:amd64.symbols			php8.1.md5sums
libnl-3-200:amd64.triggers			php8.2-apcu.conffiles
libnl-genl-3-200:amd64.list			php8.2-apcu.list
libnl-genl-3-200:amd64.md5sums			php8.2-apcu.md5sums
libnl-genl-3-200:amd64.shlibs			php8.2-apcu.postinst
libnl-genl-3-200:amd64.symbols			php8.2-apcu.postrm
libnl-genl-3-200:amd64.triggers			php8.2-apcu.preinst
libnode-dev:amd64.list				php8.2-apcu.prerm
libnode-dev:amd64.md5sums			php8.2-cli.list
libnode64:amd64.list				php8.2-cli.md5sums
libnode64:amd64.md5sums				php8.2-cli.postinst
libnode64:amd64.shlibs				php8.2-cli.postrm
libnode64:amd64.triggers			php8.2-cli.prerm
libnpth0:amd64.list				php8.2-cli.triggers
libnpth0:amd64.md5sums				php8.2-common.list
libnpth0:amd64.shlibs				php8.2-common.md5sums
libnpth0:amd64.symbols				php8.2-common.postinst
libnpth0:amd64.triggers				php8.2-common.postrm
libnss-systemd:amd64.list			php8.2-common.preinst
libnss-systemd:amd64.md5sums			php8.2-common.prerm
libnss-systemd:amd64.postinst			php8.2-common.triggers
libnss-systemd:amd64.postrm			php8.2-imagick.conffiles
libnss-systemd:amd64.shlibs			php8.2-imagick.list
libnss-systemd:amd64.triggers			php8.2-imagick.md5sums
libntfs-3g883.list				php8.2-imagick.postinst
libntfs-3g883.md5sums				php8.2-imagick.postrm
libntfs-3g883.shlibs				php8.2-imagick.preinst
libntfs-3g883.triggers				php8.2-imagick.prerm
libnuma1:amd64.list				php8.2-mbstring.list
libnuma1:amd64.md5sums				php8.2-mbstring.md5sums
libnuma1:amd64.shlibs				php8.2-mbstring.postinst
libnuma1:amd64.symbols				php8.2-mbstring.postrm
libnuma1:amd64.triggers				php8.2-mbstring.preinst
libobjc4:amd64.list				php8.2-mbstring.prerm
libobjc4:amd64.md5sums				php8.2-mbstring.triggers
libobjc4:amd64.shlibs				php8.2-memcache.conffiles
libobjc4:amd64.symbols				php8.2-memcache.list
libobjc4:amd64.triggers				php8.2-memcache.md5sums
libogg0:amd64.list				php8.2-memcache.postinst
libogg0:amd64.md5sums				php8.2-memcache.postrm
libogg0:amd64.shlibs				php8.2-memcache.preinst
libogg0:amd64.symbols				php8.2-memcache.prerm
libogg0:amd64.triggers				php8.2-opcache.list
libonig5:amd64.list				php8.2-opcache.md5sums
libonig5:amd64.md5sums				php8.2-opcache.postinst
libonig5:amd64.shlibs				php8.2-opcache.postrm
libonig5:amd64.symbols				php8.2-opcache.preinst
libonig5:amd64.triggers				php8.2-opcache.prerm
libopenexr24:amd64.list				php8.2-opcache.triggers
libopenexr24:amd64.md5sums			php8.2-readline.list
libopenexr24:amd64.shlibs			php8.2-readline.md5sums
libopenexr24:amd64.triggers			php8.2-readline.postinst
libopenjp2-7:amd64.list				php8.2-readline.postrm
libopenjp2-7:amd64.md5sums			php8.2-readline.preinst
libopenjp2-7:amd64.shlibs			php8.2-readline.prerm
libopenjp2-7:amd64.symbols			php8.2-readline.triggers
libopenjp2-7:amd64.triggers			php8.2-xml.list
libopts25:amd64.list				php8.2-xml.md5sums
libopts25:amd64.md5sums				php8.2-xml.postinst
libopts25:amd64.shlibs				php8.2-xml.postrm
libopts25:amd64.triggers			php8.2-xml.preinst
libp11-kit0:amd64.list				php8.2-xml.prerm
libp11-kit0:amd64.md5sums			php8.2-xml.triggers
libp11-kit0:amd64.shlibs			pigz.list
libp11-kit0:amd64.symbols			pigz.md5sums
libp11-kit0:amd64.triggers			pigz.prerm
libpackagekit-glib2-18:amd64.list		pinentry-curses.list
libpackagekit-glib2-18:amd64.md5sums		pinentry-curses.md5sums
libpackagekit-glib2-18:amd64.shlibs		pinentry-curses.postinst
libpackagekit-glib2-18:amd64.symbols		pinentry-curses.prerm
libpackagekit-glib2-18:amd64.triggers		plymouth-theme-ubuntu-text.list
libpam-cap:amd64.conffiles			plymouth-theme-ubuntu-text.md5sums
libpam-cap:amd64.list				plymouth-theme-ubuntu-text.postinst
libpam-cap:amd64.md5sums			plymouth-theme-ubuntu-text.postrm
libpam-cap:amd64.postinst			plymouth-theme-ubuntu-text.prerm
libpam-cap:amd64.prerm				plymouth-theme-ubuntu-text.triggers
libpam-modules-bin.list				plymouth.conffiles
libpam-modules-bin.md5sums			plymouth.list
libpam-modules:amd64.conffiles			plymouth.md5sums
libpam-modules:amd64.list			plymouth.postinst
libpam-modules:amd64.md5sums			plymouth.postrm
libpam-modules:amd64.postinst			po-debconf.list
libpam-modules:amd64.postrm			po-debconf.md5sums
libpam-modules:amd64.preinst			policykit-1.conffiles
libpam-modules:amd64.templates			policykit-1.list
libpam-runtime.conffiles			policykit-1.md5sums
libpam-runtime.list				policykit-1.postinst
libpam-runtime.md5sums				policykit-1.postrm
libpam-runtime.postinst				policykit-1.preinst
libpam-runtime.postrm				policykit-1.prerm
libpam-runtime.prerm				poppler-data.conffiles
libpam-runtime.templates			poppler-data.list
libpam-systemd:amd64.list			poppler-data.md5sums
libpam-systemd:amd64.md5sums			poppler-data.postinst
libpam-systemd:amd64.postinst			poppler-data.prerm
libpam-systemd:amd64.prerm			popularity-contest.conffiles
libpam0g:amd64.list				popularity-contest.config
libpam0g:amd64.md5sums				popularity-contest.list
libpam0g:amd64.postinst				popularity-contest.md5sums
libpam0g:amd64.postrm				popularity-contest.postinst
libpam0g:amd64.shlibs				popularity-contest.postrm
libpam0g:amd64.symbols				popularity-contest.preinst
libpam0g:amd64.templates			popularity-contest.templates
libpam0g:amd64.triggers				postfix-doc.conffiles
libpango-1.0-0:amd64.list			postfix-doc.list
libpango-1.0-0:amd64.md5sums			postfix-doc.md5sums
libpango-1.0-0:amd64.shlibs			postfix-doc.postinst
libpango-1.0-0:amd64.symbols			postfix-doc.prerm
libpango-1.0-0:amd64.triggers			postfix.conffiles
libpangocairo-1.0-0:amd64.list			postfix.config
libpangocairo-1.0-0:amd64.md5sums		postfix.list
libpangocairo-1.0-0:amd64.shlibs		postfix.md5sums
libpangocairo-1.0-0:amd64.symbols		postfix.postinst
libpangocairo-1.0-0:amd64.triggers		postfix.postrm
libpangoft2-1.0-0:amd64.list			postfix.preinst
libpangoft2-1.0-0:amd64.md5sums			postfix.prerm
libpangoft2-1.0-0:amd64.shlibs			postfix.templates
libpangoft2-1.0-0:amd64.symbols			postgrey.conffiles
libpangoft2-1.0-0:amd64.triggers		postgrey.config
libpaper-utils.list				postgrey.list
libpaper-utils.md5sums				postgrey.md5sums
libpaper1:amd64.config				postgrey.postinst
libpaper1:amd64.list				postgrey.postrm
libpaper1:amd64.md5sums				postgrey.preinst
libpaper1:amd64.postinst			postgrey.prerm
libpaper1:amd64.postrm				postgrey.templates
libpaper1:amd64.shlibs				powermgmt-base.list
libpaper1:amd64.templates			powermgmt-base.md5sums
libpaper1:amd64.triggers			procps.conffiles
libparse-syslog-perl.list			procps.list
libparse-syslog-perl.md5sums			procps.md5sums
libparted2:amd64.list				procps.postinst
libparted2:amd64.md5sums			procps.postrm
libparted2:amd64.shlibs				procps.preinst
libparted2:amd64.symbols			procps.prerm
libparted2:amd64.triggers			psmisc.list
libpcap0.8:amd64.list				psmisc.md5sums
libpcap0.8:amd64.md5sums			psmisc.postinst
libpcap0.8:amd64.shlibs				psmisc.postrm
libpcap0.8:amd64.symbols			publicsuffix.list
libpcap0.8:amd64.triggers			publicsuffix.md5sums
libpci3:amd64.list				pure-ftpd-common.conffiles
libpci3:amd64.md5sums				pure-ftpd-common.config
libpci3:amd64.shlibs				pure-ftpd-common.list
libpci3:amd64.symbols				pure-ftpd-common.md5sums
libpci3:amd64.triggers				pure-ftpd-common.postinst
libpciaccess0:amd64.list			pure-ftpd-common.postrm
libpciaccess0:amd64.md5sums			pure-ftpd-common.templates
libpciaccess0:amd64.shlibs			python-apt-common.list
libpciaccess0:amd64.symbols			python-apt-common.md5sums
libpciaccess0:amd64.triggers			python-dnspython.list
libpcre2-8-0:amd64.list				python-dnspython.md5sums
libpcre2-8-0:amd64.md5sums			python-dnspython.postinst
libpcre2-8-0:amd64.shlibs			python-dnspython.prerm
libpcre2-8-0:amd64.symbols			python-pip-whl.list
libpcre2-8-0:amd64.triggers			python-pip-whl.md5sums
libpcre3:amd64.list				python-pkg-resources.list
libpcre3:amd64.md5sums				python-pkg-resources.md5sums
libpcre3:amd64.shlibs				python-pkg-resources.postinst
libpcre3:amd64.symbols				python-pkg-resources.prerm
libpcre3:amd64.triggers				python2-minimal.list
libperl4-corelibs-perl.list			python2-minimal.md5sums
libperl4-corelibs-perl.md5sums			python2-minimal.postinst
libperl5.30:amd64.list				python2-minimal.prerm
libperl5.30:amd64.md5sums			python2.7-minimal.list
libperl5.30:amd64.shlibs			python2.7-minimal.md5sums
libperl5.30:amd64.symbols			python2.7-minimal.postinst
libperl5.30:amd64.triggers			python2.7-minimal.postrm
libpipeline1:amd64.list				python2.7-minimal.preinst
libpipeline1:amd64.md5sums			python2.7-minimal.prerm
libpipeline1:amd64.shlibs			python2.7.list
libpipeline1:amd64.symbols			python2.7.md5sums
libpipeline1:amd64.triggers			python2.7.postinst
libpixman-1-0:amd64.list			python2.7.prerm
libpixman-1-0:amd64.md5sums			python2.list
libpixman-1-0:amd64.shlibs			python2.md5sums
libpixman-1-0:amd64.symbols			python3-acme.list
libpixman-1-0:amd64.triggers			python3-acme.md5sums
libplymouth5:amd64.list				python3-acme.postinst
libplymouth5:amd64.md5sums			python3-acme.prerm
libplymouth5:amd64.shlibs			python3-apt.list
libplymouth5:amd64.symbols			python3-apt.md5sums
libplymouth5:amd64.triggers			python3-apt.postinst
libpng16-16:amd64.list				python3-apt.prerm
libpng16-16:amd64.md5sums			python3-attr.list
libpng16-16:amd64.shlibs			python3-attr.md5sums
libpng16-16:amd64.triggers			python3-attr.postinst
libpolkit-agent-1-0:amd64.list			python3-attr.prerm
libpolkit-agent-1-0:amd64.md5sums		python3-cached-property.list
libpolkit-agent-1-0:amd64.shlibs		python3-cached-property.md5sums
libpolkit-agent-1-0:amd64.symbols		python3-cached-property.postinst
libpolkit-agent-1-0:amd64.triggers		python3-cached-property.prerm
libpolkit-gobject-1-0:amd64.list		python3-certbot-nginx.list
libpolkit-gobject-1-0:amd64.md5sums		python3-certbot-nginx.md5sums
libpolkit-gobject-1-0:amd64.shlibs		python3-certbot-nginx.postinst
libpolkit-gobject-1-0:amd64.symbols		python3-certbot-nginx.prerm
libpolkit-gobject-1-0:amd64.triggers		python3-certbot.list
libpopt0:amd64.list				python3-certbot.md5sums
libpopt0:amd64.md5sums				python3-certbot.postinst
libpopt0:amd64.shlibs				python3-certbot.prerm
libpopt0:amd64.symbols				python3-certifi.list
libpopt0:amd64.triggers				python3-certifi.md5sums
libprocps8:amd64.list				python3-certifi.postinst
libprocps8:amd64.md5sums			python3-certifi.prerm
libprocps8:amd64.shlibs				python3-cffi-backend.list
libprocps8:amd64.triggers			python3-cffi-backend.md5sums
libproxy1v5:amd64.list				python3-chardet.list
libproxy1v5:amd64.md5sums			python3-chardet.md5sums
libproxy1v5:amd64.shlibs			python3-chardet.postinst
libproxy1v5:amd64.triggers			python3-chardet.prerm
libpsl5:amd64.list				python3-commandnotfound.list
libpsl5:amd64.md5sums				python3-commandnotfound.md5sums
libpsl5:amd64.shlibs				python3-commandnotfound.postinst
libpsl5:amd64.symbols				python3-commandnotfound.prerm
libpsl5:amd64.triggers				python3-configargparse.list
libpython2-stdlib:amd64.list			python3-configargparse.md5sums
libpython2-stdlib:amd64.md5sums			python3-configargparse.postinst
libpython2.7-minimal:amd64.conffiles		python3-configargparse.prerm
libpython2.7-minimal:amd64.list			python3-configobj.list
libpython2.7-minimal:amd64.md5sums		python3-configobj.md5sums
libpython2.7-minimal:amd64.postinst		python3-configobj.postinst
libpython2.7-minimal:amd64.postrm		python3-configobj.prerm
libpython2.7-minimal:amd64.prerm		python3-cryptography.list
libpython2.7-stdlib:amd64.list			python3-cryptography.md5sums
libpython2.7-stdlib:amd64.md5sums		python3-cryptography.postinst
libpython2.7-stdlib:amd64.prerm			python3-cryptography.prerm
libpython2.7:amd64.list				python3-dbus.list
libpython2.7:amd64.md5sums			python3-dbus.md5sums
libpython2.7:amd64.shlibs			python3-dbus.postinst
libpython2.7:amd64.symbols			python3-dbus.prerm
libpython2.7:amd64.triggers			python3-debconf.list
libpython3-dev:amd64.list			python3-debconf.md5sums
libpython3-dev:amd64.md5sums			python3-debconf.postinst
libpython3-stdlib:amd64.list			python3-debconf.prerm
libpython3-stdlib:amd64.md5sums			python3-dev.list
libpython3.8-dev:amd64.list			python3-dev.md5sums
libpython3.8-dev:amd64.md5sums			python3-distro-info.list
libpython3.8-minimal:amd64.conffiles		python3-distro-info.md5sums
libpython3.8-minimal:amd64.list			python3-distro-info.postinst
libpython3.8-minimal:amd64.md5sums		python3-distro-info.prerm
libpython3.8-minimal:amd64.postinst		python3-distro.list
libpython3.8-minimal:amd64.postrm		python3-distro.md5sums
libpython3.8-minimal:amd64.prerm		python3-distro.postinst
libpython3.8-stdlib:amd64.list			python3-distro.prerm
libpython3.8-stdlib:amd64.md5sums		python3-distupgrade.list
libpython3.8-stdlib:amd64.prerm			python3-distupgrade.md5sums
libpython3.8:amd64.list				python3-distupgrade.postinst
libpython3.8:amd64.md5sums			python3-distupgrade.prerm
libpython3.8:amd64.shlibs			python3-distutils.list
libpython3.8:amd64.symbols			python3-distutils.md5sums
libpython3.8:amd64.triggers			python3-distutils.postinst
libquadmath0:amd64.list				python3-distutils.prerm
libquadmath0:amd64.md5sums			python3-docker.list
libquadmath0:amd64.shlibs			python3-docker.md5sums
libquadmath0:amd64.symbols			python3-docker.postinst
libquadmath0:amd64.triggers			python3-docker.prerm
libreadline8:amd64.list				python3-dockerpty.list
libreadline8:amd64.md5sums			python3-dockerpty.md5sums
libreadline8:amd64.shlibs			python3-dockerpty.postinst
libreadline8:amd64.symbols			python3-dockerpty.prerm
libreadline8:amd64.triggers			python3-docopt.list
librecode0:amd64.list				python3-docopt.md5sums
librecode0:amd64.md5sums			python3-docopt.postinst
librecode0:amd64.shlibs				python3-docopt.prerm
librecode0:amd64.triggers			python3-future.list
libroken18-heimdal:amd64.list			python3-future.md5sums
libroken18-heimdal:amd64.md5sums		python3-future.postinst
libroken18-heimdal:amd64.shlibs			python3-future.prerm
libroken18-heimdal:amd64.symbols		python3-gdbm:amd64.list
libroken18-heimdal:amd64.triggers		python3-gdbm:amd64.md5sums
librtmp1:amd64.list				python3-gi.list
librtmp1:amd64.md5sums				python3-gi.md5sums
librtmp1:amd64.shlibs				python3-gi.postinst
librtmp1:amd64.symbols				python3-gi.prerm
librtmp1:amd64.triggers				python3-icu.list
libruby.list					python3-icu.md5sums
libruby.md5sums					python3-icu.postinst
libruby2.7:amd64.list				python3-icu.prerm
libruby2.7:amd64.md5sums			python3-idna.list
libruby2.7:amd64.shlibs				python3-idna.md5sums
libruby2.7:amd64.symbols			python3-idna.postinst
libruby2.7:amd64.triggers			python3-idna.prerm
libsasl2-2:amd64.list				python3-importlib-metadata.list
libsasl2-2:amd64.md5sums			python3-importlib-metadata.md5sums
libsasl2-2:amd64.shlibs				python3-importlib-metadata.postinst
libsasl2-2:amd64.triggers			python3-importlib-metadata.prerm
libsasl2-modules-db:amd64.list			python3-josepy.list
libsasl2-modules-db:amd64.md5sums		python3-josepy.md5sums
libsasl2-modules:amd64.conffiles		python3-josepy.postinst
libsasl2-modules:amd64.list			python3-josepy.prerm
libsasl2-modules:amd64.md5sums			python3-jsonschema.list
libsasl2-modules:amd64.postinst			python3-jsonschema.md5sums
libseccomp2:amd64.list				python3-jsonschema.postinst
libseccomp2:amd64.md5sums			python3-jsonschema.postrm
libseccomp2:amd64.shlibs			python3-jsonschema.prerm
libseccomp2:amd64.symbols			python3-lib2to3.list
libseccomp2:amd64.triggers			python3-lib2to3.md5sums
libselinux1:amd64.list				python3-lib2to3.postinst
libselinux1:amd64.md5sums			python3-lib2to3.prerm
libselinux1:amd64.shlibs			python3-llfuse.list
libselinux1:amd64.symbols			python3-llfuse.md5sums
libselinux1:amd64.triggers			python3-minimal.list
libsemanage-common.conffiles			python3-minimal.md5sums
libsemanage-common.list				python3-minimal.postinst
libsemanage-common.md5sums			python3-minimal.prerm
libsemanage1:amd64.list				python3-mock.list
libsemanage1:amd64.md5sums			python3-mock.md5sums
libsemanage1:amd64.shlibs			python3-mock.postinst
libsemanage1:amd64.symbols			python3-mock.prerm
libsemanage1:amd64.triggers			python3-more-itertools.list
libsensors-config.conffiles			python3-more-itertools.md5sums
libsensors-config.list				python3-more-itertools.postinst
libsensors-config.md5sums			python3-more-itertools.prerm
libsensors5:amd64.list				python3-nacl.list
libsensors5:amd64.md5sums			python3-nacl.md5sums
libsensors5:amd64.preinst			python3-nacl.postinst
libsensors5:amd64.shlibs			python3-nacl.prerm
libsensors5:amd64.symbols			python3-netifaces.list
libsensors5:amd64.triggers			python3-netifaces.md5sums
libsepol1:amd64.list				python3-openssl.list
libsepol1:amd64.md5sums				python3-openssl.md5sums
libsepol1:amd64.shlibs				python3-openssl.postinst
libsepol1:amd64.symbols				python3-openssl.prerm
libsepol1:amd64.triggers			python3-parsedatetime.list
libsigsegv2:amd64.list				python3-parsedatetime.md5sums
libsigsegv2:amd64.md5sums			python3-parsedatetime.postinst
libsigsegv2:amd64.shlibs			python3-parsedatetime.prerm
libsigsegv2:amd64.symbols			python3-pbr.list
libsigsegv2:amd64.triggers			python3-pbr.md5sums
libslang2:amd64.list				python3-pbr.postinst
libslang2:amd64.md5sums				python3-pbr.postrm
libslang2:amd64.shlibs				python3-pbr.prerm
libslang2:amd64.symbols				python3-pip.list
libslang2:amd64.triggers			python3-pip.md5sums
libsm6:amd64.list				python3-pip.postinst
libsm6:amd64.md5sums				python3-pip.prerm
libsm6:amd64.shlibs				python3-pkg-resources.list
libsm6:amd64.triggers				python3-pkg-resources.md5sums
libsmartcols1:amd64.list			python3-pkg-resources.postinst
libsmartcols1:amd64.md5sums			python3-pkg-resources.prerm
libsmartcols1:amd64.shlibs			python3-ply.list
libsmartcols1:amd64.symbols			python3-ply.md5sums
libsmartcols1:amd64.triggers			python3-ply.postinst
libsocket6-perl.list				python3-ply.prerm
libsocket6-perl.md5sums				python3-pyinotify.list
libsodium23:amd64.list				python3-pyinotify.md5sums
libsodium23:amd64.md5sums			python3-pyinotify.postinst
libsodium23:amd64.shlibs			python3-pyinotify.prerm
libsodium23:amd64.symbols			python3-pymacaroons.list
libsodium23:amd64.triggers			python3-pymacaroons.md5sums
libsoup2.4-1:amd64.list				python3-pymacaroons.postinst
libsoup2.4-1:amd64.md5sums			python3-pymacaroons.prerm
libsoup2.4-1:amd64.shlibs			python3-pyparsing.list
libsoup2.4-1:amd64.symbols			python3-pyparsing.md5sums
libsoup2.4-1:amd64.triggers			python3-pyparsing.postinst
libsqlite3-0:amd64.list				python3-pyparsing.prerm
libsqlite3-0:amd64.md5sums			python3-pyrsistent:amd64.list
libsqlite3-0:amd64.shlibs			python3-pyrsistent:amd64.md5sums
libsqlite3-0:amd64.symbols			python3-pyrsistent:amd64.postinst
libsqlite3-0:amd64.triggers			python3-pyrsistent:amd64.prerm
libss2:amd64.list				python3-requests-toolbelt.list
libss2:amd64.md5sums				python3-requests-toolbelt.md5sums
libss2:amd64.shlibs				python3-requests-toolbelt.postinst
libss2:amd64.symbols				python3-requests-toolbelt.prerm
libss2:amd64.triggers				python3-requests-unixsocket.list
libssh-4:amd64.list				python3-requests-unixsocket.md5sums
libssh-4:amd64.md5sums				python3-requests-unixsocket.postinst
libssh-4:amd64.shlibs				python3-requests-unixsocket.prerm
libssh-4:amd64.symbols				python3-requests.list
libssh-4:amd64.triggers				python3-requests.md5sums
libssl-dev:amd64.list				python3-requests.postinst
libssl-dev:amd64.md5sums			python3-requests.prerm
libssl1.1:amd64.list				python3-rfc3339.list
libssl1.1:amd64.md5sums				python3-rfc3339.md5sums
libssl1.1:amd64.postinst			python3-rfc3339.postinst
libssl1.1:amd64.postrm				python3-rfc3339.prerm
libssl1.1:amd64.shlibs				python3-setuptools.list
libssl1.1:amd64.symbols				python3-setuptools.md5sums
libssl1.1:amd64.templates			python3-setuptools.postinst
libssl1.1:amd64.triggers			python3-setuptools.prerm
libstdc++-9-dev:amd64.list			python3-six.list
libstdc++-9-dev:amd64.md5sums			python3-six.md5sums
libstdc++6:amd64.list				python3-six.postinst
libstdc++6:amd64.md5sums			python3-six.prerm
libstdc++6:amd64.prerm				python3-software-properties.list
libstdc++6:amd64.shlibs				python3-software-properties.md5sums
libstdc++6:amd64.symbols			python3-software-properties.postinst
libstdc++6:amd64.triggers			python3-software-properties.prerm
libstemmer0d:amd64.list				python3-systemd.list
libstemmer0d:amd64.md5sums			python3-systemd.md5sums
libstemmer0d:amd64.shlibs			python3-systemd.postinst
libstemmer0d:amd64.symbols			python3-systemd.prerm
libstemmer0d:amd64.triggers			python3-texttable.list
libsub-name-perl.list				python3-texttable.md5sums
libsub-name-perl.md5sums			python3-texttable.postinst
libsub-override-perl.list			python3-texttable.prerm
libsub-override-perl.md5sums			python3-tz.list
libsys-hostname-long-perl.list			python3-tz.md5sums
libsys-hostname-long-perl.md5sums		python3-tz.postinst
libsystemd0:amd64.list				python3-tz.prerm
libsystemd0:amd64.md5sums			python3-update-manager.list
libsystemd0:amd64.shlibs			python3-update-manager.md5sums
libsystemd0:amd64.symbols			python3-update-manager.postinst
libsystemd0:amd64.triggers			python3-update-manager.prerm
libtasn1-6:amd64.list				python3-urllib3.list
libtasn1-6:amd64.md5sums			python3-urllib3.md5sums
libtasn1-6:amd64.shlibs				python3-urllib3.postinst
libtasn1-6:amd64.symbols			python3-urllib3.prerm
libtasn1-6:amd64.triggers			python3-websocket.list
libtcl8.6:amd64.list				python3-websocket.md5sums
libtcl8.6:amd64.md5sums				python3-websocket.postinst
libtcl8.6:amd64.symbols				python3-websocket.prerm
libtcl8.6:amd64.triggers			python3-wheel.list
libtdb1:amd64.list				python3-wheel.md5sums
libtdb1:amd64.md5sums				python3-wheel.postinst
libtdb1:amd64.shlibs				python3-wheel.prerm
libtdb1:amd64.symbols				python3-yaml.list
libtdb1:amd64.triggers				python3-yaml.md5sums
libterm-readkey-perl.list			python3-yaml.postinst
libterm-readkey-perl.md5sums			python3-yaml.prerm
libtext-charwidth-perl.list			python3-zipp.list
libtext-charwidth-perl.md5sums			python3-zipp.md5sums
libtext-iconv-perl.list				python3-zipp.postinst
libtext-iconv-perl.md5sums			python3-zipp.prerm
libtext-wrapi18n-perl.list			python3-zope.component.list
libtext-wrapi18n-perl.md5sums			python3-zope.component.md5sums
libtfm1:amd64.list				python3-zope.component.postinst
libtfm1:amd64.md5sums				python3-zope.component.prerm
libtfm1:amd64.shlibs				python3-zope.event.list
libtfm1:amd64.symbols				python3-zope.event.md5sums
libtfm1:amd64.triggers				python3-zope.event.postinst
libthai-data.list				python3-zope.event.prerm
libthai-data.md5sums				python3-zope.hookable.list
libthai0:amd64.list				python3-zope.hookable.md5sums
libthai0:amd64.md5sums				python3-zope.hookable.postinst
libthai0:amd64.shlibs				python3-zope.hookable.prerm
libthai0:amd64.symbols				python3-zope.interface.list
libthai0:amd64.triggers				python3-zope.interface.md5sums
libtidy5deb1:amd64.list				python3-zope.interface.postinst
libtidy5deb1:amd64.md5sums			python3-zope.interface.prerm
libtidy5deb1:amd64.shlibs			python3.8-dev.list
libtidy5deb1:amd64.symbols			python3.8-dev.md5sums
libtidy5deb1:amd64.triggers			python3.8-minimal.list
libtie-ixhash-perl.list				python3.8-minimal.md5sums
libtie-ixhash-perl.md5sums			python3.8-minimal.postinst
libtiff5:amd64.list				python3.8-minimal.postrm
libtiff5:amd64.md5sums				python3.8-minimal.preinst
libtiff5:amd64.shlibs				python3.8-minimal.prerm
libtiff5:amd64.symbols				python3.8-venv.list
libtiff5:amd64.triggers				python3.8-venv.md5sums
libtimedate-perl.list				python3.8-venv.postinst
libtimedate-perl.md5sums			python3.8-venv.postrm
libtinfo6:amd64.list				python3.8-venv.prerm
libtinfo6:amd64.md5sums				python3.8.list
libtinfo6:amd64.shlibs				python3.8.md5sums
libtinfo6:amd64.symbols				python3.8.postinst
libtinfo6:amd64.triggers			python3.8.prerm
libtirpc-common.conffiles			python3.list
libtirpc-common.list				python3.md5sums
libtirpc-common.md5sums				python3.postinst
libtirpc3:amd64.list				python3.postrm
libtirpc3:amd64.md5sums				python3.preinst
libtirpc3:amd64.shlibs				python3.prerm
libtirpc3:amd64.symbols				quota.conffiles
libtirpc3:amd64.triggers			quota.config
libtool.list					quota.list
libtool.md5sums					quota.md5sums
libtry-tiny-perl.list				quota.postinst
libtry-tiny-perl.md5sums			quota.postrm
libtsan0:amd64.list				quota.preinst
libtsan0:amd64.md5sums				quota.prerm
libtsan0:amd64.shlibs				quota.templates
libtsan0:amd64.symbols				quotatool.list
libtsan0:amd64.triggers				quotatool.md5sums
libubsan1:amd64.list				rake.list
libubsan1:amd64.md5sums				rake.md5sums
libubsan1:amd64.shlibs				rar.conffiles
libubsan1:amd64.symbols				rar.list
libubsan1:amd64.triggers			rar.md5sums
libuchardet0:amd64.list				readline-common.list
libuchardet0:amd64.md5sums			readline-common.md5sums
libuchardet0:amd64.shlibs			readline-common.postinst
libuchardet0:amd64.symbols			readline-common.postrm
libuchardet0:amd64.triggers			redis-server.conffiles
libudev1:amd64.list				redis-server.list
libudev1:amd64.md5sums				redis-server.md5sums
libudev1:amd64.shlibs				redis-server.postinst
libudev1:amd64.symbols				redis-server.postrm
libudev1:amd64.triggers				redis-server.preinst
libunistring2:amd64.list			redis-server.prerm
libunistring2:amd64.md5sums			redis-tools.list
libunistring2:amd64.shlibs			redis-tools.md5sums
libunistring2:amd64.symbols			redis-tools.postinst
libunistring2:amd64.triggers			redis-tools.postrm
libunwind8:amd64.list				resolvconf.conffiles
libunwind8:amd64.md5sums			resolvconf.config
libunwind8:amd64.shlibs				resolvconf.list
libunwind8:amd64.triggers			resolvconf.md5sums
liburi-perl.list				resolvconf.postinst
liburi-perl.md5sums				resolvconf.postrm
libusb-1.0-0:amd64.list				resolvconf.preinst
libusb-1.0-0:amd64.md5sums			resolvconf.prerm
libusb-1.0-0:amd64.shlibs			resolvconf.templates
libusb-1.0-0:amd64.symbols			resolvconf.triggers
libusb-1.0-0:amd64.triggers			rkhunter.conffiles
libuuid1:amd64.list				rkhunter.config
libuuid1:amd64.md5sums				rkhunter.list
libuuid1:amd64.shlibs				rkhunter.md5sums
libuuid1:amd64.symbols				rkhunter.postinst
libuuid1:amd64.triggers				rkhunter.postrm
libuv1-dev:amd64.list				rkhunter.templates
libuv1-dev:amd64.md5sums			rkhunter.triggers
libuv1:amd64.list				roundcube-core.conffiles
libuv1:amd64.md5sums				roundcube-core.config
libuv1:amd64.shlibs				roundcube-core.list
libuv1:amd64.symbols				roundcube-core.md5sums
libuv1:amd64.triggers				roundcube-core.postinst
libvorbis0a:amd64.list				roundcube-core.postrm
libvorbis0a:amd64.md5sums			roundcube-core.preinst
libvorbis0a:amd64.shlibs			roundcube-core.prerm
libvorbis0a:amd64.symbols			roundcube-core.templates
libvorbis0a:amd64.triggers			roundcube-plugins.conffiles
libvorbisfile3:amd64.list			roundcube-plugins.list
libvorbisfile3:amd64.md5sums			roundcube-plugins.md5sums
libvorbisfile3:amd64.shlibs			roundcube-plugins.postinst
libvorbisfile3:amd64.symbols			roundcube-plugins.postrm
libvorbisfile3:amd64.triggers			roundcube-plugins.preinst
libvulkan1:amd64.list				roundcube-plugins.prerm
libvulkan1:amd64.md5sums			roundcube-sqlite3.list
libvulkan1:amd64.shlibs				roundcube-sqlite3.md5sums
libvulkan1:amd64.triggers			roundcube.list
libwavpack1:amd64.list				roundcube.md5sums
libwavpack1:amd64.md5sums			roundcube.postinst
libwavpack1:amd64.shlibs			roundcube.postrm
libwavpack1:amd64.symbols			roundcube.preinst
libwavpack1:amd64.triggers			roundcube.prerm
libwayland-client0:amd64.list			rspamd.conffiles
libwayland-client0:amd64.md5sums		rspamd.list
libwayland-client0:amd64.shlibs			rspamd.md5sums
libwayland-client0:amd64.symbols		rspamd.postinst
libwayland-client0:amd64.triggers		rspamd.postrm
libwebp6:amd64.list				rspamd.preinst
libwebp6:amd64.md5sums				rspamd.prerm
libwebp6:amd64.shlibs				rsync.conffiles
libwebp6:amd64.symbols				rsync.list
libwebp6:amd64.triggers				rsync.md5sums
libwebpmux3:amd64.list				rsync.postinst
libwebpmux3:amd64.md5sums			rsync.postrm
libwebpmux3:amd64.shlibs			rsync.prerm
libwebpmux3:amd64.symbols			rsyslog.conffiles
libwebpmux3:amd64.triggers			rsyslog.list
libwind0-heimdal:amd64.list			rsyslog.md5sums
libwind0-heimdal:amd64.md5sums			rsyslog.postinst
libwind0-heimdal:amd64.shlibs			rsyslog.postrm
libwind0-heimdal:amd64.symbols			rsyslog.preinst
libwind0-heimdal:amd64.triggers			rsyslog.prerm
libwmf0.2-7:amd64.list				rsyslog.triggers
libwmf0.2-7:amd64.md5sums			ruby-minitest.list
libwmf0.2-7:amd64.postinst			ruby-minitest.md5sums
libwmf0.2-7:amd64.shlibs			ruby-net-telnet.list
libwmf0.2-7:amd64.triggers			ruby-net-telnet.md5sums
libwrap0:amd64.list				ruby-power-assert.list
libwrap0:amd64.md5sums				ruby-power-assert.md5sums
libwrap0:amd64.postinst				ruby-rack.list
libwrap0:amd64.postrm				ruby-rack.md5sums
libwrap0:amd64.shlibs				ruby-test-unit.list
libwrap0:amd64.symbols				ruby-test-unit.md5sums
libwrap0:amd64.triggers				ruby-xmlrpc.list
libwww-perl.list				ruby-xmlrpc.md5sums
libwww-perl.md5sums				ruby.list
libwww-robotrules-perl.list			ruby.md5sums
libwww-robotrules-perl.md5sums			ruby.preinst
libx11-6:amd64.list				ruby2.7.list
libx11-6:amd64.md5sums				ruby2.7.md5sums
libx11-6:amd64.shlibs				rubygems-integration.list
libx11-6:amd64.symbols				rubygems-integration.md5sums
libx11-6:amd64.triggers				runc.list
libx11-data.list				runc.md5sums
libx11-data.md5sums				sed.list
libx11-protocol-perl.list			sed.md5sums
libx11-protocol-perl.md5sums			sensible-utils.list
libx11-xcb1:amd64.list				sensible-utils.md5sums
libx11-xcb1:amd64.md5sums			shared-mime-info.list
libx11-xcb1:amd64.shlibs			shared-mime-info.md5sums
libx11-xcb1:amd64.triggers			shared-mime-info.postinst
libxau6:amd64.list				shared-mime-info.postrm
libxau6:amd64.md5sums				shared-mime-info.triggers
libxau6:amd64.shlibs				sntp.list
libxau6:amd64.triggers				sntp.md5sums
libxaw7:amd64.list				sntp.postinst
libxaw7:amd64.md5sums				sntp.prerm
libxaw7:amd64.postinst				software-properties-common.conffiles
libxaw7:amd64.postrm				software-properties-common.list
libxaw7:amd64.shlibs				software-properties-common.md5sums
libxcb-dri2-0:amd64.list			software-properties-common.postinst
libxcb-dri2-0:amd64.md5sums			software-properties-common.prerm
libxcb-dri2-0:amd64.shlibs			sound-theme-freedesktop.list
libxcb-dri2-0:amd64.symbols			sound-theme-freedesktop.md5sums
libxcb-dri2-0:amd64.triggers			sqlite3.list
libxcb-dri3-0:amd64.list			sqlite3.md5sums
libxcb-dri3-0:amd64.md5sums			ssh-import-id.conffiles
libxcb-dri3-0:amd64.shlibs			ssh-import-id.list
libxcb-dri3-0:amd64.symbols			ssh-import-id.md5sums
libxcb-dri3-0:amd64.triggers			ssh-import-id.postinst
libxcb-glx0:amd64.list				ssh-import-id.prerm
libxcb-glx0:amd64.md5sums			ssh.list
libxcb-glx0:amd64.shlibs			ssh.md5sums
libxcb-glx0:amd64.symbols			ssh.postinst
libxcb-glx0:amd64.triggers			ssh.postrm
libxcb-present0:amd64.list			ssh.preinst
libxcb-present0:amd64.md5sums			ssh.prerm
libxcb-present0:amd64.shlibs			ssl-cert.list
libxcb-present0:amd64.symbols			ssl-cert.md5sums
libxcb-present0:amd64.triggers			ssl-cert.postinst
libxcb-randr0:amd64.list			ssl-cert.postrm
libxcb-randr0:amd64.md5sums			ssl-cert.templates
libxcb-randr0:amd64.shlibs			strace.list
libxcb-randr0:amd64.symbols			strace.md5sums
libxcb-randr0:amd64.triggers			sudo.conffiles
libxcb-render0:amd64.list			sudo.list
libxcb-render0:amd64.md5sums			sudo.md5sums
libxcb-render0:amd64.shlibs			sudo.postinst
libxcb-render0:amd64.symbols			sudo.postrm
libxcb-render0:amd64.triggers			sudo.preinst
libxcb-shape0:amd64.list			sudo.prerm
libxcb-shape0:amd64.md5sums			systemd-sysv.list
libxcb-shape0:amd64.shlibs			systemd-sysv.md5sums
libxcb-shape0:amd64.symbols			systemd-sysv.postinst
libxcb-shape0:amd64.triggers			systemd-timesyncd.list
libxcb-shm0:amd64.list				systemd-timesyncd.postrm
libxcb-shm0:amd64.md5sums			systemd.conffiles
libxcb-shm0:amd64.shlibs			systemd.list
libxcb-shm0:amd64.symbols			systemd.md5sums
libxcb-shm0:amd64.triggers			systemd.postinst
libxcb-sync1:amd64.list				systemd.postrm
libxcb-sync1:amd64.md5sums			systemd.preinst
libxcb-sync1:amd64.shlibs			systemd.prerm
libxcb-sync1:amd64.symbols			systemd.triggers
libxcb-sync1:amd64.triggers			sysvinit-utils.list
libxcb-xfixes0:amd64.list			sysvinit-utils.md5sums
libxcb-xfixes0:amd64.md5sums			tar.list
libxcb-xfixes0:amd64.shlibs			tar.md5sums
libxcb-xfixes0:amd64.symbols			tar.postinst
libxcb-xfixes0:amd64.triggers			tar.prerm
libxcb1:amd64.list				tasksel-data.list
libxcb1:amd64.md5sums				tasksel-data.md5sums
libxcb1:amd64.shlibs				tasksel-data.postinst
libxcb1:amd64.symbols				tasksel.list
libxcb1:amd64.triggers				tasksel.md5sums
libxcomposite1:amd64.list			tasksel.postinst
libxcomposite1:amd64.md5sums			tasksel.postrm
libxcomposite1:amd64.shlibs			tasksel.templates
libxcomposite1:amd64.triggers			tcpdump.conffiles
libxcursor1:amd64.list				tcpdump.list
libxcursor1:amd64.md5sums			tcpdump.md5sums
libxcursor1:amd64.shlibs			tcpdump.postinst
libxcursor1:amd64.triggers			tcpdump.postrm
libxdmcp6:amd64.list				telnet.list
libxdmcp6:amd64.md5sums				telnet.md5sums
libxdmcp6:amd64.shlibs				telnet.postinst
libxdmcp6:amd64.triggers			telnet.postrm
libxext6:amd64.list				telnet.prerm
libxext6:amd64.md5sums				time.list
libxext6:amd64.shlibs				time.md5sums
libxext6:amd64.symbols				tree.list
libxext6:amd64.triggers				tree.md5sums
libxfixes3:amd64.list				tzdata.config
libxfixes3:amd64.md5sums			tzdata.list
libxfixes3:amd64.shlibs				tzdata.md5sums
libxfixes3:amd64.symbols			tzdata.postinst
libxfixes3:amd64.triggers			tzdata.postrm
libxft2:amd64.list				tzdata.templates
libxft2:amd64.md5sums				ubuntu-advantage-tools.conffiles
libxft2:amd64.shlibs				ubuntu-advantage-tools.config
libxft2:amd64.triggers				ubuntu-advantage-tools.list
libxi6:amd64.list				ubuntu-advantage-tools.md5sums
libxi6:amd64.md5sums				ubuntu-advantage-tools.postinst
libxi6:amd64.shlibs				ubuntu-advantage-tools.postrm
libxi6:amd64.symbols				ubuntu-advantage-tools.preinst
libxi6:amd64.triggers				ubuntu-advantage-tools.prerm
libxinerama1:amd64.list				ubuntu-advantage-tools.templates
libxinerama1:amd64.md5sums			ubuntu-fan.conffiles
libxinerama1:amd64.shlibs			ubuntu-fan.list
libxinerama1:amd64.triggers			ubuntu-fan.md5sums
libxkbfile1:amd64.list				ubuntu-fan.postinst
libxkbfile1:amd64.md5sums			ubuntu-fan.postrm
libxkbfile1:amd64.shlibs			ubuntu-fan.prerm
libxkbfile1:amd64.triggers			ubuntu-keyring.list
libxml-parser-perl.list				ubuntu-keyring.md5sums
libxml-parser-perl.md5sums			ubuntu-keyring.postinst
libxml-twig-perl.list				ubuntu-minimal.list
libxml-twig-perl.md5sums			ubuntu-minimal.md5sums
libxml-xpathengine-perl.list			ubuntu-release-upgrader-core.conffiles
libxml-xpathengine-perl.md5sums			ubuntu-release-upgrader-core.list
libxml2:amd64.list				ubuntu-release-upgrader-core.md5sums
libxml2:amd64.md5sums				ubuntu-release-upgrader-core.postinst
libxml2:amd64.shlibs				ubuntu-release-upgrader-core.preinst
libxml2:amd64.symbols				ubuntu-standard.list
libxml2:amd64.triggers				ubuntu-standard.md5sums
libxmlrpc-epi0:amd64.list			ucf.conffiles
libxmlrpc-epi0:amd64.md5sums			ucf.list
libxmlrpc-epi0:amd64.shlibs			ucf.md5sums
libxmlrpc-epi0:amd64.triggers			ucf.postinst
libxmu6:amd64.list				ucf.postrm
libxmu6:amd64.md5sums				ucf.preinst
libxmu6:amd64.shlibs				ucf.templates
libxmu6:amd64.triggers				udev.conffiles
libxmuu1:amd64.list				udev.list
libxmuu1:amd64.md5sums				udev.md5sums
libxmuu1:amd64.shlibs				udev.postinst
libxmuu1:amd64.triggers				udev.postrm
libxpm4:amd64.list				udev.preinst
libxpm4:amd64.md5sums				udev.prerm
libxpm4:amd64.shlibs				udev.triggers
libxpm4:amd64.triggers				ufw.conffiles
libxrandr2:amd64.list				ufw.config
libxrandr2:amd64.md5sums			ufw.list
libxrandr2:amd64.shlibs				ufw.md5sums
libxrandr2:amd64.symbols			ufw.postinst
libxrandr2:amd64.triggers			ufw.postrm
libxrender1:amd64.list				ufw.preinst
libxrender1:amd64.md5sums			ufw.prerm
libxrender1:amd64.shlibs			ufw.templates
libxrender1:amd64.triggers			ufw.triggers
libxshmfence1:amd64.list			unar.list
libxshmfence1:amd64.md5sums			unar.md5sums
libxshmfence1:amd64.shlibs			unar.postinst
libxshmfence1:amd64.symbols			unar.postrm
libxshmfence1:amd64.triggers			unar.preinst
libxslt1.1:amd64.list				unattended-upgrades.conffiles
libxslt1.1:amd64.md5sums			unattended-upgrades.config
libxslt1.1:amd64.shlibs				unattended-upgrades.list
libxslt1.1:amd64.symbols			unattended-upgrades.md5sums
libxslt1.1:amd64.triggers			unattended-upgrades.postinst
libxt6:amd64.list				unattended-upgrades.postrm
libxt6:amd64.md5sums				unattended-upgrades.preinst
libxt6:amd64.shlibs				unattended-upgrades.prerm
libxt6:amd64.symbols				unattended-upgrades.templates
libxt6:amd64.triggers				unhide.list
libxtables12:amd64.list				unhide.md5sums
libxtables12:amd64.md5sums			unhide.postinst
libxtables12:amd64.shlibs			unhide.rb.list
libxtables12:amd64.symbols			unhide.rb.md5sums
libxtables12:amd64.triggers			unhide.rb.triggers
libxtst6:amd64.list				unhide.triggers
libxtst6:amd64.md5sums				unrar-free.list
libxtst6:amd64.shlibs				unrar-free.md5sums
libxtst6:amd64.triggers				unrar-free.postinst
libxv1:amd64.list				unrar-free.prerm
libxv1:amd64.md5sums				unzip.list
libxv1:amd64.shlibs				unzip.md5sums
libxv1:amd64.triggers				unzip.postinst
libxxf86dga1:amd64.list				unzip.postrm
libxxf86dga1:amd64.md5sums			update-inetd.list
libxxf86dga1:amd64.shlibs			update-inetd.md5sums
libxxf86dga1:amd64.triggers			update-inetd.postinst
libxxf86vm1:amd64.list				update-inetd.postrm
libxxf86vm1:amd64.md5sums			update-inetd.templates
libxxf86vm1:amd64.shlibs			update-manager-core.list
libxxf86vm1:amd64.triggers			update-manager-core.md5sums
libyaml-0-2:amd64.list				usb.ids.list
libyaml-0-2:amd64.md5sums			usb.ids.md5sums
libyaml-0-2:amd64.shlibs			usbutils.list
libyaml-0-2:amd64.symbols			usbutils.md5sums
libyaml-0-2:amd64.triggers			util-linux.conffiles
libzip4:amd64.list				util-linux.list
libzip4:amd64.md5sums				util-linux.md5sums
libzip4:amd64.shlibs				util-linux.postinst
libzip4:amd64.symbols				util-linux.postrm
libzip4:amd64.triggers				util-linux.preinst
libzstd1:amd64.list				util-linux.prerm
libzstd1:amd64.md5sums				uuid-runtime.conffiles
libzstd1:amd64.shlibs				uuid-runtime.list
libzstd1:amd64.symbols				uuid-runtime.md5sums
libzstd1:amd64.triggers				uuid-runtime.postinst
linux-base.conffiles				uuid-runtime.postrm
linux-base.list					uuid-runtime.prerm
linux-base.md5sums				vim-common.conffiles
linux-base.postinst				vim-common.list
linux-base.postrm				vim-common.md5sums
linux-base.templates				vim-common.postinst
linux-firmware.list				vim-common.postrm
linux-firmware.md5sums				vim-common.preinst
linux-firmware.postinst				vim-common.prerm
linux-generic.list				vim-nox.list
linux-generic.md5sums				vim-nox.md5sums
linux-headers-5.4.0-105-generic.list		vim-nox.postinst
linux-headers-5.4.0-105-generic.md5sums		vim-nox.postrm
linux-headers-5.4.0-105-generic.postinst	vim-nox.preinst
linux-headers-5.4.0-105.list			vim-nox.prerm
linux-headers-5.4.0-105.md5sums			vim-runtime.list
linux-headers-5.4.0-137-generic.list		vim-runtime.md5sums
linux-headers-5.4.0-137-generic.md5sums		vim-runtime.postinst
linux-headers-5.4.0-137-generic.postinst	vim-runtime.postrm
linux-headers-5.4.0-137.list			vim-runtime.preinst
linux-headers-5.4.0-137.md5sums			vim-tiny.conffiles
linux-headers-generic.list			vim-tiny.list
linux-headers-generic.md5sums			vim-tiny.md5sums
linux-image-5.4.0-105-generic.list		vim-tiny.postinst
linux-image-5.4.0-105-generic.md5sums		vim-tiny.postrm
linux-image-5.4.0-105-generic.postinst		vim-tiny.preinst
linux-image-5.4.0-105-generic.postrm		vim-tiny.prerm
linux-image-5.4.0-105-generic.preinst		vim.list
linux-image-5.4.0-105-generic.prerm		vim.md5sums
linux-image-5.4.0-105-generic.triggers		vim.postinst
linux-image-5.4.0-137-generic.list		vim.postrm
linux-image-5.4.0-137-generic.md5sums		vim.preinst
linux-image-5.4.0-137-generic.postinst		vim.prerm
linux-image-5.4.0-137-generic.postrm		wamerican.config
linux-image-5.4.0-137-generic.preinst		wamerican.list
linux-image-5.4.0-137-generic.prerm		wamerican.md5sums
linux-image-5.4.0-137-generic.triggers		wamerican.postinst
linux-image-5.4.0-62-generic.list		wamerican.postrm
linux-image-5.4.0-62-generic.postrm		wamerican.templates
linux-image-generic.list			wbritish.config
linux-image-generic.md5sums			wbritish.list
linux-libc-dev:amd64.list			wbritish.md5sums
linux-libc-dev:amd64.md5sums			wbritish.postinst
linux-modules-5.4.0-105-generic.list		wbritish.postrm
linux-modules-5.4.0-105-generic.md5sums		wbritish.templates
linux-modules-5.4.0-105-generic.postinst	webalizer.conffiles
linux-modules-5.4.0-105-generic.postrm		webalizer.config
linux-modules-5.4.0-137-generic.list		webalizer.list
linux-modules-5.4.0-137-generic.md5sums		webalizer.md5sums
linux-modules-5.4.0-137-generic.postinst	webalizer.postinst
linux-modules-5.4.0-137-generic.postrm		webalizer.postrm
linux-modules-5.4.0-62-generic.list		webalizer.templates
linux-modules-5.4.0-62-generic.postrm		wget.conffiles
linux-modules-extra-5.4.0-105-generic.list	wget.list
linux-modules-extra-5.4.0-105-generic.md5sums	wget.md5sums
linux-modules-extra-5.4.0-105-generic.postinst	whiptail.list
linux-modules-extra-5.4.0-105-generic.postrm	whiptail.md5sums
linux-modules-extra-5.4.0-137-generic.list	whiptail.preinst
linux-modules-extra-5.4.0-137-generic.md5sums	whois.list
linux-modules-extra-5.4.0-137-generic.postinst	whois.md5sums
linux-modules-extra-5.4.0-137-generic.postrm	wireless-regdb.list
linux-modules-extra-5.4.0-62-generic.list	wireless-regdb.md5sums
linux-modules-extra-5.4.0-62-generic.postrm	x11-common.conffiles
locales.conffiles				x11-common.list
locales.config					x11-common.md5sums
locales.list					x11-common.postinst
locales.md5sums					x11-common.postrm
locales.postinst				x11-common.preinst
locales.postrm					x11-common.prerm
locales.prerm					x11-utils.conffiles
locales.templates				x11-utils.list
login.conffiles					x11-utils.md5sums
login.list					x11-utils.postinst
login.md5sums					x11-utils.postrm
login.postinst					x11-xserver-utils.conffiles
login.postrm					x11-xserver-utils.list
login.preinst					x11-xserver-utils.md5sums
login.prerm					x11-xserver-utils.postinst
logrotate.conffiles				x11-xserver-utils.postrm
logrotate.list					xauth.list
logrotate.md5sums				xauth.md5sums
logrotate.postinst				xdg-user-dirs.conffiles
logrotate.postrm				xdg-user-dirs.list
logrotate.preinst				xdg-user-dirs.md5sums
logrotate.prerm					xdg-user-dirs.postinst
logsave.list					xdg-user-dirs.postrm
logsave.md5sums					xdg-user-dirs.preinst
lrzip.list					xdg-user-dirs.prerm
lrzip.md5sums					xdg-utils.list
lrzip.shlibs					xdg-utils.md5sums
lrzip.triggers					xkb-data.list
lsb-base.list					xkb-data.md5sums
lsb-base.md5sums				xxd.list
lsb-base.postinst				xxd.md5sums
lsb-base.postrm					xz-utils.list
lsb-base.preinst				xz-utils.md5sums
lsb-base.prerm					xz-utils.postinst
lsb-release.list				xz-utils.prerm
lsb-release.md5sums				zip.list
lsb-release.postinst				zip.md5sums
lsb-release.postrm				zlib1g-dev:amd64.list
lshw.list					zlib1g-dev:amd64.md5sums
lshw.md5sums					zlib1g:amd64.list
lsof.list					zlib1g:amd64.md5sums
lsof.md5sums					zlib1g:amd64.shlibs
ltrace.conffiles				zlib1g:amd64.symbols
ltrace.list					zlib1g:amd64.triggers
root@admin:/var/lib/dpkg/info# sudo rm -rf ./mysql-*
root@admin:/var/lib/dpkg/info# sudo dpkg --remove --force-remove-reinstreq mysql-server-8.0
dpkg: warning: ignoring request to remove mysql-server-8.0, only the config
 files of which are on the system; use --purge to remove them too
root@admin:/var/lib/dpkg/info# sudo dpkg --remove --purge  --force-remove-reinstreq mysql-server-8.0
dpkg: error: conflicting actions -P (--purge) and -r (--remove)

Type dpkg --help for help about installing and deinstalling packages [*];
Use 'apt' or 'aptitude' for user-friendly package management;
Type dpkg -Dhelp for a list of dpkg debug flag values;
Type dpkg --force-help for a list of forcing options;
Type dpkg-deb --help for help about manipulating *.deb files;

Options marked [*] produce a lot of output - pipe it through 'less' or 'more' !
root@admin:/var/lib/dpkg/info# sudo dpkg --purge  --force-remove-reinstreq mysql-server-8.0
dpkg: warning: files list file for package 'mysql-common' missing; assuming package has no files currently installed
dpkg: warning: files list file for package 'mysql-client-core-8.0' missing; assuming package has no files currently installed
dpkg: warning: files list file for package 'mysql-server-core-8.0' missing; assuming package has no files currently installed
dpkg: warning: files list file for package 'mysql-client-8.0' missing; assuming package has no files currently installed
(Reading database ... 149599 files and directories currently installed.)
Purging configuration files for mysql-server-8.0 (8.0.32-0ubuntu0.20.04.2) ...
root@admin:/var/lib/dpkg/info# sudo dpkg --purge  mysql-server-8.0
dpkg: warning: ignoring request to remove mysql-server-8.0 which isn't installed
root@admin:/var/lib/dpkg/info# sudo apt-get purge mysql*
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Note, selecting 'mysql-source-8.0' for glob 'mysql*'
Note, selecting 'mysqltcl' for glob 'mysql*'
Note, selecting 'mysql-client-5.5' for glob 'mysql*'
Note, selecting 'mysql-client-5.6' for glob 'mysql*'
Note, selecting 'mysql-client-5.7' for glob 'mysql*'
Note, selecting 'mysql-common-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-5.5' for glob 'mysql*'
Note, selecting 'mysql-server-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-5.7' for glob 'mysql*'
Note, selecting 'mysql-client-8.0' for glob 'mysql*'
Note, selecting 'mysql-testsuite' for glob 'mysql*'
Note, selecting 'mysql-server' for glob 'mysql*'
Note, selecting 'mysql-router' for glob 'mysql*'
Note, selecting 'mysql-server-8.0' for glob 'mysql*'
Note, selecting 'mysql-client' for glob 'mysql*'
Note, selecting 'mysql-sandbox' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.5' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.6' for glob 'mysql*'
Note, selecting 'mysql-client-core-5.7' for glob 'mysql*'
Note, selecting 'mysql-client-core-8.0' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.5' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.6' for glob 'mysql*'
Note, selecting 'mysql-testsuite-5.7' for glob 'mysql*'
Note, selecting 'mysql-common' for glob 'mysql*'
Note, selecting 'mysql-testsuite-8.0' for glob 'mysql*'
Note, selecting 'mysqltuner' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.5' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.6' for glob 'mysql*'
Note, selecting 'mysql-server-core-5.7' for glob 'mysql*'
Note, selecting 'mysql-server-core-8.0' for glob 'mysql*'
Package 'mysql-client-5.7' is not installed, so not removed
Package 'mysql-client-core-5.7' is not installed, so not removed
Note, selecting 'mysql-common' instead of 'mysql-common-5.6'
Package 'mysql-server-5.5' is not installed, so not removed
Package 'mysql-server-5.7' is not installed, so not removed
Package 'mysql-server-core-5.7' is not installed, so not removed
Package 'mysql-client-core-5.5' is not installed, so not removed
Package 'mysql-client-core-5.6' is not installed, so not removed
Package 'mysql-client-5.5' is not installed, so not removed
Package 'mysql-client-5.6' is not installed, so not removed
Package 'mysql-server-core-5.5' is not installed, so not removed
Package 'mysql-server-core-5.6' is not installed, so not removed
Package 'mysql-server-5.6' is not installed, so not removed
Package 'mysql-testsuite-5.5' is not installed, so not removed
Package 'mysql-testsuite-5.6' is not installed, so not removed
Package 'mysql-testsuite-5.7' is not installed, so not removed
Package 'mysql-sandbox' is not installed, so not removed
Package 'mysqltcl' is not installed, so not removed
Package 'mysqltuner' is not installed, so not removed
Package 'mysql-client' is not installed, so not removed
Package 'mysql-server' is not installed, so not removed
Package 'mysql-server-8.0' is not installed, so not removed
Package 'mysql-router' is not installed, so not removed
Package 'mysql-source-8.0' is not installed, so not removed
Package 'mysql-testsuite' is not installed, so not removed
Package 'mysql-testsuite-8.0' is not installed, so not removed
The following packages were automatically installed and are no longer required:
  libaio1 libhtml-template-perl libmecab2 mecab-ipadic mecab-ipadic-utf8 mecab-utils
Use 'sudo apt autoremove' to remove them.
The following packages will be REMOVED:
  mysql-client-8.0* mysql-client-core-8.0* mysql-common* mysql-server-core-8.0*
0 upgraded, 0 newly installed, 4 to remove and 0 not upgraded.
After this operation, 259 MB disk space will be freed.
Do you want to continue? [Y/n] Y
dpkg: warning: files list file for package 'mysql-common' missing; assuming package has no files currently installed
dpkg: warning: files list file for package 'mysql-client-core-8.0' missing; assuming package has no files currently installed
dpkg: warning: files list file for package 'mysql-server-core-8.0' missing; assuming package has no files currently installed
dpkg: warning: files list file for package 'mysql-client-8.0' missing; assuming package has no files currently installed
(Reading database ... 149599 files and directories currently installed.)
Removing mysql-client-8.0 (8.0.32-0ubuntu0.20.04.2) ...
Removing mysql-client-core-8.0 (8.0.32-0ubuntu0.20.04.2) ...
Removing mysql-common (5.8+1.0.5ubuntu2) ...
Removing mysql-server-core-8.0 (8.0.32-0ubuntu0.20.04.2) ...
(Reading database ... 149599 files and directories currently installed.)
Purging configuration files for mysql-common (5.8+1.0.5ubuntu2) ...
root@admin:/var/lib/dpkg/info# sudo apt-get autoremove
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following packages will be REMOVED:
  libaio1 libhtml-template-perl libmecab2 mecab-ipadic mecab-ipadic-utf8 mecab-utils
0 upgraded, 0 newly installed, 6 to remove and 0 not upgraded.
After this operation, 56.6 MB disk space will be freed.
Do you want to continue? [Y/n] Y
(Reading database ... 149599 files and directories currently installed.)
Removing libaio1:amd64 (0.3.112-5) ...
Removing libhtml-template-perl (2.97-1) ...
Removing mecab-ipadic-utf8 (2.7.0-20070801+main-2.1) ...
update-alternatives: using /var/lib/mecab/dic/ipadic to provide /var/lib/mecab/dic/debian (mecab-dictionary) in auto mode
Removing mecab-ipadic (2.7.0-20070801+main-2.1) ...
Removing mecab-utils (0.996-10build1) ...
Removing libmecab2:amd64 (0.996-10build1) ...
Processing triggers for man-db (2.9.1-1) ...
Processing triggers for libc-bin (2.31-0ubuntu9.9) ...
root@admin:/var/lib/dpkg/info# sudo apt-get autoclean
Reading package lists... Done
Building dependency tree       
Reading state information... Done
root@admin:/var/lib/dpkg/info# sudo apt-get dist-upgrade
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Calculating upgrade... Done
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
root@admin:/var/lib/dpkg/info# cd
root@admin:~# cd /usr/local/
root@admin:/usr/local# ls
bin  etc  games  include  lib  man  sbin  share  src
root@admin:/usr/local# cd bin
root@admin:/usr/local/bin# ls
just  kind     letsencrypt_post_hook.sh  letsencrypt_renew_hook.sh  pm2-dev	pm2-runtime
k9s   kubectl  letsencrypt_pre_hook.sh	 pm2			    pm2-docker	run-getmail.sh
root@admin:/usr/local/bin# 
root@admin:/usr/local/bin# apt update && apt upgrade
Hit:1 http://ppa.launchpad.net/ondrej/php/ubuntu focal InRelease
Hit:2 http://de.archive.ubuntu.com/ubuntu focal InRelease                                              
Hit:3 http://de.archive.ubuntu.com/ubuntu focal-updates InRelease                                      
Hit:4 http://de.archive.ubuntu.com/ubuntu focal-backports InRelease                                    
Hit:6 https://baltocdn.com/helm/stable/debian all InRelease                                            
Get:7 http://security.ubuntu.com/ubuntu focal-security InRelease [114 kB]
Hit:5 https://rspamd.com/apt-stable focal InRelease                        
Hit:8 https://deb.goaccess.io focal InRelease                              
Fetched 114 kB in 2s (55.8 kB/s)
Reading package lists... Done
Building dependency tree       
Reading state information... Done
All packages are up to date.
N: Skipping acquire of configured file 'main/binary-i386/Packages' as repository 'https://deb.goaccess.io focal InRelease' doesn't support architecture 'i386'
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Calculating upgrade... Done
The following security updates require Ubuntu Pro with 'esm-apps' enabled:
  libmagickcore-6.q16-6-extra sntp node-hosted-git-info imagemagick
  python2.7-minimal libmagickwand-6.q16-6 roundcube-plugins libpython2.7
  python2.7 fail2ban roundcube-core mailman ntp node-tar imagemagick-6.q16
  redis-tools ruby-rack libjs-jquery-ui roundcube-sqlite3 roundcube
  libopenexr24 libmagickcore-6.q16-6 libpython2.7-minimal libpython2.7-stdlib
  redis-server imagemagick-6-common
Learn more about Ubuntu Pro at https://ubuntu.com/pro
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
root@admin:/usr/local/bin# cd
root@admin:~# wget -O - https://get.ispconfig.org | sh -s -- --use-ftp-ports=40110-40210 --unattended-upgrades
--2023-01-30 07:43:09--  https://get.ispconfig.org/
Resolving get.ispconfig.org (get.ispconfig.org)... 172.67.75.112, 104.26.11.246, 104.26.10.246, ...
Connecting to get.ispconfig.org (get.ispconfig.org)|172.67.75.112|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 2003 (2.0K) [application/octet-stream]
Saving to: ‘STDOUT’

-                         100%[=====================================>]   1.96K  --.-KB/s    in 0.001s  

2023-01-30 07:43:09 (2.06 MB/s) - written to stdout [2003/2003]

WARNING! This script will reconfigure your complete server!
It should be run on a freshly installed server and all current configuration that you have done will most likely be lost!
Type 'yes' if you really want to continue: yes
[INFO] Starting perfect server setup for Ubuntu 20.04.5 LTS
[INFO] Checking hostname.
[INFO] Configuring apt repositories.
[INFO] Updating packages
[INFO] Updated packages
[INFO] Installing packages ssh, openssh-server, nano, vim-nox, lsb-release, apt-transport-https, ca-certificates, wget, git, gnupg, software-properties-common, curl, cron, ntp
[INFO] Installed packages ssh, openssh-server, nano, vim-nox, lsb-release, apt-transport-https, ca-certificates, wget, git, gnupg, software-properties-common, curl, cron, ntp
[INFO] Activating rspamd repository.
[INFO] Activating sury php repository.
[INFO] Activating GoAccess repository.
[INFO] Updating packages (after enabling 3rd party repos).
[INFO] Updated packages
[INFO] Installing packages dbconfig-common, postfix, postfix-mysql, postfix-doc, mariadb-client, mariadb-server, openssl, getmail4, rkhunter, binutils, sudo
[INFO] Installed packages dbconfig-common, postfix, postfix-mysql, postfix-doc, mariadb-client, mariadb-server, openssl, getmail4, rkhunter, binutils, sudo
[INFO] Installing packages dovecot-imapd, dovecot-pop3d, dovecot-mysql, dovecot-sieve, dovecot-managesieved, dovecot-lmtpd
[INFO] Installed packages dovecot-imapd, dovecot-pop3d, dovecot-mysql, dovecot-sieve, dovecot-managesieved, dovecot-lmtpd
[INFO] Generating MySQL password.
[WARN] Query DELETE FROM mysql.user WHERE User=''; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1'); failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query DROP DATABASE IF EXISTS test; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query DELETE FROM mysql.db WHERE Db='test' OR Db='test\_%'; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query UPDATE mysql.user SET Password=PASSWORD('W2G7c7vHENbW3jZECEt1') WHERE User='root'; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query UPDATE mysql.user SET plugin = 'mysql_native_password' WHERE User='root'; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query FLUSH PRIVILEGES; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[INFO] Writing MySQL config files.
[INFO] Configuring postfix.
[INFO] Restarting postfix
[INFO] Installing packages software-properties-common, update-inetd, dnsutils, resolvconf, clamav, clamav-daemon, clamav-docs, zip, unzip, bzip2, xz-utils, lzip, rar, borgbackup, arj, nomarch, lzop, cabextract, apt-listchanges, libnet-ldap-perl, libauthen-sasl-perl, daemon, libio-string-perl, libio-socket-ssl-perl, libnet-ident-perl, libnet-dns-perl, libdbd-mysql-perl, bind9, rspamd, redis-server, postgrey, p7zip, p7zip-full, unrar-free, lrzip
[INFO] Installed packages software-properties-common, update-inetd, dnsutils, resolvconf, clamav, clamav-daemon, clamav-docs, zip, unzip, bzip2, xz-utils, lzip, rar, borgbackup, arj, nomarch, lzop, cabextract, apt-listchanges, libnet-ldap-perl, libauthen-sasl-perl, daemon, libio-string-perl, libio-socket-ssl-perl, libnet-ident-perl, libnet-dns-perl, libdbd-mysql-perl, bind9, rspamd, redis-server, postgrey, p7zip, p7zip-full, unrar-free, lrzip
[INFO] Stopping Rspamd.
[INFO] (Re)starting Bind.
[INFO] Disabling spamassassin daemon.
[INFO] Checking local dns resolver.
[INFO] Installing packages apache2, apache2-doc, apache2-utils, libapache2-mod-fcgid, apache2-suexec-pristine, libapache2-mod-python, libapache2-mod-passenger
[INFO] Installed packages apache2, apache2-doc, apache2-utils, libapache2-mod-fcgid, apache2-suexec-pristine, libapache2-mod-python, libapache2-mod-passenger
[INFO] Installing packages php-pear, php-memcache, php-imagick, mcrypt, imagemagick, libruby, memcached, php-apcu, jailkit, php5.6, php5.6-common, php5.6-gd, php5.6-mysql, php5.6-imap, php5.6-cli, php5.6-mcrypt, php5.6-curl, php5.6-intl, php5.6-pspell, php5.6-recode, php5.6-sqlite3, php5.6-tidy, php5.6-xmlrpc, php5.6-xsl, php5.6-zip, php5.6-mbstring, php5.6-soap, php5.6-opcache, php5.6-cgi, php5.6-fpm, php7.0, php7.0-common, php7.0-gd, php7.0-mysql, php7.0-imap, php7.0-cli, php7.0-mcrypt, php7.0-curl, php7.0-intl, php7.0-pspell, php7.0-recode, php7.0-sqlite3, php7.0-tidy, php7.0-xmlrpc, php7.0-xsl, php7.0-zip, php7.0-mbstring, php7.0-soap, php7.0-opcache, php7.0-cgi, php7.0-fpm, php7.1, php7.1-common, php7.1-gd, php7.1-mysql, php7.1-imap, php7.1-cli, php7.1-mcrypt, php7.1-curl, php7.1-intl, php7.1-pspell, php7.1-recode, php7.1-sqlite3, php7.1-tidy, php7.1-xmlrpc, php7.1-xsl, php7.1-zip, php7.1-mbstring, php7.1-soap, php7.1-opcache, php7.1-cgi, php7.1-fpm, php7.2, php7.2-common, php7.2-gd, php7.2-mysql, php7.2-imap, php7.2-cli, php7.2-curl, php7.2-intl, php7.2-pspell, php7.2-recode, php7.2-sqlite3, php7.2-tidy, php7.2-xmlrpc, php7.2-xsl, php7.2-zip, php7.2-mbstring, php7.2-soap, php7.2-opcache, php7.2-cgi, php7.2-fpm, php7.3, php7.3-common, php7.3-gd, php7.3-mysql, php7.3-imap, php7.3-cli, php7.3-curl, php7.3-intl, php7.3-pspell, php7.3-recode, php7.3-sqlite3, php7.3-tidy, php7.3-xmlrpc, php7.3-xsl, php7.3-zip, php7.3-mbstring, php7.3-soap, php7.3-opcache, php7.3-cgi, php7.3-fpm, php7.4, php7.4-common, php7.4-gd, php7.4-mysql, php7.4-imap, php7.4-cli, php7.4-curl, php7.4-intl, php7.4-pspell, php7.4-sqlite3, php7.4-tidy, php7.4-xmlrpc, php7.4-xsl, php7.4-zip, php7.4-mbstring, php7.4-soap, php7.4-opcache, php7.4-cgi, php7.4-fpm, php8.0, php8.0-common, php8.0-gd, php8.0-mysql, php8.0-imap, php8.0-cli, php8.0-curl, php8.0-intl, php8.0-pspell, php8.0-sqlite3, php8.0-tidy, php8.0-xsl, php8.0-zip, php8.0-mbstring, php8.0-soap, php8.0-opcache, php8.0-cgi, php8.0-fpm, php8.1, php8.1-common, php8.1-gd, php8.1-mysql, php8.1-imap, php8.1-cli, php8.1-curl, php8.1-intl, php8.1-pspell, php8.1-sqlite3, php8.1-tidy, php8.1-xsl, php8.1-zip, php8.1-mbstring, php8.1-soap, php8.1-opcache, php8.1-cgi, php8.1-fpm
[INFO] Installed packages php-pear, php-memcache, php-imagick, mcrypt, imagemagick, libruby, memcached, php-apcu, jailkit, php5.6, php5.6-common, php5.6-gd, php5.6-mysql, php5.6-imap, php5.6-cli, php5.6-mcrypt, php5.6-curl, php5.6-intl, php5.6-pspell, php5.6-recode, php5.6-sqlite3, php5.6-tidy, php5.6-xmlrpc, php5.6-xsl, php5.6-zip, php5.6-mbstring, php5.6-soap, php5.6-opcache, php5.6-cgi, php5.6-fpm, php7.0, php7.0-common, php7.0-gd, php7.0-mysql, php7.0-imap, php7.0-cli, php7.0-mcrypt, php7.0-curl, php7.0-intl, php7.0-pspell, php7.0-recode, php7.0-sqlite3, php7.0-tidy, php7.0-xmlrpc, php7.0-xsl, php7.0-zip, php7.0-mbstring, php7.0-soap, php7.0-opcache, php7.0-cgi, php7.0-fpm, php7.1, php7.1-common, php7.1-gd, php7.1-mysql, php7.1-imap, php7.1-cli, php7.1-mcrypt, php7.1-curl, php7.1-intl, php7.1-pspell, php7.1-recode, php7.1-sqlite3, php7.1-tidy, php7.1-xmlrpc, php7.1-xsl, php7.1-zip, php7.1-mbstring, php7.1-soap, php7.1-opcache, php7.1-cgi, php7.1-fpm, php7.2, php7.2-common, php7.2-gd, php7.2-mysql, php7.2-imap, php7.2-cli, php7.2-curl, php7.2-intl, php7.2-pspell, php7.2-recode, php7.2-sqlite3, php7.2-tidy, php7.2-xmlrpc, php7.2-xsl, php7.2-zip, php7.2-mbstring, php7.2-soap, php7.2-opcache, php7.2-cgi, php7.2-fpm, php7.3, php7.3-common, php7.3-gd, php7.3-mysql, php7.3-imap, php7.3-cli, php7.3-curl, php7.3-intl, php7.3-pspell, php7.3-recode, php7.3-sqlite3, php7.3-tidy, php7.3-xmlrpc, php7.3-xsl, php7.3-zip, php7.3-mbstring, php7.3-soap, php7.3-opcache, php7.3-cgi, php7.3-fpm, php7.4, php7.4-common, php7.4-gd, php7.4-mysql, php7.4-imap, php7.4-cli, php7.4-curl, php7.4-intl, php7.4-pspell, php7.4-sqlite3, php7.4-tidy, php7.4-xmlrpc, php7.4-xsl, php7.4-zip, php7.4-mbstring, php7.4-soap, php7.4-opcache, php7.4-cgi, php7.4-fpm, php8.0, php8.0-common, php8.0-gd, php8.0-mysql, php8.0-imap, php8.0-cli, php8.0-curl, php8.0-intl, php8.0-pspell, php8.0-sqlite3, php8.0-tidy, php8.0-xsl, php8.0-zip, php8.0-mbstring, php8.0-soap, php8.0-opcache, php8.0-cgi, php8.0-fpm, php8.1, php8.1-common, php8.1-gd, php8.1-mysql, php8.1-imap, php8.1-cli, php8.1-curl, php8.1-intl, php8.1-pspell, php8.1-sqlite3, php8.1-tidy, php8.1-xsl, php8.1-zip, php8.1-mbstring, php8.1-soap, php8.1-opcache, php8.1-cgi, php8.1-fpm
[INFO] Disabling conflicting apache modules.
[INFO] Enabling apache modules.
[INFO] Enabling default PHP-FPM config.
[INFO] Setting default system PHP version.
[INFO] Installing phpMyAdmin
[WARN] Query CREATE DATABASE phpmyadmin; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:344)
[WARN] Query CREATE USER 'pma'@'localhost' IDENTIFIED BY 'J8GAyGDBTjYDFJA'; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:344)
[WARN] Query GRANT ALL PRIVILEGES ON phpmyadmin.* TO 'pma'@'localhost' IDENTIFIED BY 'J8GAyGDBTjYDFJA' WITH GRANT OPTION; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:344)
[WARN] Query FLUSH PRIVILEGES; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:344)
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2)
[WARN] Command mysql --defaults-file=/etc/mysql/debian.cnf -D phpmyadmin < /usr/share/phpmyadmin/sql/create_tables.sql failed. (/lib/os/class.ISPConfigDebianOS.inc.php:351)
[INFO] HTTPoxy config.
[INFO] Installing acme.sh (Let's Encrypt).
[INFO] acme.sh (Let's Encrypt) installed.
[INFO] Installing Mailman
[INFO] Installing packages mailman
[INFO] Installed packages mailman
[INFO] Installing packages quota, quotatool, haveged, geoip-database, libclass-dbi-mysql-perl, libtimedate-perl, build-essential, autoconf, automake, libtool, flex, bison, debhelper, binutils
[INFO] Installed packages quota, quotatool, haveged, geoip-database, libclass-dbi-mysql-perl, libtimedate-perl, build-essential, autoconf, automake, libtool, flex, bison, debhelper, binutils
[INFO] Adding quota to fstab.
[INFO] Installing packages pure-ftpd-common, pure-ftpd-mysql, webalizer, awstats, goaccess
[INFO] Installed packages pure-ftpd-common, pure-ftpd-mysql, webalizer, awstats, goaccess
[INFO] Enabling TLS for pureftpd
[ERROR] Exception occured: ISPConfigOSException -> Command openssl req -x509 -nodes -days 7300 -newkey rsa:2048 -subj '/C=DE/ST=None/L=None/O=IT/CN=admin.greats.systems' -keyout /etc/ssl/private/pure-ftpd.pem -out /etc/ssl/private/pure-ftpd.pem > /dev/null 2>&1 failed. (/ispconfig.ai.php:15)
root@admin:~# sudo apt-get install mariadb-server
Reading package lists... Done
Building dependency tree       
Reading state information... Done
mariadb-server is already the newest version (1:10.3.37-0ubuntu0.20.04.1).
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
root@admin:~# sudo apt-get remove mariadb-server
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following packages were automatically installed and are no longer required:
  galera-3 libhtml-template-perl mariadb-server-10.3 mariadb-server-core-10.3 socat
Use 'sudo apt autoremove' to remove them.
The following packages will be REMOVED:
  mariadb-server
0 upgraded, 0 newly installed, 1 to remove and 0 not upgraded.
After this operation, 69.6 kB disk space will be freed.
Do you want to continue? [Y/n] Y
(Reading database ... 150415 files and directories currently installed.)
Removing mariadb-server (1:10.3.37-0ubuntu0.20.04.1) ...
root@admin:~# sudo apt-get purge mariadb-server
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Package 'mariadb-server' is not installed, so not removed
The following packages were automatically installed and are no longer required:
  galera-3 libhtml-template-perl mariadb-server-10.3 mariadb-server-core-10.3 socat
Use 'sudo apt autoremove' to remove them.
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
root@admin:~# sudo apt autoremove
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following packages will be REMOVED:
  galera-3 libhtml-template-perl mariadb-server-10.3 mariadb-server-core-10.3 socat
0 upgraded, 0 newly installed, 5 to remove and 0 not upgraded.
After this operation, 111 MB disk space will be freed.
Do you want to continue? [Y/n] Y
(Reading database ... 150412 files and directories currently installed.)
Removing mariadb-server-10.3 (1:10.3.37-0ubuntu0.20.04.1) ...
Removing galera-3 (25.3.29-1) ...
Removing libhtml-template-perl (2.97-1) ...
Removing mariadb-server-core-10.3 (1:10.3.37-0ubuntu0.20.04.1) ...
dpkg: warning: while removing mariadb-server-core-10.3, directory '/usr/share/mysql' not empty so not removed
Removing socat (1.7.3.3-2) ...
Processing triggers for man-db (2.9.1-1) ...
root@admin:~# mariadb-server --version
mariadb-server: command not found
root@admin:~# mysq

Command 'mysq' not found, did you mean:

  command 'mysql' from deb mysql-client-core-8.0 (8.0.32-0ubuntu0.20.04.2)
  command 'mysql' from deb mariadb-client-core-10.3 (1:10.3.37-0ubuntu0.20.04.1)

Try: apt install <deb name>

root@admin:~# mysqli

Command 'mysqli' not found, did you mean:

  command 'mysqld' from deb mysql-server-core-8.0 (8.0.32-0ubuntu0.20.04.2)
  command 'mysqld' from deb mariadb-server-core-10.3 (1:10.3.37-0ubuntu0.20.04.1)
  command 'mysql' from deb mysql-client-core-8.0 (8.0.32-0ubuntu0.20.04.2)
  command 'mysql' from deb mariadb-client-core-10.3 (1:10.3.37-0ubuntu0.20.04.1)

Try: apt install <deb name>

root@admin:~# sudo apt update && apt upgrade
0% [Working]
Hit:2 http://security.ubuntu.com/ubuntu focal-security InRelease                   
Hit:3 https://baltocdn.com/helm/stable/debian all InRelease                                            
Hit:4 http://ppa.launchpad.net/ondrej/php/ubuntu focal InRelease                                       
Hit:1 https://rspamd.com/apt-stable focal InRelease                                                    
Hit:5 http://de.archive.ubuntu.com/ubuntu focal InRelease                            
Get:6 http://de.archive.ubuntu.com/ubuntu focal-updates InRelease [114 kB]
Get:7 http://de.archive.ubuntu.com/ubuntu focal-backports InRelease [108 kB]
Hit:8 https://deb.goaccess.io focal InRelease
Fetched 222 kB in 2s (92.5 kB/s)
Reading package lists... Done
Building dependency tree       
Reading state information... Done
All packages are up to date.
N: Skipping acquire of configured file 'main/binary-i386/Packages' as repository 'https://deb.goaccess.io focal InRelease' doesn't support architecture 'i386'
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Calculating upgrade... Done
The following security updates require Ubuntu Pro with 'esm-apps' enabled:
  libmagickcore-6.q16-6-extra sntp node-hosted-git-info imagemagick
  python2.7-minimal libmagickwand-6.q16-6 roundcube-plugins libpython2.7
  python2.7 fail2ban roundcube-core mailman ntp node-tar imagemagick-6.q16
  redis-tools ruby-rack libjs-jquery-ui roundcube-sqlite3 roundcube
  libopenexr24 libmagickcore-6.q16-6 libpython2.7-minimal libpython2.7-stdlib
  redis-server imagemagick-6-common
Learn more about Ubuntu Pro at https://ubuntu.com/pro
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
root@admin:~# 
root@admin:~# ls
go  update.txt
root@admin:~# cd /usr/share/
root@admin:/usr/share# ls
GConf		      gettext		     perl5	      php7.2-mbstring  php8.1-imap
GNUstep		      gettext-0.19.8	     php	      php7.2-mysql     php8.1-intl
GeoIP		      ghostscript	     php5.6-common    php7.2-opcache   php8.1-mbstring
ImageMagick-6	      git-core		     php5.6-curl      php7.2-pspell    php8.1-mysql
PackageKit	      gitweb		     php5.6-gd	      php7.2-readline  php8.1-opcache
X11		      glib-2.0		     php5.6-imap      php7.2-recode    php8.1-pspell
aclocal		      gnupg		     php5.6-intl      php7.2-soap      php8.1-readline
aclocal-1.16	      groff		     php5.6-json      php7.2-sqlite3   php8.1-soap
adduser		      grub		     php5.6-mbstring  php7.2-tidy      php8.1-sqlite3
alsa		      grub-gfxpayload-lists  php5.6-mcrypt    php7.2-xml       php8.1-tidy
apache2		      hal		     php5.6-mysql     php7.2-xmlrpc    php8.1-xml
applications	      help-langpack	     php5.6-opcache   php7.2-zip       php8.1-zip
apport		      i18n		     php5.6-pspell    php7.3-common    php8.2-common
apps		      icons		     php5.6-readline  php7.3-curl      php8.2-mbstring
apt-listchanges       images		     php5.6-recode    php7.3-gd        php8.2-opcache
aspell		      info		     php5.6-soap      php7.3-imap      php8.2-readline
autoconf	      initramfs-tools	     php5.6-sqlite3   php7.3-intl      php8.2-xml
automake-1.16	      installation-report    php5.6-tidy      php7.3-json      phpmyadmin
awk		      intltool-debian	     php5.6-xml       php7.3-mbstring  pixmaps
awstats		      iptables		     php5.6-xmlrpc    php7.3-mysql     pkgconfig
base-files	      iso-codes		     php5.6-zip       php7.3-opcache   plymouth
base-passwd	      jailkit		     php7.0-common    php7.3-pspell    po-debconf
bash-completion       java		     php7.0-curl      php7.3-readline  polkit-1
binfmts		      javascript	     php7.0-gd	      php7.3-recode    poppler
bison		      kde4		     php7.0-imap      php7.3-soap      popularity-contest
bsd-mailx	      keyrings		     php7.0-intl      php7.3-sqlite3   postfix
bug		      language-selector      php7.0-json      php7.3-tidy      postgrey
build-essential       language-support	     php7.0-mbstring  php7.3-xml       publicsuffix
ca-certificates       language-tools	     php7.0-mcrypt    php7.3-xmlrpc    pyshared
calendar	      libc-bin		     php7.0-mysql     php7.3-zip       python
cdbs		      libdbi-perl	     php7.0-opcache   php7.4-common    python-apt
cmake		      libdrm		     php7.0-pspell    php7.4-curl      python-wheels
color		      libexttextcat	     php7.0-readline  php7.4-gd        python3
common-licenses       libthai		     php7.0-recode    php7.4-imap      python3-cached-property
console-setup	      libtool		     php7.0-soap      php7.4-intl      quota
consolefonts	      lintian		     php7.0-sqlite3   php7.4-json      readline
consoletrans	      locale		     php7.0-tidy      php7.4-mbstring  resolvconf
dbconfig-common       locale-langpack	     php7.0-xml       php7.4-mysql     rkhunter
dbus-1		      locales		     php7.0-xmlrpc    php7.4-opcache   roundcube
debconf		      lua		     php7.0-zip       php7.4-pspell    rspamd
debhelper	      mailman		     php7.1-common    php7.4-readline  rsync
debianutils	      man		     php7.1-curl      php7.4-soap      rsyslog
dh-autoreconf	      man-db		     php7.1-gd	      php7.4-sqlite3   rubygems-integration
dict		      memcached		     php7.1-imap      php7.4-tidy      sass
dictionaries-common   menu		     php7.1-intl      php7.4-xml       sensible-utils
distro-info	      metainfo		     php7.1-json      php7.4-xmlrpc    sounds
djvu		      mime		     php7.1-mbstring  php7.4-zip       squirrelmail
dns		      misc		     php7.1-mcrypt    php8.0-common    ssl-cert
dnsmasq-base	      mysql		     php7.1-mysql     php8.0-curl      systemd
doc		      mysql-common	     php7.1-opcache   php8.0-gd        systemtap
doc-base	      nano		     php7.1-pspell    php8.0-imap      tabset
docker.io	      netpbm		     php7.1-readline  php8.0-intl      tasksel
dovecot		      netplan		     php7.1-recode    php8.0-mbstring  tcltk
dpkg		      nginx		     php7.1-soap      php8.0-mysql     terminfo
drirc.d		      node-mime		     php7.1-sqlite3   php8.0-opcache   ubuntu-release-upgrader
emacs		      nodejs		     php7.1-tidy      php8.0-pspell    ufw
emacsen-common	      npm		     php7.1-xml       php8.0-readline  unattended-upgrades
file		      ntp		     php7.1-xmlrpc    php8.0-soap      unrar-free
fish		      openssh		     php7.1-zip       php8.0-sqlite3   vim
fontconfig	      os-prober		     php7.2-common    php8.0-tidy      vulkan
fonts		      pam		     php7.2-curl      php8.0-xml       xml
fonts-droid-fallback  pam-configs	     php7.2-gd	      php8.0-zip       zoneinfo
fonts-glyphicons      passenger		     php7.2-imap      php8.1-common    zoneinfo-icu
gcc		      perl		     php7.2-intl      php8.1-curl      zsh
gdb		      perl-openssl-defaults  php7.2-json      php8.1-gd
root@admin:/usr/share# sudo rm -r mysql mysql-common
root@admin:/usr/share# cd
root@admin:~# ./apachectl stop
-bash: ./apachectl: No such file or directory
root@admin:~# sudo service apache2  stop
root@admin:~# sudo service apache2  stop
root@admin:~# sudo service nginx  start
Job for nginx.service failed because the control process exited with error code.
See "systemctl status nginx.service" and "journalctl -xe" for details.
root@admin:~# sudo systemctl status nginx.service
● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: failed (Result: exit-code) since Mon 2023-01-30 08:06:59 CET; 11s ago
       Docs: man:nginx(8)
    Process: 37886 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process on; (code=exited, st>

Jan 30 08:06:59 admin systemd[1]: Starting A high performance web server and a reverse proxy server...
Jan 30 08:06:59 admin nginx[37886]: nginx: [emerg] cannot load certificate "/usr/local/ispconfig/interf>
Jan 30 08:06:59 admin nginx[37886]: nginx: configuration file /etc/nginx/nginx.conf test failed
Jan 30 08:06:59 admin systemd[1]: nginx.service: Control process exited, code=exited, status=1/FAILURE
Jan 30 08:06:59 admin systemd[1]: nginx.service: Failed with result 'exit-code'.
Jan 30 08:06:59 admin systemd[1]: Failed to start A high performance web server and a reverse proxy ser>

root@admin:~# cd /usr/local/
root@admin:/usr/local# ls
bin  etc  games  include  lib  man  sbin  share  src
root@admin:/usr/local# history
   80      grafana:
   81        enabled: false
   82      kiali:
   83        enabled: false
   84      prometheus:
   85        enabled: false
   86      tracing:
   87        enabled: false
   88    components:
   89      ingressGateways:
   90        - enabled: true
   91          k8s:
   92            hpaSpec:
   93              minReplicas: 1
   94            resources:
   95              limits:
   96                cpu: 500m
   97                memory: 512Mi
   98              requests:
   99                cpu: 100m
  100                memory: 128Mi
  101            service:
  102              ports:
  103                - name: http
  104                  port: 80
  105                  targetPort: 8080
  106                  nodePort: 30949
  107                - name: https
  108                  port: 443
  109                  targetPort: 8443
  110                  nodePort: 30950
  111              type: NodePort
  112          name: istio-ingressgateway
  113      pilot:
  114        enabled: true
  115        k8s:
  116          hpaSpec:
  117            minReplicas: 1
  118          resources:
  119            limits:
  120              cpu: 300m
  121              memory: 512Mi
  122            requests:
  123              cpu: 100m
  124              memory: 128Mi
  125    meshConfig:
  126      accessLogFile: /dev/stdout
  127      enableTracing: false
  128      outboundTrafficPolicy:
  129        mode: ALLOW_ANY
  130    profile: default
  131  EOF
  132  export PEER_IMAGE=hyperledger/fabric-peer
  133  export PEER_VERSION=2.4.6
  134  export ORDERER_IMAGE=hyperledger/fabric-orderer
  135  export ORDERER_VERSION=2.4.6
  136  export CA_IMAGE=hyperledger/fabric-ca
  137  export CA_VERSION=1.5.6-beta2
  138  CLUSTER_IP=$(kubectl -n istio-system get svc istio-ingressgateway -o json | jq -r .spec.clusterIP)
  139  kubectl apply -f - <<EOF
  140  kind: ConfigMap
  141  apiVersion: v1
  142  metadata:
  143    name: coredns
  144    namespace: kube-system
  145  data:
  146    Corefile: |
  147      .:53 {
  148          errors
  149          health {
  150             lameduck 5s
  151          }
  152          rewrite name regex (.*)\.localho\.st host.ingress.internal
  153          hosts {
  154            ${CLUSTER_IP} host.ingress.internal
  155            fallthrough
  156          }
  157          ready
  158          kubernetes cluster.local in-addr.arpa ip6.arpa {
  159             pods insecure
  160             fallthrough in-addr.arpa ip6.arpa
  161             ttl 30
  162          }
  163          prometheus :9153
  164          forward . /etc/resolv.conf {
  165             max_concurrent 1000
  166          }
  167          cache 30
  168          loop
  169          reload
  170          loadbalance
  171      }
  172  EOF
  173  kubectl hlf ca create  --image=$CA_IMAGE --version=$CA_VERSION --storage-class=standard --capacity=1Gi --name=org1-ca     --enroll-id=enroll --enroll-pw=enrollpw --hosts=org1-ca.localho.st --istio-port=443
  174  kubectl wait --timeout=180s --for=condition=Running fabriccas.hlf.smartnet.es --all
  175  kubectl wait --timeout=180s --for=condition=Running fabriccas.hlf.kungfusoftware.es --all
  176  curl -k https://org1-ca.localho.st:443/cainfo
  177  kind delete cluster
  178  code .
  179  sudo ufw allow 9443
  180  history
  181  hiatory
  182  history
  183  go version
  184  ls
  185  source .bashrc
  186  docker-compose up -d
  187  cd $WKP
  188  ls
  189  cd smartnet
  190  docker-compose up -d
  191  kubectl delete fabricorderernodes.hlf.kungfusoftware.es --all-namespaces --all
  192  kubectl delete fabricpeers.hlf.kungfusoftware.es --all-namespaces --all
  193  kubectl delete fabriccas.hlf.kungfusoftware.es --all-namespaces --all
  194  kubectl delete fabricchaincode.hlf.kungfusoftware.es --all-namespaces --all
  195  kubectl delete fabricmainchannels --all-namespaces --all
  196  kubectl delete fabricfollowerchannels --all-namespaces --all
  197  curl -k https://org1-ca.localho.st:443/cainfo
  198  cd ..
  199  ls
  200  exit
  201  source .bashrc
  202  cd $WKP
  203  git clone https://github.com/Malin-Greats/umoja-agri-assets-nft.git
  204  ls
  205  cd umoja-agri-assets-nft
  206  cd ../..
  207  cd ..
  208  history
  209  Enoch.Seth@1#cd 
  210  cd /etc
  211  ls
  212  cd nginx
  213  ls
  214  sites-available
  215  cd sites-available
  216  ls
  217  nano greats.systems
  218  cd Enoch.Seth@1#
  219  cd /var/www/greats.systems/html/
  220  ls
  221  nano index.html
  222  cd ..
  223  sudo rm -r html
  224  mkdir html
  225  cd html
  226  ls
  227  l
  228  ls
  229  ls
  230  cd ..
  231  ls
  232  ls
  233  cd /var/www/greats.systems/html
  234  ls
  235  ls
  236  exit
  237  cd /etc/nginx/sites-available/
  238  ls
  239  cp  malingreatssmartsystems.co.zw greats.systems
  240  lss
  241  ls
  242  sudo nano greats.systems
  243  sudo nano mysql-init
  244  pwd
  245  ls
  246  mysqld --init-file=/root/mysql-init &
  247  mysql -u root -p
  248   mysqld --init-file=/root/mysql-init
  249  cd /var/www/greats.systems/html
  250  ls
  251  cd ..
  252  ls
  253  cd ..
  254  ls
  255  cd html
  256  ls
  257  cd greats.systems
  258  ls
  259  cd ..
  260  ls
  261  cd greats.systems
  262  ls
  263  cd html
  264  ls
  265  cd ..
  266  ls
  267  ls
  268  cd html
  269  ls
  270  docker-compose up -
  271  cd
  272  clear
  273  sudo systemctl restart nginx
  274  mysql -u root -p
  275  mysql -u root -p
  276  cd /tmp
  277  wget https://www.ispconfig.org/downloads/ISPConfig-3.1.15p3.tar.gz
  278  tar xvfz ISPConfig-3.1.15p3.tar.gz
  279  cd ispconfig3_install/install
  280  php -q update.php
  281  cd /usr/local/ispconfig
  282  ls
  283  cd security
  284  ls
  285  nano  README.txt
  286  cd ..
  287  ls
  288  cd server
  289  ls
  290  /usr/local/ispconfig/server/lib/mysql_clientdb.conf
  291  cd
  292  sudo /usr/local/ispconfig/server/lib/mysql_clientdb.conf
  293  kill `cat /mysql-data-directory/host_name.pid`
  294  mysql -u root -p
  295  mysql -u root -p
  296  mysql -u root -p
  297  mysql -u root -p
  298  mysql
  299  mysql
  300  sudo systemctl status mysql
  301  sudo systemctl stop mysql
  302  mysqld
  303  sudo systemctl restart mysql.service
  304  sudo systemctl stop mysql
  305  mysql -u root -p
  306  sudo systemctl stop mysql
  307  sudo systemctl stop mysql
  308  cd /var/lib/mysql
  309  ls
  310  ls -a
  311  cd dbispconfig
  312  la
  313  ls
  314  cd ..
  315  ls
  316  mysql
  317  cd mysql
  318  ls
  319  cd ..
  320  ls
  321  sudo systemctl status mysql
  322  cd
  323  sudo systemctl set-environment MYSQLD_OPTS="--skip-networking --skip-grant-tables"
  324  sudo systemctl stop mysql.service
  325  sudo systemctl status mysql.service
  326  sudo systemctl restart mysql.service
  327  sudo systemctl status mariadb.service
  328  sudo systemctl status mariadb.service
  329  sudo systemctl stop mysql.service
  330  sudo systemctl status mariadb.service
  331  sudo systemctl start mysql.service
  332  sudo journalctl -xe
  333  sudo systemctl set-environment MYSQLD_OPTS=""
  334  sudo systemctl restart mysql.service
  335  sudo systemctl stop mysql
  336  mysql -u root -p
  337  sudo systemctl start mysql
  338  cd /etc/nginx/sites-available/
  339  ls
  340  code greats.systems
  341  code malingreatssmartsystems.co.zw
  342  cd
  343  cp /var/www/malingreatssmartsystems.co.zw/html/ /var/www/greats.systems/html
  344  cp -p -r /var/www/malingreatssmartsystems.co.zw/html/ /var/www/greats.systems/html
  345  sudo cp -p -r /var/www/malingreatssmartsystems.co.zw/html/ /var/www/greats.systems/html
  346  mkdir -p /var/www/greats.systems/html
  347  cp -p -r /var/www/malingreatssmartsystems.co.zw/html/ /var/www/greats.systems/html
  348  cd /var/www/greats.systems/html
  349  ls
  350  rm -r html
  351  cp -p -r /var/www/malingreatssmartsystems.co.zw/html/ /var/www/greats.systems/html/
  352  ls
  353  rm -r html
  354  cp -p -r /var/www/malingreatssmartsystems.co.zw/html/ /var/www/greats.systems/ .
  355  cp -p -r /var/www/malingreatssmartsystems.co.zw/html/ /var/www/greats.systems/ 
  356  ls
  357  cd greats.systems
  358  ls
  359  cd html
  360  ls
  361  cd ../..
  362  ls
  363  sudo rm -r greats.systems
  364  ls
  365  cd
  366  clear
  367  sudo ln -s /etc/nginx/sites-available/greats.systems /etc/nginx/sites-enabled
  368  sudo nginx -t
  369  cd /etc/nginx/sites-available/
  370  ls
  371  rm -f malingreatssmartsystems.co.zw
  372  ls
  373  cd etc/nginx/sites-enabled/
  374  cd /etc/nginx/sites-enabled/
  375  ls
  376  rm -f malingreatssmartsystems.co.zw
  377  ls
  378  sudo nginx -t
  379  sudo systemctl restart nginx
  380  sudo systemctl status nginx.service
  381  kind delete cluster
  382  sudo systemctl status nginx.service
  383  sudo systemctl restart nginx
  384  sudo systemctl status nginx.service
  385  sudo ufw delete allow 8000
  386  sudo ufw allow 'Nginx Full'
  387  sudo certbot --nginx -d greats.systems -d www.greats.systems
  388  sudo certbot --nginx -d admin.greats.systems -d www.admin.greats.systems
  389  ls
  390  code 000-ispconfig.vhost
  391  code 000-apps.vhost
  392  code 999-acme.vhost
  393  umojaapi
  394  sudo certbot --nginx -d umojaapi.greats.systems -d www.umojaapi.greats.systems
  395  cd 
  396  sudo nginx -t
  397  sudo systemctl restart nginx
  398  sudo certbot --nginx -d umojaapi.greats.systems -d www.umojaapi.greats.systems
  399  sudo systemctl restart nginx
  400  cd /var/www/greats.systems/html
  401  ls
  402  cd ..
  403  sudo rm -r html
  404  mkdir html
  405  cd html
  406  ls
  407  code index.html
  408  sudo systemctl restart nginx
  409  npm install -g pm2
  410  ls
  411  pm2 --version
  412  cd $WKP
  413  source .bashrc
  414  cd $WKP
  415  ls
  416  cd  umoja-agri-assets-nft
  417  ls
  418  cd auction-restapi
  419  ls
  420  nano package.json
  421  npm run prod
  422  nano package.json
  423  npm run prod
  424  cd ../../
  425  ls
  426  git clone https://github.com/Inoxevious/boscca.git
  427  ls
  428  cd bosccca
  429  cd boscca
  430  ls
  431  pip3 install -r requirements.txt
  432  sudo apt install python3-pip
  433  pip3 install -r requirements.txt
  434  clear
  435  cd ..
  436  python3 -m venv boscca_env
  437  sudo apt install python3.8-venv
  438  python3 -m venv boscca_env
  439  source boscca_env/bin/activate
  440  cd boscca
  441  pip3 install -r requiremen
  442  ls
  443  ./manage.py runserver
  444  sudo systemctl set-environment MYSQLD_OPTS="--skip-networking --skip-grant-tables"
  445   sudo systemctl start mysql.service
  446  sudo apt-get remove --purge mysql*
  447  sudo apt-get remove --purge mysql*
  448  sudo apt-get purge mysql*
  449  sudo apt-get update && sudo apt-get dist-upgrade
  450  sudo apt-get remove --purge mysql-server 
  451  sudo apt-get purge mysql*
  452  sudo apt-get purge mysql
  453  sudo apt-get purge mysql*
  454  sudo apt-get remove --purge mysql-server 
  455  sudo dpkg-query -l | less | grep mysql
  456  sudo apt-get autoremove
  457   sudo systemctl start mysql.service
  458  sudo systemctl status mariadb.service
  459  mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
  460  cd /var/lib/mysql
  461  ls
  462  rm -r *
  463  mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
  464  systemctl start mysqld
  465  /usr/bin/mysql_secure_installation'
  466  /usr/bin/mysql_secure_installation
  467  systemctl start mysql.service
  468  systemctl start mariadb
  469  mysql
  470  systemctl start mysql.service
  471  systemctl start mariadb
  472  mysql
  473  mysql -u root
  474  mysql -u root "
  475  mysql -u root ""
  476  mysqladmin -u root password Seth.Greats@1#
  477  sudo dpkg-reconfigure mysql-server-5.5
  478  mysql-server --version
  479  dpkg --get-selections | grep sql
  480  mysql -u root -p
  481  cd
  482  ls
  483  ls -a
  484  cd .config
  485  ls
  486  cd 
  487  nano /etc/hosts
  488  systemctl reboot
  489  hostname
  490  hostname -f
  491  nano /etc/hosts
  492  nano /etc/hosts
  493  nano /etc/hostname
  494  systemctl reboot
  495  hostname -f
  496  sudo apt update && apt upgrade
  497  wget -O - https://get.ispconfig.org | sh -s -- --use-ftp-ports=40110-40210 --unattended-upgrades
  498  nano /tmp/ispconfig-ai/var/log/setup-*
  499  cd /tmp/ispconfig-ai/var/log/
  500  ls
  501  ispconfig.log
  502  nano ispconfig.log
  503  setup-20230130072010.log
  504  nano setup-20230130072010.log
  505  cd /usr/local/
  506  ls
  507  sudo rm -r ispconfig 
  508  ls
  509  cd bin
  510  ls
  511  sudo rm -f ispconfig_patch ispconfig_update.sh ispconfig_update_from_dev.sh
  512  ls
  513  cd 
  514  wget -O - https://get.ispconfig.org | sh -s -- --use-ftp-ports=40110-40210 --unattended-upgrades
  515  sudo apt-get remove --purge mysql*
  516  ls
  517  sudo rm -f mysql-init 
  518  sudo apt-get remove --purge mysql*
  519  sudo apt-get purge mysql*
  520  sudo apt-get autoremove
  521  sudo apt-get purge mysql*
  522  sudo apt-get autoremove
  523  sudo apt-get autoclean
  524  sudo apt-get remove dbconfig-mysql
  525  sudo apt-get dist-upgrade
  526  sudo apt-get install mysql-server
  527  sudo apt-get purge  mysql-server
  528  sudo service mysql status
  529  sudo apt-get remove --purge mysql*
  530  sudo apt-get purge mysql*
  531  mysql
  532  mysql --version
  533  sudo service mysql status
  534  sudo service mysql status
  535  sudo service mysql start
  536  sudo apt autoremove
  537  sudo apt-get purge mysql*
  538  cd /var/lib/dpkg/info
  539  sudo rm -rf ./mysql-*
  540  sudo dpkg --remove --force-remove-reinstreq mysql-server-8.0
  541  ls
  542  sudo rm -rf ./mysql-*
  543  sudo dpkg --remove --force-remove-reinstreq mysql-server-8.0
  544  sudo dpkg --remove --purge  --force-remove-reinstreq mysql-server-8.0
  545  sudo dpkg --purge  --force-remove-reinstreq mysql-server-8.0
  546  sudo dpkg --purge  mysql-server-8.0
  547  sudo apt-get purge mysql*
  548  sudo apt-get autoremove
  549  sudo apt-get autoclean
  550  sudo apt-get dist-upgrade
  551  cd
  552  cd /usr/local/
  553  ls
  554  cd bin
  555  ls
  556  apt update && apt upgrade
  557  cd
  558  wget -O - https://get.ispconfig.org | sh -s -- --use-ftp-ports=40110-40210 --unattended-upgrades
  559  sudo apt-get install mariadb-server
  560  sudo apt-get remove mariadb-server
  561  sudo apt-get purge mariadb-server
  562  sudo apt autoremove
  563  mariadb-server --version
  564  mysq
  565  mysqli
  566  sudo apt update && apt upgrade
  567  ls
  568  cd /usr/share/
  569  ls
  570  sudo rm -r mysql mysql-common
  571  cd
  572  ./apachectl stop
  573  sudo service apache2  stop
  574  sudo service apache2  stop
  575  sudo service nginx  start
  576  sudo systemctl status nginx.service
  577  cd /usr/local/
  578  ls
  579  history
root@admin:/usr/local#   cd /etc/nginx/sites-available/
root@admin:/etc/nginx/sites-available# 
root@admin:/etc/nginx/sites-available# ls
acme.vhost  apps.vhost	greats.systems	ispconfig.vhost  malingreatssmartsystems.co.zw
root@admin:/etc/nginx/sites-available# sudo rm -f acme.vhost  apps.vhost ispconfig.vhost  malingreatssmartsystems.co.zw
root@admin:/etc/nginx/sites-available# ls
greats.systems
root@admin:/etc/nginx/sites-available# sudo systemctl restart  nginx.service
Job for nginx.service failed because the control process exited with error code.
See "systemctl status nginx.service" and "journalctl -xe" for details.
root@admin:/etc/nginx/sites-available# systemctl status nginx.service
● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: failed (Result: exit-code) since Mon 2023-01-30 08:09:46 CET; 5s ago
       Docs: man:nginx(8)
    Process: 39317 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process on; (code=exited, st>

Jan 30 08:09:46 admin systemd[1]: Starting A high performance web server and a reverse proxy server...
Jan 30 08:09:46 admin nginx[39317]: nginx: [emerg] open() "/etc/nginx/sites-enabled/000-apps.vhost" fai>
Jan 30 08:09:46 admin nginx[39317]: nginx: configuration file /etc/nginx/nginx.conf test failed
Jan 30 08:09:46 admin systemd[1]: nginx.service: Control process exited, code=exited, status=1/FAILURE
Jan 30 08:09:46 admin systemd[1]: nginx.service: Failed with result 'exit-code'.
Jan 30 08:09:46 admin systemd[1]: Failed to start A high performance web server and a reverse proxy ser>

root@admin:/etc/nginx/sites-available# ^C
root@admin:/etc/nginx/sites-available# cd /etc/nginx/sites-enabled/
root@admin:/etc/nginx/sites-enabled# ls
000-apps.vhost	000-ispconfig.vhost  999-acme.vhost  greats.systems
root@admin:/etc/nginx/sites-enabled# sudo rm -f 000-apps.vhost 000-ispconfig.vhost  999-acme.vhost 
root@admin:/etc/nginx/sites-enabled# ls
greats.systems
root@admin:/etc/nginx/sites-enabled# sudo systemctl restart  nginx.service
root@admin:/etc/nginx/sites-enabled# cd
root@admin:~# wget -O - https://get.ispconfig.org | sh -s -- --use-nginx --use-ftp-ports=40110-40210 --unattended-upgrades
--2023-01-30 08:11:10--  https://get.ispconfig.org/
Resolving get.ispconfig.org (get.ispconfig.org)... 104.26.10.246, 172.67.75.112, 104.26.11.246, ...
Connecting to get.ispconfig.org (get.ispconfig.org)|104.26.10.246|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 2003 (2.0K) [application/octet-stream]
Saving to: ‘STDOUT’

-                         100%[=====================================>]   1.96K  --.-KB/s    in 0s      

2023-01-30 08:11:10 (10.7 MB/s) - written to stdout [2003/2003]

WARNING! This script will reconfigure your complete server!
It should be run on a freshly installed server and all current configuration that you have done will most likely be lost!
Type 'yes' if you really want to continue: yes
[INFO] Starting perfect server setup for Ubuntu 20.04.5 LTS
[INFO] Checking hostname.
[INFO] Configuring apt repositories.
[INFO] Updating packages
[INFO] Updated packages
[INFO] Installing packages ssh, openssh-server, nano, vim-nox, lsb-release, apt-transport-https, ca-certificates, wget, git, gnupg, software-properties-common, curl, cron, ntp
[INFO] Installed packages ssh, openssh-server, nano, vim-nox, lsb-release, apt-transport-https, ca-certificates, wget, git, gnupg, software-properties-common, curl, cron, ntp
[INFO] Activating rspamd repository.
[INFO] Activating sury php repository.
[INFO] Activating GoAccess repository.
[INFO] Updating packages (after enabling 3rd party repos).
[INFO] Updated packages
[INFO] Installing packages dbconfig-common, postfix, postfix-mysql, postfix-doc, mariadb-client, mariadb-server, openssl, getmail4, rkhunter, binutils, sudo
[INFO] Installed packages dbconfig-common, postfix, postfix-mysql, postfix-doc, mariadb-client, mariadb-server, openssl, getmail4, rkhunter, binutils, sudo
[INFO] Installing packages dovecot-imapd, dovecot-pop3d, dovecot-mysql, dovecot-sieve, dovecot-managesieved, dovecot-lmtpd
[INFO] Installed packages dovecot-imapd, dovecot-pop3d, dovecot-mysql, dovecot-sieve, dovecot-managesieved, dovecot-lmtpd
[INFO] Generating MySQL password.
[WARN] Query DELETE FROM mysql.user WHERE User=''; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1'); failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query DROP DATABASE IF EXISTS test; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query DELETE FROM mysql.db WHERE Db='test' OR Db='test\_%'; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query UPDATE mysql.user SET Password=PASSWORD('ovWaJECAUYFyYBLpvWe6') WHERE User='root'; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query UPDATE mysql.user SET plugin = 'mysql_native_password' WHERE User='root'; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[WARN] Query FLUSH PRIVILEGES; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:1465)
[INFO] Writing MySQL config files.
[INFO] Configuring postfix.
[INFO] Restarting postfix
[INFO] Installing packages software-properties-common, update-inetd, dnsutils, resolvconf, clamav, clamav-daemon, clamav-docs, zip, unzip, bzip2, xz-utils, lzip, rar, borgbackup, arj, nomarch, lzop, cabextract, apt-listchanges, libnet-ldap-perl, libauthen-sasl-perl, daemon, libio-string-perl, libio-socket-ssl-perl, libnet-ident-perl, libnet-dns-perl, libdbd-mysql-perl, bind9, rspamd, redis-server, postgrey, p7zip, p7zip-full, unrar-free, lrzip
[INFO] Installed packages software-properties-common, update-inetd, dnsutils, resolvconf, clamav, clamav-daemon, clamav-docs, zip, unzip, bzip2, xz-utils, lzip, rar, borgbackup, arj, nomarch, lzop, cabextract, apt-listchanges, libnet-ldap-perl, libauthen-sasl-perl, daemon, libio-string-perl, libio-socket-ssl-perl, libnet-ident-perl, libnet-dns-perl, libdbd-mysql-perl, bind9, rspamd, redis-server, postgrey, p7zip, p7zip-full, unrar-free, lrzip
[INFO] Stopping Rspamd.
[INFO] (Re)starting Bind.
[INFO] Disabling spamassassin daemon.
[INFO] Checking local dns resolver.
[INFO] Installing packages nginx-full, fcgiwrap
[INFO] Installed packages nginx-full, fcgiwrap
[INFO] Installing packages php-pear, php-memcache, php-imagick, mcrypt, imagemagick, libruby, memcached, php-apcu, jailkit, php5.6, php5.6-common, php5.6-gd, php5.6-mysql, php5.6-imap, php5.6-cli, php5.6-mcrypt, php5.6-curl, php5.6-intl, php5.6-pspell, php5.6-recode, php5.6-sqlite3, php5.6-tidy, php5.6-xmlrpc, php5.6-xsl, php5.6-zip, php5.6-mbstring, php5.6-soap, php5.6-opcache, php5.6-cgi, php5.6-fpm, php7.0, php7.0-common, php7.0-gd, php7.0-mysql, php7.0-imap, php7.0-cli, php7.0-mcrypt, php7.0-curl, php7.0-intl, php7.0-pspell, php7.0-recode, php7.0-sqlite3, php7.0-tidy, php7.0-xmlrpc, php7.0-xsl, php7.0-zip, php7.0-mbstring, php7.0-soap, php7.0-opcache, php7.0-cgi, php7.0-fpm, php7.1, php7.1-common, php7.1-gd, php7.1-mysql, php7.1-imap, php7.1-cli, php7.1-mcrypt, php7.1-curl, php7.1-intl, php7.1-pspell, php7.1-recode, php7.1-sqlite3, php7.1-tidy, php7.1-xmlrpc, php7.1-xsl, php7.1-zip, php7.1-mbstring, php7.1-soap, php7.1-opcache, php7.1-cgi, php7.1-fpm, php7.2, php7.2-common, php7.2-gd, php7.2-mysql, php7.2-imap, php7.2-cli, php7.2-curl, php7.2-intl, php7.2-pspell, php7.2-recode, php7.2-sqlite3, php7.2-tidy, php7.2-xmlrpc, php7.2-xsl, php7.2-zip, php7.2-mbstring, php7.2-soap, php7.2-opcache, php7.2-cgi, php7.2-fpm, php7.3, php7.3-common, php7.3-gd, php7.3-mysql, php7.3-imap, php7.3-cli, php7.3-curl, php7.3-intl, php7.3-pspell, php7.3-recode, php7.3-sqlite3, php7.3-tidy, php7.3-xmlrpc, php7.3-xsl, php7.3-zip, php7.3-mbstring, php7.3-soap, php7.3-opcache, php7.3-cgi, php7.3-fpm, php7.4, php7.4-common, php7.4-gd, php7.4-mysql, php7.4-imap, php7.4-cli, php7.4-curl, php7.4-intl, php7.4-pspell, php7.4-sqlite3, php7.4-tidy, php7.4-xmlrpc, php7.4-xsl, php7.4-zip, php7.4-mbstring, php7.4-soap, php7.4-opcache, php7.4-cgi, php7.4-fpm, php8.0, php8.0-common, php8.0-gd, php8.0-mysql, php8.0-imap, php8.0-cli, php8.0-curl, php8.0-intl, php8.0-pspell, php8.0-sqlite3, php8.0-tidy, php8.0-xsl, php8.0-zip, php8.0-mbstring, php8.0-soap, php8.0-opcache, php8.0-cgi, php8.0-fpm, php8.1, php8.1-common, php8.1-gd, php8.1-mysql, php8.1-imap, php8.1-cli, php8.1-curl, php8.1-intl, php8.1-pspell, php8.1-sqlite3, php8.1-tidy, php8.1-xsl, php8.1-zip, php8.1-mbstring, php8.1-soap, php8.1-opcache, php8.1-cgi, php8.1-fpm
[INFO] Installed packages php-pear, php-memcache, php-imagick, mcrypt, imagemagick, libruby, memcached, php-apcu, jailkit, php5.6, php5.6-common, php5.6-gd, php5.6-mysql, php5.6-imap, php5.6-cli, php5.6-mcrypt, php5.6-curl, php5.6-intl, php5.6-pspell, php5.6-recode, php5.6-sqlite3, php5.6-tidy, php5.6-xmlrpc, php5.6-xsl, php5.6-zip, php5.6-mbstring, php5.6-soap, php5.6-opcache, php5.6-cgi, php5.6-fpm, php7.0, php7.0-common, php7.0-gd, php7.0-mysql, php7.0-imap, php7.0-cli, php7.0-mcrypt, php7.0-curl, php7.0-intl, php7.0-pspell, php7.0-recode, php7.0-sqlite3, php7.0-tidy, php7.0-xmlrpc, php7.0-xsl, php7.0-zip, php7.0-mbstring, php7.0-soap, php7.0-opcache, php7.0-cgi, php7.0-fpm, php7.1, php7.1-common, php7.1-gd, php7.1-mysql, php7.1-imap, php7.1-cli, php7.1-mcrypt, php7.1-curl, php7.1-intl, php7.1-pspell, php7.1-recode, php7.1-sqlite3, php7.1-tidy, php7.1-xmlrpc, php7.1-xsl, php7.1-zip, php7.1-mbstring, php7.1-soap, php7.1-opcache, php7.1-cgi, php7.1-fpm, php7.2, php7.2-common, php7.2-gd, php7.2-mysql, php7.2-imap, php7.2-cli, php7.2-curl, php7.2-intl, php7.2-pspell, php7.2-recode, php7.2-sqlite3, php7.2-tidy, php7.2-xmlrpc, php7.2-xsl, php7.2-zip, php7.2-mbstring, php7.2-soap, php7.2-opcache, php7.2-cgi, php7.2-fpm, php7.3, php7.3-common, php7.3-gd, php7.3-mysql, php7.3-imap, php7.3-cli, php7.3-curl, php7.3-intl, php7.3-pspell, php7.3-recode, php7.3-sqlite3, php7.3-tidy, php7.3-xmlrpc, php7.3-xsl, php7.3-zip, php7.3-mbstring, php7.3-soap, php7.3-opcache, php7.3-cgi, php7.3-fpm, php7.4, php7.4-common, php7.4-gd, php7.4-mysql, php7.4-imap, php7.4-cli, php7.4-curl, php7.4-intl, php7.4-pspell, php7.4-sqlite3, php7.4-tidy, php7.4-xmlrpc, php7.4-xsl, php7.4-zip, php7.4-mbstring, php7.4-soap, php7.4-opcache, php7.4-cgi, php7.4-fpm, php8.0, php8.0-common, php8.0-gd, php8.0-mysql, php8.0-imap, php8.0-cli, php8.0-curl, php8.0-intl, php8.0-pspell, php8.0-sqlite3, php8.0-tidy, php8.0-xsl, php8.0-zip, php8.0-mbstring, php8.0-soap, php8.0-opcache, php8.0-cgi, php8.0-fpm, php8.1, php8.1-common, php8.1-gd, php8.1-mysql, php8.1-imap, php8.1-cli, php8.1-curl, php8.1-intl, php8.1-pspell, php8.1-sqlite3, php8.1-tidy, php8.1-xsl, php8.1-zip, php8.1-mbstring, php8.1-soap, php8.1-opcache, php8.1-cgi, php8.1-fpm
[INFO] Setting default system PHP version.
[INFO] Installing phpMyAdmin
[WARN] Query CREATE DATABASE phpmyadmin; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:344)
[WARN] Query CREATE USER 'pma'@'localhost' IDENTIFIED BY 'mtnqmmERFNe7qh8'; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:344)
[WARN] Query GRANT ALL PRIVILEGES ON phpmyadmin.* TO 'pma'@'localhost' IDENTIFIED BY 'mtnqmmERFNe7qh8' WITH GRANT OPTION; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:344)
[WARN] Query FLUSH PRIVILEGES; failed. (/lib/os/class.ISPConfigDebianOS.inc.php:344)
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2)
[WARN] Command mysql --defaults-file=/etc/mysql/debian.cnf -D phpmyadmin < /usr/share/phpmyadmin/sql/create_tables.sql failed. (/lib/os/class.ISPConfigDebianOS.inc.php:351)
[INFO] Installing acme.sh (Let's Encrypt).
[INFO] acme.sh (Let's Encrypt) installed.
[INFO] Installing Mailman
[INFO] Installing packages mailman
[INFO] Installed packages mailman
[INFO] Installing packages quota, quotatool, haveged, geoip-database, libclass-dbi-mysql-perl, libtimedate-perl, build-essential, autoconf, automake, libtool, flex, bison, debhelper, binutils
[INFO] Installed packages quota, quotatool, haveged, geoip-database, libclass-dbi-mysql-perl, libtimedate-perl, build-essential, autoconf, automake, libtool, flex, bison, debhelper, binutils
[INFO] Adding quota to fstab.
[INFO] Installing packages pure-ftpd-common, pure-ftpd-mysql, webalizer, awstats, goaccess
[INFO] Installed packages pure-ftpd-common, pure-ftpd-mysql, webalizer, awstats, goaccess
[INFO] Enabling TLS for pureftpd
[ERROR] Exception occured: ISPConfigOSException -> Command openssl req -x509 -nodes -days 7300 -newkey rsa:2048 -subj '/C=DE/ST=None/L=None/O=IT/CN=admin.greats.systems' -keyout /etc/ssl/private/pure-ftpd.pem -out /etc/ssl/private/pure-ftpd.pem > /dev/null 2>&1 failed. (/ispconfig.ai.php:15)
root@admin:~#   cd /etc/nginx/sites-available/
root@admin:/etc/nginx/sites-available# ls
greats.systems
root@admin:/etc/nginx/sites-available# sudo cp -f greats.systems
cp: missing destination file operand after 'greats.systems'
Try 'cp --help' for more information.
root@admin:/etc/nginx/sites-available# sudo cp -f greats.systems  admin.greats.systems
root@admin:/etc/nginx/sites-available# ls
admin.greats.systems  greats.systems
root@admin:/etc/nginx/sites-available# sudo nano admin.greats.systems
root@admin:/etc/nginx/sites-available# sudo nano greats.systems

  GNU nano 4.8                                 greats.systems                                           
server {

        root /var/www/greats.systems/html;

        # Add index.php to the list if you are using PHP
        index index.html index.htm index.nginx-debian.html;

        server_name greats.systems www.greats.systems;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/greats.systems/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/greats.systems/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

server{
    server_name www.umojaapi.greats.systems umojaapi.greats.systems;
    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        # location /overview {
        #     proxy_pass http://127.0.0.1:3001$request_uri;
        #     proxy_redirect off;
        # }
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/umojaapi.greats.systems/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/umojaapi.greats.systems/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

server {
    server_name www.admin.greats.systems admin.greats.systems;
    return 404; # managed by Certbot

    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/admin.greats.systems/fullchain.pem; # managed by Certbot
                                           [ Read 124 lines ]
^G Get Help   ^O Write Out  ^W Where Is   ^K Cut Text   ^J Justify    ^C Cur Pos    M-U Undo
^X Exit       ^R Read File  ^\ Replace    ^U Paste Text ^T To Spell   ^_ Go To Line M-E Redo
