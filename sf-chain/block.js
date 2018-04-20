/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const SHA256 = require('crypto-js/sha256');

class Block{
    
    constructor (timestamp, lastHash, hash, data){
        
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        
    }
    
    toString(){
     
        return `Block - 
                Timestamp:  ${this.timestamp}
                Last Hash:  ${this.lastHash.substring(0,10)}
                Hash.....:  ${this.hash.substring(0,10)}
                Data.....:  ${this.data}`;
        
    }
    
    //with Block module imported, don't need to create a Block object
    static genesis (){
        
        return new this('Genisis time', '----', 'f1rst-h4sh',[]);
        
    }
    
    //we don't need to create new block instance to use this instance
    static mineBlock(lastBlock, data){
        
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);
        
        return new this (timestamp, lastHash, hash, data);
        
    }
    
    static hash(timestamp, lastHash, data){
        
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }
 
}

module.exports = Block;

