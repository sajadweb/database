const sql = require('mssql');
const config = {
    port: 1433,
    server: "localhost",
    user: 'SA', 
    password: 'super_duper_password',
    database: "testdb",
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    }

}

const run = async () => {
    const pool = await sql.connect(config);
    try {

        console.log("connect start ...")

        const { recordset } = await sql.query`select * from users`;
        console.log("recordset", { recordset })
    } catch (ex) {
        console.log(ex);
    } finally {
        await pool.close()
        console.log("connect close ...")
    }
}
run();