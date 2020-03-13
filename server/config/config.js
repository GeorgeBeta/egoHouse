//
//  PUERTO
//
process.env.PORT = process.env.PORT || 3000;

//
//  AWS RDS - MySQL
//
process.env.RDS_HOSTNAME = process.env.RDS_HOSTNAME || 'zaporlentz.cks454fz2vcw.eu-west-1.rds.amazonaws.com';
process.env.RDS_USERNAME = process.env.RDS_USERNAME || 'admin';
process.env.RDS_PASSWORD = process.env.RDS_PASSWORD || 'Carla470998';
process.env.RDS_DATABASE = process.env.RDS_DATABASE || 'egoHouse';
process.env.RDS_PORT = process.env.RDS_PORT || 3306;