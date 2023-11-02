function writeCards(names) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
  
    return thankYouMessages;
  }
  
  const names = ['Aki', 'Guadalupe', 'Ollie'];
  const messages = writeCards(names);
  console.log(messages);
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Example usage:
  countDown(5);
  