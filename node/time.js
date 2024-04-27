const https = require('https');

let url = "https://worldtimeapi.org/api/timezone/utc";

https.get(url,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            let json = JSON.parse(body);
			//console.log(json);
			const date = new Date(json.datetime);
			console.log(date.toUTCString());
			
        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});