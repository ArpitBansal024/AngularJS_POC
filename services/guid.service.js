myApp.service('guidService', function () {
   
    this.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = Math.random() * 16 | 0; // random number [0, F]
            let v = c === 'x' ? r : (r & 0x3 | 0x8); // the second case is for 'y': Why [8, B] ?
            return v.toString(16);
        });
    };
});
