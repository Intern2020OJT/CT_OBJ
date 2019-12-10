const log = require("../../../core/logger"); 
exports.cardone = async (req) => {
    log.info("get cardone");
    try{
      const data = [
        { genre: 'Sports', sold: 8 },  
        { genre: 'Action', sold: 9},
        { genre: 'Shooter', sold: 6 },
        { genre: 'Strategy', sold: 8},
        { genre: 'Other', sold: 7}
      ]  
        res =data;
        return (res);
      }
    catch(err){
      log.info("get carone err")
      log.err(err)
      throw err
    }
  }
 
 
 
