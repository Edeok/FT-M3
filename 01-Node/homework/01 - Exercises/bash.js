const process = require("process");
const commands = require("./commands/index.js");


function print (output){
  process.stdout.write(output)
  process.stdout.write("\nprompt > ")



}

function bash() {
  process.stdout.write( "prompt > ")
  process.stdin.on('data', (data)=>{
    var args = data.toString()

    var cmd =  args

    if (!commands === cdm) {
      print()
      console.log('command not found: _cmd_')
    }else{
      commands[cmd](print, args);
    }
  })
}

bash();
module.exports = {
  print,
  bash,
};
