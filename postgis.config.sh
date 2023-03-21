sudo add-apt-repository ppa:ubuntugis/ppa
sudo apt update
sudo apt install postgis postgresql-postgis 
 psql postgres
 \c fastapidb;
CREATE EXTENSION postgis;
CREATE EXTENSION postgis_raster;
CREATE EXTENSION postgis_topology;
CREATE EXTENSION postgis_sfcgal;
CREATE EXTENSION fuzzystrmatch;
CREATE EXTENSION address_standardizer;
CREATE EXTENSION address_standardizer_data_us;
CREATE EXTENSION postgis_tiger_geocoder;
exit
#-- Enable PostGIS (as of 3.0 contains just geometry/geography)
#-- enable raster support (for 3+)
#-- Enable Topology
#-- Enable PostGIS Advanced 3D
#-- and other geoprocessing algorithms
#-- sfcgal not available with all distributions
#-- fuzzy matching needed for Tiger
#-- rule based standardizer
#-- example rule data set
#-- Enable US Tiger Geocoder