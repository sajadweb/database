const mysql = require('mysql2/promise');

async function cloneDatabase(sourceConfig, targetConfig) {
    let sourceConnection, targetConnection;

    try {
        // Connect to the source and target databases
        sourceConnection = await mysql.createConnection(sourceConfig);
        targetConnection = await mysql.createConnection(targetConfig);

        console.log('Connected to both source and target databases.');

        // Get all tables from the source database
        const [tables] = await sourceConnection.query(`SHOW TABLES`);
        // const tableNames = tables.map(row => Object.values(row)[0]);
        const tableNames = [
            // 'SequelizeMeta',
            // 'admins',
            // 'immigrants',
            'verifies',
            'files',
            'activity_logs',
            // 'services',
            'avvocato_immigrants',
            'companies',
            'financial_records',
            'intermediaries',
            'notes',
            'reservations',
            'societies',

        ];

        console.log(`Found tables: ${tableNames.join(', ')}`);

        // for (const tableName of tableNames) {
        //     try {
        //         // Fetch table structure from the source database
        //         const [tableSchema] = await sourceConnection.query(`SHOW CREATE TABLE \`${tableName}\``);
        //         const createTableSQL = tableSchema[0]['Create Table'];

        //         // Create table in the target database
        //         console.log(`Creating table: ${tableName}`);
        //         await targetConnection.query(`DROP TABLE IF EXISTS \`${tableName}\``); // Drop the table if it exists
        //         await targetConnection.query(createTableSQL);
        //     } catch (error) {
        //         console.log(`Error in Creating table: ${tableName}`, error);
        //     }

        // }
        for (const tableName of tableNames) {
            console.log(`Processing table: ${tableName}`);
            const [rows] = await sourceConnection.query(`SELECT * FROM \`${tableName}\``);

            if (rows.length > 0) {
                console.log(`Inserting data into table: ${tableName}`);

                // Wrap all column names with backticks
                const columns = Object.keys(rows[0]).map(col => `\`${col}\``).join(',');
                const placeholder = `(${new Array(Object.keys(rows[0]).length).fill('?').join(',')})`;

                console.log('columns', columns);
                console.log('placeholder', placeholder);

                for (let i = 0; i < rows.length; i++) {
                    try {
                        // Prepare row values and stringify objects
                        const row = Object.values(rows[i]).map(item => { 
                            if (item !== null && typeof item === 'object' && `${item}`.includes('T')) {
                                // Attempt to parse and reformat ISO date strings
                                const parsedDate = new Date(item);
                                return isNaN(parsedDate.getTime()) ? item : parsedDate.toISOString().slice(0, 19).replace('T', ' ');
                            }
                            if (typeof item === 'object' && item !== null) {
                                return JSON.stringify(item); // Serialize objects to JSON
                            }
                          
                            return item; // Pass other values as-is
                        });
                        // Use parameterized query for insertion
                        const insertSQL = `INSERT INTO \`${tableName}\` (${columns}) VALUES ${placeholder}`;
                        await targetConnection.query(insertSQL, row);
                    } catch (error) {
                        console.log(`Error in insert table: ${tableName}`, error);
                    }
                }

                // // Fetch all data from the source table
                // const [rows] = await sourceConnection.query(`SELECT * FROM \`${tableName}\``);

                // if (rows.length > 0) {
                //     console.log(`Inserting data into table: ${tableName}`);

                //     // Construct and execute insert statements
                //     const columns = Object.keys(rows[0]).join(',');
                //     const placeholder = `(${new Array(Object.keys(rows[0]).length).fill('?').join(',')})`;
                //     console.log('columns', columns)
                //     console.log('placeholder', placeholder)
                //     for (let i = 0; i < 1; i++) {
                //     // for (let i = 0; i < rows.length; i++) {
                //        try {
                //         const row = Object.values(rows[i])?.map(item=>{
                //             if(item && typeof item==='object'){
                //                 return JSON.stringify(item)
                //             }
                //             return item;
                //         });
                //         // const flatValues = row.flat();
                //         console.log('row',row)
                //         const insertSQL = `INSERT INTO \`${tableName}\` (${columns}) VALUES  ${placeholder}`;
                //         await targetConnection.query(insertSQL,row);
                //        } catch (error) {
                //         console.log(`Error in insert table: ${tableName}`, error);
                //        }
                //     } 
            }

            console.log(`Table ${tableName} cloned successfully.`);
        }

        console.log('Database cloning completed.');
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Close connections
        if (sourceConnection) await sourceConnection.end();
        if (targetConnection) await targetConnection.end();
    }
}
/**
 * 
DB_DRIVER='mysql'
DB_USERNAME='root'
DB_PASSWORD='immigrate123'
DB_DATABASE='immigrate'
DB_HOST='45.85.249.215'
DB_PORT=3307

 */
// Source and target database configurations
const sourceConfig = {
    host: '45.85.249.215',
    port: 3307,
    user: 'root',
    password: 'immigrate123',
    database: 'immigrate',
};
/**
 *  username: 'root',
    password: 'immigrate123',
    database: 'immigrate',
    host: 'mysql',
    port: 3306,
 */
const targetConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'immigrate',
};

// Run the cloning script
cloneDatabase(sourceConfig, targetConfig);
