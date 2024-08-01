
import { sign } from 'jsonwebtoken';
import bcrypt from "bcryptjs/dist/bcrypt";
import executeQuery from '@/Config/db';
export async function POST(request) {
    try {
        const secret = process.env.SECRET
        console.log("The secret key is ", secret)
        // const [mail,password] = req.query.loginInfos
        const data = await request.json();
        const email = data.email;
        const motdepasse = data.password
        const result = await executeQuery('SELECT * FROM users WHERE (email=?) ', (email))
        // Vérifier les informations d'identification de l'utilisateur
        console.log(result);
        if (result.length === 0) {
            return Response.json({ message: 'Email introuvable' });
        }
        // }
        const isMatch = await bcrypt.compare(motdepasse, result[0].passcode)
        if (isMatch) {
            const user = result[0];
            const token = sign(
                {
                    exp: 60 * 60 * 24 * 1,
                    user: user.id,
                    email: user.email,
                    username: user.username,
                    phone: user.phone,
                    role: user.role
                },
                secret
            );
            return Response.json({ role: user.role, token, message: "Success" });
        }
        else {
            console.log('Password incorrect')
            return Response.json({ message: 'Password incorrect' });
        }
    }
    catch (error) {
        console.log('Try error', error)
        return Response.json({ message: 'validation error' });
    }
}
