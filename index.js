import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors());
app.use(cookieParser());

app.get('/setcookie', (req, res) => {
    // Write cookie here
    res.cookie("pet", "veera"); // res.cookie(<name>, <value>, [<options>])
    res.cookie("luckynumber", Math.random()); // only updates when you reload /setcookie, if you route somewhere else, the cookie value stays the same
    res.send("you now have a cookie :)");
})

app.use((req, res) => {
    // Read cookies from request
    console.log({
        cookies: req.cookies,
        signed: req.signedCookies // these are kind of encrypted, we will not cover those, e.g. saving the sessionID, for which you would use a tool like passport.js (npm package passport)
    })
    res.send("bye")
});

app.listen(3219, () => {
    console.log("Listening at http://localhost:3219");
})