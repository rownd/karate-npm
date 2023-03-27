#! /usr/bin/env node
var karate = require('./karate');
karate.version = '1.3.0';
karate.config.dir = 'karate'
karate.exec();

try {
    karate.exec("non-existent-file.feature")
    console.error('expected error not thrown');
    process.exit(1);
} catch (err) {
    console.log('caught expected error');
}
