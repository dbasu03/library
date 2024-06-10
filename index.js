/*
const neo4j = require('neo4j-driver');


const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'password'));


const session = driver.session();


session.run('MATCH (n) RETURN n')
  .then(result => {
    result.records.forEach(record => {
      console.log(record.get(0));
    });
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .then(() => {
    // Close the session and driver
    return session.close();
  })
  .then(() => {
    return driver.close();
  });
*/

  (async () => {
    var neo4j = require('neo4j-driver')
  
    // URI examples: 'neo4j://localhost', 'neo4j+s://xxx.databases.neo4j.io'
    const URI = 'bolt://localhost:7687'
    const USER = 'neo4j'
    const PASSWORD = 'password'
    let driver
  
    try {
      driver = neo4j.driver(URI,  neo4j.auth.basic(USER, PASSWORD))
      const serverInfo = await driver.getServerInfo()
      console.log('Connection estabilished')
      console.log(serverInfo)
    } catch(err) {
      console.log(`Connection error\n${err}\nCause: ${err.cause}`)
      await driver.close()
      return
    }
  
    // Use the driver to run queries
  
    await driver.close()
  })();