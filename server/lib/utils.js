import jwt from 'jsonwebtoken'

export default function generateToken (user, res){
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })

    res.cookie('token', token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        samSite: 'strict',
        secure: process.env.NODE_ENV !== 'development'
    })

    return token
}   