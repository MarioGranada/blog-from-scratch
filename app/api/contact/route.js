import { MongoClient } from 'mongodb';

export const POST = async (request) => {
  const data = await request.json();
  console.log(data);

  const { email, name, message } = data;

  if (
    !email ||
    !email.includes('@') ||
    !name ||
    name.trim() === '' ||
    !message ||
    message.trim() === ''
  ) {
    return new Response(
      JSON.stringify({ message: 'All fields are required' }),
      { status: 422 }
    );
  }

  const newMessage = {
    email,
    name,
    message,
  };

  console.log('new Message: ', newMessage);

  let client;

  try {
    client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.vfrndqf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
    });
  }

  try {
    const db = client.db();
    const result = await db.collection('messages').insertOne(newMessage);

    newMessage.id = result.insertedId;
  } catch (error) {
    console.error(error);
    client.close();
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
    });
  }

  client.close();

  return new Response(JSON.stringify({ message: 'Success', newMessage }), {
    status: 201,
  });
};
