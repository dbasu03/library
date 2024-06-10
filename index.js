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
