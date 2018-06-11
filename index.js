const path = require('path');
const defaults = {source:'src', destination:'dist', limit:1};
module.exports = function(input, configuration){
  const options = Object.assign({},defaults,configuration)
  let limiter=0;
  const pathObject = path.parse(input);
  const transformer = function(input){
    let response = input;
    if(limiter<options.limit){
      if(input.match(options.source)){
        response = options.destination;
        limiter++;
      }
    }
    return response;
  }
  pathObject.dir = pathObject.dir.split(path.sep).map(i=>transformer(i)).join(path.sep);
  return path.format(pathObject);
}
