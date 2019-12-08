import $ from 'jquery';
class Openingissues {
    static getOpeningissues() {
      try {
        var data = $.get('http://localhost:3000/issues/openingissues',function(res){  
            console.log('res')
            console.log(res)
             return res});  
         console.log('data') 
         console.log(data)
        return data
      } catch (e) {
        return false;
      }
    }
  
    
  }
  
  export default Openingissues;
  