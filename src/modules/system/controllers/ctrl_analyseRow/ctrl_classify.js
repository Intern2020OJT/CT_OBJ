const log = require("../../../../core/logger"); 
exports.getLables = async (req) => {
    log.info("get labels");
    try{
        const data = [
            {
              value: 18,
              type: 'Bug',
              name: 'BugOpen',
            },
            {
              value: 30,
              type: 'Bug',
              name: 'BugClose',
            },
            {
              value: 28,
              type: 'Todo',
              name: 'TodoOpen',
            },
            {
              value: 28,
              type: 'Todo',
              name: 'TodoClose',
            },
            {
              value: 39,
              type: 'Doing',
              name: 'DoingOpen',
            },
            {
              value: 39,
              type: 'Doing',
              name: 'DoingClose',
            },
            {
              value: 0,
              type: 'Done',
              name: 'DoneOpen',
            },
            {
              value: 50,
              type: 'Done',
              name: 'DoneClose',
            },
            {
              value: 20,
              type: 'Problem',
              name: 'ProblemOpen',
            },
            {
              value: 20,
              type: 'Problem',
              name: 'ProblemClose',
            },
        ];
        res =data;
        return (res);
      }
    catch(err){
      log.info("getLables err")
      log.err(err)
      throw err
    }
  }
  exports.getAssignees = async (req) => {
    log.info("get Assignees");
    try{
      const data = [
        {
          value: 18,
          type: 'Proyang',
          name: 'ProyangOpen',
        },
        {
          value: 80,
          type: 'Proyang',
          name: 'ProyangClose',
        },
        {
          value: 28,
          type: 'AyaseEUmi',
          name: 'AyaseEUmiOpen',
        },
        {
          value: 55,
          type: 'AyaseEUmi',
          name: 'AyaseEUmiClose',
        },
        {
          value: 39,
          type: 'airoucat',
          name: 'airoucatOpen',
        },
        {
          value: 55,
          type: 'airoucat',
          name: 'airoucatClose',
        },
        {
          value: 81,
          type: 'Shanxiaolin',
          name: 'ShanxiaolinOpen',
        },
        {
          value: 36,
          type: 'Shanxiaolin',
          name: 'ShanxiaolinClose',
        },
      ];
        res =data;
        return (res);
      }
    catch(err){
      log.info("getAssignees err")
      log.err(err)
      throw err
    }
  }
 