/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    const Block = require('./block'); //referencing the local block file we just created


const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString());
//const block = new Block('foo','bar','zoo','tes');
//console.log(block.data);
//console.log(block.toString());

//console.log(Block.genesis().toString());    