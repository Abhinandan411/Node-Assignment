export default function logger(req, res, next) {
    const timeStamp = new Date().toISOString(); 
    const url = req.url; 
    const ip = req.ip;
    const method = req.method; 

    console.log(`[${timeStamp}] ${method} ${url} - IP: ${ip}`);

    next();
}


