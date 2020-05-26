export function getBaseUrl(uri) {
    var pathArray = uri.split('/');
    var protocol = pathArray[0];
    var host = pathArray[2];
    return protocol + '//' + host + "/";
}