import jwt from 'jsonwebtoken'

const protectRoute = (req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        
    if(!token){
        return res.status(401).json({message: 'No token provided.'})     
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
    if(!decoded){
        return res.status(401).json({message: 'Invalid token.'})
    }
    req.user = decoded;
    next();
    } catch (error) {
        console.log("error in protectRoute",error)
    }
}
export default protectRoute;