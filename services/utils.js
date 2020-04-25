const Utils = {
    parseRequestURL: () => {
        let url = location.hash.slice(1).toLowerCase() || "/";
        let parse = url.split("/");
        let request = {};
        request.resource = parse[1];
        request.name = parse[2];
        request.verb = parse[3];

        return request
    },
    sleep: () => {
        return new Promise( resolve => setTimeout(resolve, ms));
    }
}; 

export default Utils;