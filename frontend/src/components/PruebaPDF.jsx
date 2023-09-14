import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
	user: 'user',
	password: 'password',
	host: 'smtp.your-email.com',
	ssl: true,
});

const message = {
	text: 'i hope this works',
	from: 'you <username@your-email.com>',
	to: 'someone <someone@your-email.com>, another <another@your-email.com>',
	cc: 'else <else@your-email.com>',
	subject: 'testing emailjs',
	attachment: [
		{ data: '<html>i <i>hope</i> this works!</html>', alternative: true },
		{ path: 'path/to/file.zip', type: 'application/zip', name: 'renamed.zip' },
	],
};

// send the message and get a callback with an error or details of the message that was sent
client.send(message, function (err, message) {
	console.log(err || message);
});

// you can continue to send more messages with successive calls to 'client.send',
// they will be queued on the same smtp connection

// or instead of using the built-in client you can create an instance of 'smtp.SMTPConnection'