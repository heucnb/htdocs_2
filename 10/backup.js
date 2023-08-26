// import mysqldump from 'mysqldump';
const mysqldump = require('mysqldump')
 
// dump the result straight to a file
mysqldump({
    connection: {
        host: 'localhost',
        user: 'nhdabkah_hieu',
        password: 'Hieu771339',
        database: 'nhdabkah_hh',
    },
    dumpToFile: './dump.sql',
});
