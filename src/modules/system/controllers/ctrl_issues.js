const log = require("../../../core/logger"); 
exports.openingissues = async (req) => {
    log.info("get openingissues");
    try{
      const data = [
        { genre: 'Sports', sold: 8, income: 2300 },
        { genre: 'Strategy', sold: 8, income: 667 },
        { genre: 'Action', sold: 9, income: 982 },
        { genre: 'Shooter', sold: 6, income: 5271 },
        { genre: 'Other', sold: 7, income: 3710 }
      ]  
        res =data;
        return (res);
      }
    catch(err){
      log.info("get openingissues err")
      log.err(err)
      throw err
    }
  }
 
 
 
