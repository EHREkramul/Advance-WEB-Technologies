const os = require('os');
console.log(os.platform()); // Output: Platform (e.g., 'win32', 'linux')
console.log(os.freemem());  // Output: Free memory in bytes
console.log(os.uptime());   // Output: System uptime in seconds
console.log(os.userInfo()); // Output: User information
console.log(os.homedir());
console.log(os.hostname());