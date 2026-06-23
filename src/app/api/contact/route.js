import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  console.log('[/api/contact] POST received');
  try {
    const { firstName, lastName, phone, address, email, message } = await request.json();
    console.log('[/api/contact] Parsed body:', { firstName, lastName, phone, email });

    const { error } = await resend.emails.send({
      from: 'PSI Safety <office@psi-safety.co.il>',
      to: ['office@psi-safety.co.il'],
      replyTo: email || undefined,
      subject: 'פנייה חדשה מאתר PSI',
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; font-size: 15px; color: #333; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #166534; margin-bottom: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px;">
            פנייה חדשה מאתר PSI
          </h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; width: 150px; background: #f3f4f6;">שם פרטי</td>
              <td style="padding: 10px 14px;">${firstName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; background: #f3f4f6;">שם משפחה</td>
              <td style="padding: 10px 14px;">${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; background: #f3f4f6;">מספר טלפון</td>
              <td style="padding: 10px 14px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; background: #f3f4f6;">אימייל</td>
              <td style="padding: 10px 14px;">${email || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; background: #f3f4f6;">כתובת למשלוח</td>
              <td style="padding: 10px 14px;">${address || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; vertical-align: top; background: #f3f4f6;">הודעה</td>
              <td style="padding: 10px 14px; white-space: pre-wrap;">${message || '—'}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 13px; color: #6b7280;">
            הודעה זו נשלחה דרך טופס יצירת הקשר באתר psi-safety.co.il
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('[/api/contact] Resend error:', error);
      return Response.json({ success: false, error: error.message || 'שגיאה בשליחת המייל' }, { status: 500 });
    }

    console.log('[/api/contact] Email sent successfully');
    return Response.json({ success: true });
  } catch (err) {
    console.error('[/api/contact] Unexpected error:', err);
    return Response.json({ success: false, error: err.message || 'שגיאה לא ידועה' }, { status: 500 });
  }
}
