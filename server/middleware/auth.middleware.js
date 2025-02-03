import jwt from 'jsonwebtoken'

export default function protectRoute(req, res, next){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({msg: 'Unauthorized'})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {id: decoded.id}
        next()
        
    } catch (error) {
        console.log('Error protectRoute', error);
        res.status(500).json({msg: 'Internal server errror'})
    }
}