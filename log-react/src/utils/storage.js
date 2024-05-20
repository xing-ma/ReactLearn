const prefix = 'log_';
const localLogsDataKey = prefix + "local_data";

const storage = {
    getLogsData: () => {
      return JSON.parse(window.localStorage.getItem(localLogsDataKey));
    },
    setLogsData : (logs)=> {
        window.localStorage.setItem(localLogsDataKey, JSON.stringify(logs));
    }
  };
  
  export default storage;