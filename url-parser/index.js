//Solution

const hashURL = (urlFormatString, url) => {

    const parsedUrlFormat = urlFormatString.split("/");

    const parsedURL = url.split("?");

    const params = parsedURL[0].split("/");

    let hashedUrl = {};

    parsedUrlFormat.forEach((fmtParam, index) => {
        if(fmtParam[0] === ":") {
            let value = /^[0-9]+$/.test(params[index]) ? parseInt(params[index]) : params[index];
            let key = fmtParam.slice(1);
            hashedUrl[key] = value;
        };
    });

    if(!(parsedURL.length > 1 && parsedURL[1] !== "")) return hashedUrl;

    const queries = parsedURL[1].split("&");

    queries.forEach((query) => {
        let keyValue = query.split("=");
        let value = /^[0-9]+$/.test(keyValue[1]) ? parseInt(keyValue[1]) : keyValue[1];
        hashedUrl[keyValue[0]] = value;
    });

    return hashedUrl;
};

//Tests

const urlFormat1 = "/:version/api/:collection/:id";
const url1 = "/6/api/listings/3?sort=desc&limit=10";
console.log("Test 1:");
console.log(hashURL(urlFormat1, url1));
console.log("-------------------------------");
/* Expected output: 
    { 
        version: 6,
        collection: 'listings',
        id: 3,
        sort: 'desc',
        limit: 10
    } 
*/

const urlFormat2 = "/:number/contacts";
const url2 = "/12345/contacts?something=smthing";
console.log("Test 2:");
console.log(hashURL(urlFormat2, url2));
console.log("-------------------------------");
/*  Expected output:
    { 
        number: 12345, 
        something: 'smthing'
    } 
*/

const urlFormat3 = "/zoo/animals/:name";
const url3 = "/zoo/animals/lion";
console.log("Test 3:");
console.log(hashURL(urlFormat3, url3));
console.log("-------------------------------");
/*  Expected output:
    { 
        name: 'lion'
    } 
*/

const urlFormat4 = "/:institution/animals/:species/info";
const url4 = "/zoo/animals/sheep/info?offset=0&limit=100&sort=asc&aqs=chrome&country=Argelia&id=aj235ht6";
console.log("Test 4:");
console.log(hashURL(urlFormat4, url4));
console.log("-------------------------------");
/*  Expected output:
    { 
        institution: 'zoo',
        specie: 'sheep',
        offset: 0,
        limit: 100,
        sort: 'asc',
        aqs: 'chrome',
        country: 'Argelia',
        id: 'aj235ht6'
    } 
*/