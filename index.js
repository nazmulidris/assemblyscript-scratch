const fs = require('fs');
const loader = require("@assemblyscript/loader");
const buf = fs.readFileSync('./build/optimized.wasm');
const wasm = new WebAssembly.Module(new Uint8Array(buf));

loader.instantiate(wasm, { 
  env: { 
    abort: (err) => {
      console.error(err)
    }
  }
}).then((wasmModule) => {

  console.log(wasmModule.exports);
  // Code to use the instantiated wasm module

});
