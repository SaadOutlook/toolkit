// Assuming you have a Uint8Array representing the SQLite file
window.onload = async function() {
    const SQL = await initSqlJs({
        locateFile: file => `sql-wasm.wasm`
      });  // SQL is now a reference to the loaded sql.js module
    const fileBuffer = await fetch("articles.db").then(res => res.arrayBuffer());
    const db = new SQL.Database(new Uint8Array(fileBuffer));
    const result = db.exec("SELECT * FROM data;");  // Execute a SELECT statement
    
    console.log(result);
};

