import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import WaitlistEmail from '../../components/emails/WaitlistEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Send the email via Resend
        // Note: The 'from' domain must match your verified domain in Resend
        const { data, error } = await resend.emails.send({
            from: 'Vaylen <access@vaylen.app>',
            to: [email],
            subject: 'Welcome to Vaylen',
            react: WaitlistEmail(),
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ message: 'Email sent successfully', data });
    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
