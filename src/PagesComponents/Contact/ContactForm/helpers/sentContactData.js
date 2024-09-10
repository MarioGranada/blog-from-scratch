const sendContactData = async (enteredData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(enteredData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  console.log(data);
};

export default sendContactData;
